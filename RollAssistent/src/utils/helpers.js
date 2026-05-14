/**
 * Вспомогательные функции
 */

export function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getItemPrice(item) {
  if (!item) return '?';
  const rarity = item.rarity;
  if (rarity === 'масштабирующийся') return 'Бесценно';
  const seed = hashCode(item.id);
  const randomVal = (seed % 100) / 100;
  switch (rarity) {
    case 'обычный': return `${Math.floor(randomVal * 21) + 10} см`;
    case 'необычный': return `${Math.floor(randomVal * 51) + 30} см`;
    case 'редкий': return `${Math.floor(randomVal * 3) + 1} зм`;
    case 'очень редкий': return `${Math.floor(randomVal * 41) + 10} зм`;
    case 'легендарный': return `${Math.floor(randomVal * 501) + 200} зм`;
    default: return '?';
  }
}

export function getTypeName(type) {
  const names = { weapon: '⚔️ Оружие', armor: '🛡️ Доспех', artifact: '💍 Артефакт' };
  return names[type] || type;
}

export function getSlotName(slot) {
  const names = {
    body: 'Тело', mainhand: 'Основная рука', offhand: 'Вторая рука',
    ring: 'Кольцо', neck: 'Шея', feet: 'Ноги', back: 'Спина',
    hands: 'Руки', head: 'Голова', waist: 'Пояс'
  };
  return names[slot] || slot || '—';
}

export function getBonusName(key) {
  const names = {
    ac: 'КД', attack: 'Атака', damage: 'Урон', str: 'Сила', dex: 'Ловк',
    con: 'Тел', int: 'Инт', wis: 'Мудр', cha: 'Хар', savingThrows: 'Спасброски',
    speed: 'Скорость', stealth: 'Скрытность', range: 'Дистанция', fly: 'Полёт',
    swim: 'Плавание', jumpBonus: 'Прыжки', fireResist: 'Огонь', coldResist: 'Холод',
    waterBreathing: 'Дыхание', waterWalk: 'Ходьба', spiderClimb: 'Стены',
    autoStabilize: 'Стабил', healBonus: 'Лечение', antiDivination: 'Защита',
    breatheAnywhere: 'Дыхание', finesse: 'Ловк', reach: 'Досяг', special: 'Особое',
    fireDamage: 'Огонь', damageType: 'Тип'
  };
  return names[key] || key;
}

export function formatBonus(key, value) {
  if (key === 'stealth' && value === 'advantage') return 'Преимущество';
  if (typeof value === 'boolean' && value) return 'Да';
  if (typeof value === 'number' && value >= 0) return '+' + value;
  return String(value);
}

export function getRarityColor(rarity) {
  const colors = {
    'обычный': '#ccc',
    'необычный': '#80ff80',
    'редкий': '#80b0ff',
    'очень редкий': '#c080ff',
    'легендарный': '#ffd700',
    'масштабирующийся': '#b03030'
  };
  return colors[rarity] || '#ccc';
}

export function getProficiencyBonus(level) {
  return Math.floor((level - 1) / 4) + 2;
}
