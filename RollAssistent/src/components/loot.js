/**
 * Лут, сундуки, рюкзак
 */
import { GameState } from '../core/state.js';
import { getSlotName } from '../utils/helpers.js';
import { equipItem } from './equipment.js';
import { t } from '../utils/lang.js';

const grayChestWeights = {
  'обычный': 60, 'необычный': 25, 'редкий': 10,
  'очень редкий': 4, 'легендарный': 1, 'масштабирующийся': 0
};

const goldChestWeights = {
  'редкий': 50, 'очень редкий': 30,
  'легендарный': 15, 'масштабирующийся': 5
};

export function getRandomLoot(chestType, equipmentList) {
  const weights = chestType === 'gray' ? grayChestWeights : goldChestWeights;
  const itemsByRarity = {};
  for (const item of equipmentList) {
    if (!itemsByRarity[item.rarity]) itemsByRarity[item.rarity] = [];
    itemsByRarity[item.rarity].push(item);
  }
  const candidates = [];
  for (const [rarity, weight] of Object.entries(weights)) {
    if (weight > 0 && itemsByRarity[rarity]?.length) {
      candidates.push({ rarity, weight, items: itemsByRarity[rarity] });
    }
  }
  if (candidates.length === 0) return null;
  const totalWeight = candidates.reduce((sum, c) => sum + c.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const c of candidates) {
    if (roll < c.weight) return c.items[Math.floor(Math.random() * c.items.length)];
    roll -= c.weight;
  }
  return candidates[0].items[0];
}

export function openChest(chestType, equipmentList) {
  const item = getRandomLoot(chestType, equipmentList);
  if (!item) {
    window.showAlert?.(t('notification'), t('chestEmpty'));
    return;
  }
  GameState.addToInventory(item.id);
  const chestName = chestType === 'gray' ? t('chestGray') : t('chestGold');
  window.showAlert?.(chestName, t('chestGot', item.name, item.rarity));
  window.renderCharacterSheetFull?.();
  GameState.autoSave();
}

export function renderBackpack() {
  let html = '<section class="card sheet-backpack">';
  html += '<h2>' + t('sheetBackpack') + '</h2>';

  html += '<div class="money-container">';
  const coins = [
    { id: 'copper', label: t('coinCopper'), icon: '🟤' },
    { id: 'silver', label: t('coinSilver'), icon: '⚪' },
    { id: 'gold', label: t('coinGold'), icon: '🟡' },
    { id: 'diamond', label: t('coinDiamond'), icon: '💎' }
  ];
  const money = GameState.money;
  for (const coin of coins) {
    html += `<div class="money-item">
      <span class="coin-icon">${coin.icon}</span>
      <input type="number" id="money-${coin.id}" value="${money[coin.id]}" min="0" step="1" class="money-input">
      <span class="coin-label">${coin.label}</span>
    </div>`;
  }
  html += '</div>';

  html += '<div class="chest-buttons">';
  html += `<button class="chest-btn gray-chest" id="btn-gray-chest" title="${t('grayChest')}">${t('grayChest')}</button>`;
  html += `<button class="chest-btn gold-chest" id="btn-gold-chest" title="${t('goldChest')}">${t('goldChest')}</button>`;
  html += '</div>';

  html += '<div class="chest-buttons" style="margin-top:10px;">';
  html += `<button class="chest-btn custom-item-btn" id="btn-add-custom-item" style="border-color:#4fc3f7; color:#4fc3f7;">${t('addRecord')}</button>`;
  html += '</div>';

  html += '<div id="backpack-inventory" class="backpack-list">';
  const inventory = GameState.inventory;
  if (inventory.length === 0) {
    html += '<p style="text-align:center;color:#b0a08a;">' + t('sheetBackpackEmpty') + '</p>';
  } else {
    for (let i = 0; i < inventory.length; i++) {
      const item = inventory[i];
      const equippedClass = item.equipped ? 'item-equipped' : '';
      const slotName = getSlotName(item.slot);
      const price = item.price || '?';

      let attackInfo = '';
      if (item.type === 'weapon' && item.bonuses && item.bonuses.damage) {
        const damageDice = item.bonuses.damage;
        const damageType = item.bonuses.damageType || 'рубящий';
        const strMod = GameState.getStatModifier('str');
        const dexMod = GameState.getStatModifier('dex');
        let baseMod = strMod;
        if (item.bonuses.finesse) baseMod = Math.max(strMod, dexMod);
        else if (item.bonuses.range && item.bonuses.range > 0) baseMod = dexMod;
        const profBonus = Math.floor((GameState.level - 1) / 4) + 2;
        const weaponAttackBonus = item.bonuses.attack || 0;
        const totalAttack = baseMod + profBonus + weaponAttackBonus;
        const attackStr = totalAttack >= 0 ? '+' + totalAttack : String(totalAttack);
        const damageStr = baseMod >= 0 ? '+' + baseMod : String(baseMod);
        attackInfo = `<span class="bp-item-attack">🎯 Атака: ${attackStr} | 💥 ${damageDice}${damageStr} ${damageType}</span>`;
      }

      html += `<div class="backpack-item ${equippedClass}" data-index="${i}" data-rarity="${item.rarity}">
        <div class="bp-item-main">
          <span class="bp-item-name">${item.name}</span>
          <span class="bp-item-rarity ${item.rarity}">${item.rarity}</span>
          <span class="bp-item-slot">${slotName}</span>
          ${attackInfo}
          <span class="bp-item-price">${price}</span>
        </div>
        <div class="bp-item-details">${item.description || 'Описание отсутствует'}</div>
        <div class="bp-item-actions">
          <button class="bp-equip-btn" data-index="${i}">${item.equipped ? t('btnUnequip') : t('btnEquip')}</button>
          <button class="bp-sell-btn" data-index="${i}">💰</button>
          <button class="bp-remove-btn" data-index="${i}">✕</button>
        </div>
      </div>`;
    }
  }
  html += '</div></section>';
  return html;
}

export function setupBackpackFeatures(equipmentList) {
  // Money inputs — event delegation
  ['copper', 'silver', 'gold', 'diamond'].forEach(type => {
    const input = document.getElementById('money-' + type);
    if (input) {
      input.onchange = function () {
        GameState.updateMoney(type, parseInt(this.value) || 0);
      };
    }
  });

  document.getElementById('btn-gray-chest')?.addEventListener('click', () => openChest('gray', equipmentList));
  document.getElementById('btn-gold-chest')?.addEventListener('click', () => openChest('gold', equipmentList));

  document.getElementById('btn-add-custom-item')?.addEventListener('click', () => {
    document.getElementById('custom-item-modal')?.classList.add('active');
  });

  // Backpack event delegation
  const backpackDiv = document.getElementById('backpack-inventory');
  if (backpackDiv) {
    backpackDiv.onclick = (e) => {
      const btn = e.target.closest('.bp-equip-btn, .bp-sell-btn, .bp-remove-btn');
      if (btn) {
        e.stopPropagation();
        const index = parseInt(btn.dataset.index);
        if (btn.classList.contains('bp-equip-btn')) {
          equipItem(index);
          window.renderCharacterSheetFull?.();
        } else if (btn.classList.contains('bp-sell-btn')) {
          window.sellItem?.(index);
        } else if (btn.classList.contains('bp-remove-btn')) {
          window.removeFromInventory?.(index);
          window.renderCharacterSheetFull?.();
        }
        return;
      }
      // Toggle item details
      const itemDiv = e.target.closest('.backpack-item');
      if (itemDiv) itemDiv.classList.toggle('open');
    };
  }
}
