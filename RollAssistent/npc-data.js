/**
 * npc-data.js — Preset data for NPC/Enemy creation
 * Loaded as a non-module script, exposes data via window globals.
 */

// ========== PERSONALITIES ==========
const npcPersonalities = [
  { id: 'aggressive', name: 'Агрессивный' },
  { id: 'friendly', name: 'Дружелюбный' },
  { id: 'cautious', name: 'Осторожный' },
  { id: 'cunning', name: 'Хитрый' },
  { id: 'cowardly', name: 'Трусливый' },
  { id: 'brave', name: 'Храбрый' },
  { id: 'greedy', name: 'Жадный' },
  { id: 'generous', name: 'Щедрый' },
  { id: 'mysterious', name: 'Загадочный' },
  { id: 'loyal', name: 'Верный' },
  { id: 'cruel', name: 'Жестокий' },
  { id: 'kind', name: 'Добрый' },
  { id: 'mad', name: 'Безумный' },
  { id: 'calm', name: 'Спокойный' },
  { id: 'arrogant', name: 'Высокомерный' },
  { id: 'humble', name: 'Скромный' }
];

// ========== WORLDVIEWS (Alignments) ==========
const npcWorldviews = [
  { id: 'lawful_good', name: 'Законно-добрый' },
  { id: 'neutral_good', name: 'Нейтрально-добрый' },
  { id: 'chaotic_good', name: 'Хаотично-добрый' },
  { id: 'lawful_neutral', name: 'Законно-нейтральный' },
  { id: 'true_neutral', name: 'Истинно нейтральный' },
  { id: 'chaotic_neutral', name: 'Хаотично-нейтральный' },
  { id: 'lawful_evil', name: 'Законно-злой' },
  { id: 'neutral_evil', name: 'Нейтрально-злой' },
  { id: 'chaotic_evil', name: 'Хаотично-злой' }
];

// ========== PROFESSIONS ==========
const npcProfessions = [
  { id: 'trader', name: 'Торговец' },
  { id: 'warrior', name: 'Воин' },
  { id: 'officer', name: 'Офицер' },
  { id: 'leader', name: 'Глава' },
  { id: 'boss', name: 'Босс' },
  { id: 'baron', name: 'Барон' },
  { id: 'thief', name: 'Вор' },
  { id: 'assassin', name: 'Убийца' },
  { id: 'mage', name: 'Маг' },
  { id: 'healer', name: 'Целитель' },
  { id: 'blacksmith', name: 'Кузнец' },
  { id: 'innkeeper', name: 'Трактирщик' },
  { id: 'guard', name: 'Стражник' },
  { id: 'mercenary', name: 'Наёмник' },
  { id: 'priest', name: 'Жрец' },
  { id: 'noble', name: 'Дворянин' },
  { id: 'peasant', name: 'Крестьянин' },
  { id: 'bandit', name: 'Бандит' },
  { id: 'scout', name: 'Разведчик' },
  { id: 'necromancer', name: 'Некромант' },
  { id: 'king', name: 'Король' },
  { id: 'knight', name: 'Рыцарь' },
  { id: 'monk_npc', name: 'Монах' },
  { id: 'bard_npc', name: 'Бард' }
];

// ========== WEAPONS ==========
const npcWeapons = [
  { id: 'sword', name: 'Меч' },
  { id: 'longsword', name: 'Длинный меч' },
  { id: 'greatsword', name: 'Двуручный меч' },
  { id: 'dagger', name: 'Кинжал' },
  { id: 'axe', name: 'Топор' },
  { id: 'greataxe', name: 'Секира' },
  { id: 'mace', name: 'Булава' },
  { id: 'warhammer', name: 'Боевой молот' },
  { id: 'spear', name: 'Копьё' },
  { id: 'halberd', name: 'Алебарда' },
  { id: 'bow', name: 'Лук' },
  { id: 'longbow', name: 'Длинный лук' },
  { id: 'crossbow', name: 'Арбалет' },
  { id: 'staff', name: 'Посох' },
  { id: 'wand', name: 'Жезл' },
  { id: 'claws', name: 'Когти' },
  { id: 'bite', name: 'Укус' },
  { id: 'fists', name: 'Кулаки' },
  { id: 'whip', name: 'Плеть' },
  { id: 'scimitar', name: 'Ятаган' },
  { id: 'rapier', name: 'Рапира' },
  { id: 'trident', name: 'Трезубец' },
  { id: 'flail', name: 'Цеп' }
];

// ========== APPEARANCES ==========
const npcAppearances = [
  { id: 'tall_muscular', name: 'Высокий и мускулистый' },
  { id: 'short_stocky', name: 'Низкий и коренастый' },
  { id: 'thin_pale', name: 'Худой и бледный' },
  { id: 'scarred', name: 'Покрытый шрамами' },
  { id: 'hooded', name: 'В капюшоне' },
  { id: 'armored', name: 'В тяжёлых доспехах' },
  { id: 'robed', name: 'В мантии' },
  { id: 'elegant', name: 'Элегантный' },
  { id: 'dirty_ragged', name: 'Грязный и оборванный' },
  { id: 'old_wise', name: 'Старый и мудрый' },
  { id: 'young_agile', name: 'Молодой и ловкий' },
  { id: 'monstrous', name: 'Чудовищный' },
  { id: 'beautiful', name: 'Красивый' },
  { id: 'intimidating', name: 'Устрашающий' },
  { id: 'average', name: 'Обычный' },
  { id: 'tattooed', name: 'Покрытый татуировками' },
  { id: 'one_eyed', name: 'Одноглазый' },
  { id: 'huge', name: 'Огромный' }
];

// ========== EQUIPMENT SLOTS for NPC ==========
const npcEquipmentSlots = [
  { id: 'head', name: 'Голова' },
  { id: 'body', name: 'Тело' },
  { id: 'mainhand', name: 'Правая рука' },
  { id: 'offhand', name: 'Левая рука' },
  { id: 'feet', name: 'Ноги' },
  { id: 'ring', name: 'Кольцо' },
  { id: 'neck', name: 'Шея' },
  { id: 'back', name: 'Спина' }
];

// Expose to window for non-module access
window._NPC_personalities = npcPersonalities;
window._NPC_worldviews = npcWorldviews;
window._NPC_professions = npcProfessions;
window._NPC_weapons = npcWeapons;
window._NPC_appearances = npcAppearances;
window._NPC_equipmentSlots = npcEquipmentSlots;
