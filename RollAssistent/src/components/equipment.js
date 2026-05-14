/**
 * Компонент инвентаря и экипировки
 */
import { GameState } from '../core/state.js';
import { getTypeName, getSlotName, getBonusName, formatBonus } from '../utils/helpers.js';
import { t } from '../utils/lang.js';

export function equipItem(index) {
  const inv = GameState.inventory;
  if (index < 0 || index >= inv.length) return;
  const item = inv[index];

  if (item.equipped) {
    GameState.toggleEquip(index);
    updateInventoryUI();
    window.renderCharacterSheetFull?.();
    GameState.autoSave();
    return;
  }

  const slot = item.slot;
  if (!slot) {
    GameState.toggleEquip(index);
    updateInventoryUI();
    window.renderCharacterSheetFull?.();
    GameState.autoSave();
    return;
  }

  const equippedItems = inv.filter(i => i.equipped && i.slot === slot);
  if (slot === 'ring') {
    if (equippedItems.length >= 2) {
      window.showAlert?.(t('slotOccupied'), t('slotRingFull'));
      return;
    }
  } else {
    if (equippedItems.length >= 1) {
      window.showAlert?.(t('slotOccupied'), t('slotItemFull'));
      return;
    }
  }

  GameState.toggleEquip(index);
  updateInventoryUI();
  window.renderCharacterSheetFull?.();
  GameState.autoSave();
}

export function removeFromInventory(index) {
  const item = GameState.inventory[index];
  if (!item) return;
  const itemName = item.name;
  const itemRarity = item.rarity;

  const doRemove = () => {
    const inv = GameState.inventory;
    const idx = inv.findIndex(invItem => invItem.id === item.id && invItem.name === itemName);
    if (idx >= 0) {
      GameState.removeFromInventory(idx);
      updateInventoryUI();
      window.renderCharacterSheetFull?.();
      GameState.autoSave();
      window.showAlert?.(t('itemRemoved'), t('itemRemovedMsg', itemName));
    }
  };

  if (['очень редкий', 'легендарный', 'масштабирующийся'].includes(itemRarity)) {
    const messages = {
      'очень редкий': `⚡ «${itemName}» — ${t('rarityVeryRare').toLowerCase()}...`,
      'легендарный': `🔮 «${itemName}» — ${t('rarityLegendary').toLowerCase()}...`,
      'масштабирующийся': `💀 «${itemName}» — ${t('rarityScaling').toLowerCase()}...`
    };
    window.showAlert?.('⚠️ ' + t('confirm'), messages[itemRarity], doRemove);
  } else {
    doRemove();
  }
}

export function sellItem(index) {
  const inventory = GameState.inventory;
  if (index < 0 || index >= inventory.length) return;
  const item = inventory[index];
  const itemName = item.name;
  const itemPrice = item.price;
  const itemRarity = item.rarity;

  const doSell = () => {
    const priceStr = itemPrice || '0 см';
    const match = priceStr.match(/(\d+)\s*(см|зм)/);
    if (match) {
      const amount = parseInt(match[1]);
      const currency = match[2];
      const money = GameState.money;
      if (currency === 'см') GameState.updateMoney('silver', money.silver + amount);
      else if (currency === 'зм') GameState.updateMoney('gold', money.gold + amount);
    }
    const idx = GameState.inventory.findIndex(invItem => invItem.id === item.id && invItem.name === itemName);
    if (idx >= 0) {
      GameState.removeFromInventory(idx);
      updateInventoryUI();
      window.renderCharacterSheetFull?.();
      GameState.autoSave();
      window.showAlert?.(t('itemSold'), t('itemSoldMsg', itemName, itemPrice));
    }
  };

  if (['очень редкий', 'легендарный', 'масштабирующийся'].includes(itemRarity)) {
    const messages = {
      'очень редкий': `⚡ «${itemName}» — ${t('rarityVeryRare').toLowerCase()}...`,
      'легендарный': `🔮 «${itemName}» — ${t('rarityLegendary').toLowerCase()}...`,
      'масштабирующийся': `💀 «${itemName}» — ${t('rarityScaling').toLowerCase()}...`
    };
    window.showAlert?.('⚠️ ' + t('confirm'), messages[itemRarity], doSell);
  } else {
    doSell();
  }
}

export function updateInventoryUI() {
  const container = document.getElementById('inventory-container');
  if (!container) return;

  const inventory = GameState.inventory;
  if (inventory.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:20px;color:#b0a08a;">' + t('inventoryEmpty') + '</p>';
    return;
  }

  let html = '';
  inventory.forEach((item, i) => {
    const equippedClass = item.equipped ? 'item-equipped' : '';
    const equipText = item.equipped ? '✅ ' + t('btnUnequip') : '❌ ' + t('btnEquip');

    html += `<div class="inventory-item ${equippedClass}" data-rarity="${item.rarity}">
      <div class="item-header">
        <span class="item-name">${item.name}</span>
        <span class="item-rarity ${item.rarity}">${item.rarity}</span>
      </div>
      <div class="item-info">
        <span class="item-type">${getTypeName(item.type)}</span>
        <span class="item-slot">Слот: ${getSlotName(item.slot)}</span>
      </div>
      <div class="item-description">${item.description}</div>
      <div class="item-bonuses">`;

    Object.keys(item.bonuses || {}).forEach(key => {
      html += `<span class="bonus-tag">${getBonusName(key)}: ${formatBonus(key, item.bonuses[key])}</span>`;
    });

    html += `</div>
      <div class="item-actions">
        <button class="menu-btn equip-btn" data-index="${i}">${equipText}</button>
        <button class="menu-btn sell-btn" data-index="${i}">💰 Продать</button>
        <button class="menu-btn remove-btn" data-index="${i}">🗑️ Удалить</button>
      </div>
    </div>`;
  });

  container.innerHTML = html;

  // Event delegation
  container.onclick = (e) => {
    const btn = e.target.closest('.equip-btn, .sell-btn, .remove-btn');
    if (!btn) return;
    const index = parseInt(btn.dataset.index);
    if (btn.classList.contains('equip-btn')) equipItem(index);
    else if (btn.classList.contains('sell-btn')) sellItem(index);
    else if (btn.classList.contains('remove-btn')) removeFromInventory(index);
  };

  // Update stats if visible
  window._updateAllStatUI?.();
}
