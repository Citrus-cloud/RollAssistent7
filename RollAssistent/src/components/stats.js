/**
 * Компонент характеристик (Point Buy)
 */
import { GameState } from '../core/state.js';
import { STAT_KEYS, STAT_NAMES } from '../utils/constants.js';

export function initStats() {
  GameState.resetStats();
  updateAllStatUI();
}

export function randomStats() {
  GameState.randomStats();
  updateAllStatUI();
}

export function updateAllStatUI() {
  const container = document.getElementById('attributes');
  if (!container) return;

  let html = '';
  for (const key of STAT_KEYS) {
    const total = GameState.getTotalStat(key);
    const mod = GameState.getStatModifier(key);
    const modStr = mod >= 0 ? '+' + mod : String(mod);
    const equipData = GameState.getEquipmentBonus(key);
    const canInc = GameState.canIncrease(key);
    const increaseDisabled = canInc ? '' : 'disabled';
    const modifiedClass = equipData.sets ? ' stat-modified' : '';

    html += `<div class="stat-item${modifiedClass}">
      <div class="stat-label">${STAT_NAMES[key]}</div>
      <div class="stat-base-row">
        <button class="stat-btn" data-stat="${key}" data-action="dec">−</button>
        <span class="stat-value">${total}</span>
        <button class="stat-btn" data-stat="${key}" data-action="inc" ${increaseDisabled}>+</button>
      </div>
      <div class="stat-total">
        <span class="stat-modifier">(${modStr})</span>
        ${equipData.sets ? ` <span style="color:#4fc3f7; font-size:0.7em;">⚡${equipData.itemName}</span>` : ''}
      </div>
    </div>`;
  }
  container.innerHTML = html;

  // Event delegation on container
  container.onclick = (e) => {
    const btn = e.target.closest('.stat-btn');
    if (!btn) return;
    e.preventDefault();
    const stat = btn.dataset.stat;
    const action = btn.dataset.action;
    if (action === 'inc') {
      GameState.increaseStat(stat);
    } else {
      GameState.decreaseStat(stat);
    }
    updateAllStatUI();
  };

  updatePoolDisplay();
  updateRaceBonusDisplay();
}

export function updatePoolDisplay() {
  const spent = GameState.getSpentPoints();
  const remaining = Math.max(0, GameState.poolPoints - spent);
  const display = document.getElementById('points-display');
  if (display) {
    display.textContent = `Очки: ${remaining} (базовые), +${Math.max(0, GameState.asiPoints)} от уровней`;
  }
}

export function updateRaceBonusDisplay() {
  const display = document.getElementById('race-bonus-display');
  if (!display) return;
  if (!GameState.race || !GameState.race.bonuses) {
    display.style.display = 'none';
    return;
  }
  const bonuses = [];
  for (const key of STAT_KEYS) {
    const bonus = GameState.getRacialBonus(key);
    if (bonus !== 0) bonuses.push(STAT_NAMES[key] + ' +' + bonus);
  }
  if (bonuses.length === 0) {
    display.style.display = 'none';
    return;
  }
  display.style.display = 'block';
  display.innerHTML = `<strong>🧬 Бонусы расы (${GameState.race.name}):</strong> ${bonuses.join(', ')}`;
}

export function setupStatsEvents() {
  document.getElementById('btn-reset-stats')?.addEventListener('click', () => initStats());
  document.getElementById('btn-random-stats')?.addEventListener('click', () => randomStats());
  document.getElementById('btn-stats-info')?.addEventListener('click', () => {
    document.getElementById('stats-info-modal')?.classList.add('active');
  });
  document.getElementById('btn-close-stats-info')?.addEventListener('click', () => {
    document.getElementById('stats-info-modal')?.classList.remove('active');
  });
  document.getElementById('stats-info-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
  });
}
