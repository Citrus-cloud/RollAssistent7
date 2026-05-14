/**
 * NPC Quick-View Card — limited editing of NPC/enemy.
 * Only level, HP, and base stats are editable.
 * Equipment is displayed but NOT editable (immutable).
 */
import { t } from '../utils/lang.js';
import { STAT_KEYS } from '../utils/constants.js';
import { getSavedNpcs, saveNpcList } from './npcStorage.js';

/**
 * Render the NPC quick-view card into a container.
 * @param {HTMLElement} container - DOM element to render into
 * @param {Object} npc - The NPC object to display
 * @param {Function} onBack - Callback for going back to the list
 * @param {Function} onFullEdit - Callback to open full edit mode
 * @param {Function} onDelete - Callback to delete the NPC
 */
export function renderNpcCard(container, npc, onBack, onFullEdit, onDelete) {
  const equipmentSlots = window._NPC_equipmentSlots || [];

  // Resolve display values for combo fields
  const personalityDisplay = getDisplayValue(npc.personality, npc.personalityCustom, 'npcPers_');
  const worldviewDisplay = getDisplayValue(npc.worldview, npc.worldviewCustom, 'npcWv_');
  const professionDisplay = getDisplayValue(npc.profession, npc.professionCustom, 'npcProf_');
  const weaponDisplay = getDisplayValue(npc.weapon, npc.weaponCustom, 'npcWpn_');
  const appearanceDisplay = getDisplayValue(npc.appearance, npc.appearanceCustom, 'npcApp_');

  let html = `
    <button class="back-btn npc-back-btn" id="npc-card-back">${t('npcBackToList')}</button>
    <h1>${t('npcQuickCardTitle')}</h1>

    <section class="card npc-card-header">
      <h2 class="npc-card-name">${escapeHtml(npc.name)}</h2>
      <div class="npc-card-meta">
        ${professionDisplay ? `<span class="npc-badge">${professionDisplay}</span>` : ''}
        ${worldviewDisplay ? `<span class="npc-badge">${worldviewDisplay}</span>` : ''}
        ${personalityDisplay ? `<span class="npc-badge">${personalityDisplay}</span>` : ''}
      </div>
      ${weaponDisplay ? `<p class="npc-card-detail"><strong>${t('npcWeapon')}:</strong> ${weaponDisplay}</p>` : ''}
      ${appearanceDisplay ? `<p class="npc-card-detail"><strong>${t('npcAppearance')}:</strong> ${appearanceDisplay}</p>` : ''}
    </section>

    <section class="card">
      <h2>${t('npcLevel')} & ${t('npcHP')}</h2>
      <p style="font-size:0.8em; color:#b0a08a; margin-bottom:8px;">${t('npcQuickEditHint')}</p>
      <div style="display:flex; gap:10px;">
        <div style="flex:1;">
          <label style="font-size:0.85em; color:#b0a08a;">${t('npcLevel')}</label>
          <input type="number" id="npc-card-level" min="1" max="30" value="${npc.level}" 
            style="width:100%; padding:8px; background:#1e1e1e; border:1px solid #3a3a3a; color:#f0e6d2; border-radius:6px;">
        </div>
        <div style="flex:1;">
          <label style="font-size:0.85em; color:#b0a08a;">${t('npcHP')}</label>
          <input type="number" id="npc-card-hp" min="1" max="9999" value="${npc.hp}" 
            style="width:100%; padding:8px; background:#1e1e1e; border:1px solid #3a3a3a; color:#f0e6d2; border-radius:6px;">
        </div>
      </div>
    </section>

    <section class="card">
      <h2>${t('npcStats')}</h2>
      <div class="npc-stats-grid">
        ${STAT_KEYS.map(key => `
          <div class="npc-stat-item">
            <label>${t('stat' + key.charAt(0).toUpperCase() + key.slice(1))}</label>
            <input type="number" id="npc-card-stat-${key}" min="1" max="30" value="${npc.baseStats[key] || 10}" class="npc-stat-input">
            <span class="npc-stat-mod">${formatMod(Math.floor(((npc.baseStats[key] || 10) - 10) / 2))}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="card">
      <h2>${t('npcEquipmentFixed')}</h2>
      <div class="npc-equipment-display">
        ${renderEquipmentDisplay(npc.equipment, equipmentSlots)}
      </div>
    </section>

    <div class="npc-card-actions">
      <button class="menu-btn" id="npc-card-save">${t('npcSave')}</button>
      <button class="menu-btn" id="npc-card-full-edit" style="border-color:#4fc3f7; color:#4fc3f7;">${t('npcFullEdit')}</button>
      <button class="menu-btn" id="npc-card-delete" style="border-color:#e74c3c; color:#e74c3c;">${t('npcDeleteBtn')}</button>
    </div>
  `;

  container.innerHTML = html;

  // Update modifier display on stat change
  STAT_KEYS.forEach(key => {
    const input = document.getElementById(`npc-card-stat-${key}`);
    if (input) {
      input.addEventListener('input', () => {
        const val = parseInt(input.value) || 10;
        const mod = Math.floor((val - 10) / 2);
        const modSpan = input.parentElement.querySelector('.npc-stat-mod');
        if (modSpan) modSpan.textContent = formatMod(mod);
      });
    }
  });

  // Events
  document.getElementById('npc-card-back').addEventListener('click', () => {
    onBack();
  });

  document.getElementById('npc-card-save').addEventListener('click', () => {
    saveQuickEdits(npc);
  });

  document.getElementById('npc-card-full-edit').addEventListener('click', () => {
    // Save quick edits first, then open full edit
    const updated = applyQuickEdits(npc);
    onFullEdit(updated);
  });

  document.getElementById('npc-card-delete').addEventListener('click', () => {
    if (window.showAlert) {
      window.showAlert(t('confirm'), t('npcConfirmDelete'), () => {
        onDelete(npc.id);
      });
    } else {
      if (confirm(t('npcConfirmDelete'))) {
        onDelete(npc.id);
      }
    }
  });
}

/**
 * Apply quick edits (level, HP, stats) to an NPC and save
 */
function saveQuickEdits(npc) {
  const updated = applyQuickEdits(npc);
  const npcs = getSavedNpcs();
  const idx = npcs.findIndex(n => n.id === updated.id);
  if (idx >= 0) {
    npcs[idx] = updated;
    saveNpcList(npcs);
    if (window.showAlert) {
      window.showAlert(t('success'), t('npcSaved', updated.name));
    }
  }
}

/**
 * Collect quick-edit values and return updated NPC
 */
function applyQuickEdits(npc) {
  const level = parseInt(document.getElementById('npc-card-level').value) || npc.level;
  const hp = parseInt(document.getElementById('npc-card-hp').value) || npc.hp;
  const baseStats = {};
  for (const key of STAT_KEYS) {
    const input = document.getElementById(`npc-card-stat-${key}`);
    baseStats[key] = input ? (parseInt(input.value) || 10) : (npc.baseStats[key] || 10);
  }
  return { ...npc, level, hp, baseStats };
}

/**
 * Render the fixed equipment display (read-only)
 */
function renderEquipmentDisplay(equipment, slots) {
  if (!equipment || Object.keys(equipment).length === 0) {
    return `<p style="color:#666; font-style:italic;">—</p>`;
  }
  let html = '';
  slots.forEach(slot => {
    const item = equipment[slot.id];
    if (item) {
      html += `<div class="npc-equip-display-item">
        <span class="npc-equip-slot-name">${slot.name}:</span>
        <span class="npc-equip-item-name">${escapeHtml(item)}</span>
      </div>`;
    }
  });
  if (!html) {
    return `<p style="color:#666; font-style:italic;">—</p>`;
  }
  return html;
}

/**
 * Get the human-readable display value for a combo field
 */
function getDisplayValue(selectedId, customValue, i18nPrefix) {
  if (customValue && customValue.trim()) return customValue;
  if (!selectedId) return '';
  const key = i18nPrefix + selectedId;
  const translated = t(key);
  return translated !== key ? translated : selectedId;
}

function formatMod(mod) {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
