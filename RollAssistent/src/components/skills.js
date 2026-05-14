/**
 * Skills System — D&D 5e skills table with proficiency management and temp bonuses
 */
import { GameState } from '../core/state.js';
import { t } from '../utils/lang.js';

// All 18 D&D 5e skills with their associated ability
export const SKILLS_DATA = [
  { id: 'acrobatics',       stat: 'dex' },
  { id: 'athletics',        stat: 'str' },
  { id: 'perception',       stat: 'wis' },
  { id: 'survival',         stat: 'wis' },
  { id: 'intimidation',     stat: 'cha' },
  { id: 'history',          stat: 'int' },
  { id: 'sleightOfHand',    stat: 'dex' },
  { id: 'arcana',           stat: 'int' },
  { id: 'medicine',         stat: 'wis' },
  { id: 'deception',        stat: 'cha' },
  { id: 'animalHandling',   stat: 'wis' },
  { id: 'insight',          stat: 'wis' },
  { id: 'religion',         stat: 'int' },
  { id: 'stealth',          stat: 'dex' },
  { id: 'persuasion',       stat: 'cha' },
  { id: 'investigation',    stat: 'int' },
  { id: 'performance',      stat: 'cha' },
  { id: 'nature',           stat: 'int' }
];

/**
 * Calculate the total skill bonus for a given skill
 */
export function getSkillBonus(skillId) {
  const skill = SKILLS_DATA.find(s => s.id === skillId);
  if (!skill) return 0;

  const statMod = GameState.getStatModifier(skill.stat);
  const profBonus = GameState.skillProficiencies.includes(skillId)
    ? Math.floor((GameState.level - 1) / 4) + 2
    : 0;
  const tempBonus = GameState.tempSkillBonuses[skillId] || 0;

  return statMod + profBonus + tempBonus;
}

/**
 * Render the full skills section HTML
 */
export function renderSkillsSection() {
  const proficiencies = GameState.skillProficiencies;
  const tempBonuses = GameState.tempSkillBonuses;
  const profBonusValue = Math.floor((GameState.level - 1) / 4) + 2;

  let html = `<section class="card sheet-skills">
    <h2>${t('sheetSkills')}</h2>
    <button class="menu-btn skills-proficiency-btn" id="btn-manage-proficiency">
      ${t('skillsManageProficiency')}
    </button>
    <div class="skills-table">`;

  SKILLS_DATA.forEach(skill => {
    const statMod = GameState.getStatModifier(skill.stat);
    const isProficient = proficiencies.includes(skill.id);
    const profBonus = isProficient ? profBonusValue : 0;
    const tempBonus = tempBonuses[skill.id] || 0;
    const totalBonus = statMod + profBonus + tempBonus;
    const totalStr = totalBonus >= 0 ? '+' + totalBonus : String(totalBonus);
    const statLabel = t('statAbbr_' + skill.stat);

    html += `<div class="skill-row ${isProficient ? 'skill-proficient' : ''}">
      <span class="skill-prof-dot">${isProficient ? '●' : '○'}</span>
      <span class="skill-name">${t('skill_' + skill.id)}</span>
      <span class="skill-stat-label">(${statLabel})</span>
      <span class="skill-bonus">${totalStr}</span>
      ${tempBonus ? `<span class="skill-temp-badge">+${tempBonus}</span>` : ''}
      <button class="skill-temp-btn" data-skill-id="${skill.id}" title="${t('skillAddTemp')}">➕</button>
    </div>`;
  });

  html += `</div></section>`;
  return html;
}

/**
 * Render the proficiency management modal content
 */
function renderProficiencyModal() {
  const proficiencies = GameState.skillProficiencies;

  let html = `<div class="proficiency-grid">`;
  SKILLS_DATA.forEach(skill => {
    const checked = proficiencies.includes(skill.id) ? 'checked' : '';
    const statLabel = t('statAbbr_' + skill.stat);
    html += `<label class="proficiency-checkbox-label">
      <input type="checkbox" class="proficiency-checkbox" data-skill-id="${skill.id}" ${checked}>
      <span class="proficiency-checkbox-custom"></span>
      <span>${t('skill_' + skill.id)} (${statLabel})</span>
    </label>`;
  });
  html += `</div>`;
  return html;
}

/**
 * Setup event listeners for the skills section
 * @param {Function} rerender - function to re-render the character sheet
 */
export function setupSkillsEvents(rerender) {
  const sheetContent = document.getElementById('sheet-content');
  if (!sheetContent) return;

  // Manage proficiency button
  const profBtn = document.getElementById('btn-manage-proficiency');
  if (profBtn) {
    profBtn.addEventListener('click', () => {
      openProficiencyModal(rerender);
    });
  }

  // Temp bonus buttons (delegated)
  sheetContent.addEventListener('click', (e) => {
    const tempBtn = e.target.closest('.skill-temp-btn');
    if (!tempBtn) return;
    const skillId = tempBtn.dataset.skillId;
    openTempBonusPrompt(skillId, rerender);
  });
}

/**
 * Open proficiency management modal
 */
function openProficiencyModal(rerender) {
  // Create or reuse modal
  let modal = document.getElementById('proficiency-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'proficiency-modal';
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-content">
      <div class="modal-header">
        <h2>${t('skillsProficiencyTitle')}</h2>
        <button class="close-btn" id="btn-close-proficiency">✕</button>
      </div>
      <div id="proficiency-modal-body"></div>
      <button class="menu-btn" id="btn-save-proficiency" style="margin-top:12px;">${t('skillsSaveProficiency')}</button>
    </div>`;
    document.body.appendChild(modal);
  }

  const body = document.getElementById('proficiency-modal-body');
  body.innerHTML = renderProficiencyModal();
  modal.classList.add('active');

  // Close button
  document.getElementById('btn-close-proficiency').onclick = () => {
    modal.classList.remove('active');
  };
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('active');
  };

  // Save button
  document.getElementById('btn-save-proficiency').onclick = () => {
    const checkboxes = body.querySelectorAll('.proficiency-checkbox');
    const newProfs = [];
    checkboxes.forEach(cb => {
      if (cb.checked) newProfs.push(cb.dataset.skillId);
    });
    GameState.setSkillProficiencies(newProfs);
    modal.classList.remove('active');
    rerender();
  };
}

/**
 * Open a prompt to add/edit temporary bonus for a skill
 */
function openTempBonusPrompt(skillId, rerender) {
  const currentVal = GameState.tempSkillBonuses[skillId] || 0;
  const skillName = t('skill_' + skillId);

  let modal = document.getElementById('temp-skill-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'temp-skill-modal';
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-content" style="max-width:340px;">
      <div class="modal-header">
        <h2 id="temp-skill-title"></h2>
        <button class="close-btn" id="btn-close-temp-skill">✕</button>
      </div>
      <div style="padding:10px 0;">
        <label style="font-size:0.85em;color:#b0a08a;">${t('skillTempValue')}</label>
        <input type="number" id="temp-skill-value" style="width:100%; margin-top:6px;" min="-10" max="20">
      </div>
      <div style="display:flex; gap:8px;">
        <button class="menu-btn" id="btn-apply-temp-skill" style="flex:1;">${t('skillApplyTemp')}</button>
        <button class="menu-btn" id="btn-clear-temp-skill" style="flex:1; border-color:#804040; color:#ff6060;">${t('skillClearTemp')}</button>
      </div>
    </div>`;
    document.body.appendChild(modal);
  }

  document.getElementById('temp-skill-title').textContent = skillName;
  const input = document.getElementById('temp-skill-value');
  input.value = currentVal;
  modal.classList.add('active');

  document.getElementById('btn-close-temp-skill').onclick = () => modal.classList.remove('active');
  modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('active'); };

  document.getElementById('btn-apply-temp-skill').onclick = () => {
    const val = parseInt(input.value) || 0;
    GameState.setTempSkillBonus(skillId, val);
    modal.classList.remove('active');
    rerender();
  };

  document.getElementById('btn-clear-temp-skill').onclick = () => {
    GameState.setTempSkillBonus(skillId, 0);
    modal.classList.remove('active');
    rerender();
  };
}
