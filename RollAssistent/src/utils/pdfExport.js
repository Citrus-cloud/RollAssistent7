/**
 * PDF Export — generates a styled character sheet PDF using jsPDF
 * Libraries loaded from CDN at runtime (jspdf + html2canvas not needed for manual PDF)
 */
import { GameState } from '../core/state.js';
import { STAT_KEYS, STAT_NAMES } from './constants.js';
import { t } from './lang.js';
import { getSkillBonus, SKILLS_DATA } from '../components/skills.js';
import { getCurrentHP, getAC, getInitiative, getSpeed, getProfBonus } from '../components/characterSheet.js';

// CDN URL for jsPDF (UMD)
const JSPDF_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js';

/**
 * Ensure jsPDF is loaded
 */
async function loadJsPDF() {
  if (window.jspdf) return window.jspdf;

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = JSPDF_CDN;
    script.onload = () => resolve(window.jspdf);
    script.onerror = () => reject(new Error('Failed to load jsPDF'));
    document.head.appendChild(script);
  });
}

/**
 * Export current character to PDF
 */
export async function exportCharacterPDF() {
  const lib = await loadJsPDF();
  const { jsPDF } = lib;

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Colors
  const gold = [212, 175, 55];
  const darkBg = [26, 26, 26];
  const cardBg = [34, 34, 34];
  const textColor = [240, 230, 210];
  const dimText = [176, 160, 138];

  // Draw dark background
  doc.setFillColor(...darkBg);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Helper: draw gold border frame
  function drawFrame() {
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.8);
    doc.rect(8, 8, pageWidth - 16, pageHeight - 16);
    doc.setLineWidth(0.3);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
  }
  drawFrame();

  // Helper: section header
  function sectionHeader(title) {
    checkPageBreak(12);
    doc.setFillColor(...gold);
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setTextColor(13, 13, 13);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 3, y + 5);
    y += 10;
    doc.setTextColor(...textColor);
  }

  // Helper: card background
  function cardStart(height) {
    checkPageBreak(height + 4);
    doc.setFillColor(...cardBg);
    doc.roundedRect(margin, y, contentWidth, height, 2, 2, 'F');
  }

  // Helper: check page break
  function checkPageBreak(neededHeight) {
    if (y + neededHeight > pageHeight - margin - 5) {
      doc.addPage();
      doc.setFillColor(...darkBg);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      drawFrame();
      y = margin;
    }
  }

  // ===== TITLE =====
  const charName = GameState.currentMainCharacter?.name || t('namePlaceholder');
  const raceName = GameState.race?.name || '—';
  const className = GameState.class?.name || '—';
  const level = GameState.level;

  doc.setTextColor(...gold);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(charName, pageWidth / 2, y + 8, { align: 'center' });
  y += 12;

  doc.setFontSize(10);
  doc.setTextColor(...dimText);
  doc.setFont('helvetica', 'normal');
  doc.text(`${raceName} • ${className} • ${t('sheetLevel')} ${level}`, pageWidth / 2, y + 4, { align: 'center' });
  y += 10;

  // Gold separator
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.5);
  doc.line(margin + 20, y, pageWidth - margin - 20, y);
  y += 8;

  // ===== ABILITY SCORES =====
  sectionHeader(t('sheetAbilities'));

  const statBoxW = contentWidth / 6;
  cardStart(22);
  const statStartY = y;

  STAT_KEYS.forEach((key, i) => {
    const x = margin + i * statBoxW;
    const total = GameState.getTotalStat(key);
    const mod = GameState.getStatModifier(key);
    const modStr = mod >= 0 ? '+' + mod : String(mod);

    // Stat name
    doc.setFontSize(7);
    doc.setTextColor(...dimText);
    doc.setFont('helvetica', 'normal');
    doc.text(STAT_NAMES[key], x + statBoxW / 2, statStartY + 4, { align: 'center' });

    // Score
    doc.setFontSize(14);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'bold');
    doc.text(String(total), x + statBoxW / 2, statStartY + 12, { align: 'center' });

    // Modifier
    doc.setFontSize(9);
    doc.setTextColor(...gold);
    doc.text(`(${modStr})`, x + statBoxW / 2, statStartY + 18, { align: 'center' });
  });
  y += 24;

  // ===== COMBAT PARAMETERS =====
  sectionHeader(t('sheetCombat'));

  const hp = getCurrentHP();
  const ac = getAC();
  const init = getInitiative();
  const speed = getSpeed();
  const profBonus = getProfBonus();

  const combatData = [
    { label: 'HP', value: String(hp) },
    { label: t('sheetAC'), value: String(ac) },
    { label: t('sheetInitiative'), value: (init >= 0 ? '+' : '') + init },
    { label: t('sheetSpeed'), value: speed + ' ' + t('ft') },
    { label: t('sheetProfBonus'), value: '+' + profBonus }
  ];

  const combatBoxW = contentWidth / 5;
  cardStart(18);
  const combatStartY = y;

  combatData.forEach((item, i) => {
    const x = margin + i * combatBoxW;
    doc.setFontSize(6.5);
    doc.setTextColor(...dimText);
    doc.setFont('helvetica', 'normal');
    doc.text(item.label, x + combatBoxW / 2, combatStartY + 4, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor(...gold);
    doc.setFont('helvetica', 'bold');
    doc.text(item.value, x + combatBoxW / 2, combatStartY + 12, { align: 'center' });
  });
  y += 20;

  // ===== SAVING THROWS =====
  sectionHeader(t('sheetSaves'));
  cardStart(10);
  const saveStartY = y;
  const saveBoxW = contentWidth / 6;

  STAT_KEYS.forEach((key, i) => {
    const x = margin + i * saveBoxW;
    const mod = GameState.getStatModifier(key);
    const modStr = mod >= 0 ? '+' + mod : String(mod);

    doc.setFontSize(7);
    doc.setTextColor(...dimText);
    doc.setFont('helvetica', 'normal');
    doc.text(STAT_NAMES[key], x + saveBoxW / 2, saveStartY + 4, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'bold');
    doc.text(modStr, x + saveBoxW / 2, saveStartY + 9, { align: 'center' });
  });
  y += 12;

  // ===== SKILLS =====
  sectionHeader(t('sheetSkills'));

  const proficiencies = GameState.skillProficiencies;
  const skillsPerCol = 9;
  const colWidth = contentWidth / 2;
  const skillRowH = 5;
  const skillBlockH = skillsPerCol * skillRowH + 4;

  cardStart(skillBlockH);
  const skillStartY = y;

  SKILLS_DATA.forEach((skill, i) => {
    const col = i < skillsPerCol ? 0 : 1;
    const row = i < skillsPerCol ? i : i - skillsPerCol;
    const x = margin + col * colWidth + 3;
    const rowY = skillStartY + 3 + row * skillRowH;

    const isProficient = proficiencies.includes(skill.id);
    const bonus = getSkillBonus(skill.id);
    const bonusStr = bonus >= 0 ? '+' + bonus : String(bonus);

    // Proficiency dot
    doc.setFontSize(6);
    doc.setTextColor(...(isProficient ? gold : dimText));
    doc.text(isProficient ? '●' : '○', x, rowY + 3);

    // Skill name
    doc.setFontSize(7.5);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text(t('skill_' + skill.id), x + 5, rowY + 3);

    // Bonus
    doc.setFontSize(8);
    doc.setTextColor(...gold);
    doc.setFont('helvetica', 'bold');
    doc.text(bonusStr, x + colWidth - 10, rowY + 3, { align: 'right' });
  });
  y += skillBlockH + 2;

  // ===== EQUIPMENT =====
  sectionHeader(t('sheetEquipment'));

  const equippedItems = GameState.inventory.filter(i => i.equipped);
  const backpackItems = GameState.inventory.filter(i => !i.equipped);

  if (equippedItems.length > 0) {
    const equipH = Math.min(equippedItems.length * 5 + 6, 50);
    cardStart(equipH);
    const eqStartY = y;

    doc.setFontSize(7);
    doc.setTextColor(...gold);
    doc.setFont('helvetica', 'bold');
    doc.text(t('sheetEquipment') + ':', margin + 3, eqStartY + 4);

    equippedItems.slice(0, 8).forEach((item, i) => {
      doc.setFontSize(7.5);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'normal');
      doc.text(`• ${item.name}`, margin + 5, eqStartY + 9 + i * 5);
    });
    if (equippedItems.length > 8) {
      doc.setFontSize(6.5);
      doc.setTextColor(...dimText);
      doc.text(`... +${equippedItems.length - 8} ${t('sheetBackpack').toLowerCase()}`, margin + 5, eqStartY + 9 + 8 * 5);
    }
    y += equipH + 2;
  }

  if (backpackItems.length > 0) {
    checkPageBreak(12);
    const bpH = Math.min(backpackItems.length * 5 + 6, 40);
    cardStart(bpH);
    const bpStartY = y;

    doc.setFontSize(7);
    doc.setTextColor(...gold);
    doc.setFont('helvetica', 'bold');
    doc.text(t('sheetBackpack') + ':', margin + 3, bpStartY + 4);

    backpackItems.slice(0, 6).forEach((item, i) => {
      doc.setFontSize(7.5);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'normal');
      doc.text(`• ${item.name}`, margin + 5, bpStartY + 9 + i * 5);
    });
    if (backpackItems.length > 6) {
      doc.setFontSize(6.5);
      doc.setTextColor(...dimText);
      doc.text(`... +${backpackItems.length - 6}`, margin + 5, bpStartY + 9 + 6 * 5);
    }
    y += bpH + 2;
  }

  // ===== ABILITIES / SPELLS =====
  const allSpells = GameState.spells;
  const customAbilities = GameState.customAbilities;

  if (allSpells.length > 0 || customAbilities.length > 0) {
    sectionHeader(t('sheetSpells'));

    const totalAbilities = allSpells.length + customAbilities.length;
    const abH = Math.min(totalAbilities * 5 + 6, 50);
    cardStart(abH);
    const abStartY = y;

    let abRow = 0;
    customAbilities.slice(0, 8).forEach((ab) => {
      doc.setFontSize(7.5);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'normal');
      doc.text(`• ${ab.name} (${t('spellsLevel').replace('%1', ab.level)})`, margin + 3, abStartY + 4 + abRow * 5);
      abRow++;
    });

    if (allSpells.length > 0) {
      doc.setFontSize(6.5);
      doc.setTextColor(...dimText);
      doc.text(`+ ${allSpells.length} ${t('sheetSpells').toLowerCase()}`, margin + 3, abStartY + 4 + abRow * 5);
    }
    y += abH + 2;
  }

  // ===== FOOTER =====
  checkPageBreak(10);
  doc.setFontSize(7);
  doc.setTextColor(...dimText);
  doc.setFont('helvetica', 'italic');
  doc.text('Roll Assistant • Character Sheet', pageWidth / 2, pageHeight - 12, { align: 'center' });

  // Save the PDF
  const filename = `${charName.replace(/[^a-zA-Zа-яА-Я0-9]/g, '_')}_RollAssistant.pdf`;
  doc.save(filename);
}
