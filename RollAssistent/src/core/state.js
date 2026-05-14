/**
 * GameState — центральное состояние приложения.
 * Сохраняет тот же публичный API, что и оригинал, но внутренне использует Store + EventEmitter.
 */
import { EventEmitter } from './eventEmitter.js';
import { STAT_KEYS } from '../utils/constants.js';
import { getSavedCharacters, saveCharacterList } from '../utils/storage.js';

// Ленивые ссылки на данные — устанавливаются при инициализации
let _races = [];
let _classes = [];
let _equipmentList = [];

// Private state
let _race = null;
let _class = null;
let _subclass = null;
let _level = 1;
let _baseStats = { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 };
let _poolPoints = 27;
let _asiPoints = 0;
let _inventory = [];
let _spells = [];
let _customAbilities = [];
let _money = { copper: 0, silver: 0, gold: 0, diamond: 0 };
let _levelHP = [];
let _totalMaxHP = 0;
let _notes = [];
let _currentMainCharacter = null;
let _tempModifiers = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0, hp: 0, ac: 0, initiative: 0, speed: 0 };
let _skillProficiencies = [];
let _tempSkillBonuses = {};

const emitter = new EventEmitter();

function notify(change) {
  emitter.emit(change, undefined);
  emitter.emit('*', change);
}

const GameState = {
  // --- Data injection ---
  _injectData(races, classes, equipmentList) {
    _races = races;
    _classes = classes;
    _equipmentList = equipmentList;
  },

  // --- Getters ---
  get race() { return _race; },
  get class() { return _class; },
  get subclass() { return _subclass; },
  get level() { return _level; },
  get baseStats() { return { ..._baseStats }; },
  get poolPoints() { return _poolPoints; },
  get asiPoints() { return _asiPoints; },
  get inventory() { return [..._inventory]; },
  get spells() { return [..._spells]; },
  get customAbilities() { return [..._customAbilities]; },
  get money() { return { ..._money }; },
  get levelHP() { return [..._levelHP]; },
  get totalMaxHP() { return _totalMaxHP; },
  get notes() { return [..._notes]; },
  get currentMainCharacter() { return _currentMainCharacter; },
  get tempModifiers() { return { ..._tempModifiers }; },
  get skillProficiencies() { return [..._skillProficiencies]; },
  get tempSkillBonuses() { return { ..._tempSkillBonuses }; },

  // --- Setters ---
  setRace(race) {
    _race = race;
    this.autoSave();
    notify('race');
  },

  setClass(cls) {
    _class = cls;
    this.autoSave();
    notify('class');
  },

  setSubclass(sub) {
    _subclass = sub;
    this.autoSave();
    notify('subclass');
  },

  setLevel(lvl) {
    _level = Math.min(20, Math.max(1, lvl));
    this.updateASI();
    this.autoSave();
    notify('level');
  },

  setBaseStats(stats) {
    for (const key of STAT_KEYS) {
      if (stats[key] !== undefined) {
        _baseStats[key] = Math.min(20, Math.max(8, stats[key]));
      }
    }
    this.updateASI();
    this.autoSave();
    notify('stats');
  },

  increaseStat(key) {
    if (!this.canIncrease(key)) return false;
    const current = _baseStats[key];
    const newVal = current + 1;
    // Cannot exceed 20 under any circumstances
    if (newVal > 20) return false;
    if (newVal > 15 && _asiPoints <= 0) return false;
    _baseStats[key] = newVal;
    if (newVal > 15) _asiPoints--;
    this.autoSave();
    notify('stats');
    return true;
  },

  decreaseStat(key) {
    if (_baseStats[key] <= 8) return false;
    const oldVal = _baseStats[key];
    _baseStats[key]--;
    // If we decreased from above 15, give back an ASI point
    if (oldVal > 15) _asiPoints++;
    this.autoSave();
    notify('stats');
    return true;
  },

  randomStats() {
    _baseStats = { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 };
    this.updateASI();
    let budget = _poolPoints + _asiPoints;
    let attempts = 0;
    while (budget > 0 && attempts < 2000) {
      const key = STAT_KEYS[Math.floor(Math.random() * STAT_KEYS.length)];
      if (_baseStats[key] >= 15) { attempts++; continue; }
      const cost = this.getStatCost(_baseStats[key] + 1) - this.getStatCost(_baseStats[key]);
      if (budget >= cost) { _baseStats[key]++; budget -= cost; attempts = 0; }
      else attempts++;
    }
    attempts = 0;
    while (_asiPoints > 0 && attempts < 1000) {
      const candidates = STAT_KEYS.filter(k => _baseStats[k] < 20);
      if (!candidates.length) break;
      const key = candidates[Math.floor(Math.random() * candidates.length)];
      _baseStats[key]++;
      _asiPoints--;
      attempts = 0;
    }
    this.autoSave();
    notify('stats');
  },

  resetStats() {
    _baseStats = { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 };
    this.updateASI();
    this.autoSave();
    notify('stats');
  },

  resetAll() {
    _race = null;
    _class = null;
    _subclass = null;
    _level = 1;
    _baseStats = { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 };
    _inventory = [];
    _spells = [];
    _customAbilities = [];
    _money = { copper: 0, silver: 0, gold: 0, diamond: 0 };
    _levelHP = [];
    _totalMaxHP = 0;
    _notes = [];
    _tempModifiers = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0, hp: 0, ac: 0, initiative: 0, speed: 0 };
    _skillProficiencies = [];
    _tempSkillBonuses = {};
    _currentMainCharacter = null;
    this.updateASI();
    notify('full');
  },

  // --- Stat calculations ---
  canIncrease(key) {
    if (_baseStats[key] >= 20) return false;
    const nextVal = _baseStats[key] + 1;
    if (nextVal <= 15) {
      // Point Buy range: check if we have budget
      const spent = this.getSpentPoints();
      const costDiff = this.getStatCost(nextVal) - this.getStatCost(_baseStats[key]);
      return (spent + costDiff) <= _poolPoints;
    }
    // Above 15: requires ASI points
    return _asiPoints > 0;
  },

  getTotalStat(key) {
    const base = _baseStats[key];
    const racial = this.getRacialBonus(key);
    const equipData = this.getEquipmentBonus(key);
    const temp = _tempModifiers[key] || 0;
    let total;
    if (equipData.sets) {
      // "Set" items override base+racial if higher
      const natural = base + racial;
      total = Math.max(natural, equipData.bonus) + equipData.additive + temp;
    } else {
      total = base + racial + equipData.additive + temp;
    }
    // Absolute cap: 30 (D&D max with magic items)
    return Math.min(30, total);
  },

  getStatModifier(key) {
    return Math.floor((this.getTotalStat(key) - 10) / 2);
  },

  getRacialBonus(key) {
    if (!_race || !_race.bonuses) return 0;
    return _race.bonuses[key] || 0;
  },

  getEquipmentBonus(key) {
    let bestOverride = null;
    let bestOverrideVal = 0;
    let totalAdd = 0;
    for (const item of _inventory) {
      if (item.equipped && item.bonuses && item.bonuses[key] !== undefined) {
        const val = item.bonuses[key];
        if (typeof val === 'number') {
          // Values >= 19 are "set to" values (e.g. Gauntlets of Ogre Power set STR to 19)
          if (val >= 19) {
            if (val > bestOverrideVal) { bestOverrideVal = val; bestOverride = item; }
          } else {
            totalAdd += val;
          }
        }
      }
    }
    return bestOverride
      ? { bonus: bestOverrideVal, sets: true, additive: totalAdd, itemName: bestOverride.name }
      : { bonus: 0, sets: false, additive: totalAdd, itemName: '' };
  },

  getSpentPoints() {
    let spent = 0;
    for (const key of STAT_KEYS) spent += this.getStatCost(_baseStats[key]);
    return Math.max(0, spent);
  },

  getStatCost(value) {
    if (value <= 8) return 0;
    if (value <= 15) return { 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 }[value] || 0;
    return 9 + (value - 15);
  },

  updateASI() {
    const asiLevels = [4, 8, 12, 16, 19];
    let totalASI = 0;
    for (const lvl of asiLevels) if (_level >= lvl) totalASI++;
    const totalPoints = totalASI * 2;
    // Calculate already spent ASI points (stats above 15)
    let spent = 0;
    for (const key of STAT_KEYS) {
      if (_baseStats[key] > 15) spent += (_baseStats[key] - 15);
    }
    _asiPoints = Math.max(0, totalPoints - spent);
  },

  // --- HP ---
  initHP(upToLevel) {
    if (!_class) return;
    _levelHP = [];
    _totalMaxHP = 0;
    const targetLevel = upToLevel || _level;
    const conMod = this.getStatModifier('con');
    const firstHP = _class.baseHp + conMod;
    _totalMaxHP = firstHP;
    _levelHP[0] = { rolled: true, value: firstHP };
    for (let i = 2; i <= targetLevel; i++) {
      const gained = this.rollHPForLevel(i);
      _totalMaxHP += gained;
    }
    for (let i = targetLevel + 1; i <= 20; i++) {
      _levelHP[i - 1] = { rolled: false, value: 0 };
    }
    notify('hp');
  },

  rollHPForLevel(level) {
    if (!_class) return 0;
    const conMod = this.getStatModifier('con');
    const hitDie = parseInt(_class.hitDie.replace('d', ''));
    const roll = Math.floor(Math.random() * hitDie) + 1;
    const gained = Math.max(1, roll + conMod);
    _levelHP[level - 1] = { rolled: true, value: gained };
    return gained;
  },

  addTotalHP(amount) {
    _totalMaxHP += amount;
    this.autoSave();
    notify('hp');
  },

  // --- Inventory ---
  addToInventory(itemId) {
    const item = _equipmentList.find(eq => eq.id === itemId);
    if (!item) return;
    const priceFn = GameState._getItemPrice || ((i) => i?.price || '?');
    const price = priceFn(item);
    _inventory.push({ ...item, price, equipped: false });
    this.autoSave();
    notify('inventory');
  },

  addCustomItem(itemObj) {
    if (!itemObj || !itemObj.id) return;
    _inventory.push({ ...itemObj, equipped: false, price: itemObj.price || 'Особая' });
    this.autoSave();
    notify('inventory');
  },

  removeFromInventory(index) {
    if (index < 0 || index >= _inventory.length) return;
    _inventory.splice(index, 1);
    this.autoSave();
    notify('inventory');
  },

  toggleEquip(index) {
    if (index < 0 || index >= _inventory.length) return;
    _inventory[index].equipped = !_inventory[index].equipped;
    this.autoSave();
    notify('inventory');
  },

  // --- Money ---
  updateMoney(type, amount) {
    _money[type] = Math.max(0, amount);
    this.autoSave();
    notify('money');
  },

  // --- Spells ---
  addSpell(spellId) {
    if (!_spells.includes(spellId)) {
      _spells.push(spellId);
      this.autoSave();
      notify('spells');
    }
  },

  removeSpell(spellId) {
    _spells = _spells.filter(id => id !== spellId);
    this.autoSave();
    notify('spells');
  },

  addCustomAbility(ability) {
    _customAbilities.push(ability);
    this.autoSave();
    notify('spells');
  },

  // --- Notes ---
  setNotes(notes) {
    _notes = notes;
    this.autoSave();
    notify('notes');
  },

  // --- Temp Modifiers ---
  setTempModifier(key, value) {
    _tempModifiers[key] = value;
    this.autoSave();
    notify('temp');
  },

  // --- Skill Proficiencies & Temp Bonuses ---
  setSkillProficiencies(proficiencies) {
    _skillProficiencies = [...proficiencies];
    this.autoSave();
    notify('skills');
  },

  setTempSkillBonus(skillId, value) {
    if (value === 0) {
      delete _tempSkillBonuses[skillId];
    } else {
      _tempSkillBonuses[skillId] = value;
    }
    this.autoSave();
    notify('skills');
  },

  // --- Serialization ---
  getCharacterState() {
    return {
      id: _currentMainCharacter?.id,
      name: _currentMainCharacter?.name || document.getElementById('char-name')?.value || 'Без имени',
      race: _race?.id || null,
      class: _class?.id || null,
      subclass: _subclass?.id || null,
      level: _level,
      baseStats: { ..._baseStats },
      inventory: _inventory.map(i => ({ ...i })),
      spells: [..._spells],
      customAbilities: [..._customAbilities],
      levelHP: _levelHP.map(h => ({ ...h })),
      totalMaxHP: _totalMaxHP,
      money: { ..._money },
      notes: [..._notes],
      skillProficiencies: [..._skillProficiencies],
      tempSkillBonuses: { ..._tempSkillBonuses }
    };
  },

  loadFromState(state) {
    _race = _races.find(r => r.id === state.race) || null;
    _class = _classes.find(c => c.id === state.class) || null;
    _subclass = _class?.subclasses?.find(s => s.id === state.subclass) || null;
    _level = state.level || 1;
    _baseStats = { ...(state.baseStats || { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 }) };
    _inventory = state.inventory || [];
    _spells = state.spells || [];
    _customAbilities = state.customAbilities || [];
    _money = state.money || { copper: 0, silver: 0, gold: 0, diamond: 0 };
    _notes = state.notes || [];
    _skillProficiencies = state.skillProficiencies || [];
    _tempSkillBonuses = state.tempSkillBonuses || {};
    if (state.levelHP && state.levelHP.length) {
      _levelHP = state.levelHP.slice();
      while (_levelHP.length < 20) {
        _levelHP.push({ rolled: false, value: 0 });
      }
      _totalMaxHP = state.totalMaxHP || 0;
    } else {
      this.initHP(_level);
    }
    _currentMainCharacter = state;
    _tempModifiers = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0, hp: 0, ac: 0, initiative: 0, speed: 0 };
    this.updateASI();
    notify('full');
  },

  setCurrentMainCharacter(state) {
    _currentMainCharacter = state;
    if (state) this.loadFromState(state);
  },

  autoSave() {
    if (!_currentMainCharacter || !_currentMainCharacter.id) return;
    const state = this.getCharacterState();
    state.id = _currentMainCharacter.id;
    const saved = getSavedCharacters();
    const idx = saved.findIndex(c => c.id === state.id);
    if (idx >= 0) {
      saved[idx] = state;
      saveCharacterList(saved);
    }
    _currentMainCharacter = state;
  },

  subscribe(fn) {
    return emitter.on('*', fn);
  }
};

// Will be injected by app.js
GameState._getItemPrice = null;

export { GameState };
