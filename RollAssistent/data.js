// ========== РАСЫ ==========
const races = [
    {
        id: 'human',
        name: 'Человек',
        description: '+1 ко всем характеристикам.',
        bonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
        languages: 'Общий, один на выбор'
    },
    {
        id: 'elf',
        name: 'Эльф',
        description: 'Ловкость +2, Интеллект +1. Ночное зрение.',
        bonuses: { dex: 2, int: 1 },
        languages: 'Общий, Эльфийский'
    },
    {
        id: 'dwarf',
        name: 'Дварф',
        description: 'Телосложение +2, Мудрость +1. Устойчивость к ядам.',
        bonuses: { con: 2, wis: 1 },
        languages: 'Общий, Дварфийский'
    },
    {
        id: 'halfling',
        name: 'Полурослик',
        description: 'Ловкость +2, Харизма +1. Везучий.',
        bonuses: { dex: 2, cha: 1 },
        languages: 'Общий, Полуросличий'
    },
    {
        id: 'gnome',
        name: 'Гном',
        description: 'Интеллект +2, Телосложение +1.',
        bonuses: { int: 2, con: 1 },
        languages: 'Общий, Гномий'
    },
    {
        id: 'half_orc',
        name: 'Полуорк',
        description: 'Сила +2, Телосложение +1. Свирепый и живучий.',
        bonuses: { str: 2, con: 1 },
        languages: 'Общий, Орочий'
    },
    {
        id: 'tiefling',
        name: 'Тифлинг',
        description: 'Харизма +2, Интеллект +1. Наследие демонов с адским пламенем.',
        bonuses: { cha: 2, int: 1 },
        languages: 'Общий, Инфернальный'
    },
    {
        id: 'dragonborn',
        name: 'Драконорождённый',
        description: 'Сила +2, Харизма +1. Дыхание дракона и сопротивление стихии.',
        bonuses: { str: 2, cha: 1 },
        languages: 'Общий, Драконий'
    },
    {
        id: 'aasimar',
        name: 'Аазимар',
        description: 'Харизма +2, Мудрость +1. Небесное наследие с исцеляющим светом.',
        bonuses: { cha: 2, wis: 1 },
        languages: 'Общий, Небесный'
    },
    {
        id: 'goliath',
        name: 'Голиаф',
        description: 'Сила +2, Телосложение +1. Горный великан с каменной стойкостью.',
        bonuses: { str: 2, con: 1 },
        languages: 'Общий, Великаний'
    },
    {
        id: 'kenku',
        name: 'Кенку',
        description: 'Ловкость +2, Мудрость +1. Мастер подражания и скрытности.',
        bonuses: { dex: 2, wis: 1 },
        languages: 'Общий, Язык жестов'
    },
    {
        id: 'tabaxi',
        name: 'Табакси',
        description: 'Ловкость +2, Харизма +1. Кошачья грация и любопытство.',
        bonuses: { dex: 2, cha: 1 },
        languages: 'Общий, Кошачий'
    },
    {
        id: 'loxodon',
        name: 'Локсодон',
        description: 'Телосложение +2, Мудрость +1. Могучий слоноподобный народ.',
        bonuses: { con: 2, wis: 1 },
        languages: 'Общий, Слоновий'
    },
    {
        id: 'firbolg',
        name: 'Фирболг',
        description: 'Мудрость +2, Сила +1. Лесные великаны с природной магией.',
        bonuses: { wis: 2, str: 1 },
        languages: 'Общий, Великаний, Сильва'
    },
    {
        id: 'goblin',
        name: 'Гоблин',
        description: 'Ловкость +2, Телосложение +1. Хитрый и стремительный.',
        bonuses: { dex: 2, con: 1 },
        languages: 'Общий, Гоблинский'
    },
    {
        id: 'tortle',
        name: 'Тортл',
        description: 'Сила +1, Мудрость +2. Черепахоподобный народ с природным панцирем.',
        bonuses: { str: 1, wis: 2 },
        languages: 'Общий, Акван'
    },
    {
        id: 'aarakocra',
        name: 'Ааракокра',
        description: 'Ловкость +2, Мудрость +1. Крылатые стражи небес.',
        bonuses: { dex: 2, wis: 1 },
        languages: 'Общий, Язык воздуха'
    },
    {
        id: 'githzerai',
        name: 'Гитцерай',
        description: 'Мудрость +2, Интеллект +1. Псионические монахи из Лимба.',
        bonuses: { wis: 2, int: 1 },
        languages: 'Общий, Гит'
    },
    {
        id: 'githyanki',
        name: 'Гитъянки',
        description: 'Сила +2, Интеллект +1. Воинственные псионики с серебряными мечами.',
        bonuses: { str: 2, int: 1 },
        languages: 'Общий, Гит'
    },
    {
        id: 'yuan_ti',
        name: 'Юань-ти',
        description: 'Харизма +2, Интеллект +1. Змееподобные интриганы с магической кровью.',
        bonuses: { cha: 2, int: 1 },
        languages: 'Общий, Змеиный'
    },
    {
        id: 'shadar_kai',
        name: 'Шадар-кай',
        description: 'Ловкость +2, Телосложение +1. Бессмертные эльфы из Царства Теней.',
        bonuses: { dex: 2, con: 1 },
        languages: 'Общий, Эльфийский, Подземный'
    },
    {
        id: 'duergar',
        name: 'Дуэргар',
        description: 'Телосложение +2, Сила +1. Серые дварфы с псионикой и магией.',
        bonuses: { con: 2, str: 1 },
        languages: 'Общий, Дварфийский, Подземный'
    },
    {
        id: 'kobold',
        name: 'Кобольд',
        description: 'Ловкость +2, Интеллект +1. Хитрые ящерки с тактикой стаи.',
        bonuses: { dex: 2, int: 1 },
        languages: 'Общий, Драконий'
    },
    {
        id: 'stormforged',
        name: 'Грозовик',
        description: 'Телосложение +2, Сила +1. Рождённые бурей, устойчивы к молниям.',
        bonuses: { con: 2, str: 1 },
        languages: 'Общий, Первичный'
    },
    {
        id: 'shadewalker',
        name: 'Теневик',
        description: 'Ловкость +2, Харизма +1. Дети тьмы, скользящие между тенями.',
        bonuses: { dex: 2, cha: 1 },
        languages: 'Общий, Глубинная речь'
    },
    {
        id: 'thri_kreen',
        name: 'Три-крин',
        description: 'Ловкость +2, Мудрость +1. Четырёхрукий насекомый воин пустынь.',
        bonuses: { dex: 2, wis: 1 },
        languages: 'Общий, Три-крин'
    },
    {
        id: 'fairy',
        name: 'Фейри',
        description: 'Ловкость +2, Харизма +1. Крошечные феи с врождённой магией полёта.',
        bonuses: { dex: 2, cha: 1 },
        languages: 'Общий, Сильва'
    },
    {
        id: 'stonehide',
        name: 'Камнекожий',
        description: 'Телосложение +2, Мудрость +1. Потомки гор, с каменной бронёй.',
        bonuses: { con: 2, wis: 1 },
        languages: 'Общий, Терран'
    },
    {
        id: 'flamesoul',
        name: 'Пламядуш',
        description: 'Харизма +2, Телосложение +1. Огненные духи, заключённые в теле.',
        bonuses: { cha: 2, con: 1 },
        languages: 'Общий, Язык Огня'
    },
    {
        id: 'mirrorfolk',
        name: 'Зеркальник',
        description: 'Харизма +2, Интеллект +1. Меняющие облик отражения.',
        bonuses: { cha: 2, int: 1 },
        languages: 'Общий, Эльфийский'
    },
    {
        id: 'leonin',
        name: 'Леонин',
        description: 'Сила +2, Телосложение +1. Гордые львиноподобные воины саванн.',
        bonuses: { str: 2, con: 1 },
        languages: 'Общий, Леонинский'
    },
    {
        id: 'satyr',
        name: 'Сатир',
        description: 'Харизма +2, Ловкость +1. Весёлые фейские существа с козлиными ногами.',
        bonuses: { cha: 2, dex: 1 },
        languages: 'Общий, Сильва'
    },
    {
        id: 'wood_elf',
        name: 'Лесной эльф',
        description: 'Ловкость +2, Мудрость +1. Быстрые хранители древних лесов.',
        bonuses: { dex: 2, wis: 1 },
        languages: 'Общий, Эльфийский'
    },
    {
        id: 'centaur',
        name: 'Кентавр',
        description: 'Сила +2, Мудрость +1. Полулюди-полукони, стражи равнин.',
        bonuses: { str: 2, wis: 1 },
        languages: 'Общий, Сильва'
    },
    {
        id: 'minotaur',
        name: 'Минотавр',
        description: 'Сила +2, Телосложение +1. Мощные быкоголовые воины.',
        bonuses: { str: 2, con: 1 },
        languages: 'Общий, Минотаврий'
    },
    {
        id: 'drow',
        name: 'Дроу',
        description: 'Ловкость +2, Харизма +1. Тёмные эльфы подземелий с врождённой магией.',
        bonuses: { dex: 2, cha: 1 },
        languages: 'Общий, Эльфийский, Подземный'
    },
    {
        id: 'half_elf',
        name: 'Полуэльф',
        description: 'Харизма +2, два других +1. Наследники двух миров.',
        bonuses: { cha: 2, dex: 1, con: 1 },
        languages: 'Общий, Эльфийский, на выбор'
    },
    {
        id: 'svirfneblin',
        name: 'Глубинный гном',
        description: 'Ловкость +1, Интеллект +2. Тайные обитатели Подземья.',
        bonuses: { dex: 1, int: 2 },
        languages: 'Общий, Гномий, Подземный'
    },
    {
        id: 'lizardfolk',
        name: 'Ящеролюд',
        description: 'Телосложение +2, Мудрость +1. Хладнокровные охотники болот.',
        bonuses: { con: 2, wis: 1 },
        languages: 'Общий, Драконий'
    },
    {
        id: 'water_genasi',
        name: 'Водный генази',
        description: 'Телосложение +2, Мудрость +1. Потомки водной стихии.',
        bonuses: { con: 2, wis: 1 },
        languages: 'Общий, Первичный'
    },
    {
        id: 'fire_genasi',
        name: 'Огненный генази',
        description: 'Телосложение +2, Интеллект +1. Потомки огненной стихии.',
        bonuses: { con: 2, int: 1 },
        languages: 'Общий, Первичный'
    },
    {
        id: 'air_genasi',
        name: 'Воздушный генази',
        description: 'Ловкость +2, Телосложение +1. Потомки воздушной стихии.',
        bonuses: { dex: 2, con: 1 },
        languages: 'Общий, Первичный'
    },
    {
        id: 'earth_genasi',
        name: 'Земляной генази',
        description: 'Сила +1, Телосложение +2. Потомки земляной стихии.',
        bonuses: { str: 1, con: 2 },
        languages: 'Общий, Первичный'
    },
    {
        id: 'lycanthrope',
        name: 'Ликантроп',
        description: 'Сила +1, Телосложение +2. Проклятые оборотни с звериной сущностью.',
        bonuses: { str: 1, con: 2 },
        languages: 'Общий, Сильва'
    },
    {
        id: 'vampire_race',
        name: 'Вампир',
        description: 'Харизма +2, Ловкость +1. Бессмертные ночные охотники с тёмным даром.',
        bonuses: { cha: 2, dex: 1 },
        languages: 'Общий, на выбор два'
    },
    {
        id: 'warforged',
        name: 'Кованый',
        description: 'Телосложение +2, один другой +1. Магические конструкты, обретшие сознание.',
        bonuses: { con: 2, str: 1 },
        languages: 'Общий, на выбор'
    },
    {
        id: 'changeling',
        name: 'Подменыш',
        description: 'Харизма +2, один другой +1. Меняющие облик по желанию.',
        bonuses: { cha: 2, dex: 1 },
        languages: 'Общий, два на выбор'
    },
    {
        id: 'shifter',
        name: 'Перевёртыш',
        description: 'Ловкость +1, Телосложение +2. Потомки ликантропов с частичной трансформацией.',
        bonuses: { dex: 1, con: 2 },
        languages: 'Общий, Сильва'
    },
    {
        id: 'kalashtar',
        name: 'Калаштар',
        description: 'Мудрость +2, Харизма +1. Духовные существа с психической связью.',
        bonuses: { wis: 2, cha: 1 },
        languages: 'Общий, Квори'
    },
    {
        id: 'bugbear',
        name: 'Багбир',
        description: 'Сила +2, Ловкость +1. Крупные гоблиноиды-засадники.',
        bonuses: { str: 2, dex: 1 },
        languages: 'Общий, Гоблинский'
    }
];

// ========== КЛАССЫ ==========
const classes = [
    // 1. Варвар
    {
        id: 'barbarian', name: 'Варвар', description: 'Свирепый воин, впадающий в боевую ярость.',
        baseHp: 12, hitDie: 'd12', primaryAbility: 'Сила',
        subclasses: [
            { id: 'berserker', name: 'Берсерк', description: 'Ещё более яростные атаки с риском усталости.' },
            { id: 'totem_warrior', name: 'Тотемный воин', description: 'Призывает духов животных для усиления.' },
            { id: 'ancestral_guardian', name: 'Хранитель предков', description: 'Защищает союзников, призывая духов предков.' },
            { id: 'zealot', name: 'Фанатик', description: 'Божественная ярость и воскрешение без затрат.' }
        ], subclassLevel: 3
    },
    // 2. Воин
    {
        id: 'warrior', name: 'Воин', description: 'Мастер оружия и доспехов.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила или Ловкость',
        subclasses: [
            { id: 'champion', name: 'Чемпион', description: 'Улучшенные критические удары и атлетизм.' },
            { id: 'battle_master', name: 'Боевой мастер', description: 'Использует боевые манёвры.' },
            { id: 'eldritch_knight', name: 'Мистический рыцарь', description: 'Сочетает меч и заклинания.' },
            { id: 'psi_warrior', name: 'Пси-воин', description: 'Сила разума в бою.' },
            { id: 'rune_knight', name: 'Рунный рыцарь', description: 'Пробуждает магию рун.' }
        ], subclassLevel: 3
    },
    // 3. Волшебник
    {
        id: 'mage', name: 'Волшебник', description: 'Учёный-заклинатель.',
        baseHp: 6, hitDie: 'd6', primaryAbility: 'Интеллект',
        subclasses: [
            { id: 'abjuration', name: 'Школа Ограждения', description: 'Мастер защиты.' },
            { id: 'evocation', name: 'Школа Воплощения', description: 'Разрушительная магия.' },
            { id: 'illusion', name: 'Школа Иллюзий', description: 'Искусные обманы.' },
            { id: 'necromancy', name: 'Школа Некромантии', description: 'Подчинение мертвых.' },
            { id: 'divination', name: 'Школа Прорицания', description: 'Видит будущее.' }
        ], subclassLevel: 2
    },
    // 4. Плут
    {
        id: 'rogue', name: 'Плут', description: 'Скрытный мастер обмана.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Ловкость',
        subclasses: [
            { id: 'thief', name: 'Вор', description: 'Взлом, лазание, быстрые руки.' },
            { id: 'assassin', name: 'Ассасин', description: 'Смертоносные первые удары.' },
            { id: 'arcane_trickster', name: 'Мистический ловкач', description: 'Магия иллюзий и очарования.' },
            { id: 'swashbuckler', name: 'Бретёр', description: 'Харизматичный дуэлянт.' }
        ], subclassLevel: 3
    },
    // 5. Жрец
    {
        id: 'cleric', name: 'Жрец', description: 'Божественный целитель.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Мудрость',
        subclasses: [
            { id: 'life', name: 'Домен Жизни', description: 'Великое исцеление.' },
            { id: 'war', name: 'Домен Войны', description: 'Боевой жрец.' },
            { id: 'trickery', name: 'Домен Обмана', description: 'Иллюзии и скрытность.' },
            { id: 'light', name: 'Домен Света', description: 'Огонь и очищение.' },
            { id: 'tempest', name: 'Домен Бури', description: 'Молнии и гром.' }
        ], subclassLevel: 1
    },
    // 6. Друид
    {
        id: 'druid', name: 'Друид', description: 'Хранитель природы.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Мудрость',
        subclasses: [
            { id: 'land', name: 'Круг Земли', description: 'Заклинания в зависимости от местности.' },
            { id: 'moon', name: 'Круг Луны', description: 'Мощные превращения в зверей.' },
            { id: 'stars', name: 'Круг Звёзд', description: 'Сила созвездий для атаки или лечения.' },
            { id: 'spores', name: 'Круг Спор', description: 'Симбиоз с грибами и ядовитые споры.' }
        ], subclassLevel: 2
    },
    // 7. Паладин
    {
        id: 'paladin', name: 'Паладин', description: 'Священный воин клятвы.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила и Харизма',
        subclasses: [
            { id: 'devotion', name: 'Клятва Преданности', description: 'Защита невинных.' },
            { id: 'ancients', name: 'Клятва Древних', description: 'Защита природы и жизни.' },
            { id: 'vengeance', name: 'Клятва Мести', description: 'Охота на врагов.' },
            { id: 'redemption', name: 'Клятва Искупления', description: 'Миротворец и защитник.' }
        ], subclassLevel: 3
    },
    // 8. Следопыт
    {
        id: 'ranger', name: 'Следопыт', description: 'Охотник и выживальщик.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Ловкость и Мудрость',
        subclasses: [
            { id: 'hunter', name: 'Охотник', description: 'Урон по одной или нескольким целям.' },
            { id: 'beast_master', name: 'Повелитель зверей', description: 'Верный зверь-компаньон.' },
            { id: 'gloom_stalker', name: 'Мрачный охотник', description: 'Мастер засад во тьме.' },
            { id: 'fey_wanderer', name: 'Фейский странник', description: 'Очарование и телепортация.' }
        ], subclassLevel: 3
    },
    // 9. Монах
    {
        id: 'monk', name: 'Монах', description: 'Мастер боевых искусств.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Ловкость и Мудрость',
        subclasses: [
            { id: 'open_hand', name: 'Путь Открытой Ладони', description: 'Смертоносные приёмы без оружия.' },
            { id: 'shadow', name: 'Путь Тени', description: 'Ниндзя, телепортирующийся в тенях.' },
            { id: 'mercy', name: 'Путь Милосердия', description: 'Лечение и яд.' },
            { id: 'astral_self', name: 'Путь Астрального Я', description: 'Атакует призрачными руками.' }
        ], subclassLevel: 3
    },
    // 10. Колдун (Warlock)
    {
        id: 'warlock', name: 'Колдун', description: 'Заключил договор с существом.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Харизма',
        subclasses: [
            { id: 'fiend', name: 'Демон', description: 'Сила от демонов, огонь и временные хиты.' },
            { id: 'archfey', name: 'Архифея', description: 'Очарование и иллюзии.' },
            { id: 'hexblade', name: 'Клинок Проклятых', description: 'Магическое оружие и атаки Харизмой.' },
            { id: 'great_old_one', name: 'Великий Древний', description: 'Телепатия и ужас.' }
        ], subclassLevel: 1
    },
    // 11. Чародей (Sorcerer)
    {
        id: 'sorcerer', name: 'Чародей', description: 'Магия в крови, метамагия.',
        baseHp: 6, hitDie: 'd6', primaryAbility: 'Харизма',
        subclasses: [
            { id: 'draconic', name: 'Драконья кровь', description: 'Устойчивость к стихии, чешуя.' },
            { id: 'wild_magic', name: 'Дикая магия', description: 'Случайные всплески магии.' },
            { id: 'divine_soul', name: 'Божественная душа', description: 'Доступ к заклинаниям жреца.' },
            { id: 'storm', name: 'Штормовой колдун', description: 'Управление ветром и молниями.' }
        ], subclassLevel: 1
    },
    // 12. Бард (Bard)
    {
        id: 'bard', name: 'Бард', description: 'Музыкант-заклинатель и вдохновитель.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Харизма',
        subclasses: [
            { id: 'lore', name: 'Коллегия Знаний', description: 'Больше заклинаний и умений.' },
            { id: 'valor', name: 'Коллегия Доблести', description: 'Боевой бард с доспехами.' },
            { id: 'glamour', name: 'Коллегия Гламура', description: 'Очарование и поддержка.' },
            { id: 'whispers', name: 'Коллегия Шёпотов', description: 'Психологический урон и обман.' }
        ], subclassLevel: 3
    },
    // 13. Изобретатель (Artificer)
    {
        id: 'artificer', name: 'Изобретатель', description: 'Мастер магических устройств.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Интеллект',
        subclasses: [
            { id: 'alchemist', name: 'Алхимик', description: 'Эликсиры и зелья.' },
            { id: 'armorer', name: 'Бронник', description: 'Магические доспехи с оружием.' },
            { id: 'artillerist', name: 'Артиллерист', description: 'Магические пушки.' },
            { id: 'battle_smith', name: 'Боевой кузнец', description: 'Стальной защитник и атаки Интеллектом.' }
        ], subclassLevel: 3
    },
    // 14. Кровавый охотник (Blood Hunter)
    {
        id: 'blood_hunter', name: 'Кровавый охотник', description: 'Жертвует жизненной силой ради силы.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила или Ловкость',
        subclasses: [
            { id: 'ghostslayer', name: 'Охотник на призраков', description: 'Урон по нежити и духам.' },
            { id: 'mutant', name: 'Мутант', description: 'Мутагены для усиления характеристик.' },
            { id: 'lycan', name: 'Ликан', description: 'Превращение в гибридного зверя.' },
            { id: 'profane_soul', name: 'Проклятая душа', description: 'Заклинания от тёмных сил.' }
        ], subclassLevel: 3
    },
    // 15. Псионик (Mystic)
    {
        id: 'mystic', name: 'Псионик', description: 'Использует силу разума.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Интеллект',
        subclasses: [
            { id: 'wu_jen', name: 'Ву-джен', description: 'Управление стихиями разумом.' },
            { id: 'immortal', name: 'Бессмертный', description: 'Регенерация и усиление тела.' },
            { id: 'nomad', name: 'Кочевник', description: 'Телепортация и пространственные аномалии.' },
            { id: 'awakened', name: 'Пробуждённый', description: 'Чтение мыслей и ментальный контроль.' }
        ], subclassLevel: 1
    },
    // 16. Ведьмак (Witch Hunter) ⭐
    {
        id: 'witch_hunter', name: 'Ведьмак', description: 'Охотник на чудовищ с алхимическими эликсирами и знанием монстров.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила и Интеллект',
        subclasses: [
            { id: 'griffin_school', name: 'Школа Грифона', description: 'Акцент на боевую акробатику и атаки с воздуха.' },
            { id: 'bear_school', name: 'Школа Медведя', description: 'Тяжелая броня и выносливость.' },
            { id: 'cat_school', name: 'Школа Кота', description: 'Проворство и стремительные атаки.' },
            { id: 'viper_school', name: 'Школа Гадюки', description: 'Яды и скрытность.' }
        ], subclassLevel: 3
    },
    // 17. Клинок Духа (Spirit Blade) ⭐
    {
        id: 'spirit_blade', name: 'Клинок Духа', description: 'Призывает оружие из душ и управляет духовной энергией.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Мудрость и Харизма',
        subclasses: [
            { id: 'guardian', name: 'Страж', description: 'Защита союзников с помощью призрачных барьеров.' },
            { id: 'revenant', name: 'Мститель', description: 'Нанесение дополнительного урона по ослабленным врагам.' },
            { id: 'harbinger', name: 'Вестник', description: 'Призывает духи для разведки и контроля.' },
            { id: 'soulbinder', name: 'Узник душ', description: 'Поглощает души для восстановления сил.' }
        ], subclassLevel: 3
    },
    // 18. Рунный мастер (Rune Master) ⭐
    {
        id: 'rune_master', name: 'Рунный мастер', description: 'Вырезает руны на предметах и теле для магических эффектов.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Интеллект',
        subclasses: [
            { id: 'creation', name: 'Путь Созидания', description: 'Усиление союзников и создание защиты.' },
            { id: 'destruction', name: 'Путь Разрушения', description: 'Руны взрываются, нанося урон.' },
            { id: 'transformation', name: 'Путь Преображения', description: 'Изменяет тело с помощью рун.' },
            { id: 'knowledge', name: 'Путь Знаний', description: 'Руны открывают древние секреты.' }
        ], subclassLevel: 2
    },
    // 19. Инквизитор (Inquisitor) ⭐
    {
        id: 'inquisitor', name: 'Инквизитор', description: 'Религиозный детектив, выслеживающий еретиков и тёмных созданий.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Мудрость и Интеллект',
        subclasses: [
            { id: 'purifier', name: 'Очиститель', description: 'Изгнание нежити и демонов.' },
            { id: 'interrogator', name: 'Дознаватель', description: 'Чтение мыслей и принуждение к правде.' },
            { id: 'witchfinder', name: 'Охотник на ведьм', description: 'Обнаружение магии и запретные ритуалы.' },
            { id: 'fanatic', name: 'Фанатик', description: 'Усиление союзников через религиозное рвение.' }
        ], subclassLevel: 3
    },
    // 20. Арканист (Arcanist) ⭐
    {
        id: 'arcanist', name: 'Арканист', description: 'Объединяет божественную и тайную магию, используя молитвы и заклинания.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Интеллект и Мудрость',
        subclasses: [
            { id: 'theurge', name: 'Теург', description: 'Смешивает жреческие и волшебные заклинания.' },
            { id: 'eldritch_weaver', name: 'Плетущий Тайны', description: 'Создаёт комбинированные заклинания.' },
            { id: 'divine_savant', name: 'Божественный эрудит', description: 'Доступ ко всем школам магии.' },
            { id: 'arcane_devotee', name: 'Преданный магии', description: 'Усиливает заклинания при поддержке божества.' }
        ], subclassLevel: 2
    }    ,
    // 21. Тёмный рыцарь (Dark Knight) ⭐
    {
        id: 'dark_knight', name: 'Тёмный рыцарь', description: 'Поглощает тьму и наносит сокрушительные удары с отрицательной энергией.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила и Телосложение',
        subclasses: [
            { id: 'void_reaver', name: 'Жнец пустоты', description: 'Атаки, оставляющие раны с некротическим уроном.' },
            { id: 'shadow_wall', name: 'Стена теней', description: 'Защита союзников, покрывая их тенью.' },
            { id: 'nightmare', name: 'Кошмар', description: 'Вселение ужаса во врагов.' },
            { id: 'death_lord', name: 'Повелитель смерти', description: 'Призывает призрачных слуг.' }
        ], subclassLevel: 3
    },
    // 22. Элементалист (Elementalist) ⭐
    {
        id: 'elementalist', name: 'Элементалист', description: 'Прямое управление стихиями: огонь, вода, земля, воздух.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Мудрость',
        subclasses: [
            { id: 'pyromancer', name: 'Пиромант', description: 'Магия огня во всех проявлениях.' },
            { id: 'hydromancer', name: 'Гидромант', description: 'Контроль воды и холода.' },
            { id: 'geomancer', name: 'Геомант', description: 'Управление землёй и камнем.' },
            { id: 'aeromancer', name: 'Аэромант', description: 'Ветер и молнии.' }
        ], subclassLevel: 2
    },
    // 23. Плутократ (Plutocrat) ⭐
    {
        id: 'plutocrat', name: 'Плутократ', description: 'Использует богатство и связи для влияния на поле боя, нанимая помощников.',
        baseHp: 6, hitDie: 'd6', primaryAbility: 'Интеллект и Харизма',
        subclasses: [
            { id: 'tactician', name: 'Тактик', description: 'Отдаёт приказы, дающие бонусы союзникам.' },
            { id: 'employer', name: 'Наниматель', description: 'Привлекает наёмников-телохранителей.' },
            { id: 'financier', name: 'Финансист', description: 'Использует золото для магии и диверсий.' },
            { id: 'schemer', name: 'Интриган', description: 'Контроль врагов через манипуляции.' }
        ], subclassLevel: 3
    },
    // 24. Биомант (Biomancer) ⭐
    {
        id: 'biomancer', name: 'Биомант', description: 'Изменяет живые организмы и собственную плоть для боя.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Интеллект и Телосложение',
        subclasses: [
            { id: 'fleshweaver', name: 'Ткач плоти', description: 'Исцеление и усиление союзников.' },
            { id: 'mutagenist', name: 'Мутагенист', description: 'Боевые мутации с риском нестабильности.' },
            { id: 'plaguebearer', name: 'Носитель чумы', description: 'Распространяет болезни среди врагов.' },
            { id: 'symbiotic', name: 'Симбионт', description: 'Создаёт паразитов для атаки.' }
        ], subclassLevel: 3
    },
    // 25. Ловец снов (Dreamcatcher) ⭐
    {
        id: 'dreamcatcher', name: 'Ловец снов', description: 'Управляет снами и кошмарами, чтобы терзать противников.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Мудрость и Харизма',
        subclasses: [
            { id: 'nightmare_weaver', name: 'Ткач кошмаров', description: 'Наносит психический урон во сне.' },
            { id: 'dream_healer', name: 'Целитель снов', description: 'Восстановление союзников через сны.' },
            { id: 'prophet', name: 'Пророк', description: 'Предвидение будущего в трансе.' },
            { id: 'lucid_warrior', name: 'Осознанный воин', description: 'Входит в боевой транс во сне.' }
        ], subclassLevel: 3
    },
    // 26. Хранитель (Warden) – защитник природы
    {
        id: 'warden', name: 'Хранитель', description: 'Природный страж, использующий силу земли для защиты.',
        baseHp: 12, hitDie: 'd12', primaryAbility: 'Телосложение и Мудрость',
        subclasses: [
            { id: 'earth_guardian', name: 'Земной страж', description: 'Увеличивает выносливость и защиту.' },
            { id: 'storm_sentinel', name: 'Хранитель бури', description: 'Электрические атаки и контроль погоды.' },
            { id: 'blooming_ward', name: 'Цветущий щит', description: 'Лечение союзников растениями.' },
            { id: 'frost_warden', name: 'Ледяной страж', description: 'Замедление врагов ледяными оковами.' }
        ], subclassLevel: 3
    },
    // 27. Божественный кулак (Sacred Fist) – смесь монаха и жреца
    {
        id: 'sacred_fist', name: 'Божественный кулак', description: 'Монах, получивший божественные силы.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Ловкость и Мудрость',
        subclasses: [
            { id: 'radiant_palm', name: 'Ладонь света', description: 'Наносит урон излучением.' },
            { id: 'shadow_strike', name: 'Теневой удар', description: 'Скрытность и атаки исподтишка.' },
            { id: 'healing_hand', name: 'Исцеляющая рука', description: 'Лечение касанием.' },
            { id: 'vow_of_poverty', name: 'Обет бедности', description: 'Отказ от снаряжения ради бонусов.' }
        ], subclassLevel: 3
    },
    // 28. Маг-воришка (Spellthief) – ворует заклинания
    {
        id: 'spellthief', name: 'Маг-воришка', description: 'Скрытный вор, крадущий заклинания и магическую энергию.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Ловкость и Интеллект',
        subclasses: [
            { id: 'arcane_siphon', name: 'Магический насос', description: 'Поглощает заклинания и конвертирует в урон.' },
            { id: 'identity_thief', name: 'Вор личности', description: 'Копирует облик и заклинания цели.' },
            { id: 'shadow_scout', name: 'Теневой разведчик', description: 'Телепортация и невидимость.' },
            { id: 'curse_spitter', name: 'Проклинатель', description: 'Возвращает врагу его же магию с дебаффами.' }
        ], subclassLevel: 3
    },
    // 29. Коллегия магии (Magewright) – ремесленник-заклинатель
    {
        id: 'magewright', name: 'Мастер-заклинатель', description: 'Сочетает ремесленные навыки с магией для создания временных артефактов.',
        baseHp: 6, hitDie: 'd6', primaryAbility: 'Интеллект',
        subclasses: [
            { id: 'enchanter', name: 'Зачарователь', description: 'Временно улучшает оружие и броню.' },
            { id: 'golem_builder', name: 'Строитель големов', description: 'Создаёт магических слуг.' },
            { id: 'potioneer', name: 'Зельевар', description: 'Усиленные зелья и эликсиры.' },
            { id: 'trap_master', name: 'Мастер ловушек', description: 'Магические мины и капканы.' }
        ], subclassLevel: 2
    },
    // 30. Демонолог (Demonologist) – призывает демонов
    {
        id: 'demonologist', name: 'Демонолог', description: 'Призывает и контролирует демонов, рискуя собственной душой.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Интеллект и Харизма',
        subclasses: [
            { id: 'summoner', name: 'Призыватель', description: 'Вызывает мощных демонов на помощь.' },
            { id: 'binder', name: 'Связыватель', description: 'Заключает демонов в предметы.' },
            { id: 'corruptor', name: 'Исказитель', description: 'Ослабляет врагов тёмной энергией.' },
            { id: 'hellfire', name: 'Адское пламя', description: 'Атакует огнём преисподней.' }
        ], subclassLevel: 1
    },
    // 31. Серафим (Seraph) – небесный воин
    {
        id: 'seraph', name: 'Серафим', description: 'Смертный, наделённый силой высших планов.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила и Харизма',
        subclasses: [
            { id: 'wings_of_light', name: 'Крылья света', description: 'Полёт и атаки с воздуха.' },
            { id: 'holy_ward', name: 'Священный щит', description: 'Защита союзников от зла.' },
            { id: 'judgement', name: 'Суд', description: 'Мощные атаки излучением.' },
            { id: 'redemption', name: 'Искупление', description: 'Обращение врагов в бегство.' }
        ], subclassLevel: 3
    },
    // 32. Теневой маг (Shadowcaster) – магия из царства теней
    {
        id: 'shadowcaster', name: 'Теневой маг', description: 'Черпает силы из Плана Теней.',
        baseHp: 6, hitDie: 'd6', primaryAbility: 'Интеллект или Харизма',
        subclasses: [
            { id: 'umbral_weaver', name: 'Ткач мрака', description: 'Создаёт осязаемые тени.' },
            { id: 'night_stalker', name: 'Ночной охотник', description: 'Скрытность и урон из темноты.' },
            { id: 'void_caller', name: 'Зовущий пустоту', description: 'Призывает существ из теней.' },
            { id: 'eclipse', name: 'Затмение', description: 'Ослабляет врагов, гася свет.' }
        ], subclassLevel: 2
    },
    // 33. Оборотень (Lycanthrope) – управляемый зверь внутри
    {
        id: 'lycanthrope', name: 'Оборотень', description: 'Персонаж, способный принимать гибридную форму зверя.',
        baseHp: 12, hitDie: 'd12', primaryAbility: 'Сила или Ловкость',
        subclasses: [
            { id: 'wolf', name: 'Волк', description: 'Тактика стаи и урон когтями.' },
            { id: 'bear', name: 'Медведь', description: 'Живучесть и мощные атаки.' },
            { id: 'tiger', name: 'Тигр', description: 'Скорость и прыжки.' },
            { id: 'rat', name: 'Крыса', description: 'Увёртливость и болезни.' }
        ], subclassLevel: 3
    },
    // 34. Самурай (Samurai) – восточный воин
    {
        id: 'samurai', name: 'Самурай', description: 'Мастер меча с железной дисциплиной и духом.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила или Ловкость',
        subclasses: [
            { id: 'kensei', name: 'Кенсей', description: 'Оружейный мастер.' },
            { id: 'shogun', name: 'Сёгун', description: 'Лидерские способности и тактика.' },
            { id: 'ronin', name: 'Ронин', description: 'Боец без хозяина, выносливый и бронированный.' },
            { id: 'sohei', name: 'Сохей', description: 'Монах-воин с божественной поддержкой.' }
        ], subclassLevel: 3
    },
    // 35. Менталист (Mentalist) – псионик-иллюзионист
    {
        id: 'mentalist', name: 'Менталист', description: 'Воздействует на разум, создавая иллюзии и контролируя мысли.',
        baseHp: 6, hitDie: 'd6', primaryAbility: 'Интеллект и Харизма',
        subclasses: [
            { id: 'hypnotist', name: 'Гипнотизёр', description: 'Внушение и сон.' },
            { id: 'telepath', name: 'Телепат', description: 'Чтение мыслей и связь на расстоянии.' },
            { id: 'illusionist', name: 'Иллюзионист', description: 'Реалистичные иллюзии.' },
            { id: 'emotional', name: 'Эмпат', description: 'Управляет эмоциями для баффов/дебаффов.' }
        ], subclassLevel: 3
    },
    // 36. Клятвопреступник (Oathbreaker) – павший паладин
    {
        id: 'oathbreaker', name: 'Клятвопреступник', description: 'Паладин, отвергнувший свою клятву ради тёмной силы.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Сила и Харизма',
        subclasses: [
            { id: 'death_knight', name: 'Рыцарь смерти', description: 'Управление нежитью и некротический урон.' },
            { id: 'tyrant', name: 'Тиран', description: 'Контроль над слабыми через страх.' },
            { id: 'fallen_angel', name: 'Падший ангел', description: 'Тёмное сияние и крылья.' },
            { id: 'desecrator', name: 'Осквернитель', description: 'Разрушает святыни и исцеляется от зла.' }
        ], subclassLevel: 3
    },
    // 37. Фаталист (Fatalist) – видит судьбу
    {
        id: 'fatalist', name: 'Фаталист', description: 'Читает нити судьбы и накладывает проклятия.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Мудрость',
        subclasses: [
            { id: 'fortune_teller', name: 'Гадатель', description: 'Предсказывает исходы, давая преимущество.' },
            { id: 'curse_bearer', name: 'Носитель проклятий', description: 'Насылает порчу на врагов.' },
            { id: 'fate_weaver', name: 'Ткач судьбы', description: 'Меняет вероятности.' },
            { id: 'doombringer', name: 'Вестник рока', description: 'Усиливает урон по обречённым целям.' }
        ], subclassLevel: 2
    },
    // 38. Шут (Jester) – хаотичный баффер/дебаффер
    {
        id: 'jester', name: 'Шут', description: 'Вносит хаос на поле боя с помощью насмешек и трюков.',
        baseHp: 8, hitDie: 'd8', primaryAbility: 'Ловкость и Харизма',
        subclasses: [
            { id: 'trickster', name: 'Трикстер', description: 'Иллюзии и обман.' },
            { id: 'acrobat', name: 'Акробат', description: 'Уклонение и быстрые атаки.' },
            { id: 'harlequin', name: 'Арлекин', description: 'Заряжает союзников смехом.' },
            { id: 'prankster', name: 'Проказник', description: 'Ловушки и сюрпризы для врагов.' }
        ], subclassLevel: 3
    },
    // 39. Егерь (Ranger вариант) – классический охотник
    {
        id: 'hunter_ranger', name: 'Егерь', description: 'Эксперт по выживанию и выслеживанию.',
        baseHp: 10, hitDie: 'd10', primaryAbility: 'Ловкость и Мудрость',
        subclasses: [
            { id: 'big_game', name: 'Охотник на крупную дичь', description: 'Усиленный урон по большим целям.' },
            { id: 'trapper', name: 'Ловчий', description: 'Установка капканов и засад.' },
            { id: 'falconer', name: 'Сокольничий', description: 'Верный сокол-компаньон.' },
            { id: 'survivalist', name: 'Выживальщик', description: 'Иммунитет к экстремальной среде.' }
        ], subclassLevel: 3
    },
    // 40. Волшебник крови (Blood Mage) – жертвует здоровьем для магии
    {
        id: 'blood_mage', name: 'Волшебник крови', description: 'Использует жизненную силу для усиления заклинаний.',
        baseHp: 6, hitDie: 'd6', primaryAbility: 'Интеллект или Телосложение',
        subclasses: [
            { id: 'hemomancer', name: 'Гемомант', description: 'Управление кровью врагов.' },
            { id: 'sacrificial', name: 'Жрец жертвоприношений', description: 'Усиливает заклинания за счёт хитов.' },
            { id: 'plague_doctor', name: 'Чумной доктор', description: 'Болезни и лекарства.' },
            { id: 'marrow_mage', name: 'Маг костного мозга', description: 'Укрепляет тело с помощью крови.' }
        ], subclassLevel: 1
    }
];

// ========== СПОСОБНОСТИ И ЧЕРТЫ ==========
const abilities = [
    {
        id: 'power_attack',
        name: 'Мощный удар',
        type: 'feat',
        description: 'Вы можете пожертвовать точностью ради силы. -2 к атаке, +4 к урону.',
        bonuses: {}
    },
    {
        id: 'darkvision',
        name: 'Ночное зрение',
        type: 'racial',
        description: 'Видите в темноте до 60 футов.',
        bonuses: {}
    },
    {
        id: 'sneak_attack',
        name: 'Скрытая атака',
        type: 'class',
        description: 'Дополнительный урон 1d6 при атаке исподтишка.',
        bonuses: {}
    },
    {
        id: 'spellcasting',
        name: 'Заклинатель',
        type: 'class',
        description: 'Вы можете творить заклинания.',
        bonuses: {}
    }
];

// ========== СНАРЯЖЕНИЕ И АРТЕФАКТЫ ==========
const equipment = [
    {
        id: 'longsword',
        name: 'Длинный меч',
        type: 'weapon',
        description: 'Универсальное оружие, 1d8 рубящего урона.',
        bonuses: {}
    },
    {
        id: 'leather_armor',
        name: 'Кожаный доспех',
        type: 'armor',
        description: 'Лёгкий доспех, КД 11 + мод. Ловкости.',
        bonuses: { ac: 1 }
    },
    {
        id: 'ring_of_protection',
        name: 'Кольцо защиты',
        type: 'artifact',
        description: 'Увеличивает КД на 1.',
        bonuses: { ac: 1 }
    },
    {
        id: 'belt_of_giant_strength',
        name: 'Пояс силы великана',
        type: 'artifact',
        description: 'Устанавливает Силу равной 21.',
        bonuses: { str: 21 }
    }
];

// ========== ЗАКЛИНАНИЯ ==========
const spells = [
    // =======================================================================
    // Заговоры (0 уровень)
    // =======================================================================
    { id: 'acid_splash', name: 'Кислотный всплеск', level: 0, school: 'Воплощение', description: 'Вы кидаете пузырёк кислоты. Одно существо или две цели в радиусе 5 фт должны совершить спасбросок Ловкости, иначе получат 1d6 урона кислотой.' },
    { id: 'chill_touch', name: 'Леденящее прикосновение', level: 0, school: 'Некромантия', description: 'Призрачная рука атакует цель. При попадании — 1d8 некротического урона, цель не может восстанавливать хиты до начала вашего следующего хода.' },
    { id: 'dancing_lights', name: 'Танцующие огоньки', level: 0, school: 'Воплощение', description: 'Создаёте до четырёх светящихся шаров, похожих на факелы, которые летают по вашей команде.' },
    { id: 'fire_bolt', name: 'Огненный снаряд', level: 0, school: 'Воплощение', description: 'Кидаете сгусток огня. Дальнобойная атака заклинанием, урон 1d10 огнём.' },
    { id: 'light', name: 'Свет', level: 0, school: 'Воплощение', description: 'Касаетесь предмета, и он излучает яркий свет в радиусе 20 фт и тусклый свет ещё на 20 фт.' },
    { id: 'mage_hand', name: 'Волшебная рука', level: 0, school: 'Вызов', description: 'Появляется призрачная рука, которая может манипулировать предметами на расстоянии до 30 фт.' },
    { id: 'minor_illusion', name: 'Малая иллюзия', level: 0, school: 'Иллюзия', description: 'Создаёте звук или образ предмета в радиусе 30 фт на 1 минуту.' },
    { id: 'poison_spray', name: 'Ядовитый плевок', level: 0, school: 'Вызов', description: 'Цель должна совершить спасбросок Телосложения, иначе получает 1d12 урона ядом.' },
    { id: 'prestidigitation', name: 'Фокусы', level: 0, school: 'Преобразование', description: 'Маленькие магические трюки: зажечь/потушить свечу, очистить вещь, создать безвкусную еду и т.п.' },
    { id: 'ray_of_frost', name: 'Луч холода', level: 0, school: 'Воплощение', description: 'Ледяной луч снижает скорость цели на 10 фт и наносит 1d8 урона холодом.' },
    { id: 'shocking_grasp', name: 'Электрический разряд', level: 0, school: 'Воплощение', description: 'Молния бьёт цель при касании. Преимущество, если цель в металлическом доспехе. Урон 1d8 электричеством, цель теряет реакцию.' },
    { id: 'thorn_whip', name: 'Терновый кнут', level: 0, school: 'Преобразование', description: 'Создаёте длинную колючую лозу, которая бьёт цель на расстоянии до 30 фт, нанося 1d6 колющего урона и подтягивая её на 10 фт.' },
    { id: 'vicious_mockery', name: 'Злобная насмешка', level: 0, school: 'Очарование', description: 'Поток оскорблений. Цель должна совершить спасбросок Мудрости, иначе получает 1d4 психического урона и помеху на следующую атаку.' },
    { id: 'guidance', name: 'Наставление', level: 0, school: 'Прорицание', description: 'Даёте союзнику бонус 1d4 к одной проверке характеристики по его выбору в течение минуты.' },
    { id: 'resistance', name: 'Сопротивление', level: 0, school: 'Ограждение', description: 'Касаетесь существа, давая ему бонус 1d4 к одному спасброску. Концентрация до 1 минуты.' },
    { id: 'sacred_flame', name: 'Священное пламя', level: 0, school: 'Воплощение', description: 'С небес нисходит сияние. Цель должна совершить спасбросок Ловкости, иначе получает 1d8 урона излучением.' },
    { id: 'thaumaturgy', name: 'Чудотворство', level: 0, school: 'Преобразование', description: 'Малые чудеса: голос становится громче, пламя мерцает, земля дрожит и т.п.' },
    { id: 'eldritch_blast', name: 'Мистический заряд', level: 0, school: 'Воплощение', description: 'Луч потусторонней энергии. Дальнобойная атака заклинанием, 1d10 урона силовым полем. На высоких уровнях создаёт дополнительные лучи.' },
    { id: 'mending', name: 'Починка', level: 0, school: 'Преобразование', description: 'Чините мелкие поломки предмета (разрыв, трещину до 1 фута).' },
    { id: 'message', name: 'Сообщение', level: 0, school: 'Преобразование', description: 'Шёпотом передаёте сообщение существу в пределах 120 фт, и оно может ответить.' },

    // =======================================================================
    // 1 уровень
    // =======================================================================
    { id: 'magic_missile', name: 'Волшебная стрела', level: 1, school: 'Воплощение', description: 'Три светящиеся стрелы автоматически поражают цели, каждая наносит 1d4+1 урона силовым полем.' },
    { id: 'burning_hands', name: 'Горящие руки', level: 1, school: 'Воплощение', description: 'Из ваших ладоней вырывается 15-футовый конус огня. Существа в зоне получают 3d6 урона огнём (спасбросок Ловкости уменьшает вдвое).' },
    { id: 'charm_person', name: 'Очарование личности', level: 1, school: 'Очарование', description: 'Гуманоид в радиусе 30 фт должен преуспеть в спасброске Мудрости, иначе станет очарованным вами на 1 час.' },
    { id: 'color_spray', name: 'Цветной спрей', level: 1, school: 'Иллюзия', description: 'Из руки вырывается веер ослепительных цветов. Существа с наименьшим количеством хитов в конусе 15 фт ослепляются на 1 раунд.' },
    { id: 'cure_wounds', name: 'Лечение ран', level: 1, school: 'Воплощение', description: 'Касаетесь существа и восстанавливаете ему 1d8 + мод. заклинательной характеристики хитов.' },
    { id: 'detect_magic', name: 'Обнаружение магии', level: 1, school: 'Прорицание', description: 'Чувствуете магию в радиусе 30 фт и можете определить её школу.' },
    { id: 'disguise_self', name: 'Маскировка', level: 1, school: 'Иллюзия', description: 'Меняете свою внешность, включая одежду и снаряжение, на 1 час.' },
    { id: 'faerie_fire', name: 'Волшебный огонь', level: 1, school: 'Воплощение', description: 'Очерчиваете область светящимся контуром. Существа в зоне не могут стать невидимыми, атаки против них имеют преимущество.' },
    { id: 'feather_fall', name: 'Перистое падение', level: 1, school: 'Преобразование', description: 'Вы и до пяти существ в радиусе 60 фт замедляете падение до скорости 60 фт в раунд.' },
    { id: 'fog_cloud', name: 'Туманное облако', level: 1, school: 'Вызов', description: 'Создаёте сферу густого тумана радиусом 20 фт, сильно затрудняющую видимость.' },
    { id: 'grease', name: 'Смазка', level: 1, school: 'Вызов', description: 'Покрываете пол скользкой смазкой в квадрате 10 фт. Существа должны преуспевать в спасброске Ловкости, иначе падают.' },
    { id: 'healing_word', name: 'Исцеляющее слово', level: 1, school: 'Воплощение', description: 'Бонусным действием восстанавливаете видимому существу 1d4 + мод. заклинательной характеристики хитов.' },
    { id: 'inflict_wounds', name: 'Нанесение ран', level: 1, school: 'Некромантия', description: 'Касанием наносите 3d10 некротического урона.' },
    { id: 'mage_armor', name: 'Доспех мага', level: 1, school: 'Ограждение', description: 'Наделяете существо без доспеха магической защитой, его КД становится 13 + мод. Ловкости на 8 часов.' },
    { id: 'shield', name: 'Щит', level: 1, school: 'Ограждение', description: 'Реакцией создаёте магический барьер, дающий +5 к КД до начала вашего следующего хода.' },
    { id: 'sleep', name: 'Сон', level: 1, school: 'Очарование', description: 'Усыпляете существ в области 20 фт, начиная с самых слабых (по текущим хитам), пока сумма хитов не превысит 5d8.' },
    { id: 'thunderwave', name: 'Волна грома', level: 1, school: 'Воплощение', description: 'Громовая волна расходится кубом со стороной 15 фт. Существа получают 2d8 урона звуком и отталкиваются на 10 фт.' },
    { id: 'witch_bolt', name: 'Ведьмин снаряд', level: 1, school: 'Воплощение', description: 'Луч молнии связывает вас с целью. Концентрация: можно действием автоматически наносить 1d12 урона электричеством каждый ход.' },
    { id: 'bless', name: 'Благословение', level: 1, school: 'Очарование', description: 'Даёте трём союзникам бонус 1d4 к броскам атаки и спасброскам на 1 минуту (концентрация).' },
    { id: 'command', name: 'Приказ', level: 1, school: 'Очарование', description: 'Отдаёте односложную команду существу ("Брось", "Беги", "Падай"). При провале спасброска Мудрости цель подчиняется на 1 раунд.' },
    { id: 'armor_of_agathys', name: 'Доспех Агатиса', level: 1, school: 'Ограждение', description: 'Получаете 5 временных хитов, и пока они есть, атаковавшие вас в ближнем бою получают 5 урона холодом.' },
    { id: 'bane', name: 'Проклятие', level: 1, school: 'Очарование', description: 'Три цели в радиусе 30 фт должны вычитать 1d4 из бросков атаки и спасбросков.' },
    { id: 'expeditious_retreat', name: 'Поспешное отступление', level: 1, school: 'Преобразование', description: 'Бонусным действием вы можете совершать Рывок в течение 10 минут (концентрация).' },
    { id: 'hellish_rebuke', name: 'Адский упрёк', level: 1, school: 'Воплощение', description: 'Реакцией на получение урона цель в 60 фт должна совершить спасбросок Ловкости, иначе получает 2d10 урона огнём.' },
    { id: 'heroism', name: 'Героизм', level: 1, school: 'Очарование', description: 'Союзник получает временные хиты в размере мод. заклинательной характеристики каждый ход и иммунитет к страху на 1 минуту.' },
    { id: 'ice_knife', name: 'Ледяной нож', level: 1, school: 'Вызов', description: 'Метаете осколок льда. При попадании — 1d10 колющего урона, затем взрыв холодом на 2d6 (спасбросок Ловкости) в радиусе 5 фт.' },
    { id: 'tashas_hideous_laughter', name: 'Жуткий смех Таши', level: 1, school: 'Очарование', description: 'Цель падает от смеха, теряя возможность действовать, пока не преуспеет в спасброске Мудрости в конце своего хода.' },
    { id: 'wrathful_smite', name: 'Гневный удар', level: 1, school: 'Воплощение', description: 'Следующая атака оружием наносит дополнительный 1d6 психического урона и пугает цель (спасбросок Мудрости).' },
    { id: 'zephyr_strike', name: 'Удар зефира', level: 1, school: 'Преобразование', description: 'На 1 минуту вы не провоцируете атаки при движении, и одна атака оружием получает преимущество и доп. урон 1d8 силовым полем.' },

    // =======================================================================
    // 2 уровень
    // =======================================================================
    { id: 'acid_arrow', name: 'Кислотная стрела', level: 2, school: 'Воплощение', description: 'Запускаете кислотную стрелу. Дальнобойная атака заклинанием, 4d4 урона кислотой сразу и 2d4 в конце следующего хода цели.' },
    { id: 'blur', name: 'Размытие', level: 2, school: 'Иллюзия', description: 'Ваше тело становится размытым. Атакующие по вам совершают броски с помехой на 1 минуту (концентрация).' },
    { id: 'darkness', name: 'Тьма', level: 2, school: 'Воплощение', description: 'Создаёте сферу магической тьмы радиусом 15 фт, через которую не проходит обычное зрение, даже тёмное.' },
    { id: 'flaming_sphere', name: 'Пылающая сфера', level: 2, school: 'Вызов', description: 'Создаёте шар огня диаметром 5 фт, который можно перемещать и таранить врагов, нанося 2d6 урона огнём.' },
    { id: 'hold_person', name: 'Удержание личности', level: 2, school: 'Очарование', description: 'Гуманоид в радиусе 60 фт должен преуспеть в спасброске Мудрости, иначе становится парализованным на 1 минуту (концентрация).' },
    { id: 'invisibility', name: 'Невидимость', level: 2, school: 'Иллюзия', description: 'Становитесь невидимым на 1 час (концентрация), пока не атакуете или не накладываете другое заклинание.' },
    { id: 'mirror_image', name: 'Зеркальное отражение', level: 2, school: 'Иллюзия', description: 'Создаёте 3 иллюзорных дубликата. Каждая атака, направленная на вас, может попасть по дубликату, разрушая его (бросок d20).' },
    { id: 'misty_step', name: 'Туманный шаг', level: 2, school: 'Вызов', description: 'Бонусным действием телепортируетесь на расстояние до 30 фт в свободное пространство, видимое вами.' },
    { id: 'scorching_ray', name: 'Палящий луч', level: 2, school: 'Воплощение', description: 'Создаёте три огненных луча, каждый дальнобойной атакой заклинанием наносит 2d6 урона огнём.' },
    { id: 'shatter', name: 'Разрушение', level: 2, school: 'Воплощение', description: 'Громкий звон в радиусе 10 фт наносит 3d8 урона звуком существам и разрушает хрупкие предметы.' },
    { id: 'suggestion', name: 'Внушение', level: 2, school: 'Очарование', description: 'Внушаете существу курс действий (одну-две фразы). При провале спасброска Мудрости оно выполняет внушение до 8 часов.' },
    { id: 'web', name: 'Паутина', level: 2, school: 'Вызов', description: 'Заполняете область липкой паутиной. Существа, входящие в неё, должны совершать спасброски Силы, иначе опутываются.' },
    { id: 'spiritual_weapon', name: 'Духовное оружие', level: 2, school: 'Воплощение', description: 'Создаёте парящее оружие, которое бьёт врагов в радиусе 60 фт. Бонусным действием можно атаковать им (1d8 + мод. заклинательной характеристики силового урона).' },
    { id: 'moonbeam', name: 'Лунный луч', level: 2, school: 'Воплощение', description: 'Серебристый луч нисходит с небес, нанося 2d10 урона излучением существам, начинающим ход в зоне.' },
    { id: 'pass_without_trace', name: 'Скрытность', level: 2, school: 'Ограждение', description: 'Вы и до десяти союзников получаете +10 к проверкам Скрытности на 1 час.' },
    { id: 'silence', name: 'Тишина', level: 2, school: 'Иллюзия', description: 'Создаёте сферу радиусом 20 фт, в которой не может возникать звук и существа невосприимчивы к урону звуком на 10 минут.' },
    { id: 'blindness_deafness', name: 'Слепота/глухота', level: 2, school: 'Некромантия', description: 'Цель должна совершать спасброски Телосложения, иначе становится слепой или глухой (ваш выбор) на 1 минуту.' },
    { id: 'enhance_ability', name: 'Улучшение характеристик', level: 2, school: 'Преобразование', description: 'Касаетесь существа и даёте ему преимущество на проверки одной выбранной характеристики на 1 час.' },
    { id: 'find_traps', name: 'Поиск ловушек', level: 2, school: 'Прорицание', description: 'Чувствуете наличие любых ловушек в радиусе 120 фт, но не их точное местоположение.' },
    { id: 'knock', name: 'Стук', level: 2, school: 'Преобразование', description: 'Открываете запертый замок, дверь или контейнер на расстоянии 60 фт, включая запертые магией.' },

    // =======================================================================
    // 3 уровень
    // =======================================================================
    { id: 'fireball', name: 'Огненный шар', level: 3, school: 'Воплощение', description: 'Яркая вспышка во взрыве радиусом 20 фт наносит 8d6 урона огнём (спасбросок Ловкости уменьшает вдвое).' },
    { id: 'lightning_bolt', name: 'Молния', level: 3, school: 'Воплощение', description: 'Разряд молнии бьёт линией 100 фт, нанося 8d6 урона электричеством (спасбросок Ловкости уменьшает вдвое).' },
    { id: 'haste', name: 'Ускорение', level: 3, school: 'Преобразование', description: 'Существо получает +2 к КД, преимущество к спасброскам Ловкости, дополнительное действие (Атака, Рывок, Отход, Использование предмета) на 1 минуту (концентрация).' },
    { id: 'slow', name: 'Замедление', level: 3, school: 'Преобразование', description: 'До шести существ в кубе 40 фт замедляются: −2 КД, −2 к спасброскам Ловкости, могут использовать либо действие либо бонусное действие, только одна атака за ход.' },
    { id: 'fly', name: 'Полёт', level: 3, school: 'Преобразование', description: 'Даёте существу скорость полёта 60 фт на 10 минут (концентрация).' },
    { id: 'counterspell', name: 'Контрзаклинание', level: 3, school: 'Ограждение', description: 'Пытаетесь прервать сотворение заклинания врагом. Если заклинание 3 уровня или ниже — оно автоматически проваливается, иначе проверка заклинательной характеристики (Сл 10 + уровень).' },
    { id: 'dispel_magic', name: 'Рассеивание магии', level: 3, school: 'Ограждение', description: 'Оканчиваете одно заклинание 3 уровня или ниже на цели. Для более высоких уровней требуется проверка заклинательной характеристики.' },
    { id: 'fear', name: 'Ужас', level: 3, school: 'Иллюзия', description: 'Вселяете ужас в конусе 30 фт. Существа при провале спасброска Мудрости роняют оружие и бегут прочь на 1 минуту.' },
    { id: 'stinking_cloud', name: 'Зловонное облако', level: 3, school: 'Вызов', description: 'Создаёте облако удушливого газа радиусом 20 фт. Существа внутри должны преуспеть в спасброске Телосложения, иначе тратят действие на рвотные позывы.' },
    { id: 'tongues', name: 'Языки', level: 3, school: 'Прорицание', description: 'Можете понимать и говорить на любом языке 1 час.' },
    { id: 'vampiric_touch', name: 'Прикосновение вампира', level: 3, school: 'Некромантия', description: 'Касание наносит 3d6 некротического урона и исцеляет вас на половину этой величины. Можно повторять действие каждый ход в течение 1 минуты.' },
    { id: 'animate_dead', name: 'Оживление мертвецов', level: 3, school: 'Некромантия', description: 'Создаёте зомби или скелета из трупа гуманоида. Они подчиняются вашим командам на 24 часа.' },
    { id: 'bestow_curse', name: 'Насылание проклятия', level: 3, school: 'Некромантия', description: 'Касаетесь существа и накладываете проклятие (помеха на проверки, спасброски или атаки, либо дополнительный урон 1d8).' },
    { id: 'clairvoyance', name: 'Ясновидение', level: 3, school: 'Прорицание', description: 'Создаёте невидимый датчик в известном месте в радиусе 1 мили, через который можете видеть или слышать в течение 10 минут.' },
    { id: 'gaseous_form', name: 'Газообразная форма', level: 3, school: 'Преобразование', description: 'Превращаете согласное существо в облако тумана с полётом 10 фт, которое может проходить через маленькие отверстия.' },
    { id: 'hypnotic_pattern', name: 'Гипнотический узор', level: 3, school: 'Иллюзия', description: 'Создаёте разноцветный узор в кубе 30 фт. Существа должны преуспеть в спасброске Мудрости, иначе очарованы и недееспособны.' },
    { id: 'remove_curse', name: 'Снятие проклятия', level: 3, school: 'Ограждение', description: 'Касаетесь существа или предмета и оканчиваете все проклятия на нём.' },
    { id: 'speak_with_dead', name: 'Разговор с мёртвыми', level: 3, school: 'Некромантия', description: 'Задаёте до 5 вопросов мёртвому телу, душа которого может ответить, используя знания, которые имела при жизни.' },
    { id: 'spirit_guardians', name: 'Духовные стражи', level: 3, school: 'Вызов', description: 'Призываете духов для защиты области вокруг вас на 10 минут. Враги в радиусе 15 фт считают местность труднопроходимой и получают 3d8 урона излучением.' },
    { id: 'water_breathing', name: 'Подводное дыхание', level: 3, school: 'Преобразование', description: 'Даёте до десяти существам способность дышать под водой на 24 часа.' },

    // =======================================================================
    // 4 уровень
    // =======================================================================
    { id: 'arcane_eye', name: 'Магический глаз', level: 4, school: 'Прорицание', description: 'Создаёте невидимый летающий глаз, который передаёт вам зрительную информацию в течение 1 часа.' },
    { id: 'banishment', name: 'Изгнание', level: 4, school: 'Ограждение', description: 'Пытаетесь отправить существо в другой план. При провале спасброска Харизмы цель исчезает на 1 минуту (если с другого плана — навсегда).' },
    { id: 'blight', name: 'Увядание', level: 4, school: 'Некромантия', description: 'Вытягиваете влагу из существа, нанося 8d8 некротического урона (спасбросок Телосложения уменьшает вдвое).' },
    { id: 'dimension_door', name: 'Пространственная дверь', level: 4, school: 'Вызов', description: 'Телепортируетесь в видимое место до 500 фт и можете взять с собой одно согласное существо.' },
    { id: 'greater_invisibility', name: 'Высшая невидимость', level: 4, school: 'Иллюзия', description: 'Становитесь невидимым на 1 минуту, даже когда атакуете или колдуете (концентрация).' },
    { id: 'ice_storm', name: 'Ледяная буря', level: 4, school: 'Воплощение', description: 'Град и лёд обрушиваются на цилиндр радиусом 20 фт, нанося 2d8 дробящего и 4d6 урона холодом. Земля становится труднопроходимой.' },
    { id: 'phantasmal_killer', name: 'Фантомный убийца', level: 4, school: 'Иллюзия', description: 'Создаёте иллюзию кошмара. Цель должна преуспеть в спасброске Мудрости, иначе получает 4d10 психического урона каждый ход, пока видит иллюзию.' },
    { id: 'polymorph', name: 'Превращение', level: 4, school: 'Преобразование', description: 'Превращаете существо в зверя с рейтингом опасности не выше уровня персонажа. Длится до 1 часа (концентрация).' },
    { id: 'wall_of_fire', name: 'Стена огня', level: 4, school: 'Воплощение', description: 'Создаёте стену пламени, которая наносит 5d8 урона огнём проходящим сквозь неё и 5d8 тем, кто заканчивает ход в зоне.' },
    { id: 'confusion', name: 'Смятение', level: 4, school: 'Очарование', description: 'Существа в радиусе 10 фт должны преуспеть в спасброске Мудрости, иначе каждый ход определяют своё поведение случайным образом (бросок d10).' },
    { id: 'death_ward', name: 'Защита от смерти', level: 4, school: 'Ограждение', description: 'Касаетесь существа: если его хиты впервые опустятся до 0, они становятся равны 1. Длится 8 часов.' },
    { id: 'faithful_hound', name: 'Верный пёс', level: 4, school: 'Вызов', description: 'Создаёте призрачного пса, который охраняет область и лает на приближающихся существ, а также может атаковать (4d8 колющего урона).' },
    { id: 'freedom_of_movement', name: 'Свобода перемещения', level: 4, school: 'Ограждение', description: 'Касаетесь существа: его скорость не может быть уменьшена, оно не может быть парализовано или схвачено. Длится 1 час.' },
    { id: 'locate_creature', name: 'Поиск существа', level: 4, school: 'Прорицание', description: 'Назовите знакомое существо. Вы чувствуете направление к нему в радиусе 1000 фт в течение 1 часа.' },
    { id: 'stone_shape', name: 'Обработка камня', level: 4, school: 'Преобразование', description: 'Придаёте куску камня любую форму, связанную с ним, или создаёте простое отверстие.' },
    { id: 'stoneskin', name: 'Каменная кожа', level: 4, school: 'Ограждение', description: 'Касаетесь существа, давая ему сопротивление дробящему, колющему и рубящему урону немагического оружия на 1 час (концентрация).' },
    { id: 'vitriolic_sphere', name: 'Кислотная сфера', level: 4, school: 'Воплощение', description: 'Взрыв кислоты радиусом 20 фт наносит 10d4 урона кислотой (спасбросок Ловкости уменьшает вдвое) и 5d4 в конце следующего хода.' },
    { id: 'wall_of_stone', name: 'Стена камня', level: 4, school: 'Воплощение', description: 'Создаёте стену из камня, которая может быть разрушена только физически (КД 15, 30 хитов на дюйм толщины).' }    ,

    // =======================================================================
    // 5 уровень
    // =======================================================================
    { id: 'cloudkill', name: 'Облако смерти', level: 5, school: 'Вызов', description: 'Создаёте ядовитое облако радиусом 20 фт, которое движется от вас. Существа внутри получают 5d8 урона ядом каждый ход (спасбросок Телосложения уменьшает вдвое).' },
    { id: 'cone_of_cold', name: 'Конус холода', level: 5, school: 'Воплощение', description: '60-футовый конус ледяного воздуха наносит 8d8 урона холодом (спасбросок Телосложения уменьшает вдвое).' },
    { id: 'dominate_person', name: 'Господство над личностью', level: 5, school: 'Очарование', description: 'Полностью контролируете гуманоида на 1 минуту (концентрация), если он провалит спасбросок Мудрости.' },
    { id: 'flame_strike', name: 'Огненный столп', level: 5, school: 'Воплощение', description: 'Столб божественного пламени радиусом 10 фт наносит 4d6 урона огнём и 4d6 урона излучением (спасбросок Ловкости уменьшает вдвое).' },
    { id: 'hold_monster', name: 'Удержание чудовища', level: 5, school: 'Очарование', description: 'Парализует любое существо (не только гуманоида) при провале спасброска Мудрости на 1 минуту (концентрация).' },
    { id: 'legend_lore', name: 'Легендарные познания', level: 5, school: 'Прорицание', description: 'Узнаёте легенды и тайны о существе, месте или предмете.' },
    { id: 'mass_cure_wounds', name: 'Массовое лечение ран', level: 5, school: 'Воплощение', description: 'Восстанавливаете до шести существам в радиусе 30 фт 3d8 + мод. заклинательной характеристики хитов.' },
    { id: 'scrying', name: 'Прорицание', level: 5, school: 'Прорицание', description: 'Можете наблюдать за существом на расстоянии, если оно проваливает спасбросок Мудрости. Видите и слышите его окружение в течение 10 минут.' },
    { id: 'wall_of_force', name: 'Стена силы', level: 5, school: 'Воплощение', description: 'Невидимая стена чистой силы полностью блокирует проход и большинство атак. Невозможно разрушить физически, только рассеять.' },
    { id: 'teleportation_circle', name: 'Круг телепортации', level: 5, school: 'Вызов', description: 'Рисуете круг, который открывает портал в другое место с известным кругом телепортации на 1 раунд.' },
    { id: 'awaken', name: 'Пробуждение', level: 5, school: 'Преобразование', description: 'Даёте зверю или растению интеллект 10 и способность говорить в течение 30 дней.' },
    { id: 'commune', name: 'Общение', level: 5, school: 'Прорицание', description: 'Задаёте до трёх вопросов божеству или его слуге и получаете правдивые ответы.' },
    { id: 'dispel_evil_and_good', name: 'Рассеивание добра и зла', level: 5, school: 'Ограждение', description: 'Защищаете союзников от атак извне и можете изгнать вызванных существ.' },
    { id: 'geas', name: 'Заклятие', level: 5, school: 'Очарование', description: 'Накладываете магический приказ на существо. При нарушении оно получает 5d10 психического урона раз в день. Длится 30 дней.' },
    { id: 'modify_memory', name: 'Изменение памяти', level: 5, school: 'Очарование', description: 'Меняете воспоминания существа о событии длиной до 10 минут, включая полное стирание.' },
    { id: 'planar_binding', name: 'Привязка к плану', level: 5, school: 'Ограждение', description: 'Заклинание удерживает существо с другого плана на вашем, пока не выполнит задачу или не закончится длительность.' },
    { id: 'raise_dead', name: 'Воскрешение', level: 5, school: 'Некромантия', description: 'Воскрешаете существо, умершее не более 10 дней назад, возвращая 1 хит.' },
    { id: 'telekinesis', name: 'Телекинез', level: 5, school: 'Преобразование', description: 'Перемещаете предметы или существ силой мысли (вес до 1000 фунтов). Концентрация до 10 минут.' },
    { id: 'wall_of_stone', name: 'Стена камня', level: 5, school: 'Воплощение', description: 'Создаёте настоящую каменную стену, которая может быть постоянной.' },

    // =======================================================================
    // 6 уровень
    // =======================================================================
    { id: 'chain_lightning', name: 'Цепная молния', level: 6, school: 'Воплощение', description: 'Выпускаете молнию, которая поражает основную цель (10d8 урона электричеством), а затем перескакивает на три другие цели в радиусе 30 фт.' },
    { id: 'disintegrate', name: 'Распад', level: 6, school: 'Преобразование', description: 'Тонкий луч зелёной энергии. Цель должна совершить спасбросок Ловкости, иначе получает 10d6+40 урона силовым полем. Если хиты падают до 0, цель превращается в пепел.' },
    { id: 'flesh_to_stone', name: 'Превращение плоти в камень', level: 6, school: 'Преобразование', description: 'Существо должно преуспеть в спасброске Телосложения, иначе постепенно каменеет.' },
    { id: 'heal', name: 'Исцеление', level: 6, school: 'Воплощение', description: 'Восстанавливаете 70 хитов и оканчиваете слепоту, глухоту и любые болезни.' },
    { id: 'true_seeing', name: 'Истинное зрение', level: 6, school: 'Прорицание', description: 'Видите невидимых существ, скрытые двери, иллюзии и истинную форму перевёртышей на 1 час.' },
    { id: 'sunbeam', name: 'Солнечный луч', level: 6, school: 'Воплощение', description: 'Яркий луч света линией 60 фт наносит 6d8 урона излучением и ослепляет. Можете повторять действие каждый ход в течение 1 минуты.' },
    { id: 'globe_of_invulnerability', name: 'Сфера неуязвимости', level: 6, school: 'Ограждение', description: 'Создаёте сферу вокруг себя, которая блокирует заклинания 5-го уровня и ниже.' },
    { id: 'harm', name: 'Вред', level: 6, school: 'Некромантия', description: 'Цель должна совершить спасбросок Телосложения, иначе её хиты падают до 1d4 (но не может быть убита).' },
    { id: 'magic_jar', name: 'Магический сосуд', level: 6, school: 'Некромантия', description: 'Переносите душу в драгоценный камень, из которого можете попытаться захватить тело другого существа.' },
    { id: 'transport_via_plants', name: 'Перемещение через растения', level: 6, school: 'Вызов', description: 'Входите в одно растение и выходите из другого на том же плане в радиусе миль.' },

    // =======================================================================
    // 7 уровень
    // =======================================================================
    { id: 'delayed_blast_fireball', name: 'Отсроченный огненный шар', level: 7, school: 'Воплощение', description: 'Создаёте светящуюся бусину, которая взрывается по команде, нанося 12d6 урона огнём. Урон увеличивается на 1d6 за каждый прошедший раунд.' },
    { id: 'etherealness', name: 'Эфирность', level: 7, school: 'Преобразование', description: 'Переходите на Эфирный план на время до 8 часов.' },
    { id: 'finger_of_death', name: 'Перст смерти', level: 7, school: 'Некромантия', description: 'Посылаете импульс негативной энергии, нанося 7d8+30 некротического урона. Гуманоид, убитый заклинанием, восстаёт зомби под вашим контролем.' },
    { id: 'forcecage', name: 'Силовая клетка', level: 7, school: 'Воплощение', description: 'Создаёте невидимую тюрьму из чистой силы (куб 20 фт или клетка), запирая существ внутри.' },
    { id: 'plane_shift', name: 'Перемещение между планами', level: 7, school: 'Вызов', description: 'Переносите себя и до восьми согласных существ на другой план бытия.' },
    { id: 'teleport', name: 'Телепортация', level: 7, school: 'Вызов', description: 'Мгновенно переносите себя и до восьми существ в известное место, с риском промаха в зависимости от знакомства с целью.' },
    { id: 'crown_of_stars', name: 'Корона звёзд', level: 7, school: 'Воплощение', description: 'Создаёте до семи звёздных моти, каждая может быть потрачена на атаку 4d12 урона излучением.' },
    { id: 'mirage_arcane', name: 'Мираж', level: 7, school: 'Иллюзия', description: 'Меняете внешний вид, звук и запах целой местности квадратом 1 миля на 10 дней.' },
    { id: 'resurrection', name: 'Воскрешение', level: 7, school: 'Некромантия', description: 'Воскрешаете существо, умершее не более 100 лет назад (кроме естественной смерти), полностью восстанавливая хиты.' },

    // =======================================================================
    // 8 уровень
    // =======================================================================
    { id: 'antimagic_field', name: 'Антимагическое поле', level: 8, school: 'Ограждение', description: 'Вокруг вас сфера радиусом 10 фт подавляет всю магию и магические предметы на 1 час.' },
    { id: 'clone', name: 'Клон', level: 8, school: 'Некромантия', description: 'Создаёте дубликат своего тела, который созревает за 120 дней. Если вы умираете, ваша душа перемещается в клон.' },
    { id: 'dominate_monster', name: 'Господство над чудовищем', level: 8, school: 'Очарование', description: 'Полностью контролируете любое существо на 1 час (концентрация).' },
    { id: 'earthquake', name: 'Землетрясение', level: 8, school: 'Воплощение', description: 'Вызываете сейсмические толчки в радиусе 100 фт, разрушая здания, создавая расселины и сбивая существ с ног.' },
    { id: 'feeblemind', name: 'Слабоумие', level: 8, school: 'Очарование', description: 'Атакуете разум существа. При провале спасброска Интеллекта его Интеллект и Харизма падают до 1, оно не может колдовать и общаться.' },
    { id: 'sunburst', name: 'Солнечный взрыв', level: 8, school: 'Воплощение', description: 'Вспышка света радиусом 60 фт наносит 12d6 урона излучением и ослепляет на 1 минуту. Нежить и слизь получают помеху.' },
    { id: 'maze', name: 'Лабиринт', level: 8, school: 'Вызов', description: 'Изгоняете существо в лабиринт-полуизмерение. Ему требуется проверка Интеллекта, чтобы сбежать.' },
    { id: 'mind_blank', name: 'Чистый разум', level: 8, school: 'Ограждение', description: 'На 24 часа защищаете существо от урона психической энергией, чтения мыслей и заклинаний прорицания.' },
    { id: 'power_word_stun', name: 'Слово силы: Оглушение', level: 8, school: 'Очарование', description: 'Произнесите слово силы. Если у цели 150 хитов или меньше, она оглушена.' },

    // =======================================================================
    // 9 уровень
    // =======================================================================
    { id: 'meteor_swarm', name: 'Метеоритный дождь', level: 9, school: 'Воплощение', description: 'Четыре огненных шара обрушиваются с небес, каждый взрывается радиусом 40 фт, нанося 20d6 урона огнём и 20d6 дробящего урона.' },
    { id: 'power_word_kill', name: 'Слово силы: Смерть', level: 9, school: 'Очарование', description: 'Произнесите слово смерти. Если у цели 100 хитов или меньше, она мгновенно умирает.' },
    { id: 'time_stop', name: 'Остановка времени', level: 9, school: 'Преобразование', description: 'Останавливаете время для всех кроме себя на 1d4+1 раунда.' },
    { id: 'wish', name: 'Желание', level: 9, school: 'Вызов', description: 'Самое могущественное заклинание. Дублирует любое заклинание 8 уровня или ниже либо изменяет реальность по вашему желанию.' },
    { id: 'true_resurrection', name: 'Истинное воскрешение', level: 9, school: 'Некромантия', description: 'Воскрешаете существо, умершее не более 200 лет назад, при условии что его душа свободна.' },
    { id: 'gate', name: 'Врата', level: 9, school: 'Вызов', description: 'Открываете портал в другое место на том же плане или на другой план. Можно призвать определённое существо.' },
    { id: 'prismatic_wall', name: 'Призматическая стена', level: 9, school: 'Ограждение', description: 'Стена из семи слоёв разноцветного света, каждый слой обладает особым разрушительным эффектом.' },
    { id: 'mass_heal', name: 'Массовое исцеление', level: 9, school: 'Воплощение', description: 'Восстанавливаете до 700 хитов, разделённых между любым количеством существ в радиусе 60 фт, и оканчиваете болезни.' },
    { id: 'foresight', name: 'Предвидение', level: 9, school: 'Прорицание', description: 'Касаетесь существа и даёте ему способность видеть ближайшее будущее на 8 часов: преимущество на атаки, проверки и спасброски, атаки против него — с помехой.' },
    { id: 'shapechange', name: 'Смена облика', level: 9, school: 'Преобразование', description: 'Превращаетесь в любое существо с рейтингом опасности не выше вашего уровня на 1 час (концентрация).' },
    { id: 'storm_of_vengeance', name: 'Буря возмездия', level: 9, school: 'Вызов', description: 'Вызываете разрушительную бурю радиусом 360 фт, которая наносит урон звуком, молниями и градом в течение нескольких раундов.' },
    { id: 'astral_projection', name: 'Астральная проекция', level: 9, school: 'Некромантия', description: 'Переносите себя и до восьми согласных существ на Астральный план, создавая серебряные нити, связывающие тела с душами.' }
,

    // ============================================================
    // 150 NEW SPELLS (added below)
    // ============================================================
    // === Level 0 (Cantrips) - 15 spells ===
    { id: 'arcane_fusillade', name: 'Чародейский залп', level: 0, school: 'Воплощение', type: 'attack', description: 'Вы выпускаете три мерцающих снаряда чистой магии в одну цель в пределах 60 футов. Каждый снаряд наносит 1d4 урона силовым полем. Количество снарядов увеличивается на 1 на 5-м (4), 11-м (5) и 17-м (6) уровнях.' },
    { id: 'frost_lash', name: 'Ледяной хлыст', level: 0, school: 'Воплощение', type: 'attack', description: 'Вы создаёте хлыст из замёрзшей воды длиной 10 футов. Совершите рукопашную атаку заклинанием. При попадании цель получает 1d8 урона холодом и её скорость уменьшается на 10 футов до начала вашего следующего хода. Урон увеличивается на 5-м (2d8), 11-м (3d8) и 17-м (4d8) уровнях.' },
    { id: 'shadow_needle', name: 'Теневая игла', level: 0, school: 'Некромантия', type: 'attack', description: 'Вы формируете иглу из сгущённой тени и метаете её в существо в пределах 60 футов. Цель должна пройти спасбросок Ловкости, иначе получит 1d6 урона некротической энергией и имеет помеху на следующую атаку до конца своего хода. Урон увеличивается на 5-м (2d6), 11-м (3d6) и 17-м (4d6) уровнях.' },
    { id: 'stone_fist', name: 'Каменный кулак', level: 0, school: 'Преобразование', type: 'attack', description: 'Вы покрываете свой кулак слоем магического камня. Совершите рукопашную атаку заклинанием. При попадании цель получает 1d10 дробящего урона. Если цель — конструкция или объект, урон удваивается. Урон увеличивается на 5-м (2d10), 11-м (3d10) и 17-м (4d10) уровнях.' },
    { id: 'wind_slash', name: 'Воздушный разрез', level: 0, school: 'Воплощение', type: 'attack', description: 'Вы взмахиваете рукой и посылаете лезвие сжатого воздуха в линии длиной 15 футов и шириной 5 футов. Каждое существо в области должно пройти спасбросок Ловкости или получить 1d6 рубящего урона. Урон увеличивается на 5-м (2d6), 11-м (3d6) и 17-м (4d6) уровнях.' },
    { id: 'spark_shield', name: 'Искровой щит', level: 0, school: 'Ограждение', type: 'defense', description: 'Вы окружаете себя ореолом потрескивающих искр до конца вашего следующего хода. Когда существо в пределах 5 футов наносит вам урон рукопашной атакой, оно получает 1d4 урона электричеством. Урон увеличивается на 5-м (2d4), 11-м (3d4) и 17-м (4d4) уровнях.' },
    { id: 'mending_touch', name: 'Целительное касание', level: 0, school: 'Воплощение', type: 'healing', description: 'Вы касаетесь существа и направляете в него каплю жизненной энергии. Цель восстанавливает 1 хит-поинт. Это заклинание не действует на нежить и конструктов. Количество восстанавливаемых хитов увеличивается на 5-м (2), 11-м (3) и 17-м (4) уровнях.' },
    { id: 'phantom_echo', name: 'Призрачное эхо', level: 0, school: 'Иллюзия', type: 'utility', description: 'Вы создаёте эхо звука, который вы слышали в течение последнего часа. Эхо звучит из точки в пределах 30 футов от вас и длится до 1 минуты. Вы можете управлять громкостью от шёпота до крика. Существа могут распознать иллюзию проверкой Расследования (Сл равна вашей Сл спасброска).' },
    { id: 'verdant_grasp', name: 'Хватка лозы', level: 0, school: 'Преобразование', type: 'utility', description: 'Вы заставляете лозу вырасти из земли и схватить существо в пределах 30 футов. Цель должна пройти спасбросок Силы или стать опутанной до конца вашего следующего хода. Опутанное существо может использовать действие, чтобы совершить проверку Силы против вашей Сл спасброска и освободиться.' },
    { id: 'ember_dance', name: 'Танец углей', level: 0, school: 'Воплощение', type: 'buff', description: 'Вы заставляете тлеющие угли кружиться вокруг одного существа в пределах 30 футов на 1 минуту. Существо излучает тусклый свет в радиусе 10 футов и получает преимущество на спасброски против эффектов холода. Концентрация не требуется.' },
    { id: 'whisper_of_dread', name: 'Шёпот ужаса', level: 0, school: 'Очарование', type: 'attack', description: 'Вы шепчете слова страха существу в пределах 30 футов, которое может вас слышать. Цель должна пройти спасбросок Мудрости или получить 1d6 психического урона и стать испуганной вами до конца вашего следующего хода. Урон увеличивается на 5-м (2d6), 11-м (3d6) и 17-м (4d6) уровнях.' },
    { id: 'magnetic_pull', name: 'Магнитный рывок', level: 0, school: 'Преобразование', type: 'utility', description: 'Вы создаёте магнитную силу, притягивающую металлический предмет весом до 5 фунтов в пределах 30 футов к вашей руке. Если предмет удерживается существом, оно должно пройти спасбросок Силы, иначе выронит его. Предмет летит к вам по прямой линии.' },
    { id: 'gloom_veil', name: 'Завеса мрака', level: 0, school: 'Иллюзия', type: 'defense', description: 'Вы окутываете себя пеленой тени до конца вашего следующего хода. Атаки дальнобойным оружием против вас имеют помеху. Заклинание рассеивается, если вы атакуете или произносите заклинание.' },
    { id: 'static_charge', name: 'Статический заряд', level: 0, school: 'Воплощение', type: 'buff', description: 'Вы заряжаете оружие одного существа в пределах касания статическим электричеством на 1 минуту. Следующая успешная атака этим оружием наносит дополнительно 1d4 урона электричеством. Дополнительный урон увеличивается на 5-м (2d4), 11-м (3d4) и 17-м (4d4) уровнях.' },
    { id: 'bone_chill_aura', name: 'Аура костяного холода', level: 0, school: 'Некромантия', type: 'defense', description: 'Вы излучаете ауру потустороннего холода в радиусе 5 футов до начала вашего следующего хода. Существа, заканчивающие свой ход в этой области, должны пройти спасбросок Телосложения или получить 1d4 урона некротической энергией. Урон увеличивается на 5-м (2d4), 11-м (3d4) и 17-м (4d4) уровнях.' },


    // === Level 1 - 20 spells ===
    { id: 'arcane_arrow', name: 'Чародейская стрела', level: 1, school: 'Воплощение', type: 'attack', description: 'Вы создаёте светящуюся стрелу из чистой энергии и запускаете её в существо в пределах 120 футов. Совершите дальнобойную атаку заклинанием. При попадании цель получает 2d10 урона силовым полем. На более высоких уровнях: урон увеличивается на 1d10 за каждый уровень ячейки выше 1-го.' },
    { id: 'blood_ward', name: 'Кровавый оберег', level: 1, school: 'Некромантия', type: 'defense', description: 'Вы наносите руну кровью на свою кожу. В течение 1 часа, когда вы получаете урон, вы можете реакцией уменьшить его на 1d6 + ваш модификатор заклинательной характеристики. Заклинание заканчивается после 3 использований. На более высоких уровнях: количество использований увеличивается на 1 за каждый уровень ячейки выше 1-го.' },
    { id: 'spectral_servant', name: 'Призрачный слуга', level: 1, school: 'Вызов', type: 'summon', description: 'Вы призываете призрачного слугу в незанятое пространство в пределах 30 футов. Слуга существует 1 час (концентрация) и может выполнять простые задачи: переносить предметы весом до 20 фунтов, открывать двери, подавать предметы. Он имеет 1 хит, КД 10 и не может атаковать.' },
    { id: 'flame_cloak', name: 'Огненный плащ', level: 1, school: 'Воплощение', type: 'defense', description: 'Вы окутываете себя пламенем на 10 минут (концентрация). Существа, наносящие вам урон рукопашной атакой в пределах 5 футов, получают 1d8 урона огнём. Вы также имеете сопротивление к урону холодом. На более высоких уровнях: урон увеличивается на 1d8 за каждые 2 уровня ячейки выше 1-го.' },
    { id: 'thunderous_step', name: 'Громовой шаг', level: 1, school: 'Воплощение', type: 'attack', description: 'Вы телепортируетесь в незанятое пространство в пределах 30 футов. Каждое существо в пределах 10 футов от точки, которую вы покинули, должно пройти спасбросок Телосложения или получить 2d6 урона звуком и стать оглохшим до конца своего следующего хода.' },
    { id: 'natures_embrace', name: 'Объятия природы', level: 1, school: 'Преобразование', type: 'healing', description: 'Вы касаетесь существа и призываете силу природы. Цель восстанавливает 1d8 + ваш модификатор заклинательной характеристики хитов и излечивается от одного яда. На более высоких уровнях: восстановление увеличивается на 1d8 за каждый уровень ячейки выше 1-го.' },
    { id: 'iron_skin', name: 'Железная кожа', level: 1, school: 'Преобразование', type: 'buff', description: 'Вы касаетесь существа и его кожа приобретает металлический оттенок на 1 час. Цель получает +2 к КД, но её скорость уменьшается на 10 футов. Заклинание не суммируется с доспехами тяжелее лёгких.' },
    { id: 'mind_spike', name: 'Ментальный шип', level: 1, school: 'Прорицание', type: 'attack', description: 'Вы вонзаете психический шип в разум существа в пределах 60 футов. Цель должна пройти спасбросок Интеллекта или получить 2d8 психического урона. При провале вы также знаете точное местоположение цели до конца вашего следующего хода.' },
    { id: 'veil_of_silence', name: 'Завеса тишины', level: 1, school: 'Иллюзия', type: 'utility', description: 'Вы создаёте зону тишины радиусом 10 футов с центром на вас на 10 минут (концентрация). Звуки внутри зоны не выходят за её пределы, а внешние звуки проникают внутрь приглушённо. Заклинания с вербальным компонентом внутри зоны не блокируются.' },
    { id: 'gravity_well', name: 'Гравитационный колодец', level: 1, school: 'Воплощение', type: 'utility', description: 'Вы создаёте точку усиленной гравитации в пределах 60 футов. Каждое существо в радиусе 10 футов от этой точки должно пройти спасбросок Силы или быть притянутым на 10 футов к центру и упасть ничком. Область считается труднопроходимой местностью до конца вашего следующего хода.' },
    { id: 'venomous_spray', name: 'Ядовитые брызги', level: 1, school: 'Вызов', type: 'attack', description: 'Вы выплёскиваете конус ядовитой жидкости длиной 15 футов. Каждое существо в области должно пройти спасбросок Телосложения или получить 2d8 урона ядом и стать отравленным до конца своего следующего хода. При успехе — половина урона без отравления.' },
    { id: 'phantom_steed_minor', name: 'Малый призрачный скакун', level: 1, school: 'Иллюзия', type: 'summon', description: 'Вы призываете полупрозрачного скакуна на 1 час (концентрация). Скакун имеет скорость 60 футов, КД 10, 10 хитов. Он может нести только вас и исчезает, если получает урон. Скакун не может атаковать.' },
    { id: 'restorative_mist', name: 'Восстанавливающий туман', level: 1, school: 'Воплощение', type: 'healing', description: 'Вы создаёте облако целительного тумана в радиусе 10 футов с центром на точке в пределах 30 футов. Каждое существо по вашему выбору в области восстанавливает 1d4 хита в начале своего хода. Туман существует 3 раунда (концентрация).' },
    { id: 'arcane_lock_blast', name: 'Чародейский взрыв замка', level: 1, school: 'Преобразование', type: 'utility', description: 'Вы касаетесь замка, защёлки или подобного механизма. Механизм разрушается магическим взрывом, нанося 1d6 урона звуком каждому существу в пределах 5 футов (спасбросок Ловкости для половины). Магические замки получают спасбросок, Сл 10 + уровень ячейки.' },
    { id: 'soul_link', name: 'Связь душ', level: 1, school: 'Некромантия', type: 'buff', description: 'Вы создаёте связь между двумя согласными существами в пределах 30 футов на 1 час (концентрация). Когда одно из существ получает урон, оно может передать до половины этого урона другому связанному существу (с согласия получателя).' },
    { id: 'ice_path', name: 'Ледяная тропа', level: 1, school: 'Воплощение', type: 'utility', description: 'Вы создаёте полосу льда длиной 30 футов и шириной 5 футов на поверхности в пределах 30 футов. Область становится труднопроходимой для всех, кроме вас. Существа, входящие в область или начинающие в ней ход, должны пройти спасбросок Ловкости (Сл вашего заклинания) или упасть ничком. Лёд тает через 1 минуту.' },
    { id: 'bolstering_cry', name: 'Укрепляющий клич', level: 1, school: 'Очарование', type: 'buff', description: 'Вы издаёте магический боевой клич. До 3 существ по вашему выбору в пределах 30 футов получают 1d4 + ваш модификатор заклинательной характеристики временных хитов на 1 час. На более высоких уровнях: количество существ увеличивается на 1 за каждый уровень ячейки выше 1-го.' },
    { id: 'corrosive_touch', name: 'Разъедающее касание', level: 1, school: 'Вызов', type: 'attack', description: 'Вы покрываете свою руку едкой кислотой. Совершите рукопашную атаку заклинанием. При попадании цель получает 2d6 урона кислотой, и её КД уменьшается на 1 до конца вашего следующего хода (не суммируется). На более высоких уровнях: урон увеличивается на 1d6 за каждый уровень ячейки выше 1-го.' },
    { id: 'primal_vigor', name: 'Первобытная бодрость', level: 1, school: 'Преобразование', type: 'buff', description: 'Вы касаетесь существа и наполняете его первобытной энергией на 1 минуту (концентрация). Цель получает +10 футов к скорости передвижения и преимущество на проверки Атлетики. При первом ударе рукопашной атакой цель наносит дополнительно 1d4 урона.' },
    { id: 'echo_ward', name: 'Эхо-оберег', level: 1, school: 'Ограждение', type: 'defense', description: 'Вы создаёте магический оберег на одном существе в пределах касания, длительностью 8 часов. Когда защищённое существо становится целью атаки, оберег издаёт громкий звуковой сигнал, слышимый на расстоянии 100 футов. Оберег срабатывает 3 раза, после чего рассеивается.' },


    // === Level 2 - 20 spells ===
    { id: 'shadow_step', name: 'Шаг сквозь тень', level: 2, school: 'Вызов', type: 'utility', description: 'Вы входите в одну тень и выходите из другой в пределах 60 футов. Вы должны видеть обе тени. После телепортации вы имеете преимущество на первую атаку до конца хода. Заклинание работает только в условиях тусклого света или темноты.' },
    { id: 'flame_barrier', name: 'Огненный барьер', level: 2, school: 'Воплощение', type: 'defense', description: 'Вы создаёте стену огня высотой 10 футов, длиной 20 футов и толщиной 1 фут в пределах 60 футов на 1 минуту (концентрация). Существа, проходящие через стену, получают 3d6 урона огнём. Существа в пределах 5 футов от стены получают 1d6 урона огнём в начале своего хода.' },
    { id: 'winters_grasp', name: 'Хватка зимы', level: 2, school: 'Воплощение', type: 'attack', description: 'Вы направляете волну морозного холода на существо в пределах 60 футов. Цель должна пройти спасбросок Телосложения или получить 3d8 урона холодом и стать замедленной (скорость уменьшена вдвое) на 1 минуту. Цель может повторять спасбросок в конце каждого хода.' },
    { id: 'animate_weapon', name: 'Оживление оружия', level: 2, school: 'Преобразование', type: 'summon', description: 'Вы оживляете одно оружие в пределах 30 футов на 1 минуту (концентрация). Оно парит в воздухе и атакует указанную вами цель бонусным действием. Оружие использует ваш модификатор атаки заклинанием и наносит свой обычный урон + 1d4 урона силовым полем.' },
    { id: 'fortify_mind', name: 'Укрепление разума', level: 2, school: 'Ограждение', type: 'buff', description: 'Вы усиливаете ментальную защиту одного существа в пределах касания на 1 час. Цель получает преимущество на спасброски против очарования и испуга, а также сопротивление к психическому урону. На более высоких уровнях: вы можете выбрать дополнительное существо за каждый уровень ячейки выше 2-го.' },
    { id: 'nether_bolt', name: 'Потусторонняя молния', level: 2, school: 'Некромантия', type: 'attack', description: 'Вы выпускаете луч тёмной энергии в существо в пределах 90 футов. Совершите дальнобойную атаку заклинанием. При попадании цель получает 3d10 урона некротической энергией. Если цель — нежить, она вместо этого восстанавливает это количество хитов.' },
    { id: 'mirror_ward', name: 'Зеркальный оберег', level: 2, school: 'Ограждение', type: 'defense', description: 'Вы создаёте зеркальный щит вокруг себя на 1 минуту (концентрация). Когда вы становитесь целью заклинания 2-го уровня или ниже, вы можете реакцией отразить его обратно в заклинателя. Отражённое заклинание использует вашу Сл спасброска.' },
    { id: 'summon_swarm', name: 'Призыв роя', level: 2, school: 'Вызов', type: 'summon', description: 'Вы призываете рой насекомых в пространство в пределах 60 футов на 1 минуту (концентрация). Рой занимает область 10x10 футов, имеет 22 хита, КД 12. Существа, начинающие ход в области роя, получают 2d6 колющего урона (спасбросок Телосложения для половины).' },
    { id: 'healing_rain', name: 'Целительный дождь', level: 2, school: 'Воплощение', type: 'healing', description: 'Вы вызываете мягкий светящийся дождь в области радиусом 20 футов с центром на точке в пределах 60 футов на 1 минуту (концентрация). Существа по вашему выбору, начинающие ход в области, восстанавливают 1d4 хита. Нежить получает 1d4 урона излучением.' },
    { id: 'stone_pillars', name: 'Каменные столбы', level: 2, school: 'Вызов', type: 'defense', description: 'Вы вызываете три каменных столба высотой 10 футов в незанятых пространствах в пределах 60 футов. Каждый столб имеет КД 15, 30 хитов и обеспечивает укрытие на три четверти. Столбы существуют 10 минут или пока не будут разрушены.' },
    { id: 'phantom_armor', name: 'Призрачные доспехи', level: 2, school: 'Вызов', type: 'buff', description: 'Вы облачаете существо в пределах касания в полупрозрачные доспехи из эфирной энергии на 8 часов. КД цели становится равным 13 + модификатор Ловкости. Доспехи не имеют веса и не мешают движению. Заклинание заканчивается, если цель надевает обычные доспехи.' },
    { id: 'life_drain', name: 'Вытягивание жизни', level: 2, school: 'Некромантия', type: 'attack', description: 'Вы вытягиваете жизненную силу существа в пределах 30 футов. Цель должна пройти спасбросок Телосложения или получить 3d6 урона некротической энергией. Вы восстанавливаете хиты в количестве, равном половине нанесённого урона. Не действует на нежить и конструктов.' },
    { id: 'wind_wall', name: 'Ветровой вал', level: 2, school: 'Воплощение', type: 'defense', description: 'Вы создаёте стену бушующего ветра длиной 30 футов и высотой 15 футов в пределах 60 футов на 1 минуту (концентрация). Дальнобойные атаки оружием через стену автоматически промахиваются. Летящие существа Маленького размера и меньше не могут пройти через стену.' },
    { id: 'tremor_sense', name: 'Чувство вибрации', level: 2, school: 'Прорицание', type: 'utility', description: 'Вы получаете чувство вибрации в радиусе 30 футов на 10 минут (концентрация). Вы чувствуете точное местоположение любого существа, касающегося земли в этой области, даже если не видите его. Невидимые существа не получают преимущества на атаки против вас.' },
    { id: 'psychic_scream', name: 'Психический вопль', level: 2, school: 'Очарование', type: 'attack', description: 'Вы испускаете волну ментальной энергии в радиусе 15 футов от вас. Каждое существо в области должно пройти спасбросок Интеллекта или получить 3d6 психического урона и стать ошеломлённым до конца своего следующего хода. При успехе — половина урона без ошеломления.' },
    { id: 'barkskin_armor', name: 'Кора дуба', level: 2, school: 'Преобразование', type: 'buff', description: 'Вы покрываете существо в пределах касания магической древесной корой на 1 час (концентрация). КД цели не может быть меньше 16, и она получает сопротивление к колющему урону. Цель имеет помеху на проверки Ловкости (Акробатика).' },
    { id: 'radiant_smite', name: 'Лучезарная кара', level: 2, school: 'Воплощение', type: 'attack', description: 'Ваше оружие наполняется священным светом. При следующей успешной атаке оружием до конца хода вы наносите дополнительно 3d8 урона излучением. Если цель — нежить или исчадие, урон увеличивается до 4d8. Цель излучает яркий свет 5 футов на 1 минуту.' },
    { id: 'ghoul_touch', name: 'Касание упыря', level: 2, school: 'Некромантия', type: 'attack', description: 'Ваша рука окутывается некротической энергией. Совершите рукопашную атаку заклинанием. При попадании цель получает 3d6 урона некротической энергией и должна пройти спасбросок Телосложения или стать парализованной на 1 минуту. Цель повторяет спасбросок в конце каждого хода.' },
    { id: 'sanctuary_circle', name: 'Круг убежища', level: 2, school: 'Ограждение', type: 'healing', description: 'Вы чертите магический круг радиусом 10 футов на земле. Существа внутри круга восстанавливают 2d4 хита в начале своего хода и имеют преимущество на спасброски против болезней и ядов. Круг существует 1 минуту (концентрация). Нежить не может войти в круг.' },
    { id: 'eldritch_sight', name: 'Потустороннее зрение', level: 2, school: 'Прорицание', type: 'utility', description: 'Ваши глаза светятся фиолетовым светом. На 1 час вы видите магические ауры в пределах 60 футов, определяете школу магии предметов и заклинаний, и можете видеть эфирных существ. Вы также видите невидимых существ как размытые силуэты.' },


    // === Level 3 - 20 spells ===
    { id: 'erupting_earth', name: 'Извержение земли', level: 3, school: 'Преобразование', type: 'attack', description: 'Вы заставляете землю взорваться в области радиусом 20 футов с центром на точке в пределах 120 футов. Каждое существо в области должно пройти спасбросок Ловкости или получить 4d10 дробящего урона. При успехе — половина. Область становится труднопроходимой.' },
    { id: 'vampiric_touch_enhanced', name: 'Усиленное вампирическое касание', level: 3, school: 'Некромантия', type: 'attack', description: 'Ваша рука излучает тёмную энергию на 1 минуту (концентрация). Совершите рукопашную атаку заклинанием. При попадании цель получает 4d6 урона некротической энергией, и вы восстанавливаете хиты, равные нанесённому урону. Вы можете атаковать действием каждый ход.' },
    { id: 'elemental_aegis', name: 'Стихийная эгида', level: 3, school: 'Ограждение', type: 'defense', description: 'Вы окружаете себя щитом из выбранной стихии (огонь, холод, электричество, кислота) на 1 час (концентрация). Вы получаете сопротивление к выбранному типу урона. Когда существо наносит вам урон рукопашной атакой, оно получает 2d6 урона выбранного типа.' },
    { id: 'mass_healing_word', name: 'Массовое слово исцеления', level: 3, school: 'Воплощение', type: 'healing', description: 'Вы произносите слово силы, наполняющее до 6 существ по вашему выбору в пределах 60 футов целительной энергией. Каждая цель восстанавливает 1d4 + ваш модификатор заклинательной характеристики хитов. Бонусное действие. На более высоких уровнях: +1d4 за каждый уровень выше 3-го.' },
    { id: 'gravity_slam', name: 'Гравитационный удар', level: 3, school: 'Воплощение', type: 'attack', description: 'Вы увеличиваете гравитацию над существом в пределах 60 футов. Цель должна пройти спасбросок Силы или получить 4d8 дробящего урона и упасть ничком. При успехе — половина урона без падения. Летящие существа при провале падают на землю.' },
    { id: 'spirit_wolf', name: 'Духовный волк', level: 3, school: 'Вызов', type: 'summon', description: 'Вы призываете духовного волка в незанятое пространство в пределах 30 футов на 1 час (концентрация). Волк имеет 30 хитов, КД 14, скорость 50 футов. Он атакует бонусным действием: +7 к попаданию, 2d6+4 урона силовым полем. Волк имеет преимущество на атаки рядом с союзниками.' },
    { id: 'arcane_fortress', name: 'Чародейская крепость', level: 3, school: 'Вызов', type: 'defense', description: 'Вы создаёте полупрозрачный купол радиусом 10 футов с центром на вас на 1 минуту (концентрация). Купол имеет 50 хитов и КД 15. Существа внутри имеют укрытие на три четверти от атак извне. Заклинания 2-го уровня и ниже не проходят через купол.' },
    { id: 'life_transference', name: 'Перенос жизни', level: 3, school: 'Некромантия', type: 'healing', description: 'Вы жертвуете собственной жизненной силой ради другого. Вы получаете 4d8 урона некротической энергией (нельзя уменьшить), а одно существо в пределах 60 футов восстанавливает хиты, равные удвоенному количеству полученного вами урона.' },
    { id: 'temporal_slip', name: 'Временное скольжение', level: 3, school: 'Преобразование', type: 'utility', description: 'Вы на мгновение смещаете себя во времени. Вы исчезаете до начала вашего следующего хода, став неуязвимым ко всему урону и эффектам. Вы появляетесь в том же месте или в ближайшем незанятом пространстве. Вы не можете действовать, пока находитесь вне времени.' },
    { id: 'thunder_wave_greater', name: 'Большая громовая волна', level: 3, school: 'Воплощение', type: 'attack', description: 'Вы испускаете мощную волну грома в конусе длиной 30 футов. Каждое существо в области должно пройти спасбросок Телосложения или получить 4d8 урона звуком и быть отброшенным на 20 футов. При успехе — половина урона без отбрасывания. Незакреплённые предметы отбрасываются автоматически.' },
    { id: 'shadow_conjuration', name: 'Теневой вызов', level: 3, school: 'Иллюзия', type: 'summon', description: 'Вы формируете существо из теневой материи в незанятом пространстве в пределах 60 футов на 1 минуту (концентрация). Существо имеет 25 хитов, КД 13 и атакует действием: +6 к попаданию, 2d8+3 урона некротической энергией. Оно уязвимо к урону излучением.' },
    { id: 'cleansing_flame', name: 'Очищающее пламя', level: 3, school: 'Воплощение', type: 'healing', description: 'Вы касаетесь существа священным пламенем. Цель восстанавливает 3d8 хитов и излечивается от одной болезни, одного проклятия или одного состояния (ослепление, оглушение, отравление, паралич). Нежить и исчадия вместо исцеления получают 3d8 урона излучением.' },
    { id: 'psychic_fortress', name: 'Психическая крепость', level: 3, school: 'Ограждение', type: 'buff', description: 'Вы создаёте ментальный барьер вокруг до 5 существ по вашему выбору в пределах 30 футов на 10 минут (концентрация). Цели получают сопротивление к психическому урону и преимущество на спасброски Интеллекта, Мудрости и Харизмы.' },
    { id: 'chain_lightning_minor', name: 'Малая цепная молния', level: 3, school: 'Воплощение', type: 'attack', description: 'Молния поражает существо в пределах 60 футов, а затем перепрыгивает на 2 дополнительные цели в пределах 20 футов от первой. Каждая цель должна пройти спасбросок Ловкости или получить 3d8 урона электричеством. При успехе — половина. На более высоких уровнях: +1 дополнительная цель за каждый уровень выше 3-го.' },
    { id: 'spectral_guardian', name: 'Призрачный страж', level: 3, school: 'Вызов', type: 'summon', description: 'Вы призываете призрачного воина в незанятое пространство в пределах 30 футов на 1 минуту (концентрация). Страж имеет 40 хитов, КД 15, скорость 30 футов. Когда враждебное существо входит в пределы 5 футов от стража, оно может реакцией атаковать: +6, 2d8+3 урона силовым полем.' },
    { id: 'natures_wrath', name: 'Гнев природы', level: 3, school: 'Вызов', type: 'attack', description: 'Вы призываете корни и ветви в области 30x30 футов в пределах 90 футов на 1 минуту (концентрация). Каждое существо в области должно пройти спасбросок Силы или стать опутанным. Опутанные существа получают 2d6 дробящего урона в начале каждого хода. Спасбросок Силы действием для освобождения.' },
    { id: 'borrowed_time', name: 'Заёмное время', level: 3, school: 'Преобразование', type: 'buff', description: 'Вы ускоряете одно существо в пределах 30 футов, давая ему дополнительное действие на 1 ход. Однако в начале следующего хода цель теряет действие и может совершить только бонусное действие или движение. Не суммируется с заклинанием Ускорение.' },
    { id: 'acid_rain', name: 'Кислотный дождь', level: 3, school: 'Вызов', type: 'attack', description: 'Вы вызываете дождь из кислоты в цилиндре радиусом 20 футов и высотой 40 футов с центром на точке в пределах 90 футов на 1 минуту (концентрация). Существа, начинающие ход в области, получают 3d4 урона кислотой. Металлические доспехи в области получают -1 к КД навсегда.' },
    { id: 'shadow_mantle', name: 'Теневая мантия', level: 3, school: 'Иллюзия', type: 'defense', description: 'Вы окутываете себя клубящимися тенями на 1 час (концентрация). Вы считаетесь находящимся в области тусклого света для целей укрытия. Атаки по вам с расстояния более 30 футов имеют помеху. Вы имеете преимущество на проверки Скрытности.' },
    { id: 'restorative_surge', name: 'Волна восстановления', level: 3, school: 'Воплощение', type: 'healing', description: 'Вы высвобождаете волну целительной энергии. Каждое существо по вашему выбору в радиусе 30 футов от вас восстанавливает 2d8 + ваш модификатор заклинательной характеристики хитов. Существа с 0 хитов автоматически стабилизируются и восстанавливают 1 хит.' },


    // === Level 4 - 15 spells ===
    { id: 'elemental_storm', name: 'Стихийный шторм', level: 4, school: 'Воплощение', type: 'attack', description: 'Вы вызываете бурю стихий в сфере радиусом 20 футов с центром на точке в пределах 120 футов. Выберите два типа урона: огонь, холод, электричество, кислота. Каждое существо в области должно пройти спасбросок Ловкости или получить 3d6 урона каждого выбранного типа. При успехе — половина.' },
    { id: 'death_ward_greater', name: 'Большая защита от смерти', level: 4, school: 'Ограждение', type: 'defense', description: 'Вы касаетесь существа и защищаете его от смерти на 8 часов. Первый раз, когда хиты цели падают до 0, они вместо этого становятся равными 1, и цель получает 2d10 временных хитов. Заклинание также даёт преимущество на спасброски от мгновенной смерти.' },
    { id: 'summon_earth_elemental', name: 'Призыв земляного элементаля', level: 4, school: 'Вызов', type: 'summon', description: 'Вы призываете земляного элементаля в незанятое пространство в пределах 60 футов на 1 час (концентрация). Элементаль имеет 60 хитов, КД 16, скорость 30 футов. Атака: +8 к попаданию, 2d10+5 дробящего урона. Он имеет сопротивление к неволшебному физическому урону.' },
    { id: 'psychic_lance', name: 'Психическое копьё', level: 4, school: 'Очарование', type: 'attack', description: 'Вы выпускаете луч ментальной энергии в существо в пределах 120 футов. Цель должна пройти спасбросок Интеллекта или получить 7d6 психического урона и стать ошеломлённой до конца своего следующего хода. При успехе — половина урона без ошеломления.' },
    { id: 'life_cocoon', name: 'Кокон жизни', level: 4, school: 'Воплощение', type: 'healing', description: 'Вы окутываете одно существо с 0 хитов в пределах 30 футов коконом золотой энергии на 1 минуту. Существо стабилизируется и восстанавливает 1d6 хитов в начале каждого хода. Кокон имеет 30 хитов и КД 15. Если кокон разрушен — заклинание прекращается.' },
    { id: 'temporal_anchor', name: 'Якорь времени', level: 4, school: 'Преобразование', type: 'utility', description: 'Вы фиксируете своё текущее состояние во времени. В любой момент в течение следующих 10 минут вы можете реакцией вернуться в состояние, в котором были при произнесении: хиты, позиция, ячейки заклинаний. Использованные предметы не восстанавливаются.' },
    { id: 'blade_storm', name: 'Буря клинков', level: 4, school: 'Вызов', type: 'attack', description: 'Вы создаёте вихрь из магических клинков в цилиндре радиусом 15 футов и высотой 20 футов в пределах 90 футов на 1 минуту (концентрация). Существа, входящие в область или начинающие там ход, получают 4d8 рубящего урона (спасбросок Ловкости для половины).' },
    { id: 'vitality_transfer', name: 'Передача бодрости', level: 4, school: 'Некромантия', type: 'healing', description: 'Вы вытягиваете жизненную силу из враждебного существа в пределах 30 футов и передаёте её союзнику в пределах 30 футов. Враг должен пройти спасбросок Телосложения или получить 4d8 урона некротической энергией. Союзник восстанавливает хиты, равные нанесённому урону.' },
    { id: 'phantom_chariot', name: 'Призрачная колесница', level: 4, school: 'Иллюзия', type: 'summon', description: 'Вы призываете призрачную колесницу с двумя спектральными конями на 8 часов. Колесница вмещает 4 существа, движется со скоростью 100 футов, летает (парение). Она имеет КД 14, 50 хитов. Пассажиры имеют укрытие на три четверти.' },
    { id: 'iron_body', name: 'Железное тело', level: 4, school: 'Преобразование', type: 'buff', description: 'Ваше тело становится железным на 10 минут (концентрация). Вы получаете сопротивление к неволшебному физическому урону, +2 к КД и иммунитет к ядам. Однако ваша скорость уменьшается на 20 футов, и вы тонете в воде.' },
    { id: 'spectral_chains', name: 'Призрачные цепи', level: 4, school: 'Вызов', type: 'attack', description: 'Призрачные цепи вырываются из земли и хватают до 3 существ по вашему выбору в пределах 60 футов. Каждая цель должна пройти спасбросок Силы или стать опутанной на 1 минуту (концентрация) и получать 2d6 урона некротической энергией в начале каждого хода. Спасбросок повторяется каждый ход.' },
    { id: 'aura_of_courage', name: 'Аура мужества', level: 4, school: 'Очарование', type: 'buff', description: 'Вы излучаете ауру радиусом 30 футов на 10 минут (концентрация). Союзники в ауре иммунны к испугу и получают +2 к броскам атаки. Если союзник уже испуган, состояние снимается при входе в ауру.' },
    { id: 'tornado', name: 'Торнадо', level: 4, school: 'Воплощение', type: 'attack', description: 'Вы создаёте торнадо в цилиндре радиусом 10 футов и высотой 40 футов в пределах 90 футов на 1 минуту (концентрация). Существа, начинающие ход в области, получают 3d8 дробящего урона и подбрасываются на 20 футов вверх (спасбросок Силы отменяет подбрасывание). Вы можете перемещать торнадо на 30 футов бонусным действием.' },
    { id: 'protective_runes', name: 'Защитные руны', level: 4, school: 'Ограждение', type: 'defense', description: 'Вы наносите руны на поверхность в пределах касания, защищая область радиусом 20 футов на 8 часов. Враждебные существа, входящие в область, должны пройти спасбросок Харизмы или получить 4d6 урона силовым полем и быть отброшены на 10 футов назад. Каждое существо проходит спасбросок только раз.' },
    { id: 'divination_eye', name: 'Око прорицания', level: 4, school: 'Прорицание', type: 'utility', description: 'Вы создаёте невидимый магический глаз в пределах 120 футов на 1 час (концентрация). Глаз передаёт вам всё, что видит (тёмное зрение 60 футов) и слышит. Вы можете перемещать его на 30 футов бонусным действием. Глаз может проходить через щели шириной от 1 дюйма.' },


    // === Level 5 - 15 spells ===
    { id: 'inferno_blast', name: 'Адское пламя', level: 5, school: 'Воплощение', type: 'attack', description: 'Вы выпускаете сферу концентрированного адского пламени в точку в пределах 150 футов. Сфера взрывается в радиусе 30 футов. Каждое существо в области должно пройти спасбросок Ловкости или получить 8d6 урона огнём. При успехе — половина. Огонь игнорирует сопротивление к урону огнём.' },
    { id: 'mass_restoration', name: 'Массовое восстановление', level: 5, school: 'Воплощение', type: 'healing', description: 'Волна восстанавливающей энергии омывает до 6 существ по вашему выбору в пределах 60 футов. Каждое существо восстанавливает 4d8 + ваш модификатор заклинательной характеристики хитов и излечивается от одного состояния: ослепление, оглушение, отравление или паралич.' },
    { id: 'steel_wind_strike', name: 'Удар стального ветра', level: 5, school: 'Вызов', type: 'attack', description: 'Вы становитесь вихрем стали. Выберите до 5 существ в пределах 30 футов. Совершите рукопашную атаку заклинанием против каждого. При попадании цель получает 6d10 урона силовым полем. После всех атак вы телепортируетесь в незанятое пространство в пределах 5 футов от одной из целей.' },
    { id: 'planar_binding_circle', name: 'Круг планарной привязки', level: 5, school: 'Ограждение', type: 'summon', description: 'Вы создаёте магический круг, привязывающий вызванное существо к вашей службе на 24 часа. Существо с КР 5 и ниже должно пройти спасбросок Харизмы (с помехой) или служить вам. Оно выполняет ваши приказы и не может навредить вам. На высших уровнях: +1 КР за уровень выше 5-го.' },
    { id: 'gravity_crush', name: 'Гравитационное сжатие', level: 5, school: 'Воплощение', type: 'attack', description: 'Вы многократно увеличиваете гравитацию в сфере радиусом 15 футов с центром на точке в пределах 90 футов на 1 минуту (концентрация). Существа в области должны пройти спасбросок Телосложения или получить 5d8 дробящего урона и упасть ничком. Летящие существа падают. Скорость в области уменьшена вдвое.' },
    { id: 'wraithform', name: 'Форма призрака', level: 5, school: 'Преобразование', type: 'utility', description: 'Вы становитесь бесплотным на 1 минуту (концентрация). Вы можете проходить через существ и объекты. Вы имеете сопротивление ко всему урону, кроме силового поля и излучения. Вы не можете атаковать или произносить заклинания. Скорость полёта 30 футов (парение).' },
    { id: 'empowered_smite', name: 'Усиленная кара', level: 5, school: 'Воплощение', type: 'buff', description: 'Вы наполняете оружие одного существа в пределах касания божественной мощью на 1 минуту (концентрация). Каждая успешная атака этим оружием наносит дополнительно 2d8 урона излучением. Критическое попадание оглушает цель до конца её следующего хода (спасбросок Телосложения отменяет).' },
    { id: 'dome_of_protection', name: 'Купол защиты', level: 5, school: 'Ограждение', type: 'defense', description: 'Вы создаёте непроницаемый купол радиусом 15 футов на 1 минуту (концентрация). Ничто не может войти или выйти из купола: ни существа, ни снаряды, ни заклинания. Существа внутри могут дышать нормально. Купол непрозрачен снаружи, прозрачен изнутри.' },
    { id: 'soul_cage', name: 'Клетка для души', level: 5, school: 'Некромантия', type: 'utility', description: 'Когда гуманоид умирает в пределах 60 футов, вы реакцией ловите его душу в магическую клетку на 8 часов. Вы можете задать душе до 5 вопросов (она обязана отвечать правдиво), или поглотить её для восстановления 3d8 хитов, или использовать для преимущества на одну атаку или спасбросок.' },
    { id: 'maelstrom', name: 'Водоворот', level: 5, school: 'Вызов', type: 'attack', description: 'Вы создаёте водоворот в цилиндре радиусом 20 футов и глубиной 20 футов в пределах 120 футов на 1 минуту (концентрация). Существа, начинающие ход в области, притягиваются на 10 футов к центру и получают 4d8 дробящего урона (спасбросок Силы для половины урона без притягивания).' },
    { id: 'arcane_hand', name: 'Чародейская длань', level: 5, school: 'Воплощение', type: 'summon', description: 'Вы создаёте Большую мерцающую руку из силового поля в пределах 120 футов на 1 минуту (концентрация). Рука имеет 80 хитов, КД 18, Сила 26. Бонусным действием вы приказываете ей: ударить (4d8 урона), толкнуть (спасбросок Силы или отброшен на 20 футов), схватить (проверка Силы для освобождения) или защитить (укрытие на три четверти).' },
    { id: 'mass_fly', name: 'Массовый полёт', level: 5, school: 'Преобразование', type: 'buff', description: 'Вы даёте способность летать до 10 согласным существам в пределах 30 футов на 10 минут (концентрация). Скорость полёта 60 футов. Если заклинание заканчивается в воздухе, существа мягко опускаются на землю со скоростью 60 футов в раунд.' },
    { id: 'necrotic_shroud', name: 'Некротический саван', level: 5, school: 'Некромантия', type: 'defense', description: 'Вы окутываете себя тёмной энергией смерти на 1 минуту (концентрация). Вы получаете 30 временных хитов. Существа в пределах 10 футов от вас в начале вашего хода получают 3d6 урона некротической энергией (спасбросок Телосложения для половины). Вы имеете преимущество на запугивание.' },
    { id: 'holy_weapon', name: 'Священное оружие', level: 5, school: 'Воплощение', type: 'buff', description: 'Оружие в вашей руке сияет божественным светом на 1 час (концентрация). Оно наносит дополнительно 2d8 урона излучением при каждом попадании. Бонусным действием вы можете завершить заклинание, вызвав вспышку: каждое существо в 30 футах проходит спасбросок Телосложения или получает 4d8 урона излучением и становится ослеплённым на 1 минуту.' },
    { id: 'dimension_lock', name: 'Замок измерений', level: 5, school: 'Ограждение', type: 'utility', description: 'Вы запечатываете область радиусом 60 футов с центром на вас на 1 час (концентрация). Никакие телепортации, межпланарные путешествия или вызовы не могут происходить в этой области. Существа не могут входить в Эфирный план. Заклинание можно рассеять только рассеиванием 5-го уровня или выше.' },


    // === Level 6 - 12 spells ===
    { id: 'sunfire_burst', name: 'Вспышка солнечного огня', level: 6, school: 'Воплощение', type: 'attack', description: 'Вы вызываете ослепительную вспышку солнечного пламени в сфере радиусом 30 футов с центром на точке в пределах 150 футов. Каждое существо в области должно пройти спасбросок Ловкости или получить 8d8 урона излучением и стать ослеплённым на 1 минуту. При успехе — половина урона без ослепления. Нежить имеет помеху на спасбросок.' },
    { id: 'soul_binding', name: 'Привязка души', level: 6, school: 'Некромантия', type: 'summon', description: 'Вы привязываете душу недавно умершего существа (до 1 часа) к его телу, создавая могущественную нежить на 24 часа. Существо сохраняет свои характеристики, но его тип меняется на нежить. Оно повинуется вашим приказам и имеет 80 хитов, даже если при жизни имело меньше.' },
    { id: 'prismatic_shield', name: 'Призматический щит', level: 6, school: 'Ограждение', type: 'defense', description: 'Вы окружаете себя вращающимся щитом из семи цветных слоёв на 1 минуту (концентрация). Каждый слой имеет 15 хитов и даёт иммунитет к одному типу урона (красный-огонь, оранжевый-кислота, жёлтый-электричество, зелёный-яд, синий-холод, индиго-психический, фиолетовый-некротический). Разрушенные слои не восстанавливаются.' },
    { id: 'mass_haste', name: 'Массовое ускорение', level: 6, school: 'Преобразование', type: 'buff', description: 'Вы ускоряете до 5 существ по вашему выбору в пределах 30 футов на 1 минуту (концентрация). Каждая цель получает +2 к КД, удвоенную скорость, преимущество на спасброски Ловкости и дополнительное действие (атака, рывок, отход или укрытие). При окончании — потеря хода.' },
    { id: 'word_of_healing', name: 'Слово великого исцеления', level: 6, school: 'Воплощение', type: 'healing', description: 'Вы произносите слово божественной силы. До 6 существ по вашему выбору в пределах 60 футов восстанавливают 5d8 + ваш модификатор заклинательной характеристики хитов. Каждая цель также излечивается от всех болезней и ядов.' },
    { id: 'gravity_well_greater', name: 'Большой гравитационный колодец', level: 6, school: 'Воплощение', type: 'attack', description: 'Вы создаёте точку колоссальной гравитации в пределах 120 футов на 1 минуту (концентрация). Каждое существо в радиусе 30 футов должно пройти спасбросок Силы в начале своего хода или быть притянутым на 20 футов к центру и получить 4d10 дробящего урона. В центре — невозможность двигаться.' },
    { id: 'contingency_ward', name: 'Оберег непредвиденности', level: 6, school: 'Ограждение', type: 'defense', description: 'Вы задаёте условие и связываете с ним защитное заклинание 4-го уровня или ниже. Когда условие выполняется в течение 10 дней, заклинание автоматически срабатывает на вас. Например: «Если я упаду до 0 хитов — сработает Защита от смерти». Компонент: драгоценность стоимостью 500 зм.' },
    { id: 'freezing_sphere', name: 'Ледяная сфера', level: 6, school: 'Воплощение', type: 'attack', description: 'Вы создаёте шар замёрзшей энергии и метаете его в точку в пределах 300 футов. Сфера взрывается в радиусе 30 футов. Каждое существо получает 10d6 урона холодом (спасбросок Телосложения для половины). Вода в области замерзает на 1 минуту, создавая твёрдую поверхность.' },
    { id: 'investiture_of_storm', name: 'Облачение бурей', level: 6, school: 'Преобразование', type: 'buff', description: 'Вы окутываете себя бушующей бурей на 10 минут (концентрация). Вы получаете: иммунитет к урону электричеством и звуком, скорость полёта 60 футов, и можете бонусным действием поразить молнией существо в пределах 60 футов (спасбросок Ловкости или 3d10 урона электричеством).' },
    { id: 'raise_undead_army', name: 'Поднятие армии нежити', level: 6, school: 'Некромантия', type: 'summon', description: 'Вы поднимаете до 8 скелетов или зомби из трупов в пределах 60 футов. Они повинуются вашим приказам на 24 часа. Каждое существо имеет усиленные характеристики: +2 к атаке и урону, +10 хитов к максимуму. Вы можете повторить заклинание, чтобы сохранить контроль.' },
    { id: 'mental_prison', name: 'Ментальная тюрьма', level: 6, school: 'Иллюзия', type: 'attack', description: 'Вы заключаете разум существа в пределах 60 футов в иллюзорную тюрьму на 1 минуту (концентрация). Цель должна пройти спасбросок Интеллекта или получить 5d10 психического урона. При провале цель считает себя окружённой смертельными преградами. Если цель двигается, она получает 10d10 психического урона и заклинание заканчивается.' },
    { id: 'sanctuary_dome', name: 'Купол святилища', level: 6, school: 'Ограждение', type: 'healing', description: 'Вы создаёте светящийся купол радиусом 20 футов на 1 минуту (концентрация). Союзники внутри восстанавливают 3d6 хитов в начале каждого хода и имеют сопротивление ко всему урону. Враждебные существа не могут войти (спасбросок Харизмы с Сл вашего заклинания). Вы не можете атаковать, находясь внутри.' },


    // === Level 7 - 12 spells ===
    { id: 'divine_judgment', name: 'Божественный суд', level: 7, school: 'Воплощение', type: 'attack', description: 'Вы призываете столб божественного света на существо в пределах 120 футов. Цель должна пройти спасбросок Ловкости или получить 10d8 урона излучением. При провале цель также ослеплена и оглушена на 1 раунд. При успехе — половина урона без дополнительных эффектов. Исчадия и нежить имеют помеху на спасбросок.' },
    { id: 'prismatic_wall', name: 'Призматическая стена', level: 7, school: 'Ограждение', type: 'defense', description: 'Вы создаёте вертикальную стену мерцающего света длиной 60 футов и высотой 20 футов в пределах 90 футов на 10 минут (концентрация). Стена состоит из 7 слоёв. Каждый слой наносит свой тип урона (4d6) и имеет дополнительный эффект. Разрушение слоя требует определённого типа заклинания.' },
    { id: 'mass_resurrection', name: 'Массовое воскрешение', level: 7, school: 'Некромантия', type: 'healing', description: 'Вы возвращаете к жизни до 3 существ, умерших не более 1 часа назад, в пределах 30 футов. Каждое существо возвращается с половиной максимальных хитов. Заклинание не работает на существ, умерших от старости, или на нежить. Компонент: алмазы стоимостью 1000 зм за каждое существо.' },
    { id: 'summon_celestial', name: 'Призыв небожителя', level: 7, school: 'Вызов', type: 'summon', description: 'Вы призываете небожителя с КР 7 или ниже в незанятое пространство в пределах 60 футов на 1 час (концентрация). Небожитель дружелюбен к вам и вашим союзникам. Он действует самостоятельно, но подчиняется вашим приказам. Он имеет ауру 10 футов, дающую союзникам +2 к спасброскам.' },
    { id: 'time_stop_minor', name: 'Малая остановка времени', level: 7, school: 'Преобразование', type: 'utility', description: 'Вы на мгновение останавливаете время для всех, кроме себя. Вы получаете 1d4 дополнительных ходов подряд. Во время этих ходов другие существа и предметы застывают. Если вы воздействуете на замороженное существо или его предметы, заклинание заканчивается досрочно.' },
    { id: 'annihilation_beam', name: 'Луч аннигиляции', level: 7, school: 'Воплощение', type: 'attack', description: 'Вы выпускаете луч разрушительной энергии в линии длиной 100 футов и шириной 5 футов. Каждое существо в линии должно пройти спасбросок Ловкости или получить 12d6 урона силовым полем. При успехе — половина. Если существо падает до 0 хитов от этого урона, оно распадается в прах.' },
    { id: 'legendary_resistance', name: 'Легендарная стойкость', level: 7, school: 'Ограждение', type: 'defense', description: 'Вы наделяете себя легендарной стойкостью на 1 час. В течение этого времени вы можете 3 раза автоматически преуспеть в проваленном спасброске. Кроме того, вы имеете преимущество на все спасброски и сопротивление к урону от заклинаний.' },
    { id: 'create_demiplane', name: 'Создание полуплана', level: 7, school: 'Вызов', type: 'utility', description: 'Вы создаёте небольшой полуплан — комнату 30x30x30 футов. Вы определяете её внешний вид и атмосферу. Портал остаётся открытым 1 час. Существа могут свободно входить и выходить. Когда портал закрывается, существа внутри остаются до повторного произнесения. Полуплан существует вечно.' },
    { id: 'storm_avatar', name: 'Аватар бури', level: 7, school: 'Преобразование', type: 'buff', description: 'Вы превращаетесь в аватар бури на 1 минуту (концентрация). Вы получаете: скорость полёта 90 футов, иммунитет к электричеству и звуку, иммунитет к неволшебному физическому урону. В начале каждого вашего хода каждое существо по вашему выбору в 30 футах получает 3d8 урона электричеством.' },
    { id: 'illusory_fortress', name: 'Иллюзорная крепость', level: 7, school: 'Иллюзия', type: 'defense', description: 'Вы создаёте иллюзию крепости радиусом 30 футов на 24 часа. Существа, верящие в иллюзию, воспринимают стены как непроходимые и получают психический урон (6d6) при попытке пройти. Проверка Расследования (Сл вашего заклинания) раскрывает иллюзию. Раскрывший иллюзию проходит свободно.' },
    { id: 'rejuvenation_field', name: 'Поле омоложения', level: 7, school: 'Воплощение', type: 'healing', description: 'Вы создаёте поле целительной энергии радиусом 30 футов на 1 минуту (концентрация). В начале каждого хода каждое существо по вашему выбору в области восстанавливает 4d6 хитов. Существа, находящиеся без сознания, приходят в себя. Нежить получает этот урон как урон излучением.' },
    { id: 'enslave_elemental', name: 'Порабощение элементаля', level: 7, school: 'Очарование', type: 'summon', description: 'Вы подчиняете одного элементаля с КР 8 или ниже в пределах 60 футов на 24 часа. Цель должна пройти спасбросок Харизмы с помехой или стать подчинённой вашей воле. Элементаль выполняет ваши приказы и не может навредить вам. При получении урона он повторяет спасбросок.' },


    // === Level 8 - 11 spells ===
    { id: 'apocalypse_flame', name: 'Пламя апокалипсиса', level: 8, school: 'Воплощение', type: 'attack', description: 'Вы вызываете столб адского пламени в цилиндре радиусом 30 футов и высотой 60 футов в пределах 150 футов. Каждое существо в области должно пройти спасбросок Ловкости или получить 12d8 урона огнём. При успехе — половина. Область горит 1 минуту: существа, входящие или начинающие ход, получают 4d8 урона огнём.' },
    { id: 'absolute_zero', name: 'Абсолютный ноль', level: 8, school: 'Воплощение', type: 'attack', description: 'Вы понижаете температуру до абсолютного нуля в сфере радиусом 20 футов в пределах 120 футов. Каждое существо в области должно пройти спасбросок Телосложения или получить 10d10 урона холодом и стать заморожённым (парализованным) на 1 минуту. При успехе — половина урона. Замороженная цель повторяет спасбросок в конце хода.' },
    { id: 'divine_intervention', name: 'Божественное вмешательство', level: 8, school: 'Вызов', type: 'healing', description: 'Вы призываете божественное вмешательство. Каждое существо по вашему выбору в радиусе 60 футов восстанавливает все хиты и излечивается от всех болезней, проклятий, ядов, ослепления, оглушения, паралича. Существа с 0 хитов возвращаются к жизни с полными хитами (если умерли не более 1 минуты назад).' },
    { id: 'temporal_prison', name: 'Темпоральная тюрьма', level: 8, school: 'Преобразование', type: 'utility', description: 'Вы замораживаете существо во времени. Цель в пределах 60 футов должна пройти спасбросок Мудрости или стать заключённой в остановленном времени на 1 сутки. Существо неуязвимо и не может быть перемещено. Только Исполнение желаний или Рассеивание магии 9-го уровня может освободить цель досрочно.' },
    { id: 'avatar_of_war', name: 'Аватар войны', level: 8, school: 'Преобразование', type: 'buff', description: 'Вы становитесь воплощением войны на 1 минуту (концентрация). Ваш размер становится Огромным, вы получаете: +50 временных хитов, иммунитет к испугу и очарованию, три атаки за действие, +4 к броскам атаки и урона. Ваши атаки считаются магическими и наносят дополнительно 2d8 урона силовым полем.' },
    { id: 'soul_storm', name: 'Буря душ', level: 8, school: 'Некромантия', type: 'attack', description: 'Вы высвобождаете вихрь проклятых душ в сфере радиусом 30 футов с центром на точке в пределах 120 футов. Каждое существо в области должно пройти спасбросок Харизмы или получить 8d8 урона некротической энергией и 4d8 психического урона. При успехе — половина. Убитые этим заклинанием поднимаются как призраки под вашим контролем.' },
    { id: 'invulnerability_field', name: 'Поле неуязвимости', level: 8, school: 'Ограждение', type: 'defense', description: 'Вы создаёте поле абсолютной защиты вокруг себя на 10 минут (концентрация). Вы иммунны ко всему урону. Вы не можете быть целью заклинаний. Однако вы не можете атаковать или произносить заклинания, направленные за пределы поля. Компонент: алмазная пыль стоимостью 500 зм.' },
    { id: 'summon_elder_elemental', name: 'Призыв старшего элементаля', level: 8, school: 'Вызов', type: 'summon', description: 'Вы призываете старшего элементаля (КР 11) в пределах 60 футов на 1 час (концентрация). Элементаль имеет 150 хитов, КД 18 и мультиатаку (3 атаки за ход). Он повинуется вашим приказам и может использовать одну легендарную способность своей стихии раз в ход.' },
    { id: 'reality_warp', name: 'Искажение реальности', level: 8, school: 'Иллюзия', type: 'utility', description: 'Вы изменяете восприятие реальности в области радиусом 60 футов на 1 час (концентрация). Вы определяете, как область выглядит, звучит, пахнет и ощущается. Иллюзия включает тактильные ощущения. Существа в области должны пройти проверку Расследования (Сл вашего заклинания + 5) для раскрытия.' },
    { id: 'mass_domination', name: 'Массовое подчинение', level: 8, school: 'Очарование', type: 'attack', description: 'Вы подчиняете до 5 существ по вашему выбору в пределах 60 футов на 1 час (концентрация). Каждая цель должна пройти спасбросок Мудрости или стать очарованной и подконтрольной вам. Вы можете отдавать приказы бонусным действием. При получении урона цель повторяет спасбросок с преимуществом.' },
    { id: 'fortress_of_will', name: 'Крепость воли', level: 8, school: 'Ограждение', type: 'defense', description: 'Вы усиливаете разум и тело до 6 существ в пределах 30 футов на 1 час. Цели получают: иммунитет к психическому урону, иммунитет к очарованию и испугу, сопротивление ко всему урону от заклинаний, +3 к спасброскам. Заклинание заканчивается для существа, если оно атакует или произносит враждебное заклинание.' },


    // === Level 9 - 10 spells ===
    { id: 'world_ender', name: 'Погибель мира', level: 9, school: 'Воплощение', type: 'attack', description: 'Вы направляете всю свою магическую мощь в одну разрушительную атаку. Существо в пределах 60 футов должно пройти спасбросок Ловкости или получить 20d6 + 40 урона силовым полем. При успехе — половина. Если урон превышает максимум хитов цели, она мгновенно погибает. После произнесения вы получаете 3 уровня истощения.' },
    { id: 'divine_ascension', name: 'Божественное вознесение', level: 9, school: 'Преобразование', type: 'buff', description: 'Вы на 1 минуту обретаете полубожественную форму. Вы получаете: +100 временных хитов, иммунитет ко всему урону ниже 20 единиц за раз, скорость полёта 120 футов, ваши атаки заклинаниями наносят дополнительно 6d8 урона излучением, и вы можете произносить заклинания 5-го уровня и ниже без ячеек.' },
    { id: 'rewrite_fate', name: 'Переписать судьбу', level: 9, school: 'Прорицание', type: 'utility', description: 'Вы изменяете ткань судьбы для одного существа или события. Вы можете: отменить смерть существа (если оно умерло не более 1 минуты назад), изменить результат одного броска d20 на любой желаемый, или отменить последствия одного заклинания/события, произошедшего в последнем раунде. Можно использовать раз в 30 дней.' },
    { id: 'eternal_prison', name: 'Вечная тюрьма', level: 9, school: 'Ограждение', type: 'utility', description: 'Вы заключаете существо в магическую тюрьму навечно. Цель в пределах 30 футов должна пройти спасбросок Мудрости или быть заключена в один из вариантов: кристалл (помещённый в тайное место), миниатюрная сфера (вы носите с собой), сон (вечный сон в потустороннем пространстве). Только Исполнение желаний может освободить.' },
    { id: 'army_of_the_dead', name: 'Армия мёртвых', level: 9, school: 'Некромантия', type: 'summon', description: 'Вы поднимаете армию нежити. До 30 скелетов или зомби восстают из мёртвых в пределах 120 футов и служат вам 24 часа. Кроме того, вы можете поднять до 3 существ как рыцарей смерти (КР 5 каждый). Все поднятые существа повинуются вашим мысленным приказам и действуют в ваш ход.' },
    { id: 'cosmic_devastation', name: 'Космическое опустошение', level: 9, school: 'Воплощение', type: 'attack', description: 'Вы призываете энергию далёких звёзд. В области радиусом 40 футов с центром на точке в пределах 300 футов каждое существо должно пройти спасбросок Телосложения или получить 10d10 урона излучением и 5d10 урона огнём. При успехе — половина. Область на 1 минуту становится зоной антимагии.' },
    { id: 'genesis', name: 'Сотворение мира', level: 9, school: 'Вызов', type: 'utility', description: 'Вы создаёте постоянный полуплан размером до 1 мили в диаметре. Вы определяете: ландшафт, климат, гравитацию, течение времени (до 10:1 по отношению к Материальному плану). Полуплан существует навечно и доступен через специальный портал. Произнесение: 1 час. Компонент: драгоценности на 25000 зм.' },
    { id: 'divine_restoration', name: 'Божественное восстановление', level: 9, school: 'Воплощение', type: 'healing', description: 'Вы высвобождаете волну божественной энергии. Каждое существо по вашему выбору в радиусе 120 футов полностью исцеляется: все хиты восстановлены, все состояния сняты, все проклятия сняты, потерянные конечности восстановлены, уровни истощения убраны. Действует даже на существ с 0 хитов.' },
    { id: 'reality_collapse', name: 'Коллапс реальности', level: 9, school: 'Вызов', type: 'attack', description: 'Вы вызываете разрыв в ткани реальности в точке в пределах 120 футов. Сфера радиусом 20 футов становится зоной хаоса на 1 минуту. Каждое существо, начинающее ход в зоне, бросает d10: 1-3 — 8d10 урона силовым полем, 4-6 — телепортация в случайную точку в 100 футах, 7-9 — заморожено во времени на 1 раунд, 10 — ничего.' },
    { id: 'absolute_dominion', name: 'Абсолютная власть', level: 9, school: 'Очарование', type: 'attack', description: 'Вы подавляете волю одного существа в пределах 60 футов навсегда (до рассеивания). Цель должна пройти спасбросок Мудрости с помехой или стать полностью подконтрольной вам. Подчинённое существо выполняет любые ваши приказы. Оно повторяет спасбросок раз в 30 дней или при получении урона от вас.' },
];
