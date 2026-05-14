/**
 * Creation Wizard — step-by-step character creation (5 steps)
 * Step 1: Name & Race
 * Step 2: Class & Level
 * Step 3: Ability Scores
 * Step 4: Spells/Abilities
 * Step 5: Equipment
 */
import { GameState } from '../core/state.js';
import { t } from '../utils/lang.js';

let _currentStep = 1;
const TOTAL_STEPS = 5;

/**
 * Initialize the wizard UI — show step 1, hide others
 */
export function initWizard() {
  _currentStep = 1;
  updateWizardUI();
}

/**
 * Get the current wizard step
 */
export function getCurrentStep() {
  return _currentStep;
}

/**
 * Go to the next step
 */
export function wizardNext() {
  if (_currentStep < TOTAL_STEPS) {
    _currentStep++;
    updateWizardUI();
  }
}

/**
 * Go to the previous step
 */
export function wizardPrev() {
  if (_currentStep > 1) {
    _currentStep--;
    updateWizardUI();
  }
}

/**
 * Go to a specific step
 */
export function wizardGoTo(step) {
  if (step >= 1 && step <= TOTAL_STEPS) {
    _currentStep = step;
    updateWizardUI();
  }
}

/**
 * Update all wizard UI elements based on current step
 */
function updateWizardUI() {
  // Update step indicators
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const indicator = document.getElementById(`wizard-step-indicator-${i}`);
    if (indicator) {
      indicator.classList.remove('active', 'completed');
      if (i === _currentStep) indicator.classList.add('active');
      else if (i < _currentStep) indicator.classList.add('completed');
    }
  }

  // Show/hide step content
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const content = document.getElementById(`wizard-step-${i}`);
    if (content) {
      content.style.display = i === _currentStep ? 'block' : 'none';
    }
  }

  // Update progress bar
  const progressFill = document.getElementById('wizard-progress-fill');
  if (progressFill) {
    progressFill.style.width = `${(_currentStep / TOTAL_STEPS) * 100}%`;
  }

  // Update step label
  const stepLabel = document.getElementById('wizard-step-label');
  if (stepLabel) {
    stepLabel.textContent = t('wizardStepOf', _currentStep, TOTAL_STEPS);
  }

  // Update navigation buttons
  const prevBtn = document.getElementById('wizard-btn-prev');
  const nextBtn = document.getElementById('wizard-btn-next');
  const saveBtn = document.getElementById('btn-save-character');

  if (prevBtn) prevBtn.style.display = _currentStep > 1 ? 'inline-block' : 'none';
  if (nextBtn) nextBtn.style.display = _currentStep < TOTAL_STEPS ? 'inline-block' : 'none';
  if (saveBtn) saveBtn.style.display = _currentStep === TOTAL_STEPS ? 'inline-block' : 'none';
}

/**
 * Render the wizard progress indicator HTML
 */
export function renderWizardProgress() {
  const stepNames = [
    t('wizardStep1'),
    t('wizardStep2'),
    t('wizardStep3'),
    t('wizardStep4'),
    t('wizardStep5')
  ];

  let html = `<div class="wizard-progress">
    <div class="wizard-steps-row">`;

  for (let i = 1; i <= TOTAL_STEPS; i++) {
    html += `<div class="wizard-step-indicator ${i === 1 ? 'active' : ''}" id="wizard-step-indicator-${i}">
      <div class="wizard-step-circle">${i}</div>
      <div class="wizard-step-name">${stepNames[i - 1]}</div>
    </div>`;
    if (i < TOTAL_STEPS) {
      html += `<div class="wizard-step-line"></div>`;
    }
  }

  html += `</div>
    <div class="wizard-progress-bar">
      <div class="wizard-progress-fill" id="wizard-progress-fill" style="width: 20%;"></div>
    </div>
    <div class="wizard-step-label" id="wizard-step-label">${t('wizardStepOf', 1, TOTAL_STEPS)}</div>
  </div>`;

  return html;
}

/**
 * Render the wizard navigation buttons HTML
 */
export function renderWizardNav() {
  return `<div class="wizard-nav">
    <button class="menu-btn wizard-nav-btn" id="wizard-btn-prev" style="display:none;">← ${t('wizardPrev')}</button>
    <button class="menu-btn wizard-nav-btn wizard-nav-next" id="wizard-btn-next">${t('wizardNext')} →</button>
  </div>`;
}

/**
 * Setup wizard navigation event handlers
 */
export function setupWizardEvents() {
  const prevBtn = document.getElementById('wizard-btn-prev');
  const nextBtn = document.getElementById('wizard-btn-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', wizardPrev);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', wizardNext);
  }

  // Allow clicking step indicators to jump to that step
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const indicator = document.getElementById(`wizard-step-indicator-${i}`);
    if (indicator) {
      indicator.addEventListener('click', () => {
        // Only allow jumping to completed steps or current+1
        if (i <= _currentStep) {
          wizardGoTo(i);
        }
      });
    }
  }
}

/**
 * Reset the wizard back to step 1
 */
export function resetWizard() {
  _currentStep = 1;
  updateWizardUI();
}
