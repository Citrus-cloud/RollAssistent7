/**
 * Main entry point — wires all modules together
 * Exports global functions to window for HTML compatibility
 */
import { GameState } from './core/state.js';
import { STAT_KEYS, STAT_NAMES } from './utils/constants.js';
import { getSavedCharacters, saveCharacterList } from './utils/storage.js';
import { getItemPrice, getSlotName, getBonusName, formatBonus, getTypeName, getProficiencyBonus } from './utils/helpers.js';
import { t, setLanguage, getCurrentLang } from './utils/lang.js';
import { animateRoll, performRoll } from './utils/dice.js';
import { initStats, randomStats, updateAllStatUI, setupStatsEvents } from './components/stats.js';
import { equipItem, removeFromInventory, sellItem, updateInventoryUI } from './components/equipment.js';
import { renderCharacterSheetFull, autoSaveCharacter, injectEquipmentList, getAllAbilities, getProfBonus } from './components/characterSheet.js';
import { openChest } from './components/loot.js';
import { initChat, sendMessageToAI, getChatHistory } from './components/chat.js';
import { setupCustomRaceCreator, setupCustomClassCreator, getCustomRaces, getCustomClasses, getCustomRaceDetails, getCustomClassDetails } from './components/customCreator.js';
import { initWizard, setupWizardEvents, renderWizardProgress, renderWizardNav, resetWizard } from './components/creationWizard.js';
import { initNpcScreen } from './components/npcList.js';

// Data will be loaded from global scope (data.js, equipment.js loaded before this module)
let races, classes, spells, equipmentList, raceDetails, classDetails;

function init() {
  // Grab data from global scope (loaded via non-module scripts)
  races = window._DATA_races;
  classes = window._DATA_classes;
  spells = window._DATA_spells;
  equipmentList = window._DATA_equipmentList;
  raceDetails = window._DATA_raceDetails;
  classDetails = window._DATA_classDetails;

  // Load custom races/classes from localStorage and merge
  loadCustomData();

  // Inject data into GameState
  GameState._injectData(races, classes, equipmentList);
  GameState._getItemPrice = getItemPrice;
  injectEquipmentList(equipmentList);

  // Expose globals for HTML compatibility
  exposeGlobals();

  // Setup UI
  setupNavigation();
  setupCreationScreen();
  setupToolsMenu();
  setupStatsEvents();
  initChat();
  setupLanguage();
  setupCustomCreators();
  setupWizardUI();

  // Load saved character
  const saved = getSavedCharacters();
  if (saved.length > 0) {
    const mainChar = saved[saved.length - 1];
    GameState.setCurrentMainCharacter(mainChar);
    updateMainCharacterCard();
  }
}

// ========== Load custom races/classes from localStorage ==========
function loadCustomData() {
  const customRaces = getCustomRaces();
  customRaces.forEach(cr => {
    // Add to races array if not already there
    if (!races.find(r => r.id === cr.id)) {
      races.push({
        id: cr.id,
        name: cr.name,
        description: cr.description || '',
        bonuses: cr.bonuses || {},
        languages: cr.languages || 'Общий'
      });
    }
    // Add to raceDetails
    if (!raceDetails[cr.id]) {
      raceDetails[cr.id] = getCustomRaceDetails(cr.id);
    }
  });

  const customClasses = getCustomClasses();
  customClasses.forEach(cc => {
    if (!classes.find(c => c.id === cc.id)) {
      classes.push({
        id: cc.id,
        name: cc.name,
        description: cc.description || '',
        baseHp: cc.baseHp || 8,
        hitDie: cc.hitDie || 'd8',
        primaryAbility: cc.primaryAbility || '',
        subclasses: (cc.subclasses || []).map(s => ({ id: s.id, name: s.name, description: s.description || '' })),
        subclassLevel: cc.subclassLevel || 3
      });
    }
    if (!classDetails[cc.id]) {
      classDetails[cc.id] = getCustomClassDetails(cc.id);
    }
  });
}

// ========== Setup custom race/class creators ==========
function setupCustomCreators() {
  setupCustomRaceCreator((newRace) => {
    // Add to live data
    races.push({
      id: newRace.id,
      name: newRace.name,
      description: newRace.description || '',
      bonuses: newRace.bonuses || {},
      languages: newRace.languages || 'Общий'
    });
    raceDetails[newRace.id] = getCustomRaceDetails(newRace.id);
    GameState._injectData(races, classes, equipmentList);
    populateSelect('race-select', races);
  });

  setupCustomClassCreator((newClass) => {
    classes.push({
      id: newClass.id,
      name: newClass.name,
      description: newClass.description || '',
      baseHp: newClass.baseHp || 8,
      hitDie: newClass.hitDie || 'd8',
      primaryAbility: newClass.primaryAbility || '',
      subclasses: (newClass.subclasses || []).map(s => ({ id: s.id, name: s.name, description: s.description || '' })),
      subclassLevel: newClass.subclassLevel || 3
    });
    classDetails[newClass.id] = getCustomClassDetails(newClass.id);
    GameState._injectData(races, classes, equipmentList);
    populateSelect('class-select', classes);
  });
}

// ========== Expose all globals ==========
function exposeGlobals() {
  window.GameState = GameState;
  window.showAlert = showAlert;
  window.renderCharacterSheetFull = () => renderCharacterSheetFull(spells);
  window.updateInventoryUI = updateInventoryUI;
  window.openChest = (type) => openChest(type, equipmentList);
  window.equipItem = equipItem;
  window.removeFromInventory = removeFromInventory;
  window.sellItem = sellItem;
  window.quickStart = quickStart;
  window.saveCharacterAsMain = saveCharacterAsMain;
  window.loadCharacter = loadCharacter;
  window.deleteCharacter = deleteCharacter;
  window.setAsMainCharacter = setAsMainCharacter;
  window.getSavedCharacters = getSavedCharacters;
  window.saveCharacterList = saveCharacterList;
  window.autoSaveCharacter = autoSaveCharacter;
  window.initStats = initStats;
  window.updateAllStatUI = updateAllStatUI;
  window._updateAllStatUI = updateAllStatUI;
  window._updateMainCharacterCard = updateMainCharacterCard;
  window._renderSpells = renderSpells;
  window.showRaceDetailsModal = showRaceDetailsModal;
  window.showClassDetailsModal = showClassDetailsModal;
  window.getSlotName = getSlotName;
  window.getItemPrice = getItemPrice;
  window.t = t;
  window.setLanguage = setLanguage;
  window.STAT_KEYS = STAT_KEYS;
  window.STAT_NAMES = STAT_NAMES;
}

// ========== Alert Modal ==========
function showAlert(title, message, callback) {
  document.getElementById('alert-title').textContent = title;
  document.getElementById('alert-message').textContent = message;
  const modal = document.getElementById('alert-modal');
  modal.classList.add('active');

  const okBtn = document.getElementById('btn-alert-ok');
  const cancelBtn = document.getElementById('btn-alert-cancel');
  const closeBtn = document.getElementById('btn-close-alert');

  const closeModal = () => {
    modal.classList.remove('active');
    okBtn.onclick = null;
    closeBtn.onclick = null;
    if (cancelBtn) cancelBtn.onclick = null;
  };

  okBtn.style.display = 'inline-block';
  okBtn.onclick = () => { closeModal(); if (callback) callback(); };

  if (cancelBtn) {
    if (callback) {
      cancelBtn.style.display = 'inline-block';
      cancelBtn.onclick = closeModal;
    } else {
      cancelBtn.style.display = 'none';
    }
  }
  closeBtn.onclick = closeModal;
}

// ========== Navigation ==========
function setupNavigation() {
  const menuScreen = document.getElementById('menu');
  const creationScreen = document.getElementById('character-creation');
  const sheetScreen = document.getElementById('character-sheet');

  document.getElementById('btn-create').addEventListener('click', () => {
    menuScreen.classList.remove('active');
    creationScreen.classList.add('active');
    GameState.resetAll();
    const creationNameInput = document.getElementById('creation-char-name');
    if (creationNameInput) creationNameInput.value = '';
    document.getElementById('race-select').value = '';
    document.getElementById('class-select').value = '';
    document.getElementById('level-select').value = '1';
    const levelBonus = document.getElementById('level-bonus');
    if (levelBonus) levelBonus.textContent = t('bonusProficiency', 1, 2);
    updateInventoryUI();
    updateSpellsSummary();
    initStats();
    resetWizard();
  });

  document.getElementById('btn-back-creation').addEventListener('click', () => {
    creationScreen.classList.remove('active');
    menuScreen.classList.add('active');
    updateMainCharacterCard();
  });

  document.getElementById('btn-back-sheet').addEventListener('click', () => {
    sheetScreen.classList.remove('active');
    menuScreen.classList.add('active');
    updateMainCharacterCard();
  });

  document.getElementById('btn-quick-start').addEventListener('click', () => quickStart());

  document.getElementById('btn-characters').addEventListener('click', () => {
    menuScreen.classList.remove('active');
    document.getElementById('characters-list-screen').classList.add('active');
    renderCharacterList();
  });

  document.getElementById('btn-back-characters').addEventListener('click', () => {
    document.getElementById('characters-list-screen').classList.remove('active');
    menuScreen.classList.add('active');
    updateMainCharacterCard();
  });

  // NPC screen
  document.getElementById('btn-npcs').addEventListener('click', () => {
    menuScreen.classList.remove('active');
    const npcScreen = document.getElementById('npc-screen');
    npcScreen.classList.add('active');
    const npcContent = document.getElementById('npc-screen-content');
    initNpcScreen(npcContent, () => {
      npcScreen.classList.remove('active');
      menuScreen.classList.add('active');
    });
  });

  document.getElementById('btn-save-character').addEventListener('click', saveCharacterAsMain);
}

// ========== Creation Screen Setup ==========
function setupCreationScreen() {
  const spellsModal = document.getElementById('spells-modal');

  // Spells modal
  document.getElementById('btn-open-spells').addEventListener('click', () => {
    spellsModal.classList.add('active');
    renderSpells();
  });
  document.getElementById('btn-close-spells').addEventListener('click', () => {
    spellsModal.classList.remove('active');
    updateSpellsSummary();
    renderCharacterSheetFull(spells);
  });
  spellsModal.addEventListener('click', (e) => {
    if (e.target === spellsModal) {
      spellsModal.classList.remove('active');
      updateSpellsSummary();
      renderCharacterSheetFull(spells);
    }
  });

  // Populate selects
  populateSelect('race-select', races);
  populateSelect('class-select', classes);

  // Race select
  document.getElementById('race-select').addEventListener('change', function () {
    const id = this.value;
    const infoDiv = document.getElementById('race-info');
    if (!id) { infoDiv.innerHTML = ''; GameState.setRace(null); updateAllStatUI(); return; }
    const race = races.find(r => r.id === id);
    if (race) {
      infoDiv.innerHTML = formatRace(race);
      GameState.setRace(race);
      updateAllStatUI();
    }
  });

  // Class select
  document.getElementById('class-select').addEventListener('change', function () {
    const id = this.value;
    const infoDiv = document.getElementById('class-info');
    if (!id) { infoDiv.innerHTML = ''; GameState.setClass(null); updateSubclassVisibility(); return; }
    const cls = classes.find(c => c.id === id);
    if (cls) {
      infoDiv.innerHTML = formatClass(cls);
      GameState.setClass(cls);
      updateSubclassVisibility();
      if (GameState.levelHP.length === 0) GameState.initHP(GameState.level);
    }
  });

  // Level select
  document.getElementById('level-select').addEventListener('change', function () {
    const newLevel = parseInt(this.value);
    GameState.setLevel(newLevel);
    document.getElementById('level-bonus').textContent = t('bonusProficiency', newLevel, getProficiencyBonus(newLevel));
    if (GameState.class) updateSubclassVisibility();
    initStats();
  });

  // Subclass
  document.getElementById('subclass-select')?.addEventListener('change', function () {
    const id = this.value;
    const infoDiv = document.getElementById('subclass-info');
    const cls = GameState.class;
    if (!id || !cls) { GameState.setSubclass(null); if (infoDiv) infoDiv.innerHTML = ''; return; }
    const subclass = cls.subclasses.find(s => s.id === id);
    if (subclass) {
      GameState.setSubclass(subclass);
      if (infoDiv) infoDiv.innerHTML = `<p><strong>${subclass.name}</strong></p><p>${subclass.description}</p>`;
    } else {
      GameState.setSubclass(null);
      if (infoDiv) infoDiv.innerHTML = '';
    }
  });

  // Class/Race details modals
  document.getElementById('btn-class-details').addEventListener('click', showClassDetailsModal);
  document.getElementById('btn-close-class-details').addEventListener('click', () => document.getElementById('class-details-modal').classList.remove('active'));
  document.getElementById('class-details-modal').addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.classList.remove('active'); });

  document.getElementById('btn-race-details').addEventListener('click', showRaceDetailsModal);
  document.getElementById('btn-close-race-details').addEventListener('click', () => document.getElementById('race-details-modal').classList.remove('active'));
  document.getElementById('race-details-modal').addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.classList.remove('active'); });

  // Spell filters
  const spellsListDiv = document.getElementById('spells-list');
  document.getElementById('spell-level-filter').addEventListener('change', renderSpells);
  document.getElementById('spell-search').addEventListener('input', renderSpells);
  document.getElementById('spell-school-filter').addEventListener('change', renderSpells);

  // Spell type filter buttons
  const typeFiltersContainer = document.getElementById('spell-type-filters');
  if (typeFiltersContainer) {
    typeFiltersContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.spell-type-btn');
      if (!btn) return;
      typeFiltersContainer.querySelectorAll('.spell-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _currentSpellType = btn.dataset.type;
      renderSpells();
    });
  }

  // Equipment filters and select
  setupEquipmentFilters();

  // Custom ability
  document.getElementById('btn-add-ability').addEventListener('click', () => {
    const name = document.getElementById('new-ability-name').value.trim();
    const level = parseInt(document.getElementById('new-ability-level').value) || 0;
    const desc = document.getElementById('new-ability-desc').value.trim();
    if (!name) return;
    const newId = 'custom_' + Date.now();
    GameState.addCustomAbility({ id: newId, name, level, school: 'Особая', description: desc });
    GameState.addSpell(newId);
    updateSpellsSummary();
    document.getElementById('new-ability-name').value = '';
    document.getElementById('new-ability-level').value = '';
    document.getElementById('new-ability-desc').value = '';
    renderSpells();
  });

  // Notes modal
  setupNotesModal();
  // Custom item modal
  setupCustomItemModal();
  // Custom selects
  setupAllCustomSelects();
  // Dice
  setupDice();
}



// ========== Spells ==========
function classifySpell(spell) {
  if (spell.type) return spell.type;
  const text = (spell.name + ' ' + spell.description).toLowerCase();
  if (/урон|атака|огонь|молния|луч|взрыв|поража|удар|снаряд/.test(text)) return 'attack';
  if (/щит|броня|сопротивлен|защит|барьер|оберег|укрыти/.test(text)) return 'defense';
  if (/лечени|восстановлен|исцелен|cure|heal/.test(text)) return 'healing';
  if (/преимущество|бонус|ускорени|увеличени|усилен/.test(text)) return 'buff';
  if (/призыв|вызов|создани|summon|призрач/.test(text)) return 'summon';
  return 'utility';
}

let _currentSpellType = 'all';

function renderSpells() {
  const spellsListDiv = document.getElementById('spells-list');
  if (!spellsListDiv) return;
  const levelFilter = document.getElementById('spell-level-filter').value;
  const schoolFilter = document.getElementById('spell-school-filter').value;
  const searchText = document.getElementById('spell-search').value.toLowerCase();
  const typeFilter = _currentSpellType;
  const allAbilities = [...spells, ...GameState.customAbilities];
  let filtered = allAbilities;
  if (levelFilter !== 'all') filtered = filtered.filter(s => s.level === parseInt(levelFilter));
  if (schoolFilter !== 'all') filtered = filtered.filter(s => s.school === schoolFilter);
  if (typeFilter !== 'all') filtered = filtered.filter(s => classifySpell(s) === typeFilter);
  if (searchText) filtered = filtered.filter(s => s.name.toLowerCase().includes(searchText) || s.description.toLowerCase().includes(searchText));

  if (filtered.length === 0) { spellsListDiv.innerHTML = `<p>${t('spellsNotFound')}</p>`; return; }
  let html = `<p>${t('spellsFound', filtered.length)}</p>`;
  filtered.forEach(spell => {
    const isSelected = GameState.spells.includes(spell.id);
    html += `<div class="spell-item"><strong>${spell.name}</strong> <span class="level">(${t('sheetLevel').toLowerCase()} ${spell.level}, ${spell.school})</span>
      <p>${spell.description}</p>
      <button class="spell-btn ${isSelected ? 'added' : ''}" data-spell-id="${spell.id}">${isSelected ? t('spellAdded') : t('spellAdd')}</button></div>`;
  });
  spellsListDiv.innerHTML = html;

  // Event delegation for spell buttons
  spellsListDiv.onclick = (e) => {
    const btn = e.target.closest('.spell-btn');
    if (!btn) return;
    const spellId = btn.dataset.spellId;
    if (GameState.spells.includes(spellId)) GameState.removeSpell(spellId);
    else GameState.addSpell(spellId);
    renderSpells();
  };
}

function updateSpellsSummary() {
  const count = GameState.spells.length;
  const el = document.getElementById('selected-spells-summary');
  if (el) el.textContent = count === 0 ? t('abilitiesSummary') : t('abilitiesSelected', count);
}

// ========== Race/Class Details Modals ==========
function showRaceDetailsModal() {
  const modal = document.getElementById('race-details-modal');
  const content = document.getElementById('race-details-full');
  const race = GameState.race;
  if (!race) { content.innerHTML = `<p>${t('raceNotSelected')}</p>`; }
  else {
    const data = raceDetails[race.id];
    if (!data) { content.innerHTML = `<p>${t('raceNoDesc')}</p>`; }
    else {
      let html = `<h3>${race.name}</h3><p>${data.description}</p>`;
      data.features.forEach(f => html += `<p><b>${f.title}</b> ${f.text}</p>`);
      html += `<p><b>${t('languages')}:</b> ${data.languages.join(', ')}</p>`;
      content.innerHTML = html;
    }
  }
  modal.classList.add('active');
}

function showClassDetailsModal() {
  const modal = document.getElementById('class-details-modal');
  const content = document.getElementById('class-details-full');
  content.innerHTML = '';
  const cls = GameState.class;
  const subclass = GameState.subclass;
  const level = GameState.level;
  if (!cls) { content.innerHTML = `<p style="text-align:center;padding:20px;">⚠️ ${t('classNotSelected')}</p>`; modal.classList.add('active'); return; }
  const data = classDetails[cls.id];
  if (!data) { content.innerHTML = `<p style="text-align:center;padding:20px;">📖 ${t('classNoDetails')}</p>`; modal.classList.add('active'); return; }

  let html = '<div class="class-details-container">';
  html += `<div class="class-details-header"><h3>${cls.name}</h3><p>${cls.description}</p></div>`;
  html += `<h4 style="color:#d4af37;">${t('classFeatures')}</h4>`;
  if (data.features) {
    Object.keys(data.features).map(Number).sort((a, b) => a - b).forEach(lvl => {
      if (lvl > level) return;
      const features = data.features[lvl];
      if (features && features.length > 0) {
        html += `<div class="level-card"><div class="level-number">${t('levelCard', lvl)}</div><div class="level-features">`;
        features.forEach(f => html += `<div class="feature-card"><div class="feature-title">${f.title || ''}</div><div class="feature-text">${f.text || f}</div></div>`);
        html += '</div></div>';
      }
    });
  }
  if (subclass && data.subclasses && data.subclasses[subclass.id]) {
    const sub = data.subclasses[subclass.id];
    html += `<hr class="subclass-divider"><h4 class="subclass-title">⚡ ${subclass.name} ${t('subclassWord')}</h4>`;
    html += `<p style="color:#c0a86a;margin-bottom:10px;">${sub.description}</p>`;
    Object.keys(sub.features || {}).map(Number).sort((a, b) => a - b).forEach(lvl => {
      if (lvl > level) return;
      const features = sub.features[lvl];
      if (features && features.length > 0) {
        html += `<div class="level-card" style="border-left-color:#d4af37;"><div class="level-number" style="background:#3a2a1a;">${t('levelCard', lvl)}</div><div class="level-features">`;
        features.forEach(f => html += `<div class="feature-card"><div class="feature-title">${f.title || ''}</div><div class="feature-text">${f.text || f}</div></div>`);
        html += '</div></div>';
      }
    });
  }
  html += '</div>';
  content.innerHTML = html;
  modal.classList.add('active');
}

// ========== Character Management ==========
function saveCharacterAsMain() {
  if (!GameState.race || !GameState.class) {
    showAlert(t('error'), t('errorSelectRaceClass'));
    return;
  }
  const state = GameState.getCharacterState();
  state.id = 'char_' + Date.now();
  let charName = document.getElementById('creation-char-name')?.value.trim();
  if (!charName) charName = t('unnamed');
  state.name = charName;
  const savedCharacters = getSavedCharacters();
  savedCharacters.push(state);
  saveCharacterList(savedCharacters);
  GameState.setCurrentMainCharacter(state);
  showAlert(t('success'), t('charSaved', state.name));
}

function updateMainCharacterCard() {
  const container = document.getElementById('main-character-card');
  if (!container) return;
  const char = GameState.currentMainCharacter;
  if (!char) { container.style.display = 'none'; return; }
  const race = races.find(r => r.id === char.race);
  const cls = classes.find(c => c.id === char.class);
  container.style.display = 'block';
  container.innerHTML = `<div class="mini-card" id="mini-card-clickable"><div class="mini-card-name">${char.name}</div><div class="mini-card-info">${race ? race.name : '?'} ${cls ? cls.name : '?'} (${t('sheetLevel')} ${char.level})</div><div class="mini-card-hint">${t('miniCardHint')}</div></div>`;
  document.getElementById('mini-card-clickable').addEventListener('click', () => {
    GameState.loadFromState(char);
    document.getElementById('menu').classList.remove('active');
    document.getElementById('character-sheet').classList.add('active');
    renderCharacterSheetFull(spells);
  });
}

function loadCharacterDataIntoGlobals(state) {
  GameState.loadFromState(state);
  const creationNameInput = document.getElementById('creation-char-name');
  if (creationNameInput) creationNameInput.value = state.name || '';
  const sheetNameInput = document.getElementById('char-name');
  if (sheetNameInput) sheetNameInput.value = state.name || '';
}

function loadCharacter(index) {
  const savedCharacters = getSavedCharacters();
  if (index < 0 || index >= savedCharacters.length) return;
  const state = savedCharacters[index];
  if (!state.id) state.id = 'char_' + Date.now();
  loadCharacterDataIntoGlobals(state);
  GameState.setCurrentMainCharacter(state);
  updateMainCharacterCard();
  document.getElementById('race-select').value = state.race || '';
  document.getElementById('class-select').value = state.class || '';
  if (state.subclass && GameState.class) document.getElementById('subclass-select').value = state.subclass;
  document.getElementById('level-select').value = state.level;
  updateAllStatUI();
  updateInventoryUI();
  updateSpellsSummary();
  updateSubclassVisibility();
  showAlert(t('loaded'), t('charLoaded'));
}

function deleteCharacter(index) {
  const savedCharacters = getSavedCharacters();
  if (index < 0 || index >= savedCharacters.length) return;
  const deleted = savedCharacters[index];
  savedCharacters.splice(index, 1);
  saveCharacterList(savedCharacters);
  if (GameState.currentMainCharacter && GameState.currentMainCharacter.id === deleted.id) {
    GameState.resetAll();
  }
  if (savedCharacters.length === 0) GameState.resetAll();
  updateMainCharacterCard();
  renderCharacterList();
}

function setAsMainCharacter(index) {
  const savedCharacters = getSavedCharacters();
  if (index < 0 || index >= savedCharacters.length) return;
  const state = savedCharacters[index];
  GameState.setCurrentMainCharacter(state);
  loadCharacterDataIntoGlobals(state);
  document.getElementById('race-select').value = state.race || '';
  document.getElementById('class-select').value = state.class || '';
  if (state.subclass && GameState.class) document.getElementById('subclass-select').value = state.subclass;
  document.getElementById('level-select').value = state.level;
  updateAllStatUI();
  updateInventoryUI();
  updateSpellsSummary();
  updateMainCharacterCard();
  renderCharacterList();
  showAlert(t('done'), t('mainChanged'));
}

function renderCharacterList() {
  const container = document.getElementById('saved-characters-container');
  if (!container) return;
  const savedCharacters = getSavedCharacters();
  if (savedCharacters.length === 0) { container.innerHTML = `<p style="text-align:center;padding:20px;">${t('noSaved')}</p>`; return; }
  let html = '<div class="saved-characters-grid">';
  savedCharacters.forEach((char, index) => {
    const race = races.find(r => r.id === char.race);
    const cls = classes.find(c => c.id === char.class);
    const isMain = GameState.currentMainCharacter && char.id === GameState.currentMainCharacter.id;
    html += `<div class="saved-character-card ${isMain ? 'main-character' : ''}"><div class="char-name">${char.name}</div><div class="char-info">${race ? race.name : '?'} ${cls ? cls.name : '?'} (${t('sheetLevel')} ${char.level})</div><div class="char-actions">${isMain ? `<span class="main-badge">${t('mainBadge')}</span>` : `<button class="menu-btn set-main-btn" data-index="${index}">${t('setMain')}</button>`}<button class="menu-btn delete-btn" data-index="${index}">${t('deleteChar')}</button></div></div>`;
  });
  html += '</div>';
  container.innerHTML = html;

  // Event delegation
  container.onclick = (e) => {
    const setMainBtn = e.target.closest('.set-main-btn');
    if (setMainBtn) { setAsMainCharacter(parseInt(setMainBtn.dataset.index)); return; }
    const deleteBtn = e.target.closest('.delete-btn');
    if (deleteBtn) { showAlert(t('confirm'), t('confirmDelete'), () => deleteCharacter(parseInt(deleteBtn.dataset.index))); }
  };
}



// ========== Equipment Filters ==========
function setupEquipmentFilters() {
  function filterEquipment() {
    const searchText = document.getElementById('equipment-search').value.toLowerCase();
    const typeFilter = document.getElementById('equipment-type-filter').value;
    const rarityFilter = document.getElementById('equipment-rarity-filter').value;
    let filtered = equipmentList.filter(item => {
      if (searchText && !item.name.toLowerCase().includes(searchText) && !(item.description || '').toLowerCase().includes(searchText)) return false;
      if (typeFilter !== 'all' && item.type !== typeFilter) return false;
      if (rarityFilter !== 'all' && item.rarity !== rarityFilter) return false;
      return true;
    });
    const realSelect = document.getElementById('equipment-select');
    realSelect.innerHTML = '<option value="">' + t('equipSelectItem') + '</option>';
    filtered.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.name;
      realSelect.appendChild(option);
    });
    realSelect.value = '';
    const trigger = document.querySelector('#equipment-custom-select .custom-select-trigger');
    if (trigger) trigger.textContent = t('equipSelectItem');
    let weapons = 0, armors = 0, artifacts = 0;
    filtered.forEach(item => {
      if (item.type === 'weapon') weapons++;
      else if (item.type === 'armor') armors++;
      else if (item.type === 'artifact') artifacts++;
    });
    const countsDiv = document.getElementById('equipment-counts');
    if (countsDiv) countsDiv.innerHTML = `<span class="count-total">${t('total')}: ${filtered.length}</span> <span class="count-weapon">⚔️ ${weapons}</span> <span class="count-armor">🛡️ ${armors}</span> <span class="count-artifact">💍 ${artifacts}</span>`;
  }

  document.getElementById('equipment-search').addEventListener('input', filterEquipment);
  document.getElementById('equipment-type-filter').addEventListener('change', filterEquipment);
  document.getElementById('equipment-rarity-filter').addEventListener('change', filterEquipment);
  filterEquipment();

  document.getElementById('equipment-select').addEventListener('change', function () {
    if (this.value) {
      GameState.addToInventory(this.value);
      this.value = '';
      const trigger = document.querySelector('#equipment-custom-select .custom-select-trigger');
      if (trigger) trigger.textContent = t('equipSelectItem');
      updateInventoryUI();
      if (GameState.currentMainCharacter) autoSaveCharacter();
    }
  });
}

// ========== Subclass Visibility ==========
function updateSubclassVisibility() {
  const subclassSection = document.getElementById('subclass-section');
  const cls = GameState.class;
  if (!cls) { subclassSection.style.display = 'none'; return; }
  subclassSection.style.display = GameState.level >= cls.subclassLevel ? 'block' : 'none';
  if (GameState.level >= cls.subclassLevel) populateSelect('subclass-select', cls.subclasses);
}

// ========== Notes ==========
function renderNotesList() {
  const listDiv = document.getElementById('notes-list');
  const notes = GameState.notes;
  if (!notes || notes.length === 0) {
    listDiv.innerHTML = `<p style="color:#b0a08a; text-align:center;">${t('noNotes')}</p>`;
    return;
  }
  let html = '';
  notes.forEach((note, index) => {
    html += `<div class="note-item">
      <div class="note-text"><strong>${note.name}</strong>${note.description ? '<br>' + note.description : ''}</div>
      <button class="note-delete" data-index="${index}">✕</button>
    </div>`;
  });
  listDiv.innerHTML = html;

  listDiv.onclick = (e) => {
    const btn = e.target.closest('.note-delete');
    if (!btn) return;
    e.stopPropagation();
    const index = parseInt(btn.dataset.index);
    const newNotes = [...GameState.notes];
    newNotes.splice(index, 1);
    GameState.setNotes(newNotes);
    renderNotesList();
  };
}

function setupNotesModal() {
  document.getElementById('btn-close-notes').addEventListener('click', () => {
    document.getElementById('notes-modal').classList.remove('active');
  });
  document.getElementById('notes-modal').addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('active');
  });
  document.getElementById('btn-add-note').addEventListener('click', () => {
    document.getElementById('notes-modal').classList.remove('active');
    document.getElementById('custom-item-type').value = 'note';
    document.getElementById('custom-item-name').value = '';
    document.getElementById('custom-item-desc').value = '';
    document.getElementById('custom-item-modal').classList.add('active');
  });
}

// ========== Custom Item Modal ==========
function setupCustomItemModal() {
  document.getElementById('btn-close-custom-item').addEventListener('click', () => {
    document.getElementById('custom-item-modal').classList.remove('active');
  });

  document.getElementById('btn-create-custom-item').addEventListener('click', () => {
    const nameInput = document.getElementById('custom-item-name');
    const name = nameInput.value.trim();
    if (!name) { showAlert(t('error'), t('enterName')); return; }

    const type = document.getElementById('custom-item-type').value;
    const rarity = document.getElementById('custom-item-rarity').value;
    const slot = document.getElementById('custom-item-slot').value;
    const desc = document.getElementById('custom-item-desc').value.trim();

    if (type === 'note') {
      const newNotes = [...GameState.notes, {
        id: 'note_' + Date.now(), name, description: desc || '', date: new Date().toLocaleDateString()
      }];
      GameState.setNotes(newNotes);
    } else {
      const newItem = {
        id: 'custom_' + Date.now(), name, type, rarity,
        slot: slot === 'none' ? '' : slot,
        description: desc || 'Без описания',
        bonuses: {}, equipped: false, price: 'Особая'
      };
      GameState.addCustomItem(newItem);
      updateInventoryUI();
      renderCharacterSheetFull(spells);
    }

    nameInput.value = '';
    document.getElementById('custom-item-desc').value = '';
    document.getElementById('custom-item-modal').classList.remove('active');

    if (type === 'note') {
      document.getElementById('notes-modal').classList.add('active');
      renderNotesList();
    } else {
      showAlert(t('done'), t('itemAdded', name));
    }
  });
}

// ========== Tools Menu ==========
function setupToolsMenu() {
  const toolsTrigger = document.getElementById('tools-trigger');
  const toolsMenu = document.getElementById('tools-menu');
  const closeToolsMenu = () => toolsMenu.classList.remove('open');

  toolsTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toolsMenu.classList.toggle('open');
  });
  document.addEventListener('click', closeToolsMenu);

  document.getElementById('menu-dice-btn').addEventListener('click', () => {
    document.getElementById('dice-modal').classList.add('active');
    closeToolsMenu();
  });
  document.getElementById('menu-notes-btn').addEventListener('click', () => {
    document.getElementById('notes-modal').classList.add('active');
    renderNotesList();
    closeToolsMenu();
  });
  document.getElementById('menu-chat-btn').addEventListener('click', () => {
    document.getElementById('chat-modal').classList.add('active');
    closeToolsMenu();
    if (getChatHistory().length === 0) {
      const initMsg = getCurrentLang() === 'en' ? 'Hi! Tell me briefly how you can help me as a Dungeon Master?' : 'Привет! Расскажи кратко, как ты можешь помочь мне как Мастер подземелий?';
      setTimeout(() => sendMessageToAI(initMsg), 500);
    }
  });

  // Dice modal close
  document.getElementById('btn-close-dice').addEventListener('click', () => {
    document.getElementById('dice-modal').classList.remove('active');
  });
  document.getElementById('dice-modal').addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('active');
  });
}

// ========== Dice ==========
function setupDice() {
  const diceTypeSelect = document.getElementById('dice-type');
  const diceCountInput = document.getElementById('dice-count');
  const advBtns = document.querySelectorAll('.advantage-btn');
  const rollBtn = document.getElementById('btn-roll-dice');
  const resultsDiv = document.getElementById('dice-results');
  let currentAdvantage = 'normal';

  advBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      advBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAdvantage = btn.dataset.adv;
    });
  });

  rollBtn.addEventListener('click', () => {
    const sides = parseInt(diceTypeSelect.value);
    let count = parseInt(diceCountInput.value);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 50) count = 50;
    animateRoll(sides, count, resultsDiv, () => {
      resultsDiv.innerHTML = performRoll(sides, count, currentAdvantage);
    });
  });
}

// ========== Language ==========
function setupLanguage() {
  document.getElementById('main-title').textContent = t('mainTitle');
  document.getElementById('main-subtitle').textContent = t('mainSubtitle');
  document.getElementById('btn-create').textContent = t('btnCreate');
  document.getElementById('btn-quick-start').textContent = t('btnQuickStart');
  document.getElementById('btn-characters').textContent = t('btnCharacters');
  document.getElementById('btn-back-creation').textContent = t('back');
  document.getElementById('btn-back-sheet').textContent = t('back');
  document.getElementById('btn-back-characters').textContent = t('back');
  document.getElementById('btn-save-character').textContent = t('saveCharacter');
  document.getElementById('btn-race-details').textContent = t('raceDetails');
  document.getElementById('btn-class-details').textContent = t('classDetails');
  document.getElementById('btn-open-spells').textContent = t('btnOpenSpells');
  document.getElementById('btn-random-stats').textContent = t('randomStats');
  document.getElementById('btn-reset-stats').textContent = t('resetStats');
  document.getElementById('btn-create-custom-race').textContent = t('createCustomRace');
  document.getElementById('btn-create-custom-class').textContent = t('createCustomClass');
  document.getElementById('btn-add-note').textContent = t('newNoteBtn');
  document.getElementById('btn-roll-dice').textContent = t('rollBtn');

  // Placeholders and labels
  const nameInput = document.getElementById('creation-char-name');
  if (nameInput) nameInput.placeholder = t('namePlaceholder');
  const equipSearch = document.getElementById('equipment-search');
  if (equipSearch) equipSearch.placeholder = t('equipSearch');
  const spellSearch = document.getElementById('spell-search');
  if (spellSearch) spellSearch.placeholder = t('spellsSearch');
  const chatInput = document.getElementById('chat-input');
  if (chatInput) chatInput.placeholder = t('chatPlaceholder');

  // Dice modal labels
  const advBtns = document.querySelectorAll('.advantage-btn');
  advBtns.forEach(btn => {
    const adv = btn.dataset.adv;
    if (adv === 'normal') btn.textContent = t('diceNormal');
    else if (adv === 'advantage') btn.textContent = t('diceAdvantage');
    else if (adv === 'disadvantage') btn.textContent = t('diceDisadvantage');
  });

  // Setup lang buttons
  document.getElementById('btn-lang-ru').addEventListener('click', () => setLanguage('ru'));
  document.getElementById('btn-lang-en').addEventListener('click', () => setLanguage('en'));
  const lang = getCurrentLang();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active-lang');
    if (btn.id === 'btn-lang-' + lang) btn.classList.add('active-lang');
  });
}

// ========== Custom Select Wrapper ==========
function applyCustomSelect(realSelectId, customSelectId) {
  const realSelect = document.getElementById(realSelectId);
  const customSelect = document.getElementById(customSelectId);
  if (!realSelect || !customSelect) return;
  const trigger = customSelect.querySelector('.custom-select-trigger');
  const optionsContainer = customSelect.querySelector('.custom-options');

  function populateOptions() {
    optionsContainer.innerHTML = '';
    Array.from(realSelect.options).forEach(option => {
      const div = document.createElement('div');
      div.className = 'custom-option';
      div.textContent = option.text;
      div.dataset.value = option.value;
      div.addEventListener('click', function () {
        realSelect.value = this.dataset.value;
        trigger.textContent = this.textContent;
        optionsContainer.style.display = 'none';
        customSelect.classList.remove('open');
        optionsContainer.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        realSelect.dispatchEvent(new Event('change'));
      });
      if (option.value === realSelect.value) div.classList.add('selected');
      optionsContainer.appendChild(div);
    });
  }
  populateOptions();
  new MutationObserver(() => {
    populateOptions();
    trigger.textContent = realSelect.options[realSelect.selectedIndex]?.text || trigger.textContent;
  }).observe(realSelect, { childList: true, subtree: true });

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = optionsContainer.style.display === 'block';
    optionsContainer.style.display = isOpen ? 'none' : 'block';
    customSelect.classList.toggle('open', !isOpen);
  });
  document.addEventListener('click', () => {
    optionsContainer.style.display = 'none';
    customSelect.classList.remove('open');
  });
  realSelect.addEventListener('change', function () {
    trigger.textContent = realSelect.options[realSelect.selectedIndex]?.text || trigger.textContent;
    optionsContainer.querySelectorAll('.custom-option').forEach(opt => opt.classList.toggle('selected', opt.dataset.value === realSelect.value));
  });
}

function setupAllCustomSelects() {
  applyCustomSelect('race-select', 'race-custom-select');
  applyCustomSelect('class-select', 'class-custom-select');
  applyCustomSelect('level-select', 'level-custom-select');
  applyCustomSelect('spell-level-filter', 'spell-level-custom-select');
  applyCustomSelect('subclass-select', 'subclass-custom-select');
  applyCustomSelect('equipment-select', 'equipment-custom-select');
  applyCustomSelect('spell-school-filter', 'spell-school-custom-select');
}

// ========== Helpers ==========
function populateSelect(selectId, items) {
  const select = document.getElementById(selectId);
  const defaultOpts = { 'race-select': t('raceSelect'), 'class-select': t('classSelect'), 'subclass-select': t('subclassSelect') };
  select.innerHTML = `<option value="">${defaultOpts[selectId] || '-- ' + t('equipSelectItem') + ' --'}</option>`;
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.name;
    select.appendChild(option);
  });
}

function formatRace(race) {
  const names = { str: t('statStr'), dex: t('statDex'), con: t('statCon'), int: t('statInt'), wis: t('statWis'), cha: t('statCha') };
  const bonuses = Object.entries(race.bonuses).map(([k, v]) => `${names[k]}+${v}`).join(', ');
  return `<p><strong>${race.name}</strong></p><p>${race.description}</p><p><em>${bonuses}</em></p>`;
}

function formatClass(cls) {
  return `<p><strong>${cls.name}</strong></p><p>${cls.description}</p>
<p><strong>${t('sheetLevel')}:</strong> ${cls.hitDie} | <strong>${t('sheetAbilities')}:</strong> ${cls.primaryAbility}</p>
<p><strong>HP:</strong> ${cls.baseHp}</p>
<p><em>${t('subclassLabel')} — ${t('levelCard', cls.subclassLevel)}</em></p>`;
}



// ========== Quick Start ==========
function quickStart() {
  showAlert('⚡ ' + t('btnQuickStart').replace('⚡ ', ''),
    t('quickStartConfirm'),
    () => {
      const characters = [
        { name: 'Андрагорн', race: 'human', class: 'warrior', subclass: 'champion', stats: { str: 16, dex: 13, con: 14, int: 10, wis: 11, cha: 9 }, hp: 12, inventory: [{ id: 'longsword_std', slot: 'mainhand', equipped: true }, { id: 'steel_shield', slot: 'offhand', equipped: true }, { id: 'chain_mail', slot: 'body', equipped: true }, { id: 'dagger', slot: 'mainhand', equipped: false }], spells: [], customAbilities: [{ id: 'fighting_style_defense', name: 'Боевой стиль: Оборона', level: 1, school: 'Особая', description: '+1 КД, если носите доспех.' }, { id: 'second_wind', name: 'Второе дыхание', level: 1, school: 'Особая', description: 'Бонусным действием восстановить 1d10 + уровень воина хитов (1/короткий отдых).' }] },
        { name: 'Морлак', race: 'elf', class: 'mage', subclass: 'evocation', stats: { str: 8, dex: 14, con: 12, int: 16, wis: 12, cha: 10 }, hp: 7, inventory: [], spells: ['fire_bolt', 'mage_hand', 'light', 'magic_missile', 'mage_armor', 'sleep'], customAbilities: [{ id: 'arcane_recovery', name: 'Восстановление магии', level: 1, school: 'Особая', description: 'Короткий отдых: восстановить ячейки суммарно = половине уровня волшебника.' }] },
        { name: 'Зарг', race: 'halfling', class: 'rogue', subclass: 'thief', stats: { str: 8, dex: 16, con: 14, int: 10, wis: 12, cha: 13 }, hp: 10, inventory: [{ id: 'shortsword', slot: 'mainhand', equipped: true }, { id: 'dagger', slot: 'offhand', equipped: true }, { id: 'leather_armor', slot: 'body', equipped: true }], spells: [], customAbilities: [{ id: 'sneak_attack', name: 'Скрытая атака', level: 1, school: 'Особая', description: '1d6 дополнительного урона при преимуществе.' }, { id: 'thieves_cant', name: 'Воровской жаргон', level: 1, school: 'Особая', description: 'Понимаете тайный язык.' }] },
        { name: 'Борунд', race: 'dwarf', class: 'cleric', subclass: 'life', stats: { str: 13, dex: 10, con: 14, int: 10, wis: 16, cha: 12 }, hp: 11, inventory: [{ id: 'steel_shield', slot: 'offhand', equipped: true }, { id: 'chain_shirt', slot: 'body', equipped: true }], spells: ['sacred_flame', 'guidance', 'light', 'cure_wounds', 'bless', 'healing_word'], customAbilities: [{ id: 'turn_undead', name: 'Изгнание нежити', level: 1, school: 'Особая', description: 'Действием изгнать нежить в 30 фт.' }, { id: 'disciple_of_life', name: 'Бонус к исцелению', level: 1, school: 'Особая', description: '+2 + уровень заклинания к исцеляемым хитам.' }] },
        { name: 'Элирас', race: 'elf', class: 'ranger', subclass: 'hunter', stats: { str: 10, dex: 16, con: 14, int: 10, wis: 14, cha: 8 }, hp: 12, inventory: [{ id: 'longbow', slot: 'mainhand', equipped: true }, { id: 'shortsword', slot: 'mainhand', equipped: false }, { id: 'leather_armor', slot: 'body', equipped: true }], spells: [], customAbilities: [{ id: 'favored_enemy', name: 'Избранный враг: звери', level: 1, school: 'Особая', description: 'Преимущество на проверки Выживания против зверей.' }, { id: 'natural_explorer', name: 'Исследователь природы: лес', level: 1, school: 'Особая', description: 'Бонусы в лесу.' }] },
        { name: 'Глинт', race: 'tiefling', class: 'bard', subclass: 'lore', stats: { str: 8, dex: 14, con: 12, int: 10, wis: 10, cha: 16 }, hp: 9, inventory: [{ id: 'rapier', slot: 'mainhand', equipped: true }, { id: 'dagger', slot: 'offhand', equipped: true }, { id: 'leather_armor', slot: 'body', equipped: true }], spells: ['vicious_mockery', 'prestidigitation', 'cure_wounds', 'charm_person', 'heroism'], customAbilities: [{ id: 'bardic_inspiration', name: 'Вдохновение (d6)', level: 1, school: 'Особая', description: 'Бонусным действием дать союзнику 1d6.' }, { id: 'jack_of_all_trades', name: 'Мастер на все руки', level: 2, school: 'Особая', description: 'Половина бонуса мастерства на все проверки без мастерства.' }] }
      ];

      const saved = getSavedCharacters();
      characters.forEach((c, i) => {
        const raceObj = races.find(r => r.id === c.race);
        const classObj = classes.find(cls => cls.id === c.class);
        const characterState = {
          id: 'quick_' + (Date.now() + i),
          name: c.name, race: c.race, class: c.class, subclass: c.subclass,
          level: 1, baseStats: { ...c.stats },
          inventory: [], spells: c.spells.slice(),
          customAbilities: c.customAbilities.slice(),
          levelHP: [{ rolled: true, value: c.hp }],
          totalMaxHP: c.hp,
          money: { copper: 0, silver: 0, gold: 0, diamond: 0 },
          notes: []
        };
        for (let l = 2; l <= 20; l++) characterState.levelHP.push({ rolled: false, value: 0 });
        c.inventory.forEach(invItem => {
          const itemData = equipmentList.find(eq => eq.id === invItem.id);
          if (itemData) characterState.inventory.push({ ...itemData, equipped: invItem.equipped, price: getItemPrice(itemData) });
        });
        saved.push(characterState);
      });

      saveCharacterList(saved);
      const mainChar = saved[saved.length - 1];
      GameState.setCurrentMainCharacter(mainChar);
      updateMainCharacterCard();
      document.getElementById('characters-list-screen').classList.add('active');
      document.getElementById('menu').classList.remove('active');
      renderCharacterList();
      showAlert('✅ ' + t('done'), t('quickStartDone'));
    }
  );
}

// ========== Wizard UI Setup ==========
function setupWizardUI() {
  const progressContainer = document.getElementById('wizard-progress-container');
  const navContainer = document.getElementById('wizard-nav-container');

  if (progressContainer) {
    progressContainer.innerHTML = renderWizardProgress();
  }
  if (navContainer) {
    navContainer.innerHTML = renderWizardNav();
  }

  initWizard();
  setupWizardEvents();
}

// ========== Initialize on DOMContentLoaded ==========
document.addEventListener('DOMContentLoaded', init);
