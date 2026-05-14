/**
 * Custom Race & Class Creator
 * Handles creation, storage, and loading of user-defined races and classes.
 */
import { GameState } from '../core/state.js';
import { STAT_KEYS } from '../utils/constants.js';
import { t } from '../utils/lang.js';

const CUSTOM_RACES_KEY = 'custom_races';
const CUSTOM_CLASSES_KEY = 'custom_classes';

// ========== Storage ==========
export function getCustomRaces() {
  try {
    const raw = localStorage.getItem(CUSTOM_RACES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function saveCustomRaces(list) {
  localStorage.setItem(CUSTOM_RACES_KEY, JSON.stringify(list));
}

export function getCustomClasses() {
  try {
    const raw = localStorage.getItem(CUSTOM_CLASSES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function saveCustomClasses(list) {
  localStorage.setItem(CUSTOM_CLASSES_KEY, JSON.stringify(list));
}

// ========== Race Details for custom races ==========
export function getCustomRaceDetails(raceId) {
  const races = getCustomRaces();
  const race = races.find(r => r.id === raceId);
  if (!race) return null;
  return {
    description: race.description || '',
    features: (race.features || []).map(f => ({ title: f.title, text: f.text })),
    languages: race.languages ? race.languages.split(',').map(s => s.trim()) : ['Общий']
  };
}

// ========== Class Details for custom classes ==========
export function getCustomClassDetails(classId) {
  const classes = getCustomClasses();
  const cls = classes.find(c => c.id === classId);
  if (!cls) return null;
  const features = {};
  (cls.features || []).forEach(f => {
    const lvl = f.level || 1;
    if (!features[lvl]) features[lvl] = [];
    features[lvl].push({ title: f.title, text: f.text });
  });
  const subclasses = {};
  (cls.subclasses || []).forEach(sub => {
    subclasses[sub.id] = {
      description: sub.description || '',
      features: {}
    };
  });
  return { description: cls.description || '', features, subclasses };
}

// ========== Setup Custom Race Modal ==========
export function setupCustomRaceCreator(onRaceCreated) {
  const modal = document.getElementById('custom-race-modal');
  if (!modal) return;

  // Open
  document.getElementById('btn-create-custom-race')?.addEventListener('click', () => {
    resetRaceForm();
    modal.classList.add('active');
  });

  // Close
  document.getElementById('btn-close-custom-race')?.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Add feature row
  document.getElementById('btn-add-race-feature')?.addEventListener('click', () => {
    addRaceFeatureRow();
  });

  // Save
  document.getElementById('btn-save-custom-race')?.addEventListener('click', () => {
    const name = document.getElementById('custom-race-name')?.value.trim();
    if (!name) {
      window.showAlert?.(t('error'), t('enterName'));
      return;
    }

    const description = document.getElementById('custom-race-desc')?.value.trim() || '';
    const languages = document.getElementById('custom-race-languages')?.value.trim() || 'Общий';

    // Gather bonuses
    const bonuses = {};
    STAT_KEYS.forEach(key => {
      const val = parseInt(document.getElementById(`custom-race-bonus-${key}`)?.value) || 0;
      if (val !== 0) bonuses[key] = val;
    });

    // Gather features
    const featureRows = document.querySelectorAll('.custom-race-feature-row');
    const features = [];
    featureRows.forEach(row => {
      const title = row.querySelector('.feature-title-input')?.value.trim();
      const text = row.querySelector('.feature-text-input')?.value.trim();
      if (title || text) features.push({ title: title || 'Особенность', text: text || '' });
    });

    const id = 'custom_race_' + Date.now();
    const newRace = { id, name, description, bonuses, languages, features };

    const saved = getCustomRaces();
    saved.push(newRace);
    saveCustomRaces(saved);

    modal.classList.remove('active');
    if (onRaceCreated) onRaceCreated(newRace);
    window.showAlert?.(t('success'), `${t('raceLabel')} «${name}» ${t('itemAdded', name).includes('добавлено') ? 'создана!' : 'created!'}`);
  });
}

function resetRaceForm() {
  const nameEl = document.getElementById('custom-race-name');
  const descEl = document.getElementById('custom-race-desc');
  const langEl = document.getElementById('custom-race-languages');
  if (nameEl) nameEl.value = '';
  if (descEl) descEl.value = '';
  if (langEl) langEl.value = 'Общий';
  STAT_KEYS.forEach(key => {
    const el = document.getElementById(`custom-race-bonus-${key}`);
    if (el) el.value = '0';
  });
  const container = document.getElementById('custom-race-features-list');
  if (container) container.innerHTML = '';
  addRaceFeatureRow();
}

function addRaceFeatureRow() {
  const container = document.getElementById('custom-race-features-list');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'custom-race-feature-row';
  row.innerHTML = `
    <input type="text" class="feature-title-input" placeholder="${t('abilityName')}">
    <textarea class="feature-text-input" placeholder="${t('abilityDesc')}" rows="2"></textarea>
    <button type="button" class="btn-remove-feature">✕</button>
  `;
  row.querySelector('.btn-remove-feature').addEventListener('click', () => row.remove());
  container.appendChild(row);
}

// ========== Setup Custom Class Modal ==========
export function setupCustomClassCreator(onClassCreated) {
  const modal = document.getElementById('custom-class-modal');
  if (!modal) return;

  // Open
  document.getElementById('btn-create-custom-class')?.addEventListener('click', () => {
    resetClassForm();
    modal.classList.add('active');
  });

  // Close
  document.getElementById('btn-close-custom-class')?.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Add feature row
  document.getElementById('btn-add-class-feature')?.addEventListener('click', () => {
    addClassFeatureRow();
  });

  // Add subclass row
  document.getElementById('btn-add-class-subclass')?.addEventListener('click', () => {
    addClassSubclassRow();
  });

  // Save
  document.getElementById('btn-save-custom-class')?.addEventListener('click', () => {
    const name = document.getElementById('custom-class-name')?.value.trim();
    if (!name) {
      window.showAlert?.(t('error'), t('enterName'));
      return;
    }

    const description = document.getElementById('custom-class-desc')?.value.trim() || '';
    const hitDie = document.getElementById('custom-class-hitdie')?.value || 'd8';
    const primaryAbility = document.getElementById('custom-class-primary')?.value.trim() || '';
    const subclassLevel = parseInt(document.getElementById('custom-class-sublevel')?.value) || 3;

    // Gather features
    const featureRows = document.querySelectorAll('.custom-class-feature-row');
    const features = [];
    featureRows.forEach(row => {
      const level = parseInt(row.querySelector('.feature-level-input')?.value) || 1;
      const title = row.querySelector('.feature-title-input')?.value.trim();
      const text = row.querySelector('.feature-text-input')?.value.trim();
      if (title || text) features.push({ level, title: title || 'Особенность', text: text || '' });
    });

    // Gather subclasses
    const subclassRows = document.querySelectorAll('.custom-class-subclass-row');
    const subclasses = [];
    subclassRows.forEach(row => {
      const subName = row.querySelector('.subclass-name-input')?.value.trim();
      const subDesc = row.querySelector('.subclass-desc-input')?.value.trim();
      if (subName) {
        subclasses.push({
          id: 'custom_sub_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
          name: subName,
          description: subDesc || ''
        });
      }
    });

    const id = 'custom_class_' + Date.now();
    const baseHp = { 'd6': 6, 'd8': 8, 'd10': 10, 'd12': 12 }[hitDie] || 8;
    const newClass = { id, name, description, hitDie, baseHp, primaryAbility, subclassLevel, subclasses, features };

    const saved = getCustomClasses();
    saved.push(newClass);
    saveCustomClasses(saved);

    modal.classList.remove('active');
    if (onClassCreated) onClassCreated(newClass);
    window.showAlert?.(t('success'), `${t('classLabel')} «${name}» ${t('itemAdded', name).includes('добавлено') ? 'создан!' : 'created!'}`);
  });
}

function resetClassForm() {
  ['custom-class-name', 'custom-class-desc', 'custom-class-primary'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const hitDieEl = document.getElementById('custom-class-hitdie');
  if (hitDieEl) hitDieEl.value = 'd8';
  const subLevelEl = document.getElementById('custom-class-sublevel');
  if (subLevelEl) subLevelEl.value = '3';

  const featContainer = document.getElementById('custom-class-features-list');
  if (featContainer) featContainer.innerHTML = '';
  addClassFeatureRow();

  const subContainer = document.getElementById('custom-class-subclasses-list');
  if (subContainer) subContainer.innerHTML = '';
}

function addClassFeatureRow() {
  const container = document.getElementById('custom-class-features-list');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'custom-class-feature-row';
  row.innerHTML = `
    <input type="number" class="feature-level-input" placeholder="${t('sheetLevel')}" min="1" max="20" value="1" style="width:60px;">
    <input type="text" class="feature-title-input" placeholder="${t('abilityName')}">
    <textarea class="feature-text-input" placeholder="${t('abilityDesc')}" rows="2"></textarea>
    <button type="button" class="btn-remove-feature">✕</button>
  `;
  row.querySelector('.btn-remove-feature').addEventListener('click', () => row.remove());
  container.appendChild(row);
}

function addClassSubclassRow() {
  const container = document.getElementById('custom-class-subclasses-list');
  if (!container) return;
  const row = document.createElement('div');
  row.className = 'custom-class-subclass-row';
  row.innerHTML = `
    <input type="text" class="subclass-name-input" placeholder="${t('subclassLabel')}">
    <input type="text" class="subclass-desc-input" placeholder="${t('customDesc')}">
    <button type="button" class="btn-remove-subclass">✕</button>
  `;
  row.querySelector('.btn-remove-subclass').addEventListener('click', () => row.remove());
  container.appendChild(row);
}
