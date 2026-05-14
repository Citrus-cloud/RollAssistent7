/**
 * NPC List — displays all saved NPCs with CRUD actions.
 * Renders a grid of NPC mini-cards. Tap to open quick-view card.
 * Provides navigation to create new NPC, view/edit, and delete.
 */
import { t } from '../utils/lang.js';
import { getSavedNpcs, saveNpcList } from './npcStorage.js';
import { renderNpcCreator } from './npcCreator.js';
import { renderNpcCard } from './npcCard.js';

/**
 * Initialize the NPC list screen.
 * This is the main entry point — manages all NPC sub-screens (list, card, creator).
 * @param {HTMLElement} container - The #npc-screen element
 * @param {Function} onBack - Callback to go back to main menu
 */
export function initNpcScreen(container, onBack) {
  showNpcList(container, onBack);
}

/**
 * Show the NPC list view
 */
function showNpcList(container, onBack) {
  const npcs = getSavedNpcs();

  let html = `
    <button class="back-btn npc-back-btn" id="npc-list-back">${t('back')}</button>
    <h1>${t('npcListTitle')}</h1>
    <div style="text-align:center; margin-bottom:15px;">
      <button class="menu-btn" id="npc-create-new-btn">${t('npcCreateBtn')}</button>
    </div>
  `;

  if (npcs.length === 0) {
    html += `<p style="text-align:center; padding:30px; color:#b0a08a;">${t('npcNoItems')}</p>`;
  } else {
    html += `<div class="npc-list-grid">`;
    npcs.forEach((npc, index) => {
      const profDisplay = getShortDisplay(npc.profession, npc.professionCustom, 'npcProf_');
      const weaponDisplay = getShortDisplay(npc.weapon, npc.weaponCustom, 'npcWpn_');
      html += `
        <div class="npc-list-card" data-npc-index="${index}">
          <div class="npc-list-card-name">${escapeHtml(npc.name)}</div>
          <div class="npc-list-card-info">
            ${t('npcLevel')} ${npc.level} | HP ${npc.hp}
            ${profDisplay ? ' | ' + profDisplay : ''}
          </div>
          ${weaponDisplay ? `<div class="npc-list-card-weapon">⚔️ ${weaponDisplay}</div>` : ''}
          <div class="npc-list-card-actions">
            <button class="npc-list-delete-btn" data-npc-id="${npc.id}" title="${t('npcDeleteBtn')}">🗑️</button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  }

  container.innerHTML = html;

  // Event: Back to menu
  document.getElementById('npc-list-back').addEventListener('click', () => {
    onBack();
  });

  // Event: Create new NPC
  document.getElementById('npc-create-new-btn').addEventListener('click', () => {
    showNpcCreatorView(container, onBack, null);
  });

  // Event delegation: click on NPC card to open quick-view
  container.addEventListener('click', handleListClick);

  function handleListClick(e) {
    // Delete button
    const deleteBtn = e.target.closest('.npc-list-delete-btn');
    if (deleteBtn) {
      e.stopPropagation();
      const npcId = deleteBtn.dataset.npcId;
      if (window.showAlert) {
        window.showAlert(t('confirm'), t('npcConfirmDelete'), () => {
          deleteNpc(npcId);
          showNpcList(container, onBack);
        });
      } else {
        if (confirm(t('npcConfirmDelete'))) {
          deleteNpc(npcId);
          showNpcList(container, onBack);
        }
      }
      return;
    }

    // Click on card to open quick view
    const card = e.target.closest('.npc-list-card');
    if (card) {
      const index = parseInt(card.dataset.npcIndex);
      const npcs = getSavedNpcs();
      if (index >= 0 && index < npcs.length) {
        container.removeEventListener('click', handleListClick);
        showNpcCardView(container, onBack, npcs[index]);
      }
    }
  }
}

/**
 * Show the NPC quick-view card
 */
function showNpcCardView(container, onBack, npc) {
  renderNpcCard(
    container,
    npc,
    // onBack: return to list
    () => showNpcList(container, onBack),
    // onFullEdit: open full editor
    (updatedNpc) => showNpcCreatorView(container, onBack, updatedNpc),
    // onDelete
    (npcId) => {
      deleteNpc(npcId);
      showNpcList(container, onBack);
    }
  );
}

/**
 * Show the NPC creator/editor view
 */
function showNpcCreatorView(container, onBack, existingNpc) {
  renderNpcCreator(
    container,
    existingNpc,
    // onSave
    (savedNpc) => {
      const npcs = getSavedNpcs();
      const idx = npcs.findIndex(n => n.id === savedNpc.id);
      if (idx >= 0) {
        npcs[idx] = savedNpc;
      } else {
        npcs.push(savedNpc);
      }
      saveNpcList(npcs);
      if (window.showAlert) {
        window.showAlert(t('success'), t('npcSaved', savedNpc.name));
      }
      showNpcList(container, onBack);
    },
    // onCancel
    () => showNpcList(container, onBack)
  );
}

/**
 * Delete an NPC by id
 */
function deleteNpc(npcId) {
  const npcs = getSavedNpcs();
  const filtered = npcs.filter(n => n.id !== npcId);
  saveNpcList(filtered);
}

/**
 * Get short display value for list cards
 */
function getShortDisplay(selectedId, customValue, i18nPrefix) {
  if (customValue && customValue.trim()) return customValue;
  if (!selectedId) return '';
  const key = i18nPrefix + selectedId;
  const translated = t(key);
  return translated !== key ? translated : selectedId;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
