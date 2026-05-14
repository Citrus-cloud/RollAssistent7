/**
 * Карточка персонажа — рендеринг и вспомогательные функции
 */
import { GameState } from '../core/state.js';
import { STAT_KEYS, STAT_NAMES } from '../utils/constants.js';
import { getSlotName, getRarityColor, getBonusName } from '../utils/helpers.js';
import { renderBackpack, setupBackpackFeatures } from './loot.js';
import { setupSheetFeatures, renderSubclassSection, renderAbilitySection } from './sheetFeatures.js';
import { renderSkillsSection, setupSkillsEvents } from './skills.js';
import { exportCharacterPDF } from '../utils/pdfExport.js';
import { t } from '../utils/lang.js';

let _equipmentList = [];

export function injectEquipmentList(list) {
  _equipmentList = list;
}

export function getCurrentHP() {
  return GameState.totalMaxHP + (GameState.tempModifiers.hp || 0);
}

export function getInitiative() {
  return GameState.getStatModifier('dex') + (GameState.tempModifiers.initiative || 0);
}

export function getSpeed() {
  return 30 + (GameState.tempModifiers.speed || 0);
}

export function getAC() {
  const dexMod = GameState.getStatModifier('dex');
  let equipAC = 0;
  GameState.inventory.forEach(item => {
    if (item.equipped && item.bonuses && item.bonuses.ac) {
      equipAC += item.bonuses.ac;
    }
  });
  return 10 + dexMod + equipAC + (GameState.tempModifiers.ac || 0);
}

export function getProfBonus() {
  return Math.floor((GameState.level - 1) / 4) + 2;
}

export function getAllAbilities(spellsData) {
  const standard = GameState.spells
    .map(id => spellsData.find(s => s.id === id))
    .filter(Boolean);
  return [...standard, ...GameState.customAbilities];
}

export function renderCharacterSheetFull(spellsData) {
  updateMainCharacterFromSheet();
  const container = document.getElementById('sheet-content');
  if (!container) return;

  if (GameState.levelHP.length === 0) {
    GameState.initHP();
  }

  let html = '';

  // PDF Export button
  html += `<div class="pdf-export-container">
    <button class="menu-btn pdf-export-btn" id="btn-export-pdf">📄 ${t('pdfExport')}</button>
  </div>`;

  // Identity
  html += `<section class="card sheet-identity">
    <h2>${t('sheetIdentity')}</h2>
    <div class="sheet-row">
      <div class="sheet-field">
        <label>${t('nameLabel')}</label>
        <input type="text" id="char-name" value="${GameState.currentMainCharacter?.name || ''}" placeholder="${t('namePlaceholder')}">
      </div>
      <div class="sheet-field">
        <label>${t('sheetRace')}</label>
        <div class="sheet-value">${GameState.race ? GameState.race.name : '—'}
          ${GameState.race ? '<button class="info-btn-small" id="btn-race-details-sheet">?</button>' : ''}
        </div>
      </div>
      <div class="sheet-field">
        <label>${t('sheetClass')}</label>
        <div class="sheet-value">${GameState.class ? GameState.class.name : '—'}
          ${GameState.class ? '<button class="info-btn-small" id="btn-class-details-sheet">?</button>' : ''}
        </div>
      </div>
    </div>
  </section>`;

  html += renderSubclassSection();

  // Level & HP
  const hp = getCurrentHP();
  html += `<section class="card sheet-level-hp">
    <h2>${t('sheetLevelHP')}</h2>
    <div class="level-controls">
      <button id="btn-level-down" class="menu-btn">−</button>
      <span class="current-level">${t('levelWord')} ${GameState.level}</span>
      <button id="btn-level-up" class="menu-btn">+</button>
    </div>
    <div class="hp-info">
      <span>${t('sheetMaxHP')}: <strong id="max-hp-display">${hp}</strong></span>
    </div>
    <div class="exp-bar-container">
      <div class="exp-label">${t('sheetExp')}: 0 / 1000</div>
      <div class="exp-bar"><div class="exp-fill" style="width: 0%;"></div></div>
    </div>
  </section>`;

  // Abilities
  html += `<section class="card sheet-abilities">
    <h2>${t('sheetAbilities')}</h2>
    <div class="abilities-grid">`;
  STAT_KEYS.forEach(key => {
    const base = GameState.baseStats[key];
    const racial = GameState.getRacialBonus(key);
    const equipData = GameState.getEquipmentBonus(key);
    const temp = GameState.tempModifiers[key] || 0;
    const total = GameState.getTotalStat(key);
    const mod = GameState.getStatModifier(key);
    const modStr = mod >= 0 ? '+' + mod : String(mod);

    // Build bonus display
    let equipDisplay = '';
    if (equipData.sets) {
      equipDisplay = `<span class="detail-item" title="${equipData.itemName}">⚡${equipData.bonus}</span>`;
      if (equipData.additive) equipDisplay += `<span class="detail-item">+${equipData.additive}</span>`;
    } else if (equipData.additive) {
      equipDisplay = `<span class="detail-item">${t('item')}: +${equipData.additive}</span>`;
    }

    html += `<div class="ability-block">
      <div class="ability-name">${STAT_NAMES[key]}</div>
      <div class="ability-score">
        <span class="score-value">${total}</span>
        <span class="score-mod">(${modStr})</span>
      </div>
      <div class="ability-details">
        <span class="detail-base">${t('base')}: ${base}</span>
        ${racial ? `<span class="detail-racial">${t('racial')}: +${racial}</span>` : ''}
        ${equipDisplay}
        ${temp ? `<span style="color:#ff9800;">${t('temp')}: ${temp > 0 ? '+' : ''}${temp}</span>` : ''}
        <div class="ability-temp">
          <input type="number" value="${temp}" data-stat="${key}" class="temp-mod-input" placeholder="${t('temp')}">
        </div>
      </div>
    </div>`;
  });
  html += `</div></section>`;

  // Combat
  const ac = getAC(), init = getInitiative(), spd = getSpeed(), prof = getProfBonus();
  html += `<section class="card sheet-combat">
    <h2>${t('sheetCombat')}</h2>
    <div class="combat-grid">
      <div class="combat-item"><div class="combat-label">${t('sheetHP')}</div><div class="combat-value">${hp}</div><input type="number" value="${GameState.tempModifiers.hp || 0}" data-combat="hp" class="temp-mod-input combat-temp"></div>
      <div class="combat-item"><div class="combat-label">${t('sheetAC')}</div><div class="combat-value">${ac}</div><input type="number" value="${GameState.tempModifiers.ac || 0}" data-combat="ac" class="temp-mod-input combat-temp"></div>
      <div class="combat-item"><div class="combat-label">${t('sheetInitiative')}</div><div class="combat-value">${init >= 0 ? '+' + init : init}</div><input type="number" value="${GameState.tempModifiers.initiative || 0}" data-combat="initiative" class="temp-mod-input combat-temp"></div>
      <div class="combat-item"><div class="combat-label">${t('sheetSpeed')}</div><div class="combat-value">${spd} ${t('ft')}</div><input type="number" value="${GameState.tempModifiers.speed || 0}" data-combat="speed" class="temp-mod-input combat-temp"></div>
      <div class="combat-item"><div class="combat-label">${t('sheetProfBonus')}</div><div class="combat-value">+${prof}</div></div>
    </div>
  </section>`;

  // Saves
  html += `<section class="card sheet-saves">
    <h2>${t('sheetSaves')}</h2>
    <div class="saves-grid">`;
  STAT_KEYS.forEach(key => {
    const mod = GameState.getStatModifier(key);
    const modStr = mod >= 0 ? '+' + mod : String(mod);
    html += `<div class="save-item"><span class="save-name">${STAT_NAMES[key]}</span><span class="save-value">${modStr}</span></div>`;
  });
  html += `</div></section>`;

  // Skills section
  html += renderSkillsSection();

  // Equipment visual
  const equippedItems = GameState.inventory.filter(i => i.equipped);
  html += `<section class="card sheet-equipment">
    <h2>${t('sheetEquipment')}</h2>
    <div class="equipment-figure">
      <div class="equipment-row">
        <div class="eq-slot" data-slot="head" id="slot-head"><span class="slot-icon">🎩</span><span class="slot-label">${t('slotHead')}</span><span class="slot-item-name" id="slot-name-head"></span></div>
      </div>
      <div class="equipment-row">
        <div class="eq-slot" data-slot="mainhand" id="slot-mainhand"><span class="slot-icon">⚔️</span><span class="slot-label">${t('slotMainhand')}</span><span class="slot-item-name" id="slot-name-mainhand"></span></div>
        <div class="eq-slot" data-slot="body" id="slot-body"><span class="slot-icon">🛡️</span><span class="slot-label">${t('slotBody')}</span><span class="slot-item-name" id="slot-name-body"></span></div>
        <div class="eq-slot" data-slot="offhand" id="slot-offhand"><span class="slot-icon">🔰</span><span class="slot-label">${t('slotOffhand')}</span><span class="slot-item-name" id="slot-name-offhand"></span></div>
      </div>
      <div class="equipment-row">
        <div class="eq-slot" data-slot="feet" id="slot-feet"><span class="slot-icon">👢</span><span class="slot-label">${t('slotFeet')}</span><span class="slot-item-name" id="slot-name-feet"></span></div>
      </div>
      <div class="equipment-row accessories-row">
        <div class="eq-slot" data-slot="ring1" id="slot-ring1"><span class="slot-icon">💍</span><span class="slot-label">${t('slotRing')} 1</span><span class="slot-item-name" id="slot-name-ring1"></span></div>
        <div class="eq-slot" data-slot="ring2" id="slot-ring2"><span class="slot-icon">💍</span><span class="slot-label">${t('slotRing')} 2</span><span class="slot-item-name" id="slot-name-ring2"></span></div>
        <div class="eq-slot" data-slot="neck" id="slot-neck"><span class="slot-icon">📿</span><span class="slot-label">${t('slotNeck')}</span><span class="slot-item-name" id="slot-name-neck"></span></div>
      </div>
    </div>
    <div class="equipment-list" id="equipment-list-old">` +
    (equippedItems.length > 0
      ? equippedItems.map(item => `<div class="equipment-slot"><span class="slot-tag">${getSlotName(item.slot)}</span> ${item.name}</div>`).join('')
      : '<p class="sheet-empty">' + t('sheetNoEquipped') + '</p>') +
    `</div>
  </section>`;

  html += renderAbilitySection(spellsData);
  html += renderEquipmentBonusesSection();
  html += renderBackpack();

  container.innerHTML = html;

  updateEquipmentSlots();
  setupSheetFeatures(spellsData);
  setupBackpackFeatures(_equipmentList);
  setupSkillsEvents(() => renderCharacterSheetFull(spellsData));
  setupSheetEventDelegation(spellsData);
}

function renderEquipmentBonusesSection() {
  const equipped = GameState.inventory.filter(item => item.equipped);
  if (equipped.length === 0) return '';

  let html = '<section class="card sheet-equipment-bonuses"><h2>' + t('sheetEquipBonuses') + '</h2><div class="equipment-bonuses-list">';
  equipped.forEach(item => {
    if (!item.bonuses || Object.keys(item.bonuses).length === 0) return;
    html += `<div class="equipment-bonus-item"><div class="bonus-item-name" style="color:${getRarityColor(item.rarity)}">${item.name}</div><div class="bonus-item-effects">`;
    for (const key in item.bonuses) {
      if (item.bonuses[key] === undefined || item.bonuses[key] === false) continue;
      const bonusValue = item.bonuses[key];
      let bonusStr = '';
      const bonusName = getBonusName(key);
      if (['damageType', 'critRange', 'special', 'finesse', 'reach'].includes(key)) {
        if (key === 'damageType') bonusStr = 'Тип урона: ' + bonusValue;
        else if (key === 'critRange') bonusStr = 'Крит: ' + bonusValue;
        else if (key === 'finesse') bonusStr = 'Фехтовальное';
        else if (key === 'reach') bonusStr = 'Досягаемость';
        else if (key === 'special') bonusStr = 'Особое: ' + bonusValue;
      } else if (typeof bonusValue === 'boolean' && bonusValue) {
        bonusStr = bonusName;
      } else if (typeof bonusValue === 'number') {
        if (['ac', 'attack', 'savingThrows', 'str', 'dex', 'con', 'int', 'wis', 'cha', 'speed'].includes(key)) {
          bonusStr = bonusName + ': +' + bonusValue;
        } else if (key === 'damage') bonusStr = '🎯 Урон: ' + bonusValue;
        else if (key === 'range') bonusStr = 'Дистанция: ' + bonusValue + ' фт';
        else if (key === 'fly') bonusStr = 'Полёт: ' + bonusValue + ' фт';
        else if (key === 'swim') bonusStr = 'Плавание: ' + bonusValue + ' фт';
        else if (key === 'jumpBonus') bonusStr = 'Прыжки: ×' + bonusValue;
        else if (key === 'healBonus') bonusStr = 'Лечение: ×' + bonusValue;
        else bonusStr = bonusName + ': +' + bonusValue;
      } else if (key === 'stealth' && bonusValue === 'advantage') {
        bonusStr = 'Скрытность: преимущество';
      } else if (typeof bonusValue === 'string') {
        bonusStr = bonusName + ': ' + bonusValue;
      }
      if (bonusStr) html += `<span class="bonus-effect-tag">${bonusStr}</span>`;
    }
    html += '</div></div>';
  });
  html += '</div></section>';
  return html;
}

function updateEquipmentSlots() {
  const slots = { head: null, body: null, mainhand: null, offhand: null, feet: null, ring1: null, ring2: null, neck: null };
  GameState.inventory.forEach(item => {
    if (!item.equipped) return;
    const slot = item.slot;
    if (slot === 'head') slots.head = item;
    else if (slot === 'body') slots.body = item;
    else if (slot === 'mainhand') slots.mainhand = item;
    else if (slot === 'offhand') slots.offhand = item;
    else if (slot === 'feet') slots.feet = item;
    else if (slot === 'ring') { if (!slots.ring1) slots.ring1 = item; else if (!slots.ring2) slots.ring2 = item; }
    else if (slot === 'neck') slots.neck = item;
  });
  for (const [slotId, item] of Object.entries(slots)) {
    const nameSpan = document.getElementById('slot-name-' + slotId);
    if (nameSpan) nameSpan.textContent = item ? item.name : '';
    const slotDiv = document.getElementById('slot-' + slotId);
    if (slotDiv) { if (item) slotDiv.classList.add('filled'); else slotDiv.classList.remove('filled'); }
  }
}

function updateMainCharacterFromSheet() {
  if (!GameState.currentMainCharacter) return;
  const nameInput = document.getElementById('char-name');
  if (nameInput && GameState.currentMainCharacter) {
    GameState.currentMainCharacter.name = nameInput.value;
    GameState.autoSave();
  }
}

// Event delegation for the sheet container
function setupSheetEventDelegation(spellsData) {
  const sheetContent = document.getElementById('sheet-content');
  if (!sheetContent) return;

  sheetContent.onchange = (e) => {
    if (e.target.classList.contains('temp-mod-input')) {
      const key = e.target.dataset.stat || e.target.dataset.combat;
      const value = parseInt(e.target.value) || 0;
      GameState.setTempModifier(key, value);
      renderCharacterSheetFull(spellsData);
    }
  };

  sheetContent.onclick = (e) => {
    if (e.target.id === 'btn-export-pdf') {
      exportCharacterPDF().catch(err => {
        console.error('PDF export error:', err);
        window.showAlert?.('Error', err.message || 'PDF export failed');
      });
      return;
    }
    if (e.target.id === 'btn-level-up') {
      if (GameState.level < 20) {
        const newLevel = GameState.level + 1;
        const hpEntry = GameState.levelHP[newLevel - 1];
        if (!hpEntry || !hpEntry.rolled) {
          const gained = GameState.rollHPForLevel(newLevel);
          GameState.addTotalHP(gained);
        } else {
          GameState.addTotalHP(hpEntry.value);
        }
        GameState.setLevel(newLevel);
        GameState.updateASI();
        window._updateAllStatUI?.();
        renderCharacterSheetFull(spellsData);
      }
    } else if (e.target.id === 'btn-level-down') {
      if (GameState.level > 1) {
        const hpEntry = GameState.levelHP[GameState.level - 1];
        GameState.addTotalHP(-(hpEntry?.value || 0));
        GameState.setLevel(GameState.level - 1);
        GameState.updateASI();
        window._updateAllStatUI?.();
        renderCharacterSheetFull(spellsData);
      }
    }
    // Equipment slot click — unequip
    const eqSlot = e.target.closest('.eq-slot');
    if (eqSlot) {
      unequipSlot(eqSlot.dataset.slot, spellsData);
    }
  };
}

function unequipSlot(slotType, spellsData) {
  const slotMap = { head: 'head', body: 'body', mainhand: 'mainhand', offhand: 'offhand', feet: 'feet', ring1: 'ring', ring2: 'ring', neck: 'neck' };
  const targetSlot = slotMap[slotType];
  if (!targetSlot) return;
  const inv = GameState.inventory;
  let foundIndex = -1;
  if (targetSlot === 'ring') {
    for (let i = inv.length - 1; i >= 0; i--) {
      if (inv[i].equipped && inv[i].slot === 'ring') { foundIndex = i; break; }
    }
  } else {
    foundIndex = inv.findIndex(item => item.equipped && item.slot === targetSlot);
  }
  if (foundIndex >= 0) {
    GameState.toggleEquip(foundIndex);
    renderCharacterSheetFull(spellsData);
    GameState.autoSave();
  }
}

export function autoSaveCharacter() {
  GameState.autoSave();
}
