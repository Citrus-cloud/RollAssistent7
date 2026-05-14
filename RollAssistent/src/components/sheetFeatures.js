/**
 * Интерактивные фичи карточки персонажа
 */
import { GameState } from '../core/state.js';

export function renderSubclassSection() {
  const cls = GameState.class;
  const level = GameState.level;
  if (!cls || level < cls.subclassLevel) return '';

  const subclasses = cls.subclasses;
  const selectedSub = GameState.subclass;
  let options = '<option value="">-- Выберите архетип --</option>';
  subclasses.forEach(sub => {
    const selected = (selectedSub && selectedSub.id === sub.id) ? 'selected' : '';
    options += `<option value="${sub.id}" ${selected}>${sub.name}</option>`;
  });
  return `
    <section class="card sheet-subclass">
      <h2>Архетип (подкласс)</h2>
      <select id="sheet-subclass-select" class="sheet-select">${options}</select>
      <div id="sheet-subclass-info" class="info-box">${selectedSub ? selectedSub.description : ''}</div>
    </section>
  `;
}

export function renderAbilitySection(spellsData) {
  const spellIds = GameState.spells;
  let listHtml = '';
  if (spellIds && spellIds.length > 0) {
    const allAbilities = [
      ...spellIds.map(id => spellsData.find(s => s.id === id)).filter(Boolean),
      ...GameState.customAbilities
    ];
    listHtml = '<ul class="spell-list">';
    spellIds.forEach(id => {
      const ab = allAbilities.find(a => a.id === id);
      if (ab) {
        listHtml += `<li><strong>${ab.name}</strong> ${ab.level !== undefined ? `(ур. ${ab.level})` : ''} – ${ab.description}</li>`;
      }
    });
    listHtml += '</ul>';
  } else {
    listHtml = '<p class="sheet-empty">Нет выбранных способностей</p>';
  }
  return `
    <section class="card sheet-spells">
      <h2>Способности</h2>
      ${listHtml}
      <button class="menu-btn" id="btn-add-spells-sheet" style="margin-top:8px;">📜 Выбрать способности</button>
    </section>
  `;
}

export function setupSheetFeatures(spellsData) {
  // Subclass select
  const subclassSelect = document.getElementById('sheet-subclass-select');
  if (subclassSelect) {
    subclassSelect.onchange = function () {
      const id = this.value;
      const cls = GameState.class;
      const infoDiv = document.getElementById('sheet-subclass-info');
      if (!id || !cls) {
        GameState.setSubclass(null);
        if (infoDiv) infoDiv.innerHTML = '';
        return;
      }
      const subclass = cls.subclasses.find(s => s.id === id);
      if (subclass) {
        GameState.setSubclass(subclass);
        if (infoDiv) infoDiv.innerHTML = `<p><strong>${subclass.name}</strong></p><p>${subclass.description}</p>`;
        GameState.autoSave();
      } else {
        GameState.setSubclass(null);
        if (infoDiv) infoDiv.innerHTML = '';
      }
    };
  }

  // Open spells modal from sheet
  const btnAddSpells = document.getElementById('btn-add-spells-sheet');
  if (btnAddSpells) {
    btnAddSpells.onclick = () => {
      document.getElementById('spells-modal')?.classList.add('active');
      window._renderSpells?.();
    };
  }

  // Character name — direct sync without timers
  const nameInput = document.getElementById('char-name');
  if (nameInput) {
    nameInput.oninput = function () {
      const newName = this.value;
      const char = GameState.currentMainCharacter;
      if (char && char.id) {
        char.name = newName;
        // Sync with creation screen
        const creationInput = document.getElementById('creation-char-name');
        if (creationInput) creationInput.value = newName;
        GameState.autoSave();
        window._updateMainCharacterCard?.();
      }
    };
  }

  // Race/Class details buttons from sheet
  document.getElementById('btn-race-details-sheet')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.showRaceDetailsModal?.();
  });
  document.getElementById('btn-class-details-sheet')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.showClassDetailsModal?.();
  });
}
