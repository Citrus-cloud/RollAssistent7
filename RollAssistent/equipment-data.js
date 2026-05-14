// ========== Снаряжение и артефакты (100 предметов) ==========

const equipmentList = [
    // ============================================================
    // ДОСПЕХИ (15 предметов)
    // ============================================================
    {
        id: 'padded_armor',
        name: 'Стёганый доспех',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Лёгкий доспех из простёганной ткани. КД = 11 + мод. Ловкости.',
        bonuses: { ac: 1 },
        cost: 5, weight: 8
    },
    {
        id: 'leather_armor',
        name: 'Кожаный доспех',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Лёгкий доспех из выделанной кожи. КД = 11 + мод. Ловкости.',
        bonuses: { ac: 1 },
        cost: 10, weight: 10
    },
    {
        id: 'studded_leather',
        name: 'Проклёпанная кожа',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Лёгкий доспех из кожи с металлическими заклёпками. КД = 12 + мод. Ловкости.',
        bonuses: { ac: 2 },
        cost: 45, weight: 13
    },
    {
        id: 'hide_armor',
        name: 'Шкурный доспех',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Средний доспех из толстых шкур. КД = 12 + мод. Ловкости (макс. 2).',
        bonuses: { ac: 2 },
        cost: 10, weight: 12
    },
    {
        id: 'chain_shirt',
        name: 'Кольчужная рубаха',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Средний доспех из переплетённых колец. КД = 13 + мод. Ловкости (макс. 2).',
        bonuses: { ac: 3 },
        cost: 50, weight: 20
    },
    {
        id: 'scale_mail',
        name: 'Чешуйчатый доспех',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Средний доспех из наложенных металлических чешуек. КД = 14 + мод. Ловкости (макс. 2). Помеха на Скрытность.',
        bonuses: { ac: 4 },
        cost: 50, weight: 45
    },
    {
        id: 'breastplate',
        name: 'Кираса',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Средний доспех из цельного металла. КД = 14 + мод. Ловкости (макс. 2).',
        bonuses: { ac: 4 },
        cost: 400, weight: 20
    },
    {
        id: 'half_plate',
        name: 'Полулаты',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Средний доспех из крупных металлических пластин. КД = 15 + мод. Ловкости (макс. 2). Помеха на Скрытность.',
        bonuses: { ac: 5 },
        cost: 750, weight: 40
    },
    {
        id: 'ring_mail',
        name: 'Колечный доспех',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Тяжёлый доспех из металлических колец. КД = 14, помеха на Скрытность.',
        bonuses: { ac: 6 },
        cost: 30, weight: 40
    },
    {
        id: 'chain_mail',
        name: 'Кольчуга',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Тяжёлый доспех из переплетённых колец. КД = 16, требуется Сила 13, помеха на Скрытность.',
        bonuses: { ac: 8 },
        cost: 75, weight: 55
    },
    {
        id: 'splint_armor',
        name: 'Пластинчатый доспех',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Тяжёлый доспех из металлических полос. КД = 17, требуется Сила 15, помеха на Скрытность.',
        bonuses: { ac: 9 },
        cost: 200, weight: 60
    },
    {
        id: 'plate_armor',
        name: 'Латный доспех',
        type: 'armor',
        rarity: 'обычный',
        slot: 'body',
        description: 'Тяжёлый доспех из подогнанных металлических пластин. КД = 18, требуется Сила 15, помеха на Скрытность.',
        bonuses: { ac: 10 },
        cost: 1500, weight: 65
    },
    {
        id: 'wooden_shield',
        name: 'Деревянный щит',
        type: 'armor',
        rarity: 'обычный',
        slot: 'offhand',
        description: 'Простой щит из дерева. Даёт +2 КД.',
        bonuses: { ac: 2 },
        cost: 10, weight: 6
    },
    {
        id: 'steel_shield',
        name: 'Стальной щит',
        type: 'armor',
        rarity: 'обычный',
        slot: 'offhand',
        description: 'Прочный металлический щит. Даёт +2 КД.',
        bonuses: { ac: 2 },
        cost: 20, weight: 6
    },
    {
        id: 'tower_shield',
        name: 'Башенный щит',
        type: 'armor',
        rarity: 'необычный',
        slot: 'offhand',
        description: 'Огромный щит, дающий +3 КД. Снижает скорость на 5 футов.',
        bonuses: { ac: 3, speed: -5 },
        cost: 75, weight: 20
    },

    // ============================================================
    // ОРУЖИЕ (20 предметов)
    // ============================================================
    {
        id: 'dagger',
        name: 'Кинжал',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Лёгкое оружие, 1d4 колющего урона. Можно метнуть (20/60 фт).',
        bonuses: { attack: 0, damage: '1d4' },
        cost: 2, weight: 1
    },
    {
        id: 'shortsword',
        name: 'Короткий меч',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Лёгкое оружие, 1d6 колющего урона. Можно использовать в каждой руке.',
        bonuses: { attack: 0, damage: '1d6' },
        cost: 10, weight: 2
    },
    {
        id: 'longsword_std',
        name: 'Длинный меч',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Универсальное оружие, 1d8 рубящего урона (1d10 двумя руками).',
        bonuses: { attack: 0, damage: '1d8' },
        cost: 15, weight: 3
    },
    {
        id: 'rapier',
        name: 'Рапира',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Фехтовальное оружие, 1d8 колющего урона. Можно использовать Ловкость вместо Силы.',
        bonuses: { attack: 0, damage: '1d8', finesse: true },
        cost: 25, weight: 2
    },
    {
        id: 'greatsword',
        name: 'Двуручный меч',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Тяжёлое двуручное оружие, 2d6 рубящего урона.',
        bonuses: { attack: 0, damage: '2d6' },
        cost: 50, weight: 6
    },
    {
        id: 'greataxe',
        name: 'Двуручный топор',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Тяжёлое двуручное оружие, 1d12 рубящего урона.',
        bonuses: { attack: 0, damage: '1d12' },
        cost: 30, weight: 7
    },
    {
        id: 'warhammer',
        name: 'Боевой молот',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Универсальное оружие, 1d8 дробящего урона (1d10 двумя руками).',
        bonuses: { attack: 0, damage: '1d8', damageType: 'дробящий' },
        cost: 15, weight: 2
    },
    {
        id: 'shortbow',
        name: 'Короткий лук',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Дальнобойное оружие, 1d6 колющего урона. Дистанция 80/320 фт.',
        bonuses: { attack: 0, damage: '1d6', range: 80 },
        cost: 25, weight: 2
    },
    {
        id: 'longbow',
        name: 'Длинный лук',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Тяжёлое дальнобойное оружие, 1d8 колющего урона. Дистанция 150/600 фт.',
        bonuses: { attack: 0, damage: '1d8', range: 150 },
        cost: 50, weight: 2
    },
    {
        id: 'crossbow_light',
        name: 'Лёгкий арбалет',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Дальнобойное оружие, 1d8 колющего урона. Дистанция 80/320 фт. Перезарядка.',
        bonuses: { attack: 0, damage: '1d8', range: 80 },
        cost: 25, weight: 5
    },
    {
        id: 'halberd',
        name: 'Алебарда',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Тяжёлое древковое оружие, 1d10 рубящего урона. Досягаемость 10 фт.',
        bonuses: { attack: 0, damage: '1d10', reach: true },
        cost: 20, weight: 6
    },
    {
        id: 'morningstar',
        name: 'Моргенштерн',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Шипастая булава, 1d8 колющего урона.',
        bonuses: { attack: 0, damage: '1d8', damageType: 'колющий' },
        cost: 15, weight: 4
    },
    {
        id: 'scimitar',
        name: 'Скимитар',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Изогнутый меч, 1d6 рубящего урона. Лёгкое, можно использовать в каждой руке.',
        bonuses: { attack: 0, damage: '1d6' },
        cost: 25, weight: 3
    },
    {
        id: 'hand_crossbow',
        name: 'Ручной арбалет',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Маленький арбалет, 1d6 колющего урона. Дистанция 30/120 фт. Можно стрелять с двух рук.',
        bonuses: { attack: 0, damage: '1d6', range: 30 },
        cost: 75, weight: 3
    },
    {
        id: 'pike',
        name: 'Пика',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Длинное копьё, 1d10 колющего урона. Досягаемость 10 фт. Тяжёлое, двуручное.',
        bonuses: { attack: 0, damage: '1d10', reach: true },
        cost: 5, weight: 18
    },
    {
        id: 'battleaxe',
        name: 'Боевой топор',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Универсальное оружие, 1d8 рубящего урона (1d10 двумя руками).',
        bonuses: { attack: 0, damage: '1d8' },
        cost: 10, weight: 4
    },
    {
        id: 'flail',
        name: 'Цеп',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Шипастый шар на цепи, 1d8 дробящего урона.',
        bonuses: { attack: 0, damage: '1d8', damageType: 'дробящий' },
        cost: 10, weight: 2
    },
    {
        id: 'maul',
        name: 'Кувалда',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Тяжёлый двуручный молот, 2d6 дробящего урона.',
        bonuses: { attack: 0, damage: '2d6', damageType: 'дробящий' },
        cost: 10, weight: 10
    },
    {
        id: 'whip',
        name: 'Кнут',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Длинный кнут, 1d4 рубящего урона. Досягаемость 10 фт.',
        bonuses: { attack: 0, damage: '1d4', reach: true },
        cost: 2, weight: 3
    },
    {
        id: 'dart',
        name: 'Дротик',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Метательное оружие, 1d4 колющего урона. Дистанция 20/60 фт. Лёгкое.',
        bonuses: { attack: 0, damage: '1d4', range: 20 },
        cost: 1, weight: 0.25
    },

    // ============================================================
    // АМУЛЕТЫ И ОЖЕРЕЛЬЯ (8 предметов)
    // ============================================================
    {
        id: 'amulet_of_health',
        name: 'Амулет здоровья',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'neck',
        description: 'Увеличивает Телосложение владельца до 19.',
        bonuses: { con: 19 },
        cost: 800, weight: 0
    },
    {
        id: 'periapt_of_wound_closure',
        name: 'Периапт закрытия ран',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'neck',
        description: 'Автоматически стабилизирует владельца при падении до 0 хитов. Удваивает восстановление хитов от кости здоровья.',
        bonuses: { autoStabilize: true, healBonus: 2 },
        cost: 400, weight: 0
    },
    {
        id: 'amulet_of_proof_against_detection',
        name: 'Амулет защиты от обнаружения',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'neck',
        description: 'Защищает от заклинаний Прорицания и магического наблюдения.',
        bonuses: { antiDivination: true },
        cost: 900, weight: 0
    },
    {
        id: 'necklace_of_adaptation',
        name: 'Ожерелье адаптации',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'neck',
        description: 'Позволяет дышать в любой среде и в любых условиях.',
        bonuses: { breatheAnywhere: true },
        cost: 350, weight: 0
    },
    {
        id: 'medallion_of_thoughts',
        name: 'Медальон мыслей',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'neck',
        description: 'Позволяет читать поверхностные мысли существ в 30 фт (3 раза в день).',
        bonuses: { wis: 1 },
        cost: 500, weight: 0
    },
    {
        id: 'holy_symbol_of_protection',
        name: 'Святой символ защиты',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'neck',
        description: 'Даёт преимущество на спасброски от заклинаний нежити и демонов.',
        bonuses: { savingThrows: 2 },
        cost: 700, weight: 0
    },
    {
        id: 'talisman_of_pure_good',
        name: 'Талисман чистого добра',
        type: 'artifact',
        rarity: 'легендарный',
        slot: 'neck',
        description: 'Позволяет прикосновением уничтожить злое существо (спасбросок Ловкости Сл 20, иначе 8d6 урона излучением).',
        bonuses: { cha: 2 },
        cost: 5000, weight: 0
    },
    {
        id: 'scarlet_and_blue_bead',
        name: 'Алая и синяя бусина',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'neck',
        description: 'Даёт сопротивление урону огнём и холодом.',
        bonuses: { fireResist: true, coldResist: true },
        cost: 600, weight: 0
    },

        // ============================================================
    // КОЛЬЦА (8 предметов)
    // ============================================================
    {
        id: 'ring_of_protection',
        name: 'Кольцо защиты',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'ring',
        description: 'Простое железное кольцо с выгравированным символом щита. Даёт +1 КД и +1 ко всем спасброскам.',
        bonuses: { ac: 1, savingThrows: 1 },
        cost: 500, weight: 0
    },
    {
        id: 'ring_of_resistance_fire',
        name: 'Кольцо сопротивления огню',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Медное кольцо с рубиновой искрой внутри. Даёт сопротивление урону от огня.',
        bonuses: { fireResist: true },
        cost: 350, weight: 0
    },
    {
        id: 'ring_of_evasion',
        name: 'Кольцо уклонения',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'ring',
        description: 'Серебряное кольцо с изображением уклоняющейся фигуры. Позволяет перебросить проваленный спасбросок Ловкости (3 раза в день).',
        bonuses: { evasionReroll: '3/день' },
        cost: 650, weight: 0
    },
    {
        id: 'ring_of_jumping',
        name: 'Кольцо прыжков',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Кольцо из гибкого тростника. Удваивает дистанцию прыжков.',
        bonuses: { jumpBonus: 2 },
        cost: 200, weight: 0
    },
    {
        id: 'ring_of_mind_shielding',
        name: 'Кольцо защиты разума',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'ring',
        description: 'Тусклое железное кольцо, холодящее висок. Защищает от чтения мыслей и телепатии.',
        bonuses: { antiTelepathy: true },
        cost: 500, weight: 0
    },
    {
        id: 'ring_of_water_walking',
        name: 'Кольцо хождения по воде',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Перламутровое кольцо с набегающей волной. Позволяет ходить по воде и другим жидкостям.',
        bonuses: { waterWalk: true },
        cost: 300, weight: 0
    },
    {
        id: 'ring_of_regeneration',
        name: 'Кольцо регенерации',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'ring',
        description: 'Кольцо из живого дерева с пульсирующей зелёной искрой. Восстанавливает 1d6 хитов каждые 10 минут. Отращивает потерянные конечности.',
        bonuses: { regeneration: '1d6/10мин' },
        cost: 2000, weight: 0
    },
    {
        id: 'ring_of_spell_storing',
        name: 'Кольцо хранения заклинаний',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'ring',
        description: 'Сапфировое кольцо с мерцающей звёздной пылью внутри. Хранит до 5 уровней заклинаний, которые можно сотворить позже.',
        bonuses: { spellStorage: 5 },
        cost: 800, weight: 0
    },
     // ============================================================
    // ПЕРЧАТКИ И НАРУЧИ (6 предметов)
    // ============================================================
    {
        id: 'gloves_of_ogre_power',
        name: 'Перчатки силы огра',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'hands',
        description: 'Грубые кожаные перчатки, пропитанные потом великанов. Увеличивают Силу до 19.',
        bonuses: { str: 19 },
        cost: 600, weight: 1
    },
    {
        id: 'gauntlets_of_flaming_fury',
        name: 'Рукавицы пламенной ярости',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'hands',
        description: 'Стальные рукавицы, с которых срываются языки пламени. Добавляют 1d6 урона огнём к атакам без оружия и оружием ближнего боя.',
        bonuses: { fireDamage: '1d6' },
        cost: 900, weight: 2
    },
    {
        id: 'bracers_of_archery',
        name: 'Наручи лучника',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'hands',
        description: 'Наручи из тёмной кожи с вышитыми стрелами. Дают +2 к урону от дальнобойных атак из лука.',
        bonuses: { rangedDamage: 2 },
        cost: 400, weight: 1
    },
    {
        id: 'bracers_of_defense',
        name: 'Наручи защиты',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'hands',
        description: 'Парные наручи из полированной стали. Дают +2 КД, если на владельце нет доспеха.',
        bonuses: { ac: 2 },
        cost: 1200, weight: 1
    },
    {
        id: 'gloves_of_thievery',
        name: 'Перчатки воровства',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'hands',
        description: 'Тонкие чёрные перчатки, не оставляющие следов. Дают +5 к проверкам Ловкости рук и взлома замков.',
        bonuses: { sleightOfHand: 5, lockpicking: 5 },
        cost: 350, weight: 1
    },
    {
        id: 'hands_of_the_healer',
        name: 'Руки целителя',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'hands',
        description: 'Белые шёлковые перчатки с вышитым символом жизни. Заклинания исцеления восстанавливают дополнительные 2d6 хитов.',
        bonuses: { healBonus: '2d6' },
        cost: 700, weight: 1
    },

    // ============================================================
    // ОБУВЬ (6 предметов)
    // ============================================================
    {
        id: 'boots_of_elvenkind',
        name: 'Сапоги эльфийского рода',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'feet',
        description: 'Заглушают шаги. Преимущество на проверки Скрытности (бесшумное передвижение).',
        bonuses: { stealth: 'advantage' },
        cost: 300, weight: 2
    },
    {
        id: 'boots_of_speed',
        name: 'Сапоги скорости',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'feet',
        description: 'Бонусным действием удвоить скорость на 10 минут (1 раз в день).',
        bonuses: { speed: 10 },
        cost: 800, weight: 2
    },
    {
        id: 'winged_boots',
        name: 'Крылатые сапоги',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'feet',
        description: 'Дают скорость полёта 30 фт на 4 часа в день (можно разделить).',
        bonuses: { fly: 30 },
        cost: 600, weight: 2
    },
    {
        id: 'boots_of_striding_and_springing',
        name: 'Сапоги шага и прыжка',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'feet',
        description: 'Скорость не снижается от тяжёлого доспеха, дистанция прыжков утроена.',
            bonuses: { speed: 5, jumpBonus: 3 },
    cost: 400, weight: 2
},
{
    id: 'slippers_of_spider_climbing',
    name: 'Тапочки паука',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Позволяют ходить по стенам и потолку.',
    bonuses: { spiderClimb: true },
    cost: 400, weight: 1
},
{
    id: 'boots_of_the_winterlands',
    name: 'Сапоги зимних земель',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Сопротивление холоду, игнорирование труднопроходимой местности (снег/лёд).',
    bonuses: { coldResist: true },
    cost: 350, weight: 2
},

// ============================================================
// ПЛАЩИ И НАКИДКИ (6 предметов)
// ============================================================
{
    id: 'cloak_of_protection',
    name: 'Плащ защиты',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Даёт +1 КД и +1 ко всем спасброскам.',
    bonuses: { ac: 1, savingThrows: 1 },
    cost: 350, weight: 1
},
{
    id: 'cloak_of_elvenkind',
    name: 'Плащ эльфийского рода',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Преимущество на проверки Скрытности. Наблюдатели получают помеху на Восприятие.',
    bonuses: { stealth: 'advantage' },
    cost: 400, weight: 1
},
{
    id: 'cloak_of_displacement',
    name: 'Плащ смещения',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'back',
    description: 'Создаёт иллюзию смещения. Атаки по вам совершаются с помехой. Сбрасывается при получении урона.',
    bonuses: { ac: 1 },
    cost: 900, weight: 1
},
{
    id: 'cloak_of_the_manta_ray',
    name: 'Плащ ската',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Даёт скорость плавания 60 фт и способность дышать под водой.',
    bonuses: { swim: 60, waterBreathing: true },
    cost: 350, weight: 1
},
{
    id: 'cloak_of_invisibility',
    name: 'Плащ невидимости',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'back',
    description: 'Действием стать невидимым на 2 часа (1 раз в день).',
    bonuses: { dex: 2 },
    cost: 5000, weight: 1
},
{
    id: 'mantle_of_spell_resistance',
    name: 'Мантия сопротивления магии',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'back',
    description: 'Преимущество на спасброски от заклинаний.',
    bonuses: { savingThrows: 2 },
    cost: 1000, weight: 1
},

// ============================================================
// ГОЛОВНЫЕ УБОРЫ (6 предметов)
// ============================================================
{
    id: 'helm_of_comprehending_languages',
    name: 'Шлем понимания языков',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет понимать все языки.',
    bonuses: { int: 1 },
    cost: 400, weight: 2
},
{
    id: 'helm_of_telepathy',
    name: 'Шлем телепатии',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет телепатически общаться с существами в 30 фт.',
    bonuses: { cha: 1 },
    cost: 500, weight: 2
},
{
    id: 'circlet_of_blasting',
    name: 'Венец взрыва',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет сотворять Палящий луч (2-й уровень) 1 раз в день.',
    bonuses: { int: 1 },
    cost: 350, weight: 1
},
{
    id: 'headband_of_intellect',
    name: 'Обруч интеллекта',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Увеличивает Интеллект владельца до 19.',
    bonuses: { int: 19 },
    cost: 600, weight: 1
},
{
    id: 'dragon_helm',
    name: 'Драконий шлем',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'head',
    description: 'Даёт сопротивление одной стихии (на выбор при надевании).',
    bonuses: { ac: 1, cha: 1 },
    cost: 1500, weight: 3
},
{
    id: 'cap_of_water_breathing',
    name: 'Шапка подводного дыхания',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет дышать под водой неограниченное время.',
    bonuses: { waterBreathing: true },
    cost: 300, weight: 1
},

// ============================================================
// ПОЯСА (6 предметов)
// ============================================================
{
    id: 'belt_of_dwarvenkind',
    name: 'Пояс дварфийского рода',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: 'Даёт +2 Телосложения, тёмное зрение 60 фт, сопротивление яду.',
    bonuses: { con: 2 },
    cost: 1000, weight: 2
},
{
    id: 'belt_of_giant_strength_hill',
    name: 'Пояс силы холмового великана',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: 'Увеличивает Силу владельца до 21.',
    bonuses: { str: 21 },
    cost: 2000, weight: 2
},
{
    id: 'belt_of_giant_strength_stone',
    name: 'Пояс силы каменного великана',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'waist',
    description: 'Увеличивает Силу владельца до 23.',
    bonuses: { str: 23 },
    cost: 4000, weight: 2
},
{
    id: 'belt_of_giant_strength_frost',
    name: 'Пояс силы ледяного великана',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'waist',
    description: 'Увеличивает Силу владельца до 25.',
    bonuses: { str: 25 },
    cost: 8000, weight: 2
},
{
    id: 'belt_of_giant_strength_fire',
    name: 'Пояс силы огненного великана',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'waist',
    description: 'Увеличивает Силу владельца до 27.',
    bonuses: { str: 27 },
    cost: 12000, weight: 2
},
{
    id: 'belt_of_giant_strength_cloud',
    name: 'Пояс силы облачного великана',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'waist',
    description: 'Увеличивает Силу владельца до 29.',
    bonuses: { str: 29 },
    cost: 20000, weight: 2
},

// ============================================================
// ЖЕЗЛЫ И ПОСОХИ (5 предметов)
// ============================================================
{
    id: 'staff_of_the_python',
    name: 'Посох питона',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Можно превратить в гигантского питона действием. Сражается за вас (1 раз в день).',
    bonuses: { attack: 0, damage: '1d6', special: 'python' },
    cost: 500, weight: 4
},
{
    id: 'staff_of_charming',
    name: 'Посох очарования',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Позволяет сотворять Очарование личности (1 уровень, 3 заряда).',
    bonuses: { cha: 1, attack: 0, damage: '1d6' },
    cost: 800, weight: 4
},
{
    id: 'staff_of_power',
    name: 'Посох могущества',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: 'Даёт +2 КД, +2 к атакам и спасброскам. Содержит мощные заклинания.',
    bonuses: { ac: 2, attack: 2, savingThrows: 2, damage: '1d6' },
    cost: 5000, weight: 4
},
{
    id: 'wand_of_magic_missiles',
    name: 'Жезл волшебных стрел',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Выпускает Волшебную стрелу (до 7 зарядов, восстанавливает 1d6+1 в день).',
    bonuses: { int: 1, attack: 0, damage: '1d4+1' },
    cost: 400, weight: 1
},
{
    id: 'wand_of_fireballs',
    name: 'Жезл огненных шаров',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Позволяет сотворять Огненный шар (3 уровень, до 7 зарядов).',
    bonuses: { int: 1, attack: 0, damage: '8d6' },
    cost: 1500, weight: 1
},

    // ============================================================
    // ПРОЧИЕ АРТЕФАКТЫ (8 предметов)
    // ============================================================
    {
        id: 'bag_of_holding',
        name: 'Сумка хранения',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'back',
        description: 'Вмещает до 500 фунтов груза при собственном весе 15 фунтов.',
        bonuses: {},
        cost: 400, weight: 15
    },
    {
        id: 'lantern_of_revealing',
        name: 'Фонарь разоблачения',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'offhand',
        description: 'Освещает невидимых существ и предметы в радиусе 30 фт.',
        bonuses: {},
        cost: 350, weight: 2
    },
    {
        id: 'gem_of_brightness',
        name: 'Самоцвет яркости',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Излучает яркий свет. 50 зарядов, восстанавливает 4d10 в день.',
        bonuses: {},
        cost: 300, weight: 0
    },
    {
        id: 'stone_of_good_luck',
        name: 'Камень удачи',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Даёт +1 ко всем проверкам характеристик и спасброскам.',
        bonuses: { savingThrows: 1 },
        cost: 500, weight: 0
    },
    {
        id: 'crystal_ball',
        name: 'Хрустальный шар',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'offhand',
        description: 'Позволяет наблюдать за существами на расстоянии (Прорицание, 1 раз в день).',
        bonuses: { wis: 2 },
        cost: 3000, weight: 3
    },
    {
        id: 'pearl_of_power',
        name: 'Жемчужина силы',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Восстанавливает одну ячейку заклинаний до 3-го уровня (1 раз в день).',
        bonuses: { int: 1 },
        cost: 400, weight: 0
    },
    {
        id: 'broom_of_flying',
        name: 'Метла полёта',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'offhand',
        description: 'Позволяет летать со скоростью 30 фт. Можно перевозить до 200 фунтов.',
        bonuses: { fly: 30 },
        cost: 500, weight: 3
    },
    {
        id: 'alchemy_jug',
        name: 'Алхимический кувшин',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'offhand',
        description: 'Производит различные жидкости: вода, пиво, мёд, масло, яд и другие.',
        bonuses: {},
        cost: 300, weight: 12
    },

    // ============================================================
    // ДОПОЛНИТЕЛЬНОЕ ОРУЖИЕ (6 предметов)
    // ============================================================
    {
        id: 'javelin',
        name: 'Метательное копьё',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Лёгкое метательное оружие. 1d6 колющего урона, дистанция 30/120 фт.',
        bonuses: { attack: 0, damage: '1d6', range: 30 },
        cost: 1, weight: 2
    },
    {
        id: 'lance',
        name: 'Копьё всадника',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Длинное копьё для верховой езды. 1d12 колющего урона, досягаемость 10 фт.',
        bonuses: { attack: 0, damage: '1d12', reach: true },
        cost: 10, weight: 6
    },
    {
        id: 'net',
        name: 'Сеть',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Метательное оружие, опутывает цель. Дистанция 5/15 фт.',
        bonuses: { attack: 0, damage: '0', special: 'entangle' },
        cost: 1, weight: 3
    },
    {
        id: 'blowgun',
        name: 'Духовая трубка',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Дальнобойное оружие, 1 колющего урона. Дистанция 25/100 фт.',
        bonuses: { attack: 0, damage: '1', range: 25 },
        cost: 10, weight: 1
    },
    {
        id: 'trident',
        name: 'Трезубец',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Универсальное оружие. 1d6 колющего урона (1d8 двумя руками). Можно метнуть.',
        bonuses: { attack: 0, damage: '1d6', range: 20 },
        cost: 5, weight: 4
    },
    {
        id: 'war_pick',
        name: 'Боевой клевец',
        type: 'weapon',
        rarity: 'обычный',
        slot: 'mainhand',
        description: 'Универсальное оружие. 1d8 колющего урона (1d10 двумя руками).',
        bonuses: { attack: 0, damage: '1d8', damageType: 'колющий' },
        cost: 5, weight: 2
},

// ============================================================
// МАСШТАБИРУЕМЫЕ ПРЕДМЕТЫ (5 предметов)
// ============================================================
{
    id: 'vestige_of_divergence_blade',
    name: 'Клинок пробуждения',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Растёт вместе с владельцем. Уровень 1-5: +1 к атаке. Уровень 6-10: +2 к атаке и 1d6 урона огнём. Уровень 11+: +3 к атаке и 2d6 урона огнём.',
    bonuses: { attack: 1, damage: '1d8' },
    cost: 5000, weight: 3,
    scaling: true
},
{
    id: 'armor_of_the_phoenix',
    name: 'Доспех феникса',
    type: 'armor',
    rarity: 'масштабирующийся',
    slot: 'body',
    description: 'Уровень 1-5: КД 14. Уровень 6-10: КД 16 + сопротивление огню. Уровень 11+: КД 18 + иммунитет к огню и возрождение 1 раз в день.',
    bonuses: { ac: 4, fireResist: true },
    cost: 8000, weight: 30,
    scaling: true
},
{
    id: 'ring_of_evolving_mind',
    name: 'Кольцо развивающегося разума',
    type: 'artifact',
    rarity: 'масштабирующийся',
    slot: 'ring',
    description: 'Уровень 1-7: +1 Интеллект. Уровень 8-14: +2 Интеллект. Уровень 15+: +3 Интеллект и сопротивление психическому урону.',
    bonuses: { int: 1 },
    cost: 3000, weight: 0,
    scaling: true
},
{
    id: 'cloak_of_the_wanderer',
    name: 'Плащ странника',
    type: 'artifact',
    rarity: 'масштабирующийся',
    slot: 'back',
    description: 'Уровень 1-5: преимущество на Скрытность. Уровень 6-10: +1 КД и Скрытность. Уровень 11+: +2 КД, невидимость 1 раз в день.',
    bonuses: { stealth: 'advantage' },
    cost: 4000, weight: 1,
    scaling: true
},
{
    id: 'amulet_of_growing_power',
    name: 'Амулет растущей силы',
    type: 'artifact',
    rarity: 'масштабирующийся',
    slot: 'neck',
    description: 'Уровень 1-6: +1 ко всем спасброскам. Уровень 7-13: +2 ко всем спасброскам. Уровень 14+: +3 ко всем спасброскам и +1 ко всем характеристикам.',
    bonuses: { savingThrows: 1 },
    cost: 6000, weight: 0,
    scaling: true
    },

    // ============================================================
    // ДОПОЛНИТЕЛЬНЫЕ АРТЕФАКТЫ — КОЛЬЦА (10 предметов)
    // ============================================================
    {
        id: 'ring_of_teleportation',
        name: 'Кольцо телепортации',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'ring',
        description: 'Позволяет телепортироваться в знакомое место (1 раз в день, 500 миль).',
        bonuses: { int: 1 },
        cost: 6000, weight: 0
    },
    {
        id: 'ring_of_djinni_summoning',
        name: 'Кольцо призыва джинна',
        type: 'artifact',
        rarity: 'легендарный',
        slot: 'ring',
        description: 'Призывает джинна, выполняющего одно желание (1 раз). После использования кольцо теряет магию.',
        bonuses: {},
        cost: 50000, weight: 0
    },
    {
        id: 'ring_of_animal_influence',
        name: 'Кольцо влияния на животных',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'ring',
        description: 'Позволяет сотворять Очарование животного (3 раза в день, Сл 13).',
        bonuses: { wis: 1 },
        cost: 800, weight: 0
    },
    {
        id: 'ring_of_swimming',
        name: 'Кольцо плавания',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Даёт скорость плавания 40 фт.',
        bonuses: { swim: 40 },
        cost: 300, weight: 0
    },
    {
        id: 'ring_of_warmth',
        name: 'Кольцо тепла',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Даёт сопротивление урону холодом и защиту от экстремального холода.',
        bonuses: { coldResist: true },
        cost: 400, weight: 0
    },
    {
        id: 'ring_of_the_ram',
        name: 'Кольцо тарана',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'ring',
        description: 'Выпускает силовой удар (3d10 урона, отталкивает на 20 фт, 3 заряда).',
        bonuses: { str: 1 },
        cost: 1000, weight: 0
    },
    {
        id: 'ring_of_xray_vision',
        name: 'Кольцо рентгеновского зрения',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'ring',
        description: 'Позволяет видеть сквозь материю (до 1 фута камня или 3 футов дерева).',
        bonuses: { int: 2 },
        cost: 4000, weight: 0
    },
    {
        id: 'ring_of_stars',
        name: 'Кольцо звёзд',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'ring',
        description: 'Даёт способность видеть в темноте на 120 фт и невидимость в сумерках.',
        bonuses: { dex: 2 },
        cost: 5000, weight: 0
    },
    {
        id: 'ring_of_fire_elemental_command',
        name: 'Кольцо управления огнём',
        type: 'artifact',
        rarity: 'легендарный',
        slot: 'ring',
        description: 'Иммунитет к огню. Можно призвать огненного элементаля (1 раз в день).',
        bonuses: { fireResist: true, cha: 2 },
        cost: 15000, weight: 0
    },
    {
        id: 'ring_of_mind_protection',
        name: 'Кольцо ментальной защиты',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'ring',
        description: 'Защищает от обнаружения мыслей и заклинаний сна.',
        bonuses: { wis: 1, antiDivination: true },
        cost: 500, weight: 0
    },

    // ============================================================
    // ДОПОЛНИТЕЛЬНЫЕ АРТЕФАКТЫ — АМУЛЕТЫ (8 предметов)
    // ============================================================
    {
        id: 'amulet_of_health_supreme',
        name: 'Амулет высшего здоровья',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'neck',
        description: 'Увеличивает Телосложение владельца до 21.',
        bonuses: { con: 21 },
        cost: 5000, weight: 0
    },
    {
        id: 'amulet_of_the_planes',
        name: 'Амулет планов',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'neck',
        description: 'Позволяет перемещаться между планами бытия (1 раз в день).',
        bonuses: { int: 2 },
        cost: 8000, weight: 0
    },
    {
        id: 'periapt_of_health',
        name: 'Периапт здоровья',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'neck',
        description: 'Даёт иммунитет к болезням и сопротивляемость ядам.',
        bonuses: { con: 1 },
        cost: 600, weight: 0
    },
    {
        id: 'talisman_of_ultimate_good',
        name: 'Талисман высшего добра',
        type: 'artifact',
        rarity: 'легендарный',
        slot: 'neck',
        description: 'Злые существа получают 6d6 урона излучением при касании. Даёт +2 Харизмы.',
        bonuses: { cha: 2 },
        cost: 12000, weight: 0
    },
    {
        id: 'necklace_of_fireballs',
        name: 'Ожерелье огненных шаров',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'neck',
        description: 'Содержит бусины, каждая взрывается Огненным шаром (от 3 до 6 уровня).',
        bonuses: {},
        cost: 1500, weight: 0
    },
    {
        id: 'amulet_of_protection_from_turning',
        name: 'Амулет защиты от изгнания',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'neck',
        description: 'Нежить не может быть изгнана в радиусе 30 фт от вас.',
        bonuses: {},
        cost: 400, weight: 0
    },
    {
        id: 'charm_of_heroism',
        name: 'Амулет героизма',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'neck',
        description: 'Даёт временные хиты (5 + мод Харизмы) каждое утро на рассвете.',
        bonuses: { cha: 1 },
        cost: 900, weight: 0
    },
    {
        id: 'pendant_of_hope',
        name: 'Кулон надежды',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'neck',
        description: 'При падении хитов до 0 автоматически стабилизирует (1 раз в день).',
        bonuses: { autoStabilize: true },
        cost: 350, weight: 0
    },

    // ============================================================
    // ДОПОЛНИТЕЛЬНЫЕ АРТЕФАКТЫ — ГОЛОВНЫЕ УБОРЫ (8 предметов)
    // ============================================================
    {
        id: 'crown_of_madness',
        name: 'Корона безумия',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'head',
        description: 'Позволяет сотворять Внушение (Сл 15, 3 раза в день).',
        bonuses: { cha: 1 },
        cost: 1200, weight: 1
    },
    {
        id: 'tiara_of_wisdom',
        name: 'Тиара мудрости',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'head',
        description: 'Увеличивает Мудрость владельца до 19.',
        bonuses: { wis: 19 },
        cost: 2000, weight: 1
    },
    {
        id: 'helm_of_brilliance',
        name: 'Шлем сияния',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'head',
        description: 'Даёт сопротивление огню, излучает свет 30 фт, содержит драгоценные камни с заклинаниями.',
        bonuses: { ac: 1, fireResist: true, cha: 1 },
        cost: 6000, weight: 3
    },
    {
        id: 'circlet_of_persuasion',
        name: 'Венец убеждения',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'head',
        description: 'Даёт +5 к проверкам Убеждения и Обмана.',
        bonuses: { cha: 1 },
        cost: 500, weight: 1
    },
    {
        id: 'mask_of_the_dragon_queen',
        name: 'Маска королевы драконов',
        type: 'artifact',
        rarity: 'легендарный',
        slot: 'head',
        description: 'Даёт сопротивление всем видам урона от драконьего дыхания. +2 Харизмы.',
        bonuses: { cha: 2, dragonResist: true },
        cost: 20000, weight: 2
    },
    {
        id: 'crown_of_stars',
        name: 'Корона звёзд',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'head',
        description: 'Создаёт до 7 звёздных моти, каждая наносит 4d12 урона излучением.',
        bonuses: { int: 2 },
        cost: 7000, weight: 1
    },
    {
        id: 'hood_of_stealth',
        name: 'Капюшон скрытности',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'head',
        description: 'Даёт преимущество на проверки Скрытности в тени.',
        bonuses: { stealth: 'advantage' },
        cost: 300, weight: 1
    },
    {
        id: 'visor_of_darkvision',
        name: 'Забрало тёмного зрения',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'head',
        description: 'Даёт тёмное зрение 60 фт.',
        bonuses: {},
        cost: 350, weight: 1
    },

    // ============================================================
    // ДОПОЛНИТЕЛЬНЫЕ АРТЕФАКТЫ — ПЛАЩИ И ОБУВЬ (10 предметов)
    // ============================================================
    {
        id: 'cloak_of_arachnida',
        name: 'Плащ арахнида',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'back',
        description: 'Позволяет ходить по стенам и потолку. Сопротивление яду.',
        bonuses: { spiderClimb: true },
        cost: 1000, weight: 1
    },
    {
        id: 'cloak_of_the_bat',
        name: 'Плащ летучей мыши',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'back',
        description: 'Даёт полёт 40 фт в темноте. Преимущество на Скрытность в тени.',
        bonuses: { fly: 40, stealth: 'advantage' },
        cost: 1500, weight: 1
    },
    {
        id: 'boots_of_levitation',
        name: 'Сапоги левитации',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'feet',
        description: 'Позволяют левитировать (как заклинание Левитация, 1 раз в день).',
        bonuses: {},
        cost: 800, weight: 2
    },
    {
        id: 'boots_of_haste',
        name: 'Сапоги ускорения',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'feet',
        description: 'Бонусным действием активировать Ускорение на 1 минуту (1 раз в день).',
        bonuses: { speed: 10 },
        cost: 1500, weight: 2
    },
    {
        id: 'sorcerers_cloak',
        name: 'Плащ чародея',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'back',
        description: 'Даёт +1 к Сл спасбросков заклинаний и +1 к атакам заклинаниями.',
        bonuses: { int: 1, cha: 1 },
        cost: 1200, weight: 1
    },
    {
        id: 'rangers_boots',
        name: 'Сапоги следопыта',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'feet',
        description: 'Не оставляют следов. Преимущество на проверки Скрытности в лесу.',
        bonuses: { stealth: 'advantage' },
        cost: 400, weight: 2
    },
    {
        id: 'cloak_of_the_montebank',
        name: 'Плащ шарлатана',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'back',
        description: 'Позволяет сотворять Пространственную дверь (1 раз в день).',
        bonuses: { cha: 1 },
        cost: 1100, weight: 1
    },
    {
        id: 'sandals_of_the_desert',
        name: 'Сандалии пустыни',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'feet',
        description: 'Игнорируют труднопроходимую местность (песок). Защита от жары.',
        bonuses: { speed: 5 },
        cost: 300, weight: 1
    },
    {
        id: 'cloak_of_shadows',
        name: 'Плащ теней',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'back',
        description: 'Бонусным действием стать невидимым до конца хода (3 раза в день).',
        bonuses: { dex: 1 },
        cost: 600, weight: 1
    },
    {
        id: 'gliders_boots',
        name: 'Сапоги планирования',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'feet',
        description: 'Замедляют падение (как Перистое падение, постоянно).',
        bonuses: {},
        cost: 350, weight: 2
    },

    // ============================================================
    // ДОПОЛНИТЕЛЬНЫЕ АРТЕФАКТЫ — ПОЯСА И ПЕРЧАТКИ (12 предметов)
    // ============================================================
    {
        id: 'girdle_of_femininity_masculinity',
        name: 'Пояс смены пола',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'waist',
        description: 'При надевании меняет пол персонажа (снимает только заклинание Снятие проклятия).',
        bonuses: {},
        cost: 500, weight: 1
    },
    {
        id: 'belt_of_stone_skin',
        name: 'Пояс каменной кожи',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'waist',
        description: 'Даёт сопротивление дробящему, колющему и рубящему урону немагического оружия.',
        bonuses: { ac: 1 },
        cost: 2000, weight: 2
    },
    {
        id: 'gauntlets_of_strength',
        name: 'Рукавицы силы',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'hands',
        description: 'Дают +2 к проверкам Силы и удваивают грузоподъёмность.',
        bonuses: { str: 1 },
        cost: 400, weight: 2
    },
    {
        id: 'gloves_of_missile_snaring',
        name: 'Перчатки перехвата снарядов',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'hands',
        description: 'Реакцией уменьшить урон от дальнобойной атаки на 1d10 + мод. Ловкости.',
        bonuses: { dex: 1 },
        cost: 500, weight: 1
    },
    {
        id: 'bracers_of_archery_greater',
        name: 'Улучшенные наручи лучника',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'hands',
        description: 'Дают +2 к атакам и +2 к урону от дальнобойных атак из лука.',
        bonuses: { dex: 1 },
        cost: 1200, weight: 1
    },
    {
        id: 'gauntlets_of_flame',
        name: 'Рукавицы пламени',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'hands',
        description: 'Добавляют 1d4 урона огнём к атакам без оружия.',
        bonuses: { fireDamage: '1d4' },
        cost: 500, weight: 1
    },
    {
        id: 'belt_of_regeneration',
        name: 'Пояс регенерации',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'waist',
        description: 'Восстанавливает 2 хита в начале каждого хода.',
        bonuses: { con: 2 },
        cost: 4000, weight: 2
    },
    {
        id: 'gloves_of_swimming_and_climbing',
        name: 'Перчатки плавания и лазания',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'hands',
        description: 'Дают скорость плавания и лазания 30 фт.',
        bonuses: { swim: 30 },
        cost: 350, weight: 1
    },
    {
        id: 'bracers_of_defense_greater',
        name: 'Улучшенные наручи защиты',
        type: 'artifact',
        rarity: 'очень редкий',
        slot: 'hands',
        description: 'Дают +3 КД, если на владельце нет доспеха.',
        bonuses: { ac: 3 },
        cost: 5000, weight: 1
    },
    {
        id: 'giants_gloves',
        name: 'Перчатки великана',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'hands',
        description: 'Увеличивают урон без оружия до 1d8 + мод. Силы.',
        bonuses: { str: 1 },
        cost: 1000, weight: 2
    },
    {
        id: 'belt_of_agility',
        name: 'Пояс ловкости',
        type: 'artifact',
        rarity: 'необычный',
        slot: 'waist',
        description: 'Увеличивает Ловкость владельца до 19.',
        bonuses: { dex: 19 },
        cost: 600, weight: 2
    },
    {
        id: 'gauntlets_of_the_war_master',
        name: 'Рукавицы военного мастера',
        type: 'artifact',
        rarity: 'редкий',
        slot: 'hands',
        description: 'Дают +2 к атакам оружием ближнего боя и +1 КД.',
        bonuses: { attack: 2, ac: 1 },
        cost: 1500, weight: 2
},

// ============================================================
// ДОПОЛНИТЕЛЬНОЕ ОРУЖИЕ — ЧАСТЬ 2 (20 предметов)
// ============================================================
{
    id: 'mace_of_smiting',
    name: 'Булава сокрушения',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: '+1 к атаке. Конструкты получают дополнительный 2d6 урона дробящего типа.',
    bonuses: { attack: 1, damage: '1d6+1', damageType: 'дробящий' },
    cost: 2000, weight: 4
},
{
    id: 'glaive_of_reach',
    name: 'Глефа досягаемости',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Древковое оружие с досягаемостью 15 фт. 1d10 рубящего урона.',
    bonuses: { attack: 0, damage: '1d10', reach: true },
    cost: 300, weight: 6
},
{
    id: 'rapier_of_quickness',
    name: 'Рапира быстроты',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: '+1 к атаке. Даёт +2 к инициативе.',
    bonuses: { attack: 1, damage: '1d8+1', dex: 1 },
    cost: 1800, weight: 2
},
{
    id: 'warhammer_of_thunder',
    name: 'Громовой боевой молот',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: '+1 к атаке. При попадании наносит дополнительный 1d6 урона звуком.',
    bonuses: { attack: 1, damage: '1d8+1', thunderDamage: '1d6', damageType: 'дробящий' },
    cost: 2200, weight: 2
},
{
    id: 'crossbow_of_repeating',
    name: 'Самозарядный арбалет',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Не требует перезарядки. Делает до 5 выстрелов без перезарядки.',
    bonuses: { attack: 0, damage: '1d8', range: 80 },
    cost: 500, weight: 5
},
{
    id: 'sickle_of_harvest',
    name: 'Серп урожая',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Критический удар на 19-20. 1d4 рубящего урона, лёгкое оружие.',
    bonuses: { attack: 0, damage: '1d4', critRange: '19-20' },
    cost: 300, weight: 2
},
{
    id: 'longbow_of_accuracy',
    name: 'Длинный лук точности',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: '+1 к атаке. Игнорирует половинное укрытие.',
    bonuses: { attack: 1, damage: '1d8', range: 150 },
    cost: 600, weight: 2
},
{
    id: 'spear_of_lightning',
    name: 'Копьё молнии',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: '+1 к атаке. При броске превращается в молнию (линия 5 на 120 фт, 4d6 урона электричеством).',
    bonuses: { attack: 1, damage: '1d6+1', range: 20, lightningDamage: '4d6' },
    cost: 2500, weight: 3
},
{
    id: 'greataxe_of_cleaving',
    name: 'Двуручный топор рассечения',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'При убийстве врага избыточный урон переносится на соседнее существо.',
    bonuses: { attack: 0, damage: '1d12', cleave: true },
    cost: 1800, weight: 7
},
{
    id: 'dagger_of_return',
    name: 'Возвратный кинжал',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'После броска автоматически возвращается в руку владельца.',
    bonuses: { attack: 0, damage: '1d4', range: 20 },
    cost: 400, weight: 1
},
{
    id: 'staff_of_withering',
    name: 'Посох иссушения',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: '+1 к атаке. Наносит дополнительный 2d6 некротического урона.',
    bonuses: { attack: 1, damage: '1d6+1', necroticDamage: '2d6' },
    cost: 3000, weight: 4
},
{
    id: 'scimitar_of_wounding',
    name: 'Скимитар ранения',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Раны от этого оружия продолжают кровоточить (1d4 некротического урона в начале хода цели).',
    bonuses: { attack: 0, damage: '1d6', wounding: '1d4' },
    cost: 2000, weight: 3
},
{
    id: 'maul_of_earthquake',
    name: 'Кувалда землетрясения',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. При критическом ударе создаёт землетрясение в радиусе 10 фт.',
    bonuses: { attack: 2, damage: '2d6+2', damageType: 'дробящий', str: 1 },
    cost: 6000, weight: 10
},
{
    id: 'rapier_of_life_stealing',
    name: 'Рапира похищения жизни',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. При крите (20) цель получает дополнительно 3d6 некротического урона, а вы восстанавливаете столько же хитов.',
    bonuses: { attack: 2, damage: '1d8+2', lifesteal: '3d6' },
    cost: 5000, weight: 2
},
{
    id: 'whip_of_ensnaring',
    name: 'Кнут опутывания',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'При попадании цель должна преуспеть в спасброске Силы (Сл 13) или быть схваченной.',
    bonuses: { attack: 0, damage: '1d4', reach: true, special: 'grapple' },
    cost: 300, weight: 3
},
{
    id: 'battleaxe_of_dwarven_lords',
    name: 'Боевой топор дварфийских лордов',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: '+1 к атаке. Дварфы получают дополнительные +2 к атаке и урону.',
    bonuses: { attack: 1, damage: '1d8+1' },
    cost: 2500, weight: 4
},
{
    id: 'shortsword_of_stealth',
    name: 'Короткий меч скрытности',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: '+1 к атаке. Преимущество на проверки Скрытности, когда меч обнажён.',
    bonuses: { attack: 1, damage: '1d6+1', stealth: 'advantage' },
    cost: 500, weight: 2
},
{
    id: 'halberd_of_sentinel',
    name: 'Алебарда стража',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Реакцией атаковать существо, входящее в вашу досягаемость (10 фт).',
    bonuses: { attack: 0, damage: '1d10', reach: true, special: 'sentinel' },
    cost: 400, weight: 6
},
{
    id: 'greatsword_of_giant_slaying',
    name: 'Двуручный меч истребления великанов',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: '+1 к атаке. Против великанов наносит дополнительный 3d6 урона.',
    bonuses: { attack: 1, damage: '2d6+1' },
    cost: 3500, weight: 6
},
{
    id: 'morningstar_of_dawn',
    name: 'Моргенштерн рассвета',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Излучает яркий свет 10 фт. Нежить получает дополнительный 1d6 урона излучением.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий' },
    cost: 400, weight: 4
},

// ============================================================
// ДОПОЛНИТЕЛЬНЫЕ ДОСПЕХИ И ЩИТЫ (15 предметов)
// ============================================================
{
    id: 'armor_of_invulnerability',
    name: 'Доспех неуязвимости',
    type: 'armor',
    rarity: 'легендарный',
    slot: 'body',
    description: 'Латный доспех. Действием получить сопротивление всему немагическому урону на 10 минут (1 раз в день).',
    bonuses: { ac: 10, str: 1 },
    cost: 25000, weight: 65
},
{
    id: 'armor_of_resistance_fire',
    name: 'Доспех сопротивления огню',
    type: 'armor',
    rarity: 'редкий',
    slot: 'body',
    description: 'Даёт сопротивление урону огнём.',
    bonuses: { ac: 0, fireResist: true },
    cost: 3000, weight: 30
},
{
    id: 'armor_of_resistance_cold',
    name: 'Доспех сопротивления холоду',
    type: 'armor',
    rarity: 'редкий',
    slot: 'body',
    description: 'Даёт сопротивление урону холодом.',
    bonuses: { ac: 0, coldResist: true },
    cost: 3000, weight: 30
},
{
    id: 'armor_of_resistance_lightning',
    name: 'Доспех сопротивления молниям',
    type: 'armor',
    rarity: 'редкий',
    slot: 'body',
    description: 'Даёт сопротивление урону электричеством.',
    bonuses: { ac: 0, lightningResist: true },
    cost: 3000, weight: 30
},
{
    id: 'armor_of_gleaming',
    name: 'Сверкающий доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Всегда идеально чистый и блестящий. Преимущество на запугивание.',
    bonuses: { ac: 0, cha: 1 },
    cost: 200, weight: 30
},
{
    id: 'mariners_armor',
    name: 'Доспех моряка',
    type: 'armor',
    rarity: 'необычный',
    slot: 'body',
    description: 'Даёт скорость плавания 30 фт. При падении в воду вы автоматически всплываете.',
    bonuses: { swim: 30 },
    cost: 500, weight: 20
},
{
    id: 'smoldering_armor',
    name: 'Тлеющий доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Испускает лёгкий дымок. Выглядит устрашающе.',
    bonuses: { ac: 0 },
    cost: 150, weight: 30
},
{
    id: 'castoff_armor',
    name: 'Сбрасываемый доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Можно снять действием (вместо обычных 5 минут для тяжёлого доспеха).',
    bonuses: { ac: 0 },
    cost: 100, weight: 30
},
{
    id: 'shield_of_missile_attraction',
    name: 'Щит притяжения снарядов',
    type: 'armor',
    rarity: 'редкий',
    slot: 'offhand',
    description: 'Даёт +2 КД. Все дальнобойные атаки в 10 фт от вас направляются в вас.',
    bonuses: { ac: 2 },
    cost: 1500, weight: 6
},
{
    id: 'sentinel_shield',
    name: 'Щит стража',
    type: 'armor',
    rarity: 'необычный',
    slot: 'offhand',
    description: 'Даёт +2 КД. Преимущество на проверки Восприятия и броски инициативы.',
    bonuses: { ac: 2, wis: 1 },
    cost: 600, weight: 6
},
{
    id: 'shield_of_expression',
    name: 'Щит выражения',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Бонусным действием изменить выражение лица на щите. +2 КД.',
    bonuses: { ac: 2 },
    cost: 50, weight: 6
},
{
    id: 'spellguard_shield',
    name: 'Щит защиты от заклинаний',
    type: 'armor',
    rarity: 'очень редкий',
    slot: 'offhand',
    description: 'Преимущество на спасброски от заклинаний. Атаки заклинаниями по вам с помехой.',
    bonuses: { ac: 2, savingThrows: 2 },
    cost: 8000, weight: 6
},
{
    id: 'parrying_dagger',
    name: 'Кинжал парирования',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'offhand',
    description: 'Даёт +1 КД, если держать во второй руке. 1d4 колющего урона.',
    bonuses: { ac: 1, damage: '1d4' },
    cost: 300, weight: 1
},
{
    id: 'shield_of_the_hidden_lord',
    name: 'Щит скрытого лорда',
    type: 'armor',
    rarity: 'легендарный',
    slot: 'offhand',
    description: '+3 КД. Содержит заточённого демона, с которым можно общаться. Даёт сопротивление огню.',
    bonuses: { ac: 3, fireResist: true, cha: 1 },
    cost: 20000, weight: 6
},
{
    id: 'demon_armor',
    name: 'Демонический доспех',
    type: 'armor',
    rarity: 'очень редкий',
    slot: 'body',
    description: 'КД 19. Даёт +1 к атакам и урону без оружия (1d8). Нельзя снять без заклинания Снятие проклятия.',
    bonuses: { ac: 11, str: 1 },
    cost: 10000, weight: 65
},

// ============================================================
// ДОПОЛНИТЕЛЬНЫЕ ПЛАЩИ, ОБУВЬ И ПЕРЧАТКИ (20 предметов)
// ============================================================
{
    id: 'cloak_of_the_forest',
    name: 'Плащ леса',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Сливается с растительностью. Преимущество на Скрытность в лесу.',
    bonuses: { stealth: 'advantage' },
    cost: 400, weight: 1
},
{
    id: 'cloak_of_the_mountains',
    name: 'Плащ гор',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Защищает от экстремального холода. Преимущество на Скрытность в горах.',
    bonuses: { coldResist: true },
    cost: 400, weight: 1
},
{
    id: 'cloak_of_the_desert',
    name: 'Плащ пустыни',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Защищает от экстремальной жары. Преимущество на Скрытность в пустыне.',
    bonuses: { fireResist: true },
    cost: 400, weight: 1
},
{
    id: 'cloak_of_billowing',
    name: 'Развевающийся плащ',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'back',
    description: 'Бонусным действием заставить плащ красиво развеваться, даже в безветренную погоду.',
    bonuses: { cha: 1 },
    cost: 100, weight: 1
},
{
    id: 'boots_of_false_tracks',
    name: 'Сапоги ложных следов',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'feet',
    description: 'Оставляют следы другого существа (на выбор гуманоид, зверь или другой тип).',
    bonuses: {},
    cost: 100, weight: 2
},
{
    id: 'boots_of_the_tundra',
    name: 'Сапоги тундры',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Игнорируют труднопроходимую местность (снег, лёд). Защита от экстремального холода.',
    bonuses: { coldResist: true, speed: 5 },
    cost: 400, weight: 2
},
{
    id: 'gloves_of_swimming',
    name: 'Перчатки плавания',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Дают скорость плавания 40 фт и преимущество на проверки Атлетики для плавания.',
    bonuses: { swim: 40 },
    cost: 300, weight: 1
},
{
    id: 'gloves_of_climbing',
    name: 'Перчатки лазания',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Дают скорость лазания 30 фт и преимущество на проверки Атлетики для лазания.',
    bonuses: { climb: 30 },
    cost: 300, weight: 1
},
{
    id: 'boots_of_the_pathless',
    name: 'Сапоги беспутного',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'feet',
    description: 'Игнорируют любую труднопроходимую местность. Невозможно выследить.',
    bonuses: { speed: 10, stealth: 'advantage' },
    cost: 2000, weight: 2
},
{
    id: 'gloves_of_spell_snaring',
    name: 'Перчатки захвата заклинаний',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: 'Реакцией попытаться захватить заклинание (проверка Интеллекта Сл 15).',
    bonuses: { int: 1 },
    cost: 1800, weight: 1
},
{
    id: 'cloak_of_the_raven',
    name: 'Плащ ворона',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Позволяет превращаться в ворона (как заклинание Превращение, только в ворона, 1 раз в день).',
    bonuses: { dex: 1 },
    cost: 600, weight: 1
},
{
    id: 'boots_of_the_beast',
    name: 'Сапоги зверя',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Увеличивают скорость передвижения на 10 фт в звериной форме.',
    bonuses: { speed: 10 },
    cost: 400, weight: 2
},
{
    id: 'gloves_of_the_healer',
    name: 'Перчатки целителя',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: 'Заклинания исцеления восстанавливают дополнительные 2d6 хитов.',
    bonuses: { wis: 1 },
    cost: 1200, weight: 1
},
{
    id: 'cloak_of_stone',
    name: 'Плащ камня',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'back',
    description: 'Даёт +2 КД, но скорость снижается на 10 фт.',
    bonuses: { ac: 2, speed: -10 },
    cost: 1500, weight: 5
},
{
    id: 'boots_of_air',
    name: 'Сапоги воздуха',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'feet',
    description: 'Позволяют ходить по воздуху как по земле (1 минута, 3 раза в день).',
    bonuses: { dex: 1 },
    cost: 2000, weight: 1
},
{
    id: 'gloves_of_darkness',
    name: 'Перчатки тьмы',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Позволяют сотворять заклинание Тьма (1 раз в день).',
    bonuses: { int: 1 },
    cost: 500, weight: 1
},
{
    id: 'cloak_of_fireflies',
    name: 'Плащ светлячков',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Создаёт рой светящихся огоньков в радиусе 10 фт. Можно направить на врага (помеха на атаки).',
    bonuses: { cha: 1 },
    cost: 500, weight: 1
},
{
    id: 'boots_of_the_storm',
    name: 'Сапоги шторма',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'feet',
    description: 'Дают сопротивление урону электричеством. Скорость не снижается в бурю.',
    bonuses: { lightningResist: true, speed: 5 },
    cost: 1800, weight: 2
},
{
    id: 'gloves_of_fire_manipulation',
    name: 'Перчатки управления огнём',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Заговоры огня наносят дополнительный 1d4 урона. Можно зажечь или потушить малое пламя касанием.',
    bonuses: { fireDamage: '1d4', int: 1 },
    cost: 600, weight: 1
},
{
    id: 'cloak_of_many_fashions',
    name: 'Плащ множества фасонов',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'back',
    description: 'Бонусным действием изменить цвет, ткань и фасон плаща.',
    bonuses: { cha: 1 },
    cost: 150, weight: 1
},

// ============================================================
// ДОПОЛНИТЕЛЬНЫЕ ШЛЕМЫ, КОРОНЫ И МАСКИ (15 предметов)
// ============================================================
{
    id: 'helm_of_teleportation',
    name: 'Шлем телепортации',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Позволяет сотворять Телепортацию (1 раз в день, только на 30 фт).',
    bonuses: { int: 1 },
    cost: 2500, weight: 3
},
{
    id: 'mask_of_the_beast',
    name: 'Маска зверя',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Даёт преимущество на проверки Запугивания. Можно говорить с животными (1 раз в день).',
    bonuses: { cha: 1 },
    cost: 400, weight: 1
},
{
    id: 'crown_of_the_forest_king',
    name: 'Корона лесного короля',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Позволяет говорить с растениями. Преимущество на проверки Природы.',
    bonuses: { wis: 1 },
    cost: 1500, weight: 2
},
{
    id: 'helm_of_underwater_action',
    name: 'Шлем подводного действия',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Даёт дыхание под водой и тёмное зрение 60 фт под водой.',
    bonuses: { waterBreathing: true },
    cost: 500, weight: 2
},
{
    id: 'mask_of_the_phoenix',
    name: 'Маска феникса',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'head',
    description: 'При падении до 0 хитов восстанавливает 1 хит (1 раз в день). Даёт сопротивление огню.',
    bonuses: { fireResist: true, con: 2 },
    cost: 8000, weight: 1
},
{
    id: 'circlet_of_concentration',
    name: 'Венец концентрации',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Преимущество на спасброски Телосложения для поддержания концентрации.',
    bonuses: { con: 1 },
    cost: 1200, weight: 1
},
{
    id: 'helm_of_fear',
    name: 'Шлем страха',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Действием вселить ужас в существо в 30 фт (спасбросок Мудрости Сл 13, 3 раза в день).',
    bonuses: { cha: 1 },
    cost: 1500, weight: 3
},
{
    id: 'crown_of_the_lich',
    name: 'Корона лича',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'head',
    description: 'Даёт сопротивление некротическому урону. +2 Интеллекта. Можно контролировать нежить.',
    bonuses: { int: 2, necroticResist: true },
    cost: 20000, weight: 2
},
{
    id: 'mask_of_the_whisper',
    name: 'Маска шёпота',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет телепатически общаться с существом в 120 фт (1 раз в день).',
    bonuses: { cha: 1 },
    cost: 500, weight: 1
},
{
    id: 'helm_of_the_guardian',
    name: 'Шлем хранителя',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Даёт +1 КД. Союзники в 10 фт получают +1 к спасброскам от страха.',
    bonuses: { ac: 1 },
    cost: 600, weight: 3
},
{
    id: 'circlet_of_wisdom',
    name: 'Венец мудрости',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Увеличивает Мудрость владельца до 19.',
    bonuses: { wis: 19 },
    cost: 2000, weight: 1
},
{
    id: 'mask_of_many_faces',
    name: 'Маска множества лиц',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет менять внешность (Маскировка, 1 раз в день).',
    bonuses: { cha: 1 },
    cost: 500, weight: 1
},
{
    id: 'helm_of_the_night',
    name: 'Шлем ночи',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Даёт тёмное зрение 120 фт. Преимущество на Скрытность в темноте.',
    bonuses: { stealth: 'advantage', dex: 1 },
    cost: 1500, weight: 2
},
{
    id: 'crown_of_command',
    name: 'Корона повиновения',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'head',
    description: 'Позволяет сотворять Приказ (1 уровень) без затрат ячеек (3 раза в день, Сл 17).',
    bonuses: { cha: 2 },
    cost: 6000, weight: 2
},
{
    id: 'hood_of_the_assassin',
    name: 'Капюшон ассасина',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Преимущество на проверки Скрытности. Первая атака из скрытности наносит дополнительный 2d6 урона.',
    bonuses: { stealth: 'advantage', dex: 1 },
    cost: 2000, weight: 1
},

// ============================================================
// ОСОБОЕ ОРУЖИЕ И АРТЕФАКТЫ (10 предметов)
// ============================================================
{
    id: 'blade_of_souls',
    name: 'Клинок душ',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: '+3 к атаке. При убийстве врага его душа заключается в клинок, давая +1 к урону (до 5 душ).',
    bonuses: { attack: 3, damage: '1d8+3', cha: 2 },
    cost: 30000, weight: 3
},
{
    id: 'staff_of_the_magi',
    name: 'Посох мага',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: '+2 к атаке. Поглощает заклинания. Содержит до 50 зарядов для заклинаний.',
    bonuses: { attack: 2, damage: '1d6+2', int: 2, cha: 2 },
    cost: 35000, weight: 4
},
{
    id: 'bow_of_the_horizon',
    name: 'Лук горизонта',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. Дистанция удвоена (300/1200 фт). Игнорирует укрытие.',
    bonuses: { attack: 2, damage: '1d8+2', range: 300, dex: 1 },
    cost: 8000, weight: 2
},
{
    id: 'axe_of_the_dwarf_lord',
    name: 'Топор дварфийского лорда',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке, +3 для дварфов. Можно метнуть (30/90 фт), возвращается.',
    bonuses: { attack: 2, damage: '1d8+2', range: 30, str: 1 },
    cost: 7000, weight: 4
},
{
    id: 'rod_of_lordly_might',
    name: 'Жезл лордского могущества',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: '+3 к атаке. Может превращаться в 6 видов оружия или инструментов.',
    bonuses: { attack: 3, damage: '1d8+3', str: 2, cha: 1 },
    cost: 28000, weight: 5
},
{
    id: 'mirror_of_life_trapping',
    name: 'Зеркало захвата жизни',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'offhand',
    description: 'Заточает существ в 12 ячеек зеркала. Можно освободить словом.',
    bonuses: { wis: 2 },
    cost: 9000, weight: 10
},
{
    id: 'cubic_gate',
    name: 'Кубические врата',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'offhand',
    description: 'Открывает порталы на 6 разных планов бытия (по 1 разу в день на каждый план).',
    bonuses: { int: 3, cha: 3 },
    cost: 50000, weight: 5
},
{
    id: 'orb_of_dragonkind',
    name: 'Сфера драконьего рода',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'offhand',
    description: 'Позволяет видеть всех драконов в радиусе 1 мили. Призывает дракона (1 раз в месяц).',
    bonuses: { cha: 3, dragonResist: true },
    cost: 40000, weight: 3
},
{
    id: 'tome_of_clear_thought',
    name: 'Том ясной мысли',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'offhand',
    description: 'При прочтении (48 часов) навсегда увеличивает Интеллект на 2. Работает раз в 100 лет.',
    bonuses: { int: 2 },
    cost: 10000, weight: 3
},
{
    id: 'manual_of_quickness',
    name: 'Пособие по проворству',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'offhand',
    description: 'При прочтении (48 часов) навсегда увеличивает Ловкость на 2. Работает раз в 100 лет.',
    bonuses: { dex: 2 },
    cost: 10000, weight: 3
},

// ============================================================
// ФИНАЛЬНАЯ ЧАСТЬ — ЛЕГЕНДАРНОЕ СНАРЯЖЕНИЕ (10 предметов)
// ============================================================
{
    id: 'plate_armor_of_etherealness',
    name: 'Латный доспех эфирности',
    type: 'armor',
    rarity: 'легендарный',
    slot: 'body',
    description: 'КД 18. Действием уйти на Эфирный план на 10 минут (1 раз в день).',
    bonuses: { ac: 10, int: 1 },
    cost: 25000, weight: 65
},
{
    id: 'shield_of_the_sun',
    name: 'Щит солнца',
    type: 'armor',
    rarity: 'очень редкий',
    slot: 'offhand',
    description: '+2 КД. Излучает яркий свет 30 фт. Нежить в свете получает помеху на атаки.',
    bonuses: { ac: 2, radiantAura: true },
    cost: 7000, weight: 6
},
{
    id: 'bow_of_the_storm',
    name: 'Лук шторма',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. Каждая стрела наносит дополнительный 1d8 урона электричеством.',
    bonuses: { attack: 2, damage: '1d8+2', lightningDamage: '1d8', range: 150 },
    cost: 7000, weight: 2
},
{
    id: 'glaive_of_the_infernal',
    name: 'Глефа инфернального легиона',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. Добавляет 2d6 урона огнём. При критическом ударе призывает адскую гончую на 1 минуту.',
    bonuses: { attack: 2, damage: '1d10+2', fireDamage: '2d6', cha: 1 },
    cost: 8000, weight: 6
},
{
    id: 'mantle_of_the_archmage',
    name: 'Мантия архимага',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'back',
    description: '+2 КД. Преимущество на спасброски от заклинаний. +2 к Сл заклинаний.',
    bonuses: { ac: 2, savingThrows: 2, int: 2, cha: 2 },
    cost: 30000, weight: 1
},
{
    id: 'ring_of_three_wishes',
    name: 'Кольцо трёх желаний',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'ring',
    description: 'Содержит заклинание Желание с 3 зарядами. После использования становится обычным кольцом.',
    bonuses: { cha: 3 },
    cost: 100000, weight: 0
},
{
    id: 'armor_of_the_celestial',
    name: 'Доспех небожителя',
    type: 'armor',
    rarity: 'легендарный',
    slot: 'body',
    description: 'КД 20. Даёт полёт 60 фт. Иммунитет к излучению. Один раз в день — истинное воскрешение.',
    bonuses: { ac: 12, fly: 60, cha: 2, radiantResist: true },
    cost: 50000, weight: 40
},
{
    id: 'blade_of_the_immortal',
    name: 'Клинок бессмертного',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-6: +1 к атаке. Уровень 7-13: +2 к атаке и регенерация 5 хитов в ход. Уровень 14+: +3 к атаке, регенерация 10 хитов в ход.',
    bonuses: { attack: 1, damage: '1d8+1', con: 1 },
    cost: 12000, weight: 3,
    scaling: true
},
{
    id: 'shield_of_the_immortal',
    name: 'Щит бессмертного',
    type: 'armor',
    rarity: 'масштабирующийся',
    slot: 'offhand',
    description: 'Уровень 1-6: +2 КД. Уровень 7-13: +3 КД и сопротивление некрозу. Уровень 14+: +4 КД и иммунитет к некрозу.',
    bonuses: { ac: 2, con: 1 },
    cost: 10000, weight: 6,
    scaling: true
},
{
    id: 'crown_of_the_immortal',
    name: 'Корона бессмертного',
    type: 'artifact',
    rarity: 'масштабирующийся',
    slot: 'head',
    description: 'Уровень 1-6: +1 Интеллект. Уровень 7-13: +2 Интеллект и телепатия 60 фт. Уровень 14+: +3 Интеллект и иммунитет к психическому урону.',
    bonuses: { int: 1, cha: 1 },
    cost: 15000, weight: 2,
    scaling: true
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — ПРОСТОЕ (15 предметов)
// ============================================================
{
    id: 'club',
    name: 'Дубинка',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d4 дробящего урона. Лёгкое.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий' },
    cost: 1, weight: 2
},
{
    id: 'sickle',
    name: 'Серп',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d4 рубящего урона. Лёгкое.',
    bonuses: { attack: 0, damage: '1d4' },
    cost: 1, weight: 2
},
{
    id: 'handaxe',
    name: 'Ручной топор',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d6 рубящего урона. Лёгкое, можно метнуть (20/60 фт).',
    bonuses: { attack: 0, damage: '1d6', range: 20 },
    cost: 5, weight: 2
},
{
    id: 'light_hammer',
    name: 'Лёгкий молот',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d4 дробящего урона. Лёгкое, можно метнуть (20/60 фт).',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий', range: 20 },
    cost: 2, weight: 2
},
{
    id: 'mace',
    name: 'Булава',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d6 дробящего урона.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'дробящий' },
    cost: 5, weight: 4
},
{
    id: 'quarterstaff',
    name: 'Боевой посох',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d6 дробящего урона (1d8 двумя руками).',
    bonuses: { attack: 0, damage: '1d6', damageType: 'дробящий' },
    cost: 2, weight: 4
},
{
    id: 'spear',
    name: 'Копьё',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d6 колющего урона (1d8 двумя руками). Можно метнуть (20/60 фт).',
    bonuses: { attack: 0, damage: '1d6', range: 20 },
    cost: 1, weight: 3
},
{
    id: 'greatclub',
    name: 'Большая дубина',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое двуручное оружие. 1d8 дробящего урона.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'дробящий' },
    cost: 2, weight: 10
},
{
    id: 'sling',
    name: 'Праща',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое дальнобойное оружие. 1d4 дробящего урона. Дистанция 30/120 фт.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий', range: 30 },
    cost: 1, weight: 0
},
{
    id: 'crossbow_heavy',
    name: 'Тяжёлый арбалет',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое дальнобойное оружие. 1d10 колющего урона. Дистанция 100/400 фт. Тяжёлое, двуручное.',
    bonuses: { attack: 0, damage: '1d10', range: 100 },
    cost: 50, weight: 18
},
{
    id: 'sickle_two_handed',
    name: 'Большой серп',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простое оружие. 1d6 рубящего урона. Лёгкое, можно использовать в каждой руке.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 3, weight: 3
},
{
    id: 'stone_axe',
    name: 'Каменный топор',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Примитивное оружие. 1d6 рубящего урона. Дешёвый и тяжёлый.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 1, weight: 5
},
{
    id: 'bone_dagger',
    name: 'Костяной кинжал',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Кинжал из заточенной кости. 1d4 колющего урона. Лёгкое, можно метнуть (20/60 фт).',
    bonuses: { attack: 0, damage: '1d4', range: 20 },
    cost: 1, weight: 1
},
{
    id: 'iron_fist',
    name: 'Железный кулак',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'hands',
    description: 'Утяжелённая перчатка для кулачного боя. 1d4 дробящего урона без оружия.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий' },
    cost: 5, weight: 2
},
{
    id: 'hunting_bow',
    name: 'Охотничий лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Простой лук. 1d6 колющего урона. Дистанция 60/240 фт.',
    bonuses: { attack: 0, damage: '1d6', range: 60 },
    cost: 15, weight: 2
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — ВОИНСКОЕ (15 предметов)
// ============================================================
{
    id: 'longsword_simple',
    name: 'Длинный меч (простой)',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Надёжный стальной меч. 1d8 рубящего урона (1d10 двумя руками).',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 10, weight: 3
},
{
    id: 'broadsword',
    name: 'Палаш',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Широкий меч с прямым клинком. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 12, weight: 4
},
{
    id: 'falchion',
    name: 'Фальшион',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Изогнутый меч с широким лезвием. 1d8 рубящего урона. Критический удар на 19-20.',
    bonuses: { attack: 0, damage: '1d8', critRange: '19-20' },
    cost: 20, weight: 3
},
{
    id: 'estoc',
    name: 'Эсток',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Длинный колющий меч без лезвий. 1d8 колющего урона. Можно использовать Ловкость.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий', finesse: true },
    cost: 20, weight: 3
},
{
    id: 'claymore',
    name: 'Клеймор',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Большой двуручный меч. 2d6 рубящего урона. Тяжёлое, двуручное.',
    bonuses: { attack: 0, damage: '2d6' },
    cost: 40, weight: 8
},
{
    id: 'war_scythe',
    name: 'Боевая коса',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Крестьянская коса, переделанная для боя. 1d10 рубящего урона. Тяжёлое, двуручное.',
    bonuses: { attack: 0, damage: '1d10' },
    cost: 15, weight: 7
},
{
    id: 'dual_blades',
    name: 'Парные клинки',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Два коротких меча в наборе. 1d6 рубящего урона каждым. Лёгкое.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 20, weight: 4
},
{
    id: 'war_spear',
    name: 'Боевое копьё',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Тяжёлое копьё с широким наконечником. 1d8 колющего урона (1d10 двумя руками). Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d8', reach: true },
    cost: 8, weight: 5
},
{
    id: 'military_pick',
    name: 'Военный клевец',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Бронебойное оружие. 1d8 колющего урона. Игнорирует 1 КД от доспеха.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий', armorPenetration: 1 },
    cost: 10, weight: 3
},
{
    id: 'bo_staff',
    name: 'Бо (шест)',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Длинный деревянный шест. 1d6 дробящего урона (1d8 двумя руками). Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'дробящий', reach: true },
    cost: 1, weight: 4
},
{
    id: 'katana',
    name: 'Катана',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Изогнутый меч восточных мастеров. 1d8 рубящего урона (1d10 двумя руками). Критический удар на 19-20.',
    bonuses: { attack: 0, damage: '1d8', critRange: '19-20' },
    cost: 25, weight: 3
},
{
    id: 'nunchaku',
    name: 'Нунчаки',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Две палки, соединённые цепью. 1d4 дробящего урона. Лёгкое, преимущество на обезоруживание.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий' },
    cost: 5, weight: 2
},
{
    id: 'kusarigama',
    name: 'Кусаригама',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Серп на цепи. 1d6 рубящего урона. Досягаемость 10 фт. Можно подтянуть цель на 5 фт.',
    bonuses: { attack: 0, damage: '1d6', reach: true, special: 'pull' },
    cost: 15, weight: 3
},
{
    id: 'tetsubo',
    name: 'Тэцубо',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Тяжёлая железная дубина с шипами. 1d10 дробящего урона. Тяжёлое, двуручное.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'дробящий' },
    cost: 15, weight: 12
},
{
    id: 'sai',
    name: 'Сай',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Трезубый кинжал. 1d4 колющего урона. +2 к проверкам обезоруживания. Лёгкое.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'колющий' },
    cost: 5, weight: 1
},

// ============================================================
// ОБЫЧНЫЕ ДОСПЕХИ РАЗНЫХ КУЛЬТУР (10 предметов)
// ============================================================
{
    id: 'quilted_armor',
    name: 'Стёганый гамбезон',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Толстая стёганая куртка. КД = 11 + мод. Ловкости. Устойчивость к холоду.',
    bonuses: { ac: 1, coldResist: true },
    cost: 8, weight: 8
},
{
    id: 'samurai_do_maru',
    name: 'До-мару (самурайский доспех)',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Традиционный японский доспех из пластин. КД = 14 + мод. Ловкости (макс. 2).',
    bonuses: { ac: 4 },
    cost: 100, weight: 30
},
{
    id: 'lamellar_armor',
    name: 'Ламеллярный доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Доспех из мелких металлических пластинок. КД = 13 + мод. Ловкости (макс. 2).',
    bonuses: { ac: 3 },
    cost: 60, weight: 25
},
{
    id: 'brigandine',
    name: 'Бригантина',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Кожаная куртка с вшитыми металлическими пластинами. КД = 12 + мод. Ловкости (макс. 2).',
    bonuses: { ac: 2 },
    cost: 40, weight: 18
},
{
    id: 'roman_lorica',
    name: 'Лорика сегментата (римский доспех)',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Римский доспех из металлических полос. КД = 15. Помеха на Скрытность.',
    bonuses: { ac: 7 },
    cost: 100, weight: 35
},
{
    id: 'viking_chainmail',
    name: 'Кольчуга викинга',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Тяжёлая кольчуга северных воинов. КД = 15. Помеха на Скрытность.',
    bonuses: { ac: 7 },
    cost: 80, weight: 40
},
{
    id: 'mongol_leather',
    name: 'Монгольский кожаный доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Лёгкий доспех кочевников. КД = 11 + мод. Ловкости. Не замедляет верховую езду.',
    bonuses: { ac: 1, speed: 5 },
    cost: 20, weight: 8
},
{
    id: 'gladiator_armor',
    name: 'Доспех гладиатора',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Лёгкий доспех, оставляющий руки и ноги открытыми. КД = 11 + мод. Ловкости. +1 к запугиванию.',
    bonuses: { ac: 1, cha: 1 },
    cost: 25, weight: 10
},
{
    id: 'tribal_bone_armor',
    name: 'Костяной доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Доспех из костей и шкур. КД = 11 + мод. Ловкости. Выглядит устрашающе.',
    bonuses: { ac: 1 },
    cost: 5, weight: 12
},
{
    id: 'padded_gambeson',
    name: 'Усиленный гамбезон',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Многослойная стёганая броня. КД = 11 + мод. Ловкости. Можно носить под кольчугой.',
    bonuses: { ac: 1 },
    cost: 15, weight: 10
},

// ============================================================
// ОБЫЧНЫЕ ЩИТЫ РАЗНЫХ ТИПОВ (10 предметов)
// ============================================================
{
    id: 'buckler',
    name: 'Баклер',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Маленький круглый щит. +1 КД. Можно использовать руку для манипуляций.',
    bonuses: { ac: 1 },
    cost: 5, weight: 3
},
{
    id: 'kite_shield',
    name: 'Каплевидный щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Большой щит каплевидной формы. +2 КД.',
    bonuses: { ac: 2 },
    cost: 15, weight: 8
},
{
    id: 'round_shield',
    name: 'Круглый щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Лёгкий круглый щит викингов. +2 КД.',
    bonuses: { ac: 2 },
    cost: 10, weight: 6
},
{
    id: 'spiked_shield',
    name: 'Шипованный щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Щит с шипами. +2 КД. Можно атаковать как оружие (1d4 колющего урона).',
    bonuses: { ac: 2 },
    cost: 15, weight: 7
},
{
    id: 'wicker_shield',
    name: 'Плетёный щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Лёгкий щит из прутьев. +1 КД. Очень лёгкий.',
    bonuses: { ac: 1 },
    cost: 3, weight: 3
},
{
    id: 'scutum',
    name: 'Скутум (римский щит)',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Большой прямоугольный щит. +2 КД. Можно укрыться за ним (помеха дальнобойным атакам).',
    bonuses: { ac: 2 },
    cost: 20, weight: 10
},
{
    id: 'hoplon',
    name: 'Гоплон (греческий щит)',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Тяжёлый круглый щит гоплитов. +2 КД. Бонус +1, если рядом союзник с таким же щитом.',
    bonuses: { ac: 2 },
    cost: 18, weight: 9
},
{
    id: 'targe',
    name: 'Тарч',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Маленький шотландский щит. +1 КД. Можно использовать как оружие (1d4 дробящего).',
    bonuses: { ac: 1 },
    cost: 7, weight: 4
},
{
    id: 'pavise',
    name: 'Павеза',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Огромный щит арбалетчика. +2 КД. Можно установить как укрытие.',
    bonuses: { ac: 2 },
    cost: 25, weight: 15
},
{
    id: 'mirror_shield',
    name: 'Зеркальный щит',
    type: 'armor',
    rarity: 'необычный',
    slot: 'offhand',
    description: 'Полированный металлический щит. +2 КД. Можно ослепить врага отражённым светом (1 раз в бой).',
    bonuses: { ac: 2 },
    cost: 100, weight: 7
},

// ============================================================
// ОБЫЧНЫЕ АРТЕФАКТЫ — УКРАШЕНИЯ И ТАЛИСМАНЫ (10 предметов)
// ============================================================
{
    id: 'copper_ring',
    name: 'Медное кольцо',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'ring',
    description: 'Простое медное кольцо. Можно зачаровать у мага.',
    bonuses: {},
    cost: 5, weight: 0
},
{
    id: 'silver_pendant',
    name: 'Серебряный кулон',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'neck',
    description: 'Простой серебряный кулон на цепочке. Светится в присутствии нежити в 30 фт.',
    bonuses: {},
    cost: 25, weight: 0
},
{
    id: 'lucky_charm',
    name: 'Счастливый талисман',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'neck',
    description: 'Маленький амулет на удачу. Один раз в день можно перебросить проверку инициативы.',
    bonuses: {},
    cost: 10, weight: 0
},
{
    id: 'tribal_necklace',
    name: 'Племенное ожерелье',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'neck',
    description: 'Ожерелье из зубов и когтей. Даёт +1 к Запугиванию.',
    bonuses: {},
    cost: 5, weight: 1
},
{
    id: 'leather_belt',
    name: 'Кожаный пояс',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'waist',
    description: 'Прочный кожаный пояс с пряжкой. Можно подвесить до 3 маленьких предметов.',
    bonuses: {},
    cost: 3, weight: 1
},
{
    id: 'wool_cloak',
    name: 'Шерстяной плащ',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'back',
    description: 'Тёплый шерстяной плащ. Защищает от непогоды.',
    bonuses: {},
    cost: 5, weight: 2
},
{
    id: 'straw_hat',
    name: 'Соломенная шляпа',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'head',
    description: 'Широкая соломенная шляпа. Защищает от солнца и дождя.',
    bonuses: {},
    cost: 1, weight: 1
},
{
    id: 'leather_gloves',
    name: 'Кожаные перчатки',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'hands',
    description: 'Простые рабочие перчатки. Защищают руки от мозолей.',
    bonuses: {},
    cost: 2, weight: 1
},
{
    id: 'travel_boots',
    name: 'Походные сапоги',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'feet',
    description: 'Удобные кожаные сапоги для долгих переходов.',
    bonuses: {},
    cost: 5, weight: 2
},
{
    id: 'iron_bracelet',
    name: 'Железный браслет',
    type: 'artifact',
    rarity: 'обычный',
    slot: 'hands',
    description: 'Тяжёлый железный браслет. Можно использовать как кастет (1d3 дробящего).',
    bonuses: {},
    cost: 3, weight: 2
},

// ============================================================
// НЕОБЫЧНЫЕ АРТЕФАКТЫ — ПОЛЕЗНЫЕ МЕЛОЧИ (10 предметов)
// ============================================================
{
    id: 'everbright_lantern',
    name: 'Вечносветящийся фонарь',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'offhand',
    description: 'Фонарь, который никогда не гаснет. Излучает яркий свет 60 фт.',
    bonuses: {},
    cost: 200, weight: 2
},
{
    id: 'earring_of_message',
    name: 'Серьга сообщения',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет отправлять сообщения существу в 120 фт (3 раза в день).',
    bonuses: {},
    cost: 300, weight: 0
},
{
    id: 'brooch_of_shielding',
    name: 'Брошь щита',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Даёт сопротивление урону силовым полем. Поглощает Волшебную стрелу.',
    bonuses: { forceResist: true },
    cost: 400, weight: 0
},
{
    id: 'goggles_of_night',
    name: 'Очки ночного видения',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Дают тёмное зрение 60 фт.',
    bonuses: {},
    cost: 350, weight: 0.5
},
{
    id: 'gloves_of_warmth',
    name: 'Тёплые перчатки',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Защищают от обморожения. Заговоры холода наносят на 1d4 меньше урона.',
    bonuses: { coldResist: true },
    cost: 200, weight: 1
},
{
    id: 'scarf_of_protection',
    name: 'Шарф защиты',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Защищает горло. Даёт +1 к спасброскам от вдыхаемых ядов и газов.',
    bonuses: {},
    cost: 150, weight: 0.5
},
{
    id: 'belt_pouch_of_holding',
    name: 'Поясная сумка хранения',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Вмещает до 50 фунтов, весит 1 фунт. Удобно для зелий и свитков.',
    bonuses: {},
    cost: 250, weight: 1
},
{
    id: 'waterproof_boots',
    name: 'Водонепроницаемые сапоги',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Ноги всегда остаются сухими. Игнорируют мелкие лужи и грязь.',
    bonuses: {},
    cost: 100, weight: 2
},
{
    id: 'cap_of_the_skald',
    name: 'Шапка скальда',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Даёт +2 к проверкам Выступления. Вдохновляет союзников.',
    bonuses: { cha: 1 },
    cost: 200, weight: 0.5
},
{
    id: 'ring_of_recognition',
    name: 'Кольцо узнавания',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Позволяет опознавать магические предметы (1 раз в день).',
    bonuses: { int: 1 },
    cost: 300, weight: 0
},

// ============================================================
// НЕОБЫЧНЫЕ АРТЕФАКТЫ — ЗАЩИТНЫЕ (10 предметов)
// ============================================================
{
    id: 'charm_of_vitality',
    name: 'Амулет жизненной силы',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Даёт +5 к максимальным хитам.',
    bonuses: { con: 1 },
    cost: 400, weight: 0
},
{
    id: 'ring_of_fortitude',
    name: 'Кольцо стойкости',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Даёт преимущество на спасброски от истощения.',
    bonuses: { con: 1 },
    cost: 350, weight: 0
},
{
    id: 'pendant_of_clarity',
    name: 'Кулон ясности',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Преимущество на спасброски от очарования.',
    bonuses: { wis: 1 },
    cost: 350, weight: 0
},
{
    id: 'boots_of_steady_ground',
    name: 'Сапоги устойчивости',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Преимущество на спасброски от сбивания с ног и толкания.',
    bonuses: { str: 1 },
    cost: 300, weight: 2
},
{
    id: 'gloves_of_steady_aim',
    name: 'Перчатки твёрдой руки',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Игнорируют помеху на дальнобойные атаки из-за ветра или движения.',
    bonuses: { dex: 1 },
    cost: 350, weight: 1
},
{
    id: 'cloak_of_comfort',
    name: 'Плащ комфорта',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Защищает от экстремальной жары и холода. Всегда комфортная температура.',
    bonuses: { coldResist: true, fireResist: true },
    cost: 400, weight: 1
},
{
    id: 'circlet_of_focus',
    name: 'Венец сосредоточения',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: '+1 к проверкам концентрации заклинаний.',
    bonuses: { int: 1 },
    cost: 350, weight: 0.5
},
{
    id: 'belt_of_balance',
    name: 'Пояс равновесия',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Преимущество на проверки Акробатики для удержания равновесия.',
    bonuses: { dex: 1 },
    cost: 300, weight: 1
},
{
    id: 'mask_of_serenity',
    name: 'Маска безмятежности',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Преимущество на спасброски от страха.',
    bonuses: { wis: 1 },
    cost: 300, weight: 0.5
},
{
    id: 'ring_of_endurance',
    name: 'Кольцо выносливости',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Увеличивает дистанцию дневного перехода на 2 мили.',
    bonuses: { con: 1 },
    cost: 300, weight: 0
},

// ============================================================
// НЕОБЫЧНЫЕ АРТЕФАКТЫ — ПОЛЕЗНЫЕ ЭФФЕКТЫ (10 предметов)
// ============================================================
{
    id: 'ring_of_tracking',
    name: 'Кольцо следопыта',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Преимущество на проверки Выживания для выслеживания.',
    bonuses: { wis: 1 },
    cost: 300, weight: 0
},
{
    id: 'amulet_of_nature',
    name: 'Амулет природы',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Преимущество на проверки Природы и обращения с животными.',
    bonuses: { wis: 1 },
    cost: 300, weight: 0
},
{
    id: 'gloves_of_detection',
    name: 'Перчатки обнаружения',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Преимущество на проверки Поиска скрытых дверей и ловушек.',
    bonuses: { wis: 1 },
    cost: 350, weight: 1
},
{
    id: 'boots_of_silence',
    name: 'Сапоги тишины',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Преимущество на проверки Скрытности при движении.',
    bonuses: { stealth: 'advantage' },
    cost: 350, weight: 2
},
{
    id: 'cloak_of_disguise',
    name: 'Плащ маскировки',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Позволяет менять цвет плаща под окружение. +2 к Скрытности.',
    bonuses: { stealth: 'advantage' },
    cost: 300, weight: 1
},
{
    id: 'hat_of_disguise',
    name: 'Шляпа маскировки',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'head',
    description: 'Позволяет сотворять Маскировку (1 раз в день).',
    bonuses: { cha: 1 },
    cost: 400, weight: 0.5
},
{
    id: 'ring_of_languages',
    name: 'Кольцо языков',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Позволяет понимать ещё 2 языка (меняются раз в день).',
    bonuses: { int: 1 },
    cost: 300, weight: 0
},
{
    id: 'belt_of_mending',
    name: 'Пояс починки',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Чинит одежду и лёгкие повреждения снаряжения (1 раз в день).',
    bonuses: {},
    cost: 250, weight: 1
},
{
    id: 'necklace_of_adaptation_minor',
    name: 'Малое ожерелье адаптации',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Позволяет задерживать дыхание на 1 час.',
    bonuses: {},
    cost: 300, weight: 0
},
{
    id: 'ring_of_dowsing',
    name: 'Кольцо поиска воды',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Указывает направление к ближайшему источнику пресной воды в 1 миле.',
    bonuses: {},
    cost: 200, weight: 0
},

// ============================================================
// РЕДКИЕ АРТЕФАКТЫ (10 предметов)
// ============================================================
{
    id: 'ring_of_spell_absorption',
    name: 'Кольцо поглощения заклинаний',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'ring',
    description: 'Поглощает одно заклинание до 5 уровня, направленное на вас (1 раз в день).',
    bonuses: { int: 1 },
    cost: 3000, weight: 0
},
{
    id: 'amulet_of_elemental_ward',
    name: 'Амулет стихийной защиты',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'neck',
    description: 'Даёт сопротивление двум стихиям на выбор (меняется после длительного отдыха).',
    bonuses: { savingThrows: 1 },
    cost: 2500, weight: 0
},
{
    id: 'cloak_of_shadow_step',
    name: 'Плащ теневого шага',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'back',
    description: 'Бонусным действием телепортироваться в тень в 60 фт (3 раза в день).',
    bonuses: { dex: 1 },
    cost: 2000, weight: 1
},
{
    id: 'boots_of_temporal_shift',
    name: 'Сапоги временного сдвига',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'feet',
    description: 'Реакцией исчезнуть на 1 раунд (уйти в другое время, 1 раз в день).',
    bonuses: { dex: 1 },
    cost: 2500, weight: 2
},
{
    id: 'gloves_of_spell_parry',
    name: 'Перчатки отражения заклинаний',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: 'Реакцией дать +2 к спасброску от заклинания (3 раза в день).',
    bonuses: { int: 1, savingThrows: 1 },
    cost: 1800, weight: 1
},
{
    id: 'crown_of_mind_shielding',
    name: 'Корона защиты разума',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Полный иммунитет к чтению мыслей и обнаружению магией.',
    bonuses: { wis: 2 },
    cost: 2200, weight: 1
},
{
    id: 'belt_of_versatility',
    name: 'Пояс универсальности',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: 'Даёт +1 к двум характеристикам на выбор (меняется после длительного отдыха).',
    bonuses: { str: 1, dex: 1 },
    cost: 2000, weight: 2
},
{
    id: 'ring_of_arcane_synergy',
    name: 'Кольцо тайной синергии',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'ring',
    description: '+1 к Сл заклинаний и +1 к атакам заклинаниями.',
    bonuses: { int: 1, cha: 1 },
    cost: 2500, weight: 0
},
{
    id: 'amulet_of_life_preservation',
    name: 'Амулет сохранения жизни',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'neck',
    description: 'При падении до 0 хитов автоматически стабилизирует и даёт 10 временных хитов (1 раз в день).',
    bonuses: { con: 1 },
    cost: 2000, weight: 0
},
{
    id: 'mask_of_the_faceless',
    name: 'Маска безликого',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Позволяет менять внешность и голос (Маскировка без затрат, 3 раза в день).',
    bonuses: { cha: 2 },
    cost: 2500, weight: 0.5
},

// ============================================================
// ОЧЕНЬ РЕДКИЕ АРТЕФАКТЫ (5 предметов)
// ============================================================
{
    id: 'ring_of_greater_protection',
    name: 'Кольцо великой защиты',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'ring',
    description: '+2 КД и +2 ко всем спасброскам.',
    bonuses: { ac: 2, savingThrows: 2 },
    cost: 6000, weight: 0
},
{
    id: 'cloak_of_etherealness',
    name: 'Плащ эфирности',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'back',
    description: 'Действием уйти на Эфирный план на 1 минуту (1 раз в день).',
    bonuses: { int: 1 },
    cost: 7000, weight: 1
},
{
    id: 'amulet_of_greater_health',
    name: 'Амулет великого здоровья',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'neck',
    description: 'Увеличивает Телосложение до 21. Иммунитет к болезням.',
    bonuses: { con: 21 },
    cost: 8000, weight: 0
},
{
    id: 'circlet_of_greater_intellect',
    name: 'Венец великого интеллекта',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'head',
    description: 'Увеличивает Интеллект до 21.',
    bonuses: { int: 21 },
    cost: 7000, weight: 1
},
{
    id: 'boots_of_planar_step',
    name: 'Сапоги планарного шага',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'feet',
    description: 'Действием переместиться на другой план бытия (1 раз в неделю).',
    bonuses: { wis: 2 },
    cost: 9000, weight: 2
},

// ============================================================
// ЛЕГЕНДАРНЫЕ АРТЕФАКТЫ (5 предметов)
// ============================================================
{
    id: 'eye_of_vecna',
    name: 'Глаз Векны',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'head',
    description: 'Даёт истинное зрение 120 фт, рентгеновское зрение, +2 Интеллекта и Мудрости. Требует удаления глаза.',
    bonuses: { int: 2, wis: 2 },
    cost: 100000, weight: 0
},
{
    id: 'hand_of_vecna',
    name: 'Рука Векны',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'hands',
    description: 'Даёт +2 Силы. Заклинания из руки наносят дополнительный 2d8 урона холодом. Требует удаления руки.',
    bonuses: { str: 2, coldDamage: '2d8' },
    cost: 100000, weight: 1
},
{
    id: 'ring_of_wishes',
    name: 'Кольцо желаний',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'ring',
    description: 'Содержит заклинание Желание с 1 зарядом. После использования становится обычным кольцом.',
    bonuses: { cha: 2 },
    cost: 50000, weight: 0
},
{
    id: 'amulet_of_immortality',
    name: 'Амулет бессмертия',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'neck',
    description: 'Останавливает старение. При смерти воскрешает через 1 минуту (1 раз в год).',
    bonuses: { con: 2, wis: 2 },
    cost: 75000, weight: 0
},
{
    id: 'crown_of_stars_supreme',
    name: 'Корона высших звёзд',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'head',
    description: '+3 ко всем характеристикам. Создаёт до 7 звёздных моти (каждая 4d12 урона излучением).',
    bonuses: { str: 3, dex: 3, con: 3, int: 3, wis: 3, cha: 3 },
    cost: 150000, weight: 2
},

// ============================================================
// МАСШТАБИРУЕМЫЕ ПРЕДМЕТЫ — ФИНАЛЬНЫЕ (5 предметов)
// ============================================================
{
    id: 'scaling_blade_of_heroes',
    name: 'Клинок героев',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака. Уровень 6-10: +2 атаки, +1d6 урона излучением. Уровень 11-15: +3 атаки, +2d6 излучения. Уровень 16+: +4 атаки, +3d6 излучения.',
    bonuses: { attack: 1, damage: '1d8+1' },
    cost: 10000, weight: 3,
    scaling: true
},
{
    id: 'scaling_shield_of_ages',
    name: 'Щит веков',
    type: 'armor',
    rarity: 'масштабирующийся',
    slot: 'offhand',
    description: 'Уровень 1-5: +2 КД. Уровень 6-10: +3 КД. Уровень 11-15: +4 КД, сопротивление одной стихии. Уровень 16+: +5 КД, сопротивление всем стихиям.',
    bonuses: { ac: 2 },
    cost: 8000, weight: 6,
    scaling: true
},
{
    id: 'scaling_ring_of_power',
    name: 'Кольцо могущества',
    type: 'artifact',
    rarity: 'масштабирующийся',
    slot: 'ring',
    description: 'Уровень 1-5: +1 спасброски. Уровень 6-10: +1 КД, +2 спасброски. Уровень 11-15: +2 КД, +3 спасброски, +1 ко всем характеристикам. Уровень 16+: +3 КД, +4 спасброски, +2 ко всем характеристикам.',
    bonuses: { savingThrows: 1 },
    cost: 12000, weight: 0,
    scaling: true
},
{
    id: 'scaling_cloak_of_legends',
    name: 'Плащ легенд',
    type: 'artifact',
    rarity: 'масштабирующийся',
    slot: 'back',
    description: 'Уровень 1-5: Преимущество на Скрытность. Уровень 6-10: +1 КД, невидимость 1 раз в день. Уровень 11-15: +2 КД, полёт 30 фт. Уровень 16+: +3 КД, невидимость без затрат.',
    bonuses: { stealth: 'advantage' },
    cost: 12000, weight: 1,
    scaling: true
},
{
    id: 'scaling_crown_of_destiny',
    name: 'Корона судьбы',
    type: 'artifact',
    rarity: 'масштабирующийся',
    slot: 'head',
    description: 'Уровень 1-5: +1 Интеллект. Уровень 6-10: +2 Интеллект, телепатия 60 фт. Уровень 11-15: +3 Интеллект, чтение мыслей. Уровень 16+: +4 Интеллект, предвидение 1 раз в день.',
    bonuses: { int: 1 },
    cost: 15000, weight: 1,
    scaling: true
},

// ============================================================
// ОБЫЧНОЕ СНАРЯЖЕНИЕ — ЭКЗОТИЧЕСКОЕ ОРУЖИЕ (15 предметов)
// ============================================================
{
    id: 'khopesh',
    name: 'Хопеш',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Египетский серповидный меч. 1d8 рубящего урона. +1 к обезоруживанию.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 12, weight: 3
},
{
    id: 'kris',
    name: 'Крис',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Индонезийский волнистый кинжал. 1d4 колющего урона. Крит на 19-20.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'колющий', critRange: '19-20' },
    cost: 8, weight: 1
},
{
    id: 'shotel',
    name: 'Шотель',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Эфиопский изогнутый меч. Обходит щиты. 1d6 рубящего урона.',
    bonuses: { attack: 0, damage: '1d6', ignoreShields: true },
    cost: 15, weight: 2
},
{
    id: 'macuahuitl',
    name: 'Макуауитль',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Ацтекская деревянная дубина с обсидиановыми лезвиями. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 8, weight: 5
},
{
    id: 'urumi',
    name: 'Уруми',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Индийский меч-хлыст из гибкой стали. 1d8 рубящего урона, досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d8', reach: true },
    cost: 20, weight: 3
},
{
    id: 'chakram',
    name: 'Чакрам',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Метательное кольцо. 1d6 рубящего урона. Дистанция 30/90 фт. Лёгкое.',
    bonuses: { attack: 0, damage: '1d6', range: 30 },
    cost: 10, weight: 1
},
{
    id: 'tonfa',
    name: 'Тонфа',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Деревянная рукоять с боковой ручкой. 1d4 дробящего урона. +1 КД.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий', ac: 1 },
    cost: 5, weight: 2
},
{
    id: 'monks_spade',
    name: 'Лопата монаха',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Древковое оружие с лопатой на одном конце и полумесяцем на другом. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8', reach: true },
    cost: 5, weight: 6
},
{
    id: 'three_section_staff',
    name: 'Трёхсекционный цеп',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Три палки на цепях. 1d6 дробящего урона, досягаемость 10 фт, лёгкое.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'дробящий', reach: true },
    cost: 10, weight: 4
},
{
    id: 'hook_swords',
    name: 'Крюки-мечи',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Парные мечи с крюками. 1d6 рубящего урона. Можно сцепить для досягаемости 10 фт.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 15, weight: 3
},
{
    id: 'wind_and_fire_wheels',
    name: 'Колёса ветра и огня',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Парные кольца с лезвиями. 1d4 рубящего урона каждое. +1 КД при парном бое.',
    bonuses: { attack: 0, damage: '1d4', ac: 1 },
    cost: 12, weight: 2
},
{
    id: 'war_fan',
    name: 'Боевой веер',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Складной веер с металлическими лезвиями. 1d4 рубящего урона. Лёгкое, скрытое.',
    bonuses: { attack: 0, damage: '1d4' },
    cost: 10, weight: 1
},
{
    id: 'deer_horn_knives',
    name: 'Ножи-оленьи рога',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Парные ножи в форме рогов. 1d4 колющего урона. +2 к обезоруживанию.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'колющий' },
    cost: 8, weight: 1
},
{
    id: 'rope_dart',
    name: 'Верёвочный дротик',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Дротик на длинной верёвке. 1d4 колющего урона, досягаемость 15 фт.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'колющий', reach: true },
    cost: 3, weight: 2
},
{
    id: 'meteor_hammer',
    name: 'Метеоритный молот',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Два шара на верёвке. 1d6 дробящего урона, досягаемость 15 фт.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'дробящий', reach: true },
    cost: 10, weight: 5
},

// ============================================================
// ОБЫЧНОЕ СНАРЯЖЕНИЕ — ДОСПЕХИ И ЩИТЫ (15 предметов)
// ============================================================
{
    id: 'bamboo_armor',
    name: 'Бамбуковый доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Лёгкий доспех из бамбуковых пластин. КД = 11 + мод. Ловкости. Очень лёгкий.',
    bonuses: { ac: 1 },
    cost: 10, weight: 6
},
{
    id: 'paper_armor',
    name: 'Бумажный доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Прессованная бумага, прочнее чем кажется. КД = 11 + мод. Ловкости. Водопроницаемый.',
    bonuses: { ac: 1 },
    cost: 5, weight: 4
},
{
    id: 'crocodile_skin',
    name: 'Крокодиловая кожа',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Доспех из шкуры крокодила. КД = 12 + мод. Ловкости. Устрашающий вид.',
    bonuses: { ac: 2 },
    cost: 30, weight: 12
},
{
    id: 'shell_armor',
    name: 'Панцирный доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Доспех из черепашьего панциря. КД = 14. Помеха на Скрытность.',
    bonuses: { ac: 6 },
    cost: 40, weight: 25
},
{
    id: 'furs_armor',
    name: 'Меховой доспех',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Толстые меховые шкуры. КД = 11 + мод. Ловкости. Тепло, но жарко летом.',
    bonuses: { ac: 1, coldResist: true },
    cost: 15, weight: 15
},
{
    id: 'linen_cuirass',
    name: 'Льняная кираса',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Древнегреческий доспех из склеенных слоёв льна. КД = 12 + мод. Ловкости.',
    bonuses: { ac: 2 },
    cost: 20, weight: 8
},
{
    id: 'bronze_breastplate',
    name: 'Бронзовая кираса',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Цельная бронзовая нагрудная пластина. КД = 14 + мод. Ловкости (макс. 2).',
    bonuses: { ac: 4 },
    cost: 150, weight: 25
},
{
    id: 'iron_lamellar',
    name: 'Железный ламелляр',
    type: 'armor',
    rarity: 'обычный',
    slot: 'body',
    description: 'Доспех из железных пластинок. КД = 13 + мод. Ловкости (макс. 2).',
    bonuses: { ac: 3 },
    cost: 80, weight: 30
},
{
    id: 'war_shield',
    name: 'Боевой щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Усиленный металлический щит. +2 КД. Можно атаковать (1d4 дробящего).',
    bonuses: { ac: 2 },
    cost: 12, weight: 8
},
{
    id: 'light_buckler',
    name: 'Лёгкий баклер',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Маленький стальной щит. +1 КД. Не мешает использовать руку.',
    bonuses: { ac: 1 },
    cost: 5, weight: 2
},
{
    id: 'hide_shield',
    name: 'Кожаный щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Щит из натянутой кожи на раме. +1 КД. Очень лёгкий.',
    bonuses: { ac: 1 },
    cost: 3, weight: 3
},
{
    id: 'tortoise_shield',
    name: 'Черепаший щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Щит из панциря гигантской черепахи. +2 КД.',
    bonuses: { ac: 2 },
    cost: 15, weight: 7
},
{
    id: 'obsidian_shield',
    name: 'Обсидиановый щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Ритуальный щит из вулканического стекла. +2 КД. Хрупкий.',
    bonuses: { ac: 2 },
    cost: 20, weight: 5
},
{
    id: 'feather_shield',
    name: 'Перьевой щит',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Лёгкий щит из перьев и дерева. +1 КД. Можно использовать как плавсредство.',
    bonuses: { ac: 1 },
    cost: 8, weight: 4
},
{
    id: 'iron_rim_shield',
    name: 'Щит с железным ободом',
    type: 'armor',
    rarity: 'обычный',
    slot: 'offhand',
    description: 'Деревянный щит, укреплённый железом. +2 КД.',
    bonuses: { ac: 2 },
    cost: 10, weight: 7
},

// ============================================================
// НЕОБЫЧНЫЕ АРТЕФАКТЫ — КОЛЬЦА (10 предметов)
// ============================================================
{
    id: 'ring_of_fire_resistance_minor',
    name: 'Малое кольцо защиты от огня',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Поглощает первые 5 урона от огня каждый ход.',
    bonuses: { fireResist: true },
    cost: 400, weight: 0
},
{
    id: 'ring_of_cold_resistance_minor',
    name: 'Малое кольцо защиты от холода',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Поглощает первые 5 урона от холода каждый ход.',
    bonuses: { coldResist: true },
    cost: 400, weight: 0
},
{
    id: 'ring_of_lightning_resistance_minor',
    name: 'Малое кольцо защиты от молний',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Поглощает первые 5 урона от электричества каждый ход.',
    bonuses: { lightningResist: true },
    cost: 400, weight: 0
},
{
    id: 'ring_of_night_vision',
    name: 'Кольцо ночного видения',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Даёт тёмное зрение 30 фт. Если уже есть — увеличивает на 30 фт.',
    bonuses: {},
    cost: 350, weight: 0
},
{
    id: 'ring_of_the_harvest',
    name: 'Кольцо урожая',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Восстанавливает 1 хит в минуту вне боя.',
    bonuses: { con: 1 },
    cost: 300, weight: 0
},
{
    id: 'ring_of_the_scholar',
    name: 'Кольцо учёного',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Преимущество на проверки Истории и Магии.',
    bonuses: { int: 1 },
    cost: 300, weight: 0
},
{
    id: 'ring_of_the_diplomat',
    name: 'Кольцо дипломата',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Преимущество на проверки Убеждения.',
    bonuses: { cha: 1 },
    cost: 300, weight: 0
},
{
    id: 'ring_of_the_scout',
    name: 'Кольцо разведчика',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Преимущество на проверки Восприятия и Выживания.',
    bonuses: { wis: 1 },
    cost: 350, weight: 0
},
{
    id: 'ring_of_the_acrobat',
    name: 'Кольцо акробата',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Преимущество на проверки Акробатики.',
    bonuses: { dex: 1 },
    cost: 300, weight: 0
},
{
    id: 'ring_of_the_athlete',
    name: 'Кольцо атлета',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'ring',
    description: 'Преимущество на проверки Атлетики.',
    bonuses: { str: 1 },
    cost: 300, weight: 0
},

// ============================================================
// НЕОБЫЧНЫЕ АРТЕФАКТЫ — АМУЛЕТЫ И КУЛОНЫ (10 предметов)
// ============================================================
{
    id: 'amulet_of_the_warrior',
    name: 'Амулет воина',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: '+1 к атакам оружием ближнего боя.',
    bonuses: { attack: 1 },
    cost: 500, weight: 0
},
{
    id: 'amulet_of_the_archer',
    name: 'Амулет лучника',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: '+1 к атакам дальнобойным оружием.',
    bonuses: { attack: 1 },
    cost: 500, weight: 0
},
{
    id: 'amulet_of_the_mage',
    name: 'Амулет мага',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: '+1 к атакам заклинаниями.',
    bonuses: { int: 1 },
    cost: 500, weight: 0
},
{
    id: 'pendant_of_hope',
    name: 'Кулон надежды',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'При падении до 0 хитов автоматически стабилизирует (1 раз в день).',
    bonuses: { autoStabilize: true },
    cost: 350, weight: 0
},
{
    id: 'charm_of_luck',
    name: 'Талисман удачи',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Один раз в день можно перебросить любой бросок d20.',
    bonuses: {},
    cost: 600, weight: 0
},
{
    id: 'amulet_of_the_beast',
    name: 'Амулет зверя',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Преимущество на проверки обращения с животными.',
    bonuses: { wis: 1 },
    cost: 300, weight: 0
},
{
    id: 'pendant_of_memory',
    name: 'Кулон памяти',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Идеально запоминает одно сообщение до 100 слов. Можно воспроизвести касанием.',
    bonuses: { int: 1 },
    cost: 250, weight: 0
},
{
    id: 'amulet_of_false_life',
    name: 'Амулет ложной жизни',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Даёт 5 временных хитов после каждого короткого отдыха.',
    bonuses: { con: 1 },
    cost: 400, weight: 0
},
{
    id: 'charm_of_warding',
    name: 'Оберег защиты',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: '+1 к спасброскам от ловушек.',
    bonuses: { savingThrows: 1 },
    cost: 350, weight: 0
},
{
    id: 'amulet_of_the_seer',
    name: 'Амулет провидца',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'neck',
    description: 'Даёт смутные видения ближайшего будущего (1 раз в день).',
    bonuses: { wis: 1 },
    cost: 400, weight: 0
},

// ============================================================
// НЕОБЫЧНЫЕ АРТЕФАКТЫ — ПОЯСА И ПЕРЧАТКИ (10 предметов)
// ============================================================
{
    id: 'belt_of_carrying',
    name: 'Пояс переноски',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Удваивает грузоподъёмность.',
    bonuses: { str: 1 },
    cost: 300, weight: 2
},
{
    id: 'gloves_of_the_tailor',
    name: 'Перчатки портного',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Чинят одежду касанием. +1 к проверкам ловкости рук.',
    bonuses: { dex: 1 },
    cost: 200, weight: 1
},
{
    id: 'belt_of_breath',
    name: 'Пояс дыхания',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Позволяет задерживать дыхание на 30 минут.',
    bonuses: {},
    cost: 250, weight: 1
},
{
    id: 'gloves_of_the_smith',
    name: 'Перчатки кузнеца',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Защищают от жара. +1 к проверкам кузнечного дела.',
    bonuses: { fireResist: true },
    cost: 250, weight: 2
},
{
    id: 'belt_of_herbs',
    name: 'Пояс травника',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Содержит 5 карманов с лечебными травами. +1 к проверкам Медицины.',
    bonuses: { wis: 1 },
    cost: 200, weight: 2
},
{
    id: 'gloves_of_the_scribe',
    name: 'Перчатки писаря',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Позволяют писать вдвое быстрее. Не оставляют чернильных пятен.',
    bonuses: { int: 1 },
    cost: 150, weight: 0.5
},
{
    id: 'belt_of_quick_draw',
    name: 'Пояс быстрого выхватывания',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Можно достать или убрать оружие бесплатным действием.',
    bonuses: { dex: 1 },
    cost: 400, weight: 1
},
{
    id: 'gloves_of_the_chef',
    name: 'Перчатки повара',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Приготовленная еда восстанавливает дополнительные 2 хита.',
    bonuses: {},
    cost: 150, weight: 1
},
{
    id: 'belt_of_tumbling',
    name: 'Пояс кувыркания',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'waist',
    description: 'Преимущество на проверки Акробатики для кувырков и падений.',
    bonuses: { dex: 1 },
    cost: 300, weight: 1
},
{
    id: 'gloves_of_the_messenger',
    name: 'Перчатки гонца',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'hands',
    description: 'Увеличивают скорость письма. Можно писать в движении без помех.',
    bonuses: {},
    cost: 100, weight: 0.5
},

// ============================================================
// НЕОБЫЧНЫЕ АРТЕФАКТЫ — ОБУВЬ И ПЛАЩИ (10 предметов)
// ============================================================
{
    id: 'boots_of_the_messenger',
    name: 'Сапоги гонца',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Увеличивают скорость ходьбы на 10 фт по дорогам.',
    bonuses: { speed: 10 },
    cost: 300, weight: 2
},
{
    id: 'slippers_of_comfort',
    name: 'Тапочки комфорта',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Ноги никогда не устают. Игнорируют урон от ходьбы по острым камням.',
    bonuses: {},
    cost: 200, weight: 1
},
{
    id: 'cloak_of_rain',
    name: 'Плащ дождя',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Отталкивает воду. Владелец всегда остаётся сухим.',
    bonuses: {},
    cost: 150, weight: 1
},
{
    id: 'boots_of_the_miner',
    name: 'Сапоги шахтёра',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Не скользят на камнях. Устойчивость к падениям с высоты до 20 фт.',
    bonuses: {},
    cost: 200, weight: 3
},
{
    id: 'cloak_of_stars',
    name: 'Плащ звёзд',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'В темноте на плаще проявляются светящиеся созвездия.',
    bonuses: {},
    cost: 250, weight: 1
},
{
    id: 'boots_of_the_forest',
    name: 'Сапоги леса',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Не оставляют следов в лесу. Бесшумное передвижение по траве и листве.',
    bonuses: { stealth: 'advantage' },
    cost: 350, weight: 2
},
{
    id: 'cloak_of_the_river',
    name: 'Плащ реки',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Позволяет плыть по течению без усилий. Скорость плавания +10 фт.',
    bonuses: { swim: 10 },
    cost: 250, weight: 1
},
{
    id: 'sandals_of_the_dune',
    name: 'Сандалии дюны',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Не проваливаются в песок. Игнорируют труднопроходимую местность (пустыня).',
    bonuses: { speed: 5 },
    cost: 200, weight: 1
},
{
    id: 'cloak_of_the_herbalist',
    name: 'Плащ травника',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'back',
    description: 'Содержит 10 карманов для трав. Травы внутри не портятся.',
    bonuses: { wis: 1 },
    cost: 200, weight: 2
},
{
    id: 'boots_of_the_cartographer',
    name: 'Сапоги картографа',
    type: 'artifact',
    rarity: 'необычный',
    slot: 'feet',
    description: 'Запоминают пройденный путь. Можно всегда вернуться тем же маршрутом.',
    bonuses: {},
    cost: 400, weight: 2
},

// ============================================================
// РЕДКИЕ АРТЕФАКТЫ — ГОЛОВНЫЕ УБОРЫ И МАСКИ (10 предметов)
// ============================================================
{
    id: 'helm_of_the_watcher',
    name: 'Шлем наблюдателя',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Даёт истинное зрение 10 фт (1 раз в день на 1 минуту).',
    bonuses: { wis: 1 },
    cost: 2000, weight: 3
},
{
    id: 'mask_of_the_banshee',
    name: 'Маска банши',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Действием издать крик банши (2d8 урона звуком всем в 15 фт, 1 раз в день).',
    bonuses: { cha: 1 },
    cost: 1800, weight: 1
},
{
    id: 'circlet_of_the_mind',
    name: 'Венец разума',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Увеличивает Интеллект до 19.',
    bonuses: { int: 19 },
    cost: 2000, weight: 1
},
{
    id: 'crown_of_the_diplomat',
    name: 'Корона дипломата',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Понимание всех языков. Преимущество на проверки Убеждения.',
    bonuses: { cha: 2 },
    cost: 2500, weight: 2
},
{
    id: 'helm_of_the_commander',
    name: 'Шлем командира',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Союзники в 30 фт получают +2 к инициативе.',
    bonuses: { cha: 1 },
    cost: 2200, weight: 3
},
{
    id: 'mask_of_the_predator',
    name: 'Маска хищника',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Преимущество на проверки Запугивания. +1d6 урона против испуганных целей.',
    bonuses: { cha: 1 },
    cost: 2000, weight: 1
},
{
    id: 'circlet_of_nature',
    name: 'Венец природы',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Позволяет говорить с растениями. Преимущество на проверки Выживания.',
    bonuses: { wis: 2 },
    cost: 2500, weight: 1
},
{
    id: 'helm_of_the_dragon',
    name: 'Шлем дракона',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: '+1 КД. Сопротивление урону выбранного дракона.',
    bonuses: { ac: 1, dragonResist: true },
    cost: 3000, weight: 4
},
{
    id: 'mask_of_the_trickster',
    name: 'Маска трикстера',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: 'Преимущество на Обман. Можно сотворять Малую иллюзию без затрат.',
    bonuses: { cha: 2 },
    cost: 2200, weight: 0.5
},
{
    id: 'crown_of_the_dwarf_lords',
    name: 'Корона дварфийских лордов',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'head',
    description: '+2 Телосложения. Тёмное зрение 60 фт. Сопротивление яду.',
    bonuses: { con: 2 },
    cost: 3500, weight: 3
},

// ============================================================
// РЕДКИЕ АРТЕФАКТЫ — ПОЯСА И ПЕРЧАТКИ (10 предметов)
// ============================================================
{
    id: 'belt_of_the_monk',
    name: 'Пояс монаха',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: 'Увеличивает КД без доспеха на 1. +1 к атакам без оружия.',
    bonuses: { ac: 1, str: 1, dex: 1 },
    cost: 2500, weight: 1
},
{
    id: 'gloves_of_the_brawler',
    name: 'Перчатки драчуна',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: 'Атаки без оружия наносят 1d8 дробящего урона. +2 к захвату.',
    bonuses: { str: 2 },
    cost: 2000, weight: 2
},
{
    id: 'belt_of_the_hunter',
    name: 'Пояс охотника',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: 'Преимущество на проверки Выживания. +1 к атакам по зверям.',
    bonuses: { wis: 1, dex: 1 },
    cost: 1800, weight: 2
},
{
    id: 'gloves_of_the_alchemist',
    name: 'Перчатки алхимика',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: '+2 к проверкам алхимии. Иммунитет к кислоте при работе с ингредиентами.',
    bonuses: { int: 2 },
    cost: 1500, weight: 1
},
{
    id: 'belt_of_the_gladiator',
    name: 'Пояс гладиатора',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: '+1 КД. +2 к проверкам Запугивания на арене.',
    bonuses: { ac: 1, cha: 1 },
    cost: 2000, weight: 3
},
{
    id: 'gloves_of_the_sharpshooter',
    name: 'Перчатки снайпера',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: 'Игнорируют помеху на дальнобойные атаки из-за дальности.',
    bonuses: { dex: 2 },
    cost: 2200, weight: 1
},
{
    id: 'belt_of_the_cavalier',
    name: 'Пояс кавалериста',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: '+2 к атакам верхом. Нельзя сбить с седла.',
    bonuses: { str: 1, dex: 1 },
    cost: 1800, weight: 3
},
{
    id: 'gloves_of_the_poisoner',
    name: 'Перчатки отравителя',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: 'Иммунитет к случайному отравлению при работе с ядами. +2 к созданию ядов.',
    bonuses: { int: 1 },
    cost: 2000, weight: 1
},
{
    id: 'belt_of_the_barbarian',
    name: 'Пояс варвара',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'waist',
    description: '+2 к урону в ярости. +5 к максимальным хитам.',
    bonuses: { str: 1, con: 1 },
    cost: 2500, weight: 2
},
{
    id: 'gloves_of_the_artificer',
    name: 'Перчатки ремесленника',
    type: 'artifact',
    rarity: 'редкий',
    slot: 'hands',
    description: '+2 к проверкам инструментов. Можно чинить магические предметы.',
    bonuses: { int: 2 },
    cost: 2200, weight: 1
},

// ============================================================
// ОЧЕНЬ РЕДКИЕ АРТЕФАКТЫ (5 предметов)
// ============================================================
{
    id: 'belt_of_the_titan',
    name: 'Пояс титана',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'waist',
    description: 'Увеличивает Силу до 25. Размер считается на одну категорию больше.',
    bonuses: { str: 25 },
    cost: 10000, weight: 3
},
{
    id: 'gloves_of_the_master_artisan',
    name: 'Перчатки мастера-ремесленника',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'hands',
    description: '+3 к проверкам любых инструментов. Создание предметов занимает вдвое меньше времени.',
    bonuses: { int: 2, dex: 2 },
    cost: 6000, weight: 1
},
{
    id: 'cloak_of_the_phoenix',
    name: 'Плащ феникса',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'back',
    description: 'При падении до 0 хитов воспламеняется, нанося 4d6 урона огнём вокруг, и восстанавливает половину хитов (1 раз в неделю).',
    bonuses: { fireResist: true, cha: 2 },
    cost: 12000, weight: 1
},
{
    id: 'crown_of_the_elemental_lord',
    name: 'Корона повелителя стихий',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'head',
    description: 'Сопротивление всем стихиям (огонь, холод, электричество, кислота).',
    bonuses: { fireResist: true, coldResist: true, lightningResist: true },
    cost: 15000, weight: 2
},
{
    id: 'boots_of_the_planar_walker',
    name: 'Сапоги планарного странника',
    type: 'artifact',
    rarity: 'очень редкий',
    slot: 'feet',
    description: 'Позволяют ходить по воздуху, воде и лаве. Скорость полёта 30 фт.',
    bonuses: { fly: 30, waterWalk: true },
    cost: 10000, weight: 2
},

// ============================================================
// ЛЕГЕНДАРНЫЕ АРТЕФАКТЫ (5 предметов)
// ============================================================
{
    id: 'belt_of_the_storm_giant',
    name: 'Пояс силы штормового великана',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'waist',
    description: 'Увеличивает Силу до 29.',
    bonuses: { str: 29 },
    cost: 25000, weight: 2
},
{
    id: 'cloak_of_the_archmage',
    name: 'Плащ архимага',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'back',
    description: '+3 КД. Преимущество на спасброски от заклинаний. +3 к Сл заклинаний.',
    bonuses: { ac: 3, savingThrows: 3, int: 3, cha: 3 },
    cost: 50000, weight: 1
},
{
    id: 'crown_of_the_dragon_emperor',
    name: 'Корона драконьего императора',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'head',
    description: '+3 ко всем характеристикам. Иммунитет к страху. Драконы относятся с уважением.',
    bonuses: { str: 3, dex: 3, con: 3, int: 3, wis: 3, cha: 3 },
    cost: 100000, weight: 2
},
{
    id: 'boots_of_the_god_walker',
    name: 'Сапоги божественного странника',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'feet',
    description: 'Скорость полёта 120 фт. Можно телепортироваться на 1 милю (1 раз в день).',
    bonuses: { fly: 120, dex: 3 },
    cost: 50000, weight: 1
},
{
    id: 'gloves_of_the_grandmaster',
    name: 'Перчатки грандмастера',
    type: 'artifact',
    rarity: 'легендарный',
    slot: 'hands',
    description: '+3 к атакам и урону. Критический удар на 18-20. Владение всеми видами оружия.',
    bonuses: { attack: 3, str: 3, dex: 3 },
    cost: 50000, weight: 1
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — МЕЧИ И КЛИНКИ (20 предметов)
// ============================================================
{
    id: 'arming_sword',
    name: 'Рыцарский меч',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Классический одноручный меч рыцаря. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 15, weight: 3
},
{
    id: 'sabre',
    name: 'Сабля',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Изогнутый кавалерийский меч. 1d8 рубящего урона. +1 к атаке верхом.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 20, weight: 3
},
{
    id: 'cutlass',
    name: 'Абордажная сабля',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Короткий изогнутый меч моряков. 1d6 рубящего урона. Не тонет в воде.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 12, weight: 2
},
{
    id: 'wakizashi',
    name: 'Вакидзаси',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Короткий японский меч. 1d6 рубящего урона. Лёгкое.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 15, weight: 2
},
{
    id: 'nodachi',
    name: 'Нодати',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Огромный двуручный японский меч. 2d6 рубящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '2d6', reach: true },
    cost: 50, weight: 8
},
{
    id: 'bastard_sword',
    name: 'Полуторный меч',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Меч, которым можно бить одной или двумя руками. 1d8 рубящего (1d10 двумя).',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 25, weight: 4
},
{
    id: 'gladius',
    name: 'Гладиус',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Короткий римский меч. 1d6 колющего урона. +1 КД в строю.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'колющий', ac: 1 },
    cost: 10, weight: 2
},
{
    id: 'spatha',
    name: 'Спата',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Длинный римский кавалерийский меч. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 18, weight: 3
},
{
    id: 'jian',
    name: 'Цзянь',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Китайский прямой обоюдоострый меч. 1d8 колющего урона. Можно использовать Ловкость.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий', finesse: true },
    cost: 25, weight: 2
},
{
    id: 'dao',
    name: 'Дао',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Китайская изогнутая сабля. 1d8 рубящего урона. Крит на 19-20.',
    bonuses: { attack: 0, damage: '1d8', critRange: '19-20' },
    cost: 20, weight: 3
},
{
    id: 'tulwar',
    name: 'Тальвар',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Индийская изогнутая сабля. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 18, weight: 3
},
{
    id: 'shamshir',
    name: 'Шамшир',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Персидская сильно изогнутая сабля. 1d8 рубящего урона. +1 к атакам после движения.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 22, weight: 2
},
{
    id: 'kilij',
    name: 'Килич',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Турецкая сабля с расширением на конце. 1d8 рубящего урона. +1 к урону на скаку.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 20, weight: 3
},
{
    id: 'flyssa',
    name: 'Флисса',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Алжирский длинный кинжал-меч. 1d6 колющего урона. Лёгкое.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'колющий' },
    cost: 10, weight: 1.5
},
{
    id: 'yatagan',
    name: 'Ятаган',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Турецкий изогнутый клинок. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 15, weight: 2
},
{
    id: 'kaskara',
    name: 'Каскара',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Суданский прямой меч с крестовиной. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 12, weight: 3
},
{
    id: 'takoba',
    name: 'Такоба',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Меч туарегов пустыни. 1d8 рубящего урона. Не перегревается на солнце.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 15, weight: 2.5
},
{
    id: 'ida',
    name: 'Ида',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Африканский меч-серп. 1d6 рубящего урона. Можно использовать как инструмент.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 8, weight: 2
},
{
    id: 'kora',
    name: 'Кора',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Непальский меч с широким лезвием. 1d10 рубящего урона. Тяжёлое.',
    bonuses: { attack: 0, damage: '1d10' },
    cost: 20, weight: 7
},
{
    id: 'ram_dao',
    name: 'Рам-дао',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Непальский жертвенный меч. 1d10 рубящего урона. Крит на 19-20.',
    bonuses: { attack: 0, damage: '1d10', critRange: '19-20' },
    cost: 25, weight: 6
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — ТОПОРЫ, МОЛОТЫ, ДРОБЯЩЕЕ (20 предметов)
// ============================================================
{
    id: 'bearded_axe',
    name: 'Бородатый топор',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Скандинавский топор с длинной нижней частью лезвия. 1d8 рубящего урона. Можно стаскивать щиты.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 12, weight: 4
},
{
    id: 'francisca',
    name: 'Франциска',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Метательный топор франков. 1d6 рубящего урона. Дистанция 20/60 фт.',
    bonuses: { attack: 0, damage: '1d6', range: 20 },
    cost: 8, weight: 3
},
{
    id: 'tabar',
    name: 'Табар',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Индийский боевой топор с серповидным лезвием. 1d8 рубящего урона.',
    bonuses: { attack: 0, damage: '1d8' },
    cost: 15, weight: 5
},
{
    id: 'shepherds_axe',
    name: 'Топор пастуха',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Универсальный топор-посох. 1d6 рубящего урона (1d8 двумя руками).',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 5, weight: 4
},
{
    id: 'adze',
    name: 'Тесло',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Топор с поперечным лезвием. 1d6 рубящего урона. Пробивает деревянные щиты.',
    bonuses: { attack: 0, damage: '1d6' },
    cost: 5, weight: 4
},
{
    id: 'sledgehammer',
    name: 'Кузнечный молот',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Тяжёлый молот кузнеца. 2d6 дробящего урона. Тяжёлое, двуручное.',
    bonuses: { attack: 0, damage: '2d6', damageType: 'дробящий' },
    cost: 10, weight: 12
},
{
    id: 'horsemans_pick',
    name: 'Кавалерийский клевец',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Одноручный бронебойный молот. 1d8 колющего урона.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий' },
    cost: 12, weight: 4
},
{
    id: 'bec_de_corbin',
    name: 'Бек-де-корбин',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Древковый молот с клювом и шипом. 1d10 колющего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'колющий', reach: true },
    cost: 15, weight: 8
},
{
    id: 'lucerne_hammer',
    name: 'Люцернский молот',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Древковое оружие с молотом и пикой. 1d10 дробящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'дробящий', reach: true },
    cost: 15, weight: 8
},
{
    id: 'crows_beak',
    name: 'Вороний клюв',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Одноручный молот с острым клювом. 1d8 колющего урона. Игнорирует 1 КД щита.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий' },
    cost: 15, weight: 3
},
{
    id: 'spiked_club',
    name: 'Шипастая дубина',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Тяжёлая дубина с вбитыми гвоздями. 1d8 колющего урона.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий' },
    cost: 3, weight: 6
},
{
    id: 'kanabo',
    name: 'Канабо',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Японская железная палица с шипами. 1d10 дробящего урона. Тяжёлое, двуручное.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'дробящий' },
    cost: 20, weight: 15
},
{
    id: 'flanged_mace',
    name: 'Фланцевая булава',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Булава с рёбрами-фланцами. 1d6 дробящего урона. Лучше пробивает доспехи.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'дробящий' },
    cost: 8, weight: 5
},
{
    id: 'morningstar_flail',
    name: 'Утренняя звезда',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Шипастый шар на рукояти. 1d8 колющего и дробящего урона.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий' },
    cost: 10, weight: 5
},
{
    id: 'battle_flail',
    name: 'Боевой цеп',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Двуручный цеп для обмолота. 1d10 дробящего урона. Обходит щиты.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'дробящий', ignoreShields: true },
    cost: 10, weight: 10
},
{
    id: 'gada',
    name: 'Гада',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Индийская булава-шар на рукояти. 1d8 дробящего урона.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'дробящий' },
    cost: 12, weight: 6
},
{
    id: 'plancon',
    name: 'Плансон',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Древковая дубина с шипами. 1d10 колющего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'колющий', reach: true },
    cost: 8, weight: 7
},
{
    id: 'goedendag',
    name: 'Годендаг',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Фламандская дубина с шипом. 1d8 дробящего урона (1d10 двумя руками).',
    bonuses: { attack: 0, damage: '1d8', damageType: 'дробящий' },
    cost: 5, weight: 6
},
{
    id: 'claymore_hammer',
    name: 'Двуручный боевой молот',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Большой двуручный молот. 2d6 дробящего урона. Тяжёлое.',
    bonuses: { attack: 0, damage: '2d6', damageType: 'дробящий' },
    cost: 25, weight: 15
},
{
    id: 'skull_crusher',
    name: 'Череподробитель',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Тяжёлая булава с острыми гранями. 1d8 дробящего урона. Устрашающий вид.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'дробящий' },
    cost: 12, weight: 6
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — ДРЕВКОВОЕ (10 предметов)
// ============================================================
{
    id: 'partisan',
    name: 'Протазан',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Широкое копьё с боковыми выступами. 1d10 колющего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'колющий', reach: true },
    cost: 10, weight: 6
},
{
    id: 'glaive',
    name: 'Глефа',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Однолезвийный меч на длинном древке. 1d10 рубящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', reach: true },
    cost: 15, weight: 6
},
{
    id: 'voulge',
    name: 'Вульж',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Широкий клинок на древке с крюком. 1d10 рубящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', reach: true },
    cost: 12, weight: 7
},
{
    id: 'guisarme',
    name: 'Гизарма',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Крюк на древке для стаскивания всадников. 1d8 рубящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d8', reach: true, special: 'dismount' },
    cost: 10, weight: 7
},
{
    id: 'billhook',
    name: 'Билль',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Сельскохозяйственный крюк, переделанный в оружие. 1d8 рубящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d8', reach: true },
    cost: 5, weight: 6
},
{
    id: 'naginata',
    name: 'Нагината',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Японское древковое оружие с изогнутым клинком. 1d10 рубящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', reach: true },
    cost: 20, weight: 6
},
{
    id: 'yari',
    name: 'Яри',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Японское прямое копьё. 1d8 колющего урона (1d10 двумя руками). Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий', reach: true },
    cost: 8, weight: 5
},
{
    id: 'guandao',
    name: 'Гуань-дао',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Китайская алебарда с широким лезвием. 1d10 рубящего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d10', reach: true },
    cost: 18, weight: 7
},
{
    id: 'brandistock',
    name: 'Брандисток',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Копьё с выскакивающими боковыми лезвиями. 1d8 колющего урона. Досягаемость 10 фт.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий', reach: true },
    cost: 15, weight: 4
},
{
    id: 'awl_pike',
    name: 'Шило-пика',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Длинное тонкое копьё для пробивания доспехов. 1d10 колющего урона. Досягаемость 15 фт.',
    bonuses: { attack: 0, damage: '1d10', damageType: 'колющий', reach: true },
    cost: 12, weight: 8
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — МЕТАТЕЛЬНОЕ И ЭКЗОТИЧЕСКОЕ (10 предметов)
// ============================================================
{
    id: 'throwing_axe',
    name: 'Метательный топорик',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Маленький сбалансированный топор. 1d6 рубящего урона. Дистанция 20/60 фт.',
    bonuses: { attack: 0, damage: '1d6', range: 20 },
    cost: 5, weight: 2
},
{
    id: 'throwing_knife',
    name: 'Метательный нож',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Набор из 3 ножей. 1d4 колющего урона. Дистанция 20/60 фт.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'колющий', range: 20 },
    cost: 6, weight: 3
},
{
    id: 'shuriken',
    name: 'Сюрикены (набор)',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: '5 металлических звёздочек. 1d3 колющего урона. Дистанция 20/60 фт. Лёгкое.',
    bonuses: { attack: 0, damage: '1d3', damageType: 'колющий', range: 20 },
    cost: 5, weight: 2
},
{
    id: 'bolas',
    name: 'Болас',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Три шара на верёвках. Опутывает цель. Дистанция 20/60 фт.',
    bonuses: { attack: 0, damage: '0', range: 20, special: 'entangle' },
    cost: 5, weight: 3
},
{
    id: 'boomerang',
    name: 'Бумеранг',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Возвращается при промахе. 1d4 дробящего урона. Дистанция 30/60 фт.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий', range: 30 },
    cost: 8, weight: 1
},
{
    id: 'atlatl',
    name: 'Атлатль',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Копьеметалка. Удваивает дистанцию метательного копья.',
    bonuses: { attack: 0, damage: '1d6', range: 60 },
    cost: 5, weight: 2
},
{
    id: 'sling_staff',
    name: 'Праща-посох',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Праща на длинной рукояти. 1d6 дробящего урона. Дистанция 60/180 фт.',
    bonuses: { attack: 0, damage: '1d6', damageType: 'дробящий', range: 60 },
    cost: 8, weight: 4
},
{
    id: 'pellet_bow',
    name: 'Пулевой лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Лук, стреляющий глиняными пулями. 1d4 дробящего урона. Дистанция 40/120 фт.',
    bonuses: { attack: 0, damage: '1d4', damageType: 'дробящий', range: 40 },
    cost: 15, weight: 2
},
{
    id: 'harpoon',
    name: 'Гарпун',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Метательное копьё с верёвкой. 1d8 колющего урона. Дистанция 30/60 фт. Можно подтянуть цель.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'колющий', range: 30, special: 'pull' },
    cost: 10, weight: 4
},
{
    id: 'throwing_stars',
    name: 'Метательные звёзды (набор)',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: '8 острых металлических пластин. 1d3 рубящего урона. Дистанция 15/45 фт.',
    bonuses: { attack: 0, damage: '1d3', range: 15 },
    cost: 4, weight: 2
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — ЛУКИ И АРБАЛЕТЫ (10 предметов)
// ============================================================
{
    id: 'composite_shortbow',
    name: 'Композитный короткий лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Усиленный короткий лук. 1d6 колющего урона. Дистанция 100/400 фт.',
    bonuses: { attack: 0, damage: '1d6', range: 100 },
    cost: 50, weight: 2
},
{
    id: 'composite_longbow',
    name: 'Композитный длинный лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Мощный многослойный лук. 1d8 колющего урона. Дистанция 180/600 фт.',
    bonuses: { attack: 0, damage: '1d8', range: 180 },
    cost: 100, weight: 3
},
{
    id: 'greatbow',
    name: 'Большой лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Огромный лук, стреляющий тяжёлыми стрелами. 1d10 колющего урона. Требуется Сила 15.',
    bonuses: { attack: 0, damage: '1d10', range: 120 },
    cost: 150, weight: 5
},
{
    id: 'horse_bow',
    name: 'Конный лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Маленький лук для стрельбы с седла. 1d6 колющего урона. Нет помехи при стрельбе верхом.',
    bonuses: { attack: 0, damage: '1d6', range: 80 },
    cost: 30, weight: 1
},
{
    id: 'flatbow',
    name: 'Плоский лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Лук с плоскими плечами. 1d8 колющего урона. Дистанция 150/600 фт.',
    bonuses: { attack: 0, damage: '1d8', range: 150 },
    cost: 75, weight: 2
},
{
    id: 'recurve_bow',
    name: 'Рекурсивный лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Лук с загнутыми концами для большей силы. 1d8 колющего урона. Дистанция 160/600 фт.',
    bonuses: { attack: 0, damage: '1d8', range: 160 },
    cost: 90, weight: 2
},
{
    id: 'self_bow',
    name: 'Простой лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Лук из цельного куска дерева. 1d6 колющего урона. Дистанция 80/320 фт.',
    bonuses: { attack: 0, damage: '1d6', range: 80 },
    cost: 10, weight: 2
},
{
    id: 'double_bow',
    name: 'Двойной лук',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Два лука на одной рукояти. Можно выстрелить двумя стрелами сразу (помеха на обе атаки).',
    bonuses: { attack: 0, damage: '1d6', range: 60 },
    cost: 100, weight: 4
},
{
    id: 'pellet_crossbow',
    name: 'Пулевой арбалет',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Арбалет, стреляющий свинцовыми пулями. 1d8 дробящего урона. Дистанция 60/200 фт.',
    bonuses: { attack: 0, damage: '1d8', damageType: 'дробящий', range: 60 },
    cost: 60, weight: 6
},
{
    id: 'repeating_crossbow',
    name: 'Многозарядный арбалет',
    type: 'weapon',
    rarity: 'обычный',
    slot: 'mainhand',
    description: 'Арбалет с магазином на 5 болтов. 1d8 колющего урона. Можно стрелять без перезарядки.',
    bonuses: { attack: 0, damage: '1d8', range: 80 },
    cost: 100, weight: 6
},

// ============================================================
// ОБЫЧНОЕ ОРУЖИЕ — ОГНЕСТРЕЛЬНОЕ (10 предметов)
// ============================================================
{
    id: 'pistol',
    name: 'Пистоль',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Одноручное огнестрельное оружие. 1d10 колющего урона. Дистанция 30/90 фт. Перезарядка.',
    bonuses: { attack: 0, damage: '1d10', range: 30 },
    cost: 250, weight: 3
},
{
    id: 'musket',
    name: 'Мушкет',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Двуручное огнестрельное оружие. 1d12 колющего урона. Дистанция 40/120 фт. Перезарядка.',
    bonuses: { attack: 0, damage: '1d12', range: 40 },
    cost: 500, weight: 10
},
{
    id: 'blunderbuss',
    name: 'Мушкетон',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Широкоствольное огнестрельное оружие. Конус 15 фт, 1d8 урона. Перезарядка.',
    bonuses: { attack: 0, damage: '1d8', range: 15 },
    cost: 300, weight: 8
},
{
    id: 'pepperbox',
    name: 'Перечница',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Шестиствольный пистоль. 6 выстрелов без перезарядки. 1d8 колющего урона. Дистанция 20/60 фт.',
    bonuses: { attack: 0, damage: '1d8', range: 20 },
    cost: 400, weight: 5
},
{
    id: 'dragon_pistol',
    name: 'Драконий пистоль',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Пистоль с расширяющимся стволом. Конус 10 фт, 1d6 урона огнём. Перезарядка.',
    bonuses: { attack: 0, damage: '1d6', range: 10, fireDamage: '1d6' },
    cost: 350, weight: 4
},
{
    id: 'rifle',
    name: 'Винтовка',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Нарезное огнестрельное оружие. 1d12 колющего урона. Дистанция 100/300 фт. Перезарядка.',
    bonuses: { attack: 0, damage: '1d12', range: 100 },
    cost: 800, weight: 8
},
{
    id: 'palm_pistol',
    name: 'Ладонный пистоль',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Маленький скрытый пистоль. 1d6 колющего урона. Дистанция 10/30 фт. Легко спрятать.',
    bonuses: { attack: 0, damage: '1d6', range: 10 },
    cost: 300, weight: 1
},
{
    id: 'duckfoot_pistol',
    name: 'Пистоль "Утиная лапа"',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Четырёхствольный пистоль веером. Атакует 3 цели в конусе 15 фт. 1d6 урона каждой.',
    bonuses: { attack: 0, damage: '1d6', range: 15 },
    cost: 450, weight: 5
},
{
    id: 'arquebus',
    name: 'Аркебуза',
    type: 'weapon',
    rarity: 'необычный',
    slot: 'mainhand',
    description: 'Тяжёлое фитильное ружьё. 1d12 колющего урона. Дистанция 50/150 фт. Требуется сошка.',
    bonuses: { attack: 0, damage: '1d12', range: 50 },
    cost: 350, weight: 15
},
{
    id: 'flame_cannon',
    name: 'Огнемёт',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Тяжёлое оружие, извергающее пламя. Конус 20 фт, 3d6 урона огнём. 3 заряда, перезарядка.',
    bonuses: { attack: 0, damage: '3d6', range: 20, fireDamage: '3d6' },
    cost: 1000, weight: 20
},

// ============================================================
// ЗАЧАРОВАННОЕ ОРУЖИЕ — РЕДКОЕ (10 предметов)
// ============================================================
{
    id: 'flame_tongue_scimitar',
    name: 'Пламенный скимитар',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Горит магическим огнём. +1 к атаке, добавляет 2d6 урона огнём при попадании.',
    bonuses: { attack: 1, damage: '1d6+1', fireDamage: '2d6' },
    cost: 3000, weight: 3
},
{
    id: 'ice_brand_warhammer',
    name: 'Ледяной боевой молот',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Покрыт инеем. +1 к атаке, добавляет 1d6 урона холодом. Сопротивление огню.',
    bonuses: { attack: 1, damage: '1d8+1', damageType: 'дробящий', coldDamage: '1d6', fireResist: true },
    cost: 3500, weight: 4
},
{
    id: 'thunder_greatsword',
    name: 'Громовой двуручный меч',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Издаёт гром при ударе. +1 к атаке, добавляет 1d6 урона звуком.',
    bonuses: { attack: 1, damage: '2d6+1', thunderDamage: '1d6' },
    cost: 3500, weight: 6
},
{
    id: 'acidic_rapier',
    name: 'Кислотная рапира',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'С лезвия капает кислота. +1 к атаке, добавляет 1d6 урона кислотой.',
    bonuses: { attack: 1, damage: '1d8+1', acidDamage: '1d6', finesse: true },
    cost: 3000, weight: 2
},
{
    id: 'psychic_dagger',
    name: 'Психический кинжал',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Атакует разум. +1 к атаке, добавляет 1d6 психического урона.',
    bonuses: { attack: 1, damage: '1d4+1', psychicDamage: '1d6' },
    cost: 2800, weight: 1
},
{
    id: 'radiant_morningstar',
    name: 'Сияющий моргенштерн',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Излучает свет. +1 к атаке, добавляет 1d6 урона излучением. Против нежити — дополнительно 1d6.',
    bonuses: { attack: 1, damage: '1d8+1', damageType: 'колющий', radiantDamage: '1d6' },
    cost: 3200, weight: 4
},
{
    id: 'necrotic_scythe',
    name: 'Некротическая коса',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Вытягивает жизнь. +1 к атаке, добавляет 1d6 некротического урона. Лечит на половину нанесённого урона.',
    bonuses: { attack: 1, damage: '2d4+1', necroticDamage: '1d6' },
    cost: 3500, weight: 5
},
{
    id: 'shocking_whip',
    name: 'Электрический кнут',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Потрескивает электричеством. +1 к атаке, добавляет 1d6 урона электричеством. Досягаемость 15 фт.',
    bonuses: { attack: 1, damage: '1d4+1', lightningDamage: '1d6', reach: true },
    cost: 3000, weight: 3
},
{
    id: 'force_glaive',
    name: 'Силовая глефа',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Окружена силовым полем. +1 к атаке, добавляет 1d6 урона силовым полем. Досягаемость 10 фт.',
    bonuses: { attack: 1, damage: '1d10+1', forceDamage: '1d6', reach: true },
    cost: 3500, weight: 6
},
{
    id: 'wind_crossbow',
    name: 'Ветряной арбалет',
    type: 'weapon',
    rarity: 'редкий',
    slot: 'mainhand',
    description: 'Стреляет с силой ветра. +1 к атаке, отбрасывает цель на 5 фт. Дистанция 120/480 фт.',
    bonuses: { attack: 1, damage: '1d10+1', range: 120, special: 'push' },
    cost: 3500, weight: 5
},

// ============================================================
// ЗАЧАРОВАННОЕ ОРУЖИЕ — ОЧЕНЬ РЕДКОЕ (10 предметов)
// ============================================================
{
    id: 'inferno_blade',
    name: 'Клинок инферно',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: 'Пылает адским огнём. +2 к атаке, добавляет 3d6 урона огнём. Игнорирует сопротивление к огню.',
    bonuses: { attack: 2, damage: '1d8+2', fireDamage: '3d6' },
    cost: 8000, weight: 3
},
{
    id: 'frostmourne_greatsword',
    name: 'Ледяной траур',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке, 3d6 урона холодом. При крите замораживает цель (спасбросок Телосложения Сл 16).',
    bonuses: { attack: 2, damage: '2d6+2', coldDamage: '3d6' },
    cost: 9000, weight: 6
},
{
    id: 'storm_lance',
    name: 'Штормовое копьё',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. При броске превращается в молнию (линия 5x120 фт, 6d6 урона электричеством).',
    bonuses: { attack: 2, damage: '1d6+2', range: 30, lightningDamage: '6d6' },
    cost: 7500, weight: 3
},
{
    id: 'vampiric_blade',
    name: 'Вампирский клинок',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. Половина нанесённого урона восстанавливает хиты владельца.',
    bonuses: { attack: 2, damage: '1d8+2', lifesteal: 'half' },
    cost: 10000, weight: 3
},
{
    id: 'earthshaker_maul',
    name: 'Землетряс',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. При ударе по земле создаёт ударную волну (все в 10 фт — спасбросок Силы Сл 15 или падают).',
    bonuses: { attack: 2, damage: '2d6+2', damageType: 'дробящий', str: 2 },
    cost: 8000, weight: 12
},
{
    id: 'phoenix_bow',
    name: 'Лук феникса',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. Каждая стрела воспламеняется, добавляя 2d6 урона огнём.',
    bonuses: { attack: 2, damage: '1d8+2', fireDamage: '2d6', range: 180 },
    cost: 9000, weight: 2
},
{
    id: 'soul_reaper',
    name: 'Жнец душ',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. При убийстве заключает душу в клинок (до 5 душ). Каждая душа даёт +1 к урону.',
    bonuses: { attack: 2, damage: '2d4+2', necroticDamage: '2d6' },
    cost: 12000, weight: 4
},
{
    id: 'titan_slayer',
    name: 'Убийца титанов',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. Против существ размера Большой и больше добавляет 3d6 урона.',
    bonuses: { attack: 2, damage: '1d12+2', str: 1 },
    cost: 8500, weight: 7
},
{
    id: 'arcanist_staff',
    name: 'Посох арканиста',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке заклинаниями. Восстанавливает 1 ячейку 3-го уровня (1 раз в день).',
    bonuses: { attack: 2, damage: '1d6+2', int: 2 },
    cost: 9000, weight: 4
},
{
    id: 'divine_mace',
    name: 'Божественная булава',
    type: 'weapon',
    rarity: 'очень редкий',
    slot: 'mainhand',
    description: '+2 к атаке. Нежить получает дополнительные 4d6 урона излучением.',
    bonuses: { attack: 2, damage: '1d6+2', damageType: 'дробящий', wis: 2 },
    cost: 8000, weight: 4
},

// ============================================================
// ЛЕГЕНДАРНОЕ ОРУЖИЕ (10 предметов)
// ============================================================
{
    id: 'excalibur',
    name: 'Экскалибур',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Меч королей. +3 к атаке и урону. Излучает свет 30 фт. Иммунитет к страху для союзников в 30 фт.',
    bonuses: { attack: 3, damage: '1d8+3', cha: 3 },
    cost: 50000, weight: 3
},
{
    id: 'mjolnir',
    name: 'Мьёльнир',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Молот бога грома. +3 к атаке, 4d6 урона электричеством. Возвращается после броска. Требуется Сила 20.',
    bonuses: { attack: 3, damage: '1d8+3', damageType: 'дробящий', lightningDamage: '4d6', str: 3 },
    cost: 60000, weight: 8
},
{
    id: 'gungnir',
    name: 'Гунгнир',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Копьё, которое всегда попадает в цель. +3 к атаке, игнорирует укрытие и невидимость.',
    bonuses: { attack: 3, damage: '1d8+3', range: 60, wis: 2 },
    cost: 55000, weight: 4
},
{
    id: 'masamune',
    name: 'Масамунэ',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Совершенная катана. +3 к атаке, критический удар на 17-20, утроенный критический урон.',
    bonuses: { attack: 3, damage: '1d10+3', critRange: '17-20', dex: 3 },
    cost: 70000, weight: 3
},
{
    id: 'soul_edge',
    name: 'Клинок душ',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Поглощает души убитых врагов. +3 к атаке, каждая душа даёт +1 к урону (макс. 10).',
    bonuses: { attack: 3, damage: '2d6+3', necroticDamage: '3d6', cha: 2 },
    cost: 65000, weight: 5
},
{
    id: 'bow_of_artemis',
    name: 'Лук Артемиды',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Божественный лук. +3 к атаке, стрелы сами ищут цель (игнорируют укрытие). Бесконечные стрелы.',
    bonuses: { attack: 3, damage: '1d8+3', range: 300, dex: 3, wis: 2 },
    cost: 60000, weight: 2
},
{
    id: 'staff_of_the_archmage',
    name: 'Посох архимага',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: '+3 к атаке заклинаниями. Содержит 50 зарядов. Можно поглощать вражеские заклинания.',
    bonuses: { attack: 3, damage: '1d6+3', int: 3, cha: 3 },
    cost: 75000, weight: 4
},
{
    id: 'twin_blades_of_chaos',
    name: 'Парные клинки хаоса',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Два меча хаоса. +3 к атаке каждым. При крите создают взрыв хаоса (4d6 случайного урона в 10 фт).',
    bonuses: { attack: 3, damage: '1d8+3', str: 2, dex: 2 },
    cost: 70000, weight: 4
},
{
    id: 'world_breaker',
    name: 'Разрушитель миров',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Огромный двуручный топор. +3 к атаке. При убийстве создаёт ударную волну (все в 15 фт — 3d10 урона).',
    bonuses: { attack: 3, damage: '2d12+3', str: 4 },
    cost: 80000, weight: 15
},
{
    id: 'dawnbreaker',
    name: 'Рассветный клинок',
    type: 'weapon',
    rarity: 'легендарный',
    slot: 'mainhand',
    description: 'Создан для уничтожения нежити. +3 к атаке. Нежить получает 6d6 урона излучением. При убийстве нежити — взрыв света.',
    bonuses: { attack: 3, damage: '1d8+3', radiantDamage: '6d6', wis: 3 },
    cost: 65000, weight: 3
},

// ============================================================
// МАСШТАБИРУЕМОЕ ОРУЖИЕ — ФИНАЛЬНЫЕ (10 предметов)
// ============================================================
{
    id: 'scaling_dragon_blade',
    name: 'Пробуждающийся драконий меч',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака. Уровень 6-10: +2 атаки, 1d6 огня. Уровень 11-15: +3 атаки, 2d6 огня. Уровень 16+: +4 атаки, 3d6 огня, сопротивление огню.',
    bonuses: { attack: 1, damage: '1d8+1', fireDamage: '1d6' },
    cost: 15000, weight: 3,
    scaling: true
},
{
    id: 'scaling_storm_blade',
    name: 'Пробуждающийся штормовой клинок',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака. Уровень 6-10: +2 атаки, 1d6 электричества. Уровень 11+: +3 атаки, 2d6 электричества, иммунитет к электричеству.',
    bonuses: { attack: 1, damage: '1d8+1', lightningDamage: '1d6' },
    cost: 15000, weight: 3,
    scaling: true
},
{
    id: 'scaling_shadow_blade',
    name: 'Пробуждающийся теневой клинок',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака. Уровень 6-10: +2 атаки, 1d6 некроза. Уровень 11+: +3 атаки, 2d6 некроза, невидимость в тени.',
    bonuses: { attack: 1, damage: '1d8+1', necroticDamage: '1d6' },
    cost: 15000, weight: 2,
    scaling: true
},
{
    id: 'scaling_radiant_blade',
    name: 'Пробуждающийся сияющий клинок',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака. Уровень 6-10: +2 атаки, 1d6 излучения. Уровень 11+: +3 атаки, 2d6 излучения, иммунитет к слепоте.',
    bonuses: { attack: 1, damage: '1d8+1', radiantDamage: '1d6' },
    cost: 15000, weight: 3,
    scaling: true
},
{
    id: 'scaling_bow_of_legends',
    name: 'Пробуждающийся лук легенд',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака, дальность 150. Уровень 6-10: +2 атаки, 1d6 силы. Уровень 11+: +3 атаки, 2d6 силы, бесконечные стрелы.',
    bonuses: { attack: 1, damage: '1d8+1', range: 150 },
    cost: 15000, weight: 2,
    scaling: true
},
{
    id: 'scaling_staff_of_wisdom',
    name: 'Пробуждающийся посох мудрости',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака заклинаниями. Уровень 6-10: +2 атаки, +1 Интеллект. Уровень 11+: +3 атаки, +2 Интеллект.',
    bonuses: { attack: 1, damage: '1d6+1', int: 1 },
    cost: 15000, weight: 4,
    scaling: true
},
{
    id: 'scaling_hammer_of_might',
    name: 'Пробуждающийся молот мощи',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака. Уровень 6-10: +2 атаки, +1 Сила. Уровень 11+: +3 атаки, +2 Силы, оглушение при крите.',
    bonuses: { attack: 1, damage: '1d8+1', damageType: 'дробящий', str: 1 },
    cost: 15000, weight: 5,
    scaling: true
},
{
    id: 'scaling_axe_of_fury',
    name: 'Пробуждающийся топор ярости',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака. Уровень 6-10: +2 атаки, крит на 19-20. Уровень 11+: +3 атаки, крит на 18-20, +1 Телосложение.',
    bonuses: { attack: 1, damage: '1d12+1', critRange: '19-20' },
    cost: 15000, weight: 6,
    scaling: true
},
{
    id: 'scaling_spear_of_the_sentinel',
    name: 'Пробуждающееся копьё стража',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака, досягаемость 10 фт. Уровень 6-10: +2 атаки, +1 Мудрость. Уровень 11+: +3 атаки, +2 Мудрости.',
    bonuses: { attack: 1, damage: '1d8+1', reach: true, wis: 1 },
    cost: 15000, weight: 4,
    scaling: true
},
{
    id: 'scaling_crossbow_of_precision',
    name: 'Пробуждающийся арбалет точности',
    type: 'weapon',
    rarity: 'масштабирующийся',
    slot: 'mainhand',
    description: 'Уровень 1-5: +1 атака, дальность 100. Уровень 6-10: +2 атаки, игнорирует половинное укрытие. Уровень 11+: +3 атаки, игнорирует всё укрытие.',
    bonuses: { attack: 1, damage: '1d10+1', range: 100 },
    cost: 15000, weight: 5,
    scaling: true
},
// 100 New Equipment Items (Armor & Artifacts)
    // ============================================================
    // COMMON (обычный) — 10 items
    // ============================================================
    {
      id: 'travelers_cloak',
      name: 'Плащ путешественника',
      type: 'artifact',
      rarity: 'обычный',
      slot: 'back',
      description: 'Прочный плащ из плотной ткани, зачарованный для защиты от непогоды. Владелец не страдает от дождя, ветра и умеренного холода.',
      bonuses: { coldResist: true },
      cost: 15,
      weight: 2
    },
    {
      id: 'iron_buckler',
      name: 'Железный кулачный щит',
      type: 'armor',
      rarity: 'обычный',
      slot: 'offhand',
      description: 'Небольшой круглый щит, прикреплённый к предплечью кожаными ремнями. Позволяет использовать руку для простых действий.',
      bonuses: { ac: 1 },
      cost: 8,
      weight: 4
    },
    {
      id: 'quilted_gambeson',
      name: 'Стёганый гамбезон',
      type: 'armor',
      rarity: 'обычный',
      slot: 'body',
      description: 'Толстый стёганый доспех из нескольких слоёв льна, способный смягчить удар дубины или стрелы. Излюбленная защита ополченцев.',
      bonuses: { ac: 1 },
      cost: 4,
      weight: 7
    },
    {
      id: 'copper_ring_of_warmth',
      name: 'Медное кольцо тепла',
      type: 'artifact',
      rarity: 'обычный',
      slot: 'ring',
      description: 'Простое медное кольцо с руной огня. Поддерживает комфортную температуру тела даже в лёгкий мороз.',
      bonuses: { coldResist: true },
      cost: 10,
      weight: 0
    },
    {
      id: 'wooden_shield_of_thorns',
      name: 'Деревянный щит шипов',
      type: 'armor',
      rarity: 'обычный',
      slot: 'offhand',
      description: 'Круглый деревянный щит, усеянный железными шипами. При блокировании наносит 1 урон атакующему в ближнем бою.',
      bonuses: { ac: 2 },
      cost: 12,
      weight: 6
    },
    {
      id: 'rope_belt_of_climbing',
      name: 'Верёвочный пояс скалолаза',
      type: 'artifact',
      rarity: 'обычный',
      slot: 'waist',
      description: 'Сплетённый из магической верёвки пояс. Даёт преимущество на проверки Атлетики при лазании.',
      bonuses: { str: 1 },
      cost: 20,
      weight: 1
    },
    {
      id: 'iron_shod_boots',
      name: 'Подкованные сапоги',
      type: 'artifact',
      rarity: 'обычный',
      slot: 'feet',
      description: 'Тяжёлые сапоги с металлическими набойками. Предотвращают скольжение на льду и мокрых поверхностях.',
      bonuses: { speed: 0 },
      cost: 5,
      weight: 3
    },
    {
      id: 'padded_coif',
      name: 'Стёганый подшлемник',
      type: 'armor',
      rarity: 'обычный',
      slot: 'head',
      description: 'Мягкий стёганый капюшон, надеваемый под шлем или самостоятельно. Смягчает удары по голове.',
      bonuses: { ac: 0, con: 1 },
      cost: 3,
      weight: 1
    },
    {
      id: 'charm_of_minor_luck',
      name: 'Оберег малой удачи',
      type: 'artifact',
      rarity: 'обычный',
      slot: 'neck',
      description: 'Серебряная монетка на кожаном шнурке. Раз в день позволяет перебросить проваленный спасбросок с бонусом +1.',
      bonuses: { savingThrows: 1 },
      cost: 25,
      weight: 0
    },
    {
      id: 'leather_bracers_of_archery',
      name: 'Кожаные наручи лучника',
      type: 'artifact',
      rarity: 'обычный',
      slot: 'hands',
      description: 'Наручи из жёсткой кожи, защищающие предплечья от удара тетивы. Дают +1 к атаке дальнобойным оружием.',
      bonuses: { attack: 1 },
      cost: 18,
      weight: 1
    },

    // ============================================================
    // UNCOMMON (необычный) — 20 items
    // ============================================================
    {
      id: 'mithril_chain_shirt',
      name: 'Мифриловая кольчуга',
      type: 'armor',
      rarity: 'необычный',
      slot: 'body',
      description: 'Лёгкая кольчуга из мифрила, почти невесомая. Можно носить под одеждой, не создаёт помех Скрытности.',
      bonuses: { ac: 3, stealth: 1 },
      cost: 800,
      weight: 8
    },
    {
      id: 'cloak_of_elvenkind',
      name: 'Плащ эльфийского рода',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'back',
      description: 'Тонкий серо-зелёный плащ, сотканный эльфами Сокрытого Леса. Его цвет меняется, подстраиваясь под окружение, давая преимущество на проверки Скрытности.',
      bonuses: { stealth: 2 },
      cost: 500,
      weight: 1
    },
    {
      id: 'boots_of_elvenkind',
      name: 'Сапоги эльфийского рода',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'feet',
      description: 'Мягкие сапоги из оленьей кожи с эльфийским зачарованием. Шаги владельца не производят звука.',
      bonuses: { stealth: 2 },
      cost: 450,
      weight: 1
    },
    {
      id: 'gauntlets_of_ogre_power',
      name: 'Рукавицы огрской силы',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'hands',
      description: 'Грубые кожаные рукавицы, усиленные магией великанов. Устанавливают Силу владельца на 19.',
      bonuses: { str: 4 },
      cost: 1000,
      weight: 2
    },
    {
      id: 'ring_of_swimming',
      name: 'Кольцо плавания',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'ring',
      description: 'Кольцо из полированного аквамарина в серебряной оправе. Даёт скорость плавания, равную скорости ходьбы.',
      bonuses: { swim: true },
      cost: 400,
      weight: 0
    },
    {
      id: 'amulet_of_health',
      name: 'Амулет здоровья',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'neck',
      description: 'Золотой медальон с рубиновым сердцем внутри. Устанавливает Телосложение владельца на 19.',
      bonuses: { con: 4 },
      cost: 1200,
      weight: 1
    },
    {
      id: 'sentinel_shield',
      name: 'Щит стража',
      type: 'armor',
      rarity: 'необычный',
      slot: 'offhand',
      description: 'Стальной щит с выгравированным глазом, окружённым рунами бдительности. Даёт преимущество на проверки Восприятия и инициативу.',
      bonuses: { ac: 2, wis: 1 },
      cost: 600,
      weight: 6
    },
    {
      id: 'boots_of_striding',
      name: 'Сапоги широкого шага',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'feet',
      description: 'Высокие сапоги из бычьей кожи с рунами ветра. Скорость ходьбы не может быть снижена ниже 30 футов.',
      bonuses: { speed: 5 },
      cost: 500,
      weight: 2
    },
    {
      id: 'adamantine_breastplate',
      name: 'Адамантиновая кираса',
      type: 'armor',
      rarity: 'необычный',
      slot: 'body',
      description: 'Кираса из редчайшего адамантина. Критические попадания по владельцу считаются обычными попаданиями.',
      bonuses: { ac: 4 },
      cost: 1500,
      weight: 20
    },
    {
      id: 'ring_of_mind_shielding',
      name: 'Кольцо щита разума',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'ring',
      description: 'Платиновое кольцо с сапфиром, мерцающим внутренним светом. Защищает мысли владельца от чтения и обнаружения магией.',
      bonuses: { antiDivination: true },
      cost: 700,
      weight: 0
    },
    {
      id: 'cloak_of_protection',
      name: 'Плащ защиты',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'back',
      description: 'Плащ из ткани, пропитанной магией Аберации. Даёт +1 к КД и спасброскам.',
      bonuses: { ac: 1, savingThrows: 1 },
      cost: 600,
      weight: 1
    },
    {
      id: 'bracers_of_defense',
      name: 'Наручи защиты',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'hands',
      description: 'Серебряные наручи с защитными рунами. Когда на владельце нет доспехов и щита, дают +2 к КД.',
      bonuses: { ac: 2 },
      cost: 700,
      weight: 1
    },
    {
      id: 'helm_of_comprehending',
      name: 'Шлем понимания языков',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'head',
      description: 'Бронзовый обруч с кристаллом на лбу. Позволяет понимать любой разговорный язык, пока надет.',
      bonuses: { int: 1 },
      cost: 500,
      weight: 1
    },
    {
      id: 'belt_of_dwarvenkind',
      name: 'Пояс дварфийского рода',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'waist',
      description: 'Широкий кожаный пояс с адамантиновой пряжкой. Даёт +2 к Телосложению, преимущество против яда, 60 футов тёмного зрения.',
      bonuses: { con: 2 },
      cost: 900,
      weight: 2
    },
    {
      id: 'periapt_of_wound_closure',
      name: 'Амулет заживления ран',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'neck',
      description: 'Овальный камень цвета крови на золотой цепочке. Владелец стабилизируется автоматически при 0 хитов, а кости хитов восстанавливают максимум.',
      bonuses: { autoStabilize: true, healBonus: 1 },
      cost: 800,
      weight: 0
    },
    {
      id: 'winged_boots',
      name: 'Крылатые сапоги',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'feet',
      description: 'Сапоги с крылышками на щиколотках, оживающими по команде. Дают скорость полёта, равную скорости ходьбы, на 4 часа в день.',
      bonuses: { fly: true },
      cost: 1500,
      weight: 1
    },
    {
      id: 'ring_of_warmth',
      name: 'Кольцо тепла',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'ring',
      description: 'Золотое кольцо с огненным опалом. Даёт сопротивление урону холодом и комфорт при температуре до -50°.',
      bonuses: { coldResist: true },
      cost: 450,
      weight: 0
    },
    {
      id: 'scale_mail_of_the_deep',
      name: 'Чешуйчатый доспех глубин',
      type: 'armor',
      rarity: 'необычный',
      slot: 'body',
      description: 'Доспех из чешуи морского змея, переливающийся синим и зелёным. Даёт скорость плавания 30 футов и не мешает в воде.',
      bonuses: { ac: 4, swim: true },
      cost: 1000,
      weight: 40
    },
    {
      id: 'headband_of_intellect',
      name: 'Повязка интеллекта',
      type: 'artifact',
      rarity: 'необычный',
      slot: 'head',
      description: 'Серебряная повязка на лоб с руной мудрости. Устанавливает Интеллект владельца на 19.',
      bonuses: { int: 4 },
      cost: 1000,
      weight: 0
    },
    {
      id: 'half_plate_of_gleaming',
      name: 'Сияющие полулаты',
      type: 'armor',
      rarity: 'необычный',
      slot: 'body',
      description: 'Полулаты из полированной стали, никогда не тускнеющие. Магия не позволяет грязи и крови оставаться на их поверхности.',
      bonuses: { ac: 5 },
      cost: 900,
      weight: 40
    },


    // ============================================================
    // RARE (редкий) — 30 items
    // ============================================================
    {
      id: 'armor_of_resistance_fire',
      name: 'Доспех сопротивления огню',
      type: 'armor',
      rarity: 'редкий',
      slot: 'body',
      description: 'Латный доспех, закалённый в жерле вулкана. Чешуйки мерцают багровым светом. Даёт сопротивление урону огнём.',
      bonuses: { ac: 5, fireResist: true },
      cost: 3000,
      weight: 45
    },
    {
      id: 'cloak_of_displacement',
      name: 'Плащ смещения',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'back',
      description: 'Плащ из шкуры мерцающего зверя. Создаёт иллюзию, смещающую образ владельца на фут в сторону. Атаки по нему совершаются с помехой.',
      bonuses: { ac: 2, stealth: 1 },
      cost: 5000,
      weight: 1
    },
    {
      id: 'ring_of_protection',
      name: 'Кольцо защиты',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'ring',
      description: 'Платиновое кольцо с рунами Аберации, мерцающими в полумраке. Даёт +1 к КД и всем спасброскам.',
      bonuses: { ac: 1, savingThrows: 1 },
      cost: 3500,
      weight: 0
    },
    {
      id: 'mantle_of_spell_resistance',
      name: 'Мантия сопротивления магии',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'back',
      description: 'Тяжёлая мантия из фиолетового бархата, прошитая серебряными нитями. Даёт преимущество на спасброски от заклинаний.',
      bonuses: { savingThrows: 2 },
      cost: 6000,
      weight: 2
    },
    {
      id: 'belt_of_hill_giant',
      name: 'Пояс холмового великана',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'waist',
      description: 'Грубый пояс из кожи великана, скреплённый костяной пряжкой. Устанавливает Силу владельца на 21.',
      bonuses: { str: 5 },
      cost: 4000,
      weight: 3
    },
    {
      id: 'flame_tongue_shield',
      name: 'Щит пламенного языка',
      type: 'armor',
      rarity: 'редкий',
      slot: 'offhand',
      description: 'Стальной щит с огненным элементалем, заключённым в его сердцевине. По команде вспыхивает пламенем, нанося 1d6 урона огнём атакующим.',
      bonuses: { ac: 2, fireResist: true },
      cost: 4500,
      weight: 6
    },
    {
      id: 'amulet_of_proof_against_detection',
      name: 'Амулет защиты от обнаружения',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'neck',
      description: 'Чёрный обсидиановый медальон, поглощающий свет. Владелец невидим для магии школы Прорицания и не может быть нацелен ею.',
      bonuses: { antiDivination: true },
      cost: 3000,
      weight: 1
    },
    {
      id: 'elven_chain',
      name: 'Эльфийская кольчуга',
      type: 'armor',
      rarity: 'редкий',
      slot: 'body',
      description: 'Невесомая кольчуга из мифрилового сплава, выкованная лучшими эльфийскими мастерами. Считается лёгким доспехом, КД 13 + мод. Ловкости.',
      bonuses: { ac: 3, stealth: 2 },
      cost: 4000,
      weight: 10
    },
    {
      id: 'cape_of_the_mountebank',
      name: 'Накидка шарлатана',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'back',
      description: 'Пурпурная накидка с подкладкой из дыма. Раз в день позволяет произнести «Уход в иное измерение», телепортируясь на расстояние до 500 футов.',
      bonuses: { cha: 1 },
      cost: 3500,
      weight: 1
    },
    {
      id: 'ring_of_evasion',
      name: 'Кольцо уклонения',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'ring',
      description: 'Тонкое мифриловое кольцо, пульсирующее при опасности. 3 раза в день при провале спасброска Ловкости можно превратить его в успех.',
      bonuses: { dex: 2, savingThrows: 1 },
      cost: 5000,
      weight: 0
    },
    {
      id: 'helm_of_teleportation',
      name: 'Шлем телепортации',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'head',
      description: 'Хрустальный шлем с мерцающими гранями. 3 раза в день позволяет произнести заклинание «Телепортация» без компонентов.',
      bonuses: { int: 2 },
      cost: 6000,
      weight: 2
    },
    {
      id: 'boots_of_speed',
      name: 'Сапоги скорости',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'feet',
      description: 'Сапоги из кожи дисплейсер-бист, подбитые пухом пегаса. По команде удваивают скорость ходьбы на 10 минут (перезарядка после отдыха).',
      bonuses: { speed: 15 },
      cost: 4000,
      weight: 1
    },
    {
      id: 'necklace_of_adaptation',
      name: 'Ожерелье адаптации',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'neck',
      description: 'Цепочка из переплетённого серебра и золота с кулоном в форме лёгкого. Владелец может дышать в любой среде, включая вакуум и подводное пространство.',
      bonuses: { breatheAnywhere: true, waterBreathing: true },
      cost: 3500,
      weight: 0
    },
    {
      id: 'animated_shield',
      name: 'Оживлённый щит',
      type: 'armor',
      rarity: 'редкий',
      slot: 'offhand',
      description: 'Стальной щит с руной анимации. По команде взлетает и защищает владельца самостоятельно, освобождая обе руки.',
      bonuses: { ac: 2 },
      cost: 5000,
      weight: 6
    },
    {
      id: 'gloves_of_missile_snaring',
      name: 'Перчатки ловли снарядов',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'hands',
      description: 'Перчатки из кожи мантикоры с рунами притяжения. Позволяют ловить летящие снаряды, уменьшая урон на 1d10 + мод. Ловкости.',
      bonuses: { dex: 1, ac: 1 },
      cost: 3000,
      weight: 1
    },
    {
      id: 'dragon_scale_mail',
      name: 'Доспех из драконьей чешуи',
      type: 'armor',
      rarity: 'редкий',
      slot: 'body',
      description: 'Чешуйчатый доспех из настоящей красной драконьей чешуи. Даёт сопротивление огню и преимущество на спасброски от Испуга драконов.',
      bonuses: { ac: 4, fireResist: true, savingThrows: 1 },
      cost: 7000,
      weight: 45
    },
    {
      id: 'ring_of_free_action',
      name: 'Кольцо свободного действия',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'ring',
      description: 'Мифриловое кольцо с вечно вращающимся механизмом внутри. Владелец не может быть парализован или обездвижен магией.',
      bonuses: { speed: 5, savingThrows: 1 },
      cost: 4500,
      weight: 0
    },
    {
      id: 'ioun_stone_of_protection',
      name: 'Камень Иоун защиты',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'head',
      description: 'Пыльно-розовый призматический камень, вращающийся вокруг головы владельца. Даёт +1 к КД.',
      bonuses: { ac: 1 },
      cost: 3500,
      weight: 0
    },
    {
      id: 'crown_of_the_winter_court',
      name: 'Корона Зимнего Двора',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'head',
      description: 'Ледяная корона, не тающая даже в жаре. Дарует сопротивление холоду и возможность раз в день создать ледяную стену.',
      bonuses: { coldResist: true, cha: 2 },
      cost: 5500,
      weight: 1
    },
    {
      id: 'girdle_of_stone_giant',
      name: 'Кушак каменного великана',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'waist',
      description: 'Пояс, сплетённый из каменных волокон, добытых в Подземье. Устанавливает Силу владельца на 23.',
      bonuses: { str: 6 },
      cost: 6000,
      weight: 4
    },
    {
      id: 'mask_of_many_faces',
      name: 'Маска множества лиц',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'head',
      description: 'Белая фарфоровая маска без черт лица. По желанию владельца принимает любой облик, позволяя менять внешность по команде.',
      bonuses: { cha: 2 },
      cost: 4000,
      weight: 1
    },
    {
      id: 'boots_of_spider_climbing',
      name: 'Сапоги паучьего восхождения',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'feet',
      description: 'Чёрные бархатные сапоги с подошвами из паутины фазовых пауков. Позволяют ходить по стенам и потолкам без проверок.',
      bonuses: { spiderClimb: true },
      cost: 4000,
      weight: 1
    },
    {
      id: 'amulet_of_the_planes',
      name: 'Амулет планов',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'neck',
      description: 'Многогранный кристалл, заключённый в платиновую оправу. Позволяет произнести «Перемещение планов» (Сл спасброска 15 Интеллекта при неудачном использовании).',
      bonuses: { int: 1, wis: 1 },
      cost: 7000,
      weight: 1
    },
    {
      id: 'mithril_half_plate',
      name: 'Мифриловые полулаты',
      type: 'armor',
      rarity: 'редкий',
      slot: 'body',
      description: 'Полулаты из чистого мифрила — лёгкие, как кольчуга, прочные, как сталь. Не дают помеху на Скрытность.',
      bonuses: { ac: 5, stealth: 1 },
      cost: 5000,
      weight: 20
    },
    {
      id: 'gauntlets_of_flaming_fists',
      name: 'Рукавицы пылающих кулаков',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'hands',
      description: 'Металлические перчатки с руной огня на каждом костяшке. Безоружные удары наносят дополнительные 1d6 урона огнём.',
      bonuses: { attack: 1, fireResist: true },
      cost: 4500,
      weight: 2
    },
    {
      id: 'shield_of_the_stalwart',
      name: 'Щит стойкого',
      type: 'armor',
      rarity: 'редкий',
      slot: 'offhand',
      description: 'Тяжёлый адамантиновый щит, покрытый рунами стойкости. Даёт +3 к КД и преимущество на спасброски против эффектов отталкивания.',
      bonuses: { ac: 3, savingThrows: 1 },
      cost: 5500,
      weight: 8
    },
    {
      id: 'bracers_of_the_arcanist',
      name: 'Наручи чародея',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'hands',
      description: 'Серебряные наручи с инкрустированными рунами всех восьми школ магии. Увеличивают Сл спасброска заклинаний владельца на 1.',
      bonuses: { int: 2, savingThrows: 1 },
      cost: 5000,
      weight: 1
    },
    {
      id: 'ring_of_regeneration',
      name: 'Кольцо регенерации',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'ring',
      description: 'Золотое кольцо с зелёным нефритом, пульсирующим жизненной энергией. Восстанавливает 1d6 хитов каждые 10 минут, если владелец жив.',
      bonuses: { healBonus: 2, con: 1 },
      cost: 6000,
      weight: 0
    },
    {
      id: 'breastplate_of_the_champion',
      name: 'Кираса чемпиона',
      type: 'armor',
      rarity: 'редкий',
      slot: 'body',
      description: 'Золочёная кираса с гравировкой дракона на груди. Критическое попадание происходит при выпадении 19-20, а критический урон по владельцу считается обычным.',
      bonuses: { ac: 5, attack: 1 },
      cost: 6500,
      weight: 22
    },
    {
      id: 'belt_of_returning',
      name: 'Пояс возвращения',
      type: 'artifact',
      rarity: 'редкий',
      slot: 'waist',
      description: 'Пояс из переплетённых серебряных цепей. Любое метательное оружие, брошенное владельцем, магически возвращается в руку в конце хода.',
      bonuses: { dex: 1, attack: 1 },
      cost: 3500,
      weight: 2
    },


    // ============================================================
    // VERY RARE (очень редкий) — 12 items
    // ============================================================
    {
      id: 'plate_armor_of_etherealness',
      name: 'Латы эфирности',
      type: 'armor',
      rarity: 'очень редкий',
      slot: 'body',
      description: 'Мерцающие латы, частично существующие в Эфирном Плане. Раз в день владелец может стать эфирным на 10 минут, проходя сквозь стены.',
      bonuses: { ac: 8, savingThrows: 1 },
      cost: 25000,
      weight: 50
    },
    {
      id: 'cloak_of_arachnida',
      name: 'Плащ арахниды',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'back',
      description: 'Чёрный плащ, сотканный из паутины паука-демона Ллос. Даёт лазание по стенам, сопротивление яду и возможность создавать паутину.',
      bonuses: { spiderClimb: true, savingThrows: 1 },
      cost: 20000,
      weight: 1
    },
    {
      id: 'ring_of_telekinesis',
      name: 'Кольцо телекинеза',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'ring',
      description: 'Кольцо из невесомого металла с парящим кристаллом. Позволяет по желанию произносить заклинание «Телекинез» без концентрации.',
      bonuses: { int: 3 },
      cost: 22000,
      weight: 0
    },
    {
      id: 'belt_of_fire_giant',
      name: 'Пояс огненного великана',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'waist',
      description: 'Массивный пояс из закалённой кожи саламандры с пряжкой из расплавленного железа. Устанавливает Силу на 25 и даёт сопротивление огню.',
      bonuses: { str: 7, fireResist: true },
      cost: 28000,
      weight: 5
    },
    {
      id: 'helm_of_brilliance',
      name: 'Шлем сияния',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'head',
      description: 'Золотой шлем с инкрустированными самоцветами разных типов. Каждый камень содержит заклинание: рубины — огненный шар, опалы — стена огня, бриллианты — призматический луч.',
      bonuses: { fireResist: true, int: 2, cha: 1 },
      cost: 30000,
      weight: 3
    },
    {
      id: 'boots_of_dimensional_stride',
      name: 'Сапоги мерного шага',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'feet',
      description: 'Сапоги из кожи мерцающего зверя. 3 раза в день позволяют телепортироваться на 30 футов бонусным действием.',
      bonuses: { speed: 10, dex: 2 },
      cost: 18000,
      weight: 1
    },
    {
      id: 'amulet_of_the_devout_plus3',
      name: 'Амулет преданного +3',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'neck',
      description: 'Священный символ из чистого золота, благословлённый верховным жрецом. Даёт +3 к атаке заклинаниями и Сл спасброска, восстанавливает одну ячейку заклинания 1/день.',
      bonuses: { wis: 3, attack: 3 },
      cost: 25000,
      weight: 1
    },
    {
      id: 'adamantine_full_plate',
      name: 'Адамантиновые латы',
      type: 'armor',
      rarity: 'очень редкий',
      slot: 'body',
      description: 'Полный латный доспех из адамантина — самого прочного металла в мультивселенной. Критические попадания обращаются в обычные, а доспех практически неразрушим.',
      bonuses: { ac: 8 },
      cost: 30000,
      weight: 65
    },
    {
      id: 'shield_of_missile_attraction',
      name: 'Щит отражения снарядов',
      type: 'armor',
      rarity: 'очень редкий',
      slot: 'offhand',
      description: 'Зеркальный стальной щит с рунами отклонения. Все дальнобойные атаки в пределах 10 футов от владельца перенаправляются на щит, давая сопротивление их урону.',
      bonuses: { ac: 3, dex: 1 },
      cost: 20000,
      weight: 7
    },
    {
      id: 'ring_of_spell_storing',
      name: 'Кольцо хранения заклинаний',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'ring',
      description: 'Крупное кольцо из звёздного серебра с пятью гнёздами для кристаллов. Может хранить до 5 уровней заклинаний, которые может произнести любой носитель.',
      bonuses: { int: 2, wis: 1 },
      cost: 24000,
      weight: 0
    },
    {
      id: 'bracers_of_the_blinding_strike',
      name: 'Наручи ослепительного удара',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'hands',
      description: 'Платиновые наручи, испускающие яркий свет при ударе. Дают +3 к атаке и дополнительные 2d6 урона излучением при критическом попадании.',
      bonuses: { attack: 3, str: 2 },
      cost: 22000,
      weight: 2
    },
    {
      id: 'necklace_of_prayer_beads',
      name: 'Ожерелье молитвенных бусин',
      type: 'artifact',
      rarity: 'очень редкий',
      slot: 'neck',
      description: 'Ожерелье из освящённых самоцветных бусин. Каждая бусина содержит заклинание: благословение, лечение ран, восстановление, планарный союзник.',
      bonuses: { wis: 2, healBonus: 3 },
      cost: 26000,
      weight: 1
    },


    // ============================================================
    // LEGENDARY (легендарный) — 20 items
    // ============================================================
    {
      id: 'plate_of_the_dawnmaster',
      name: 'Латы Повелителя Рассвета',
      type: 'armor',
      rarity: 'легендарный',
      slot: 'body',
      description: 'Сияющие золотые латы, благословлённые богом солнца. Излучают яркий свет на 30 футов, наносят 2d6 урона излучением нежити в пределах 10 футов. Даруют иммунитет к слепоте.',
      bonuses: { ac: 8, savingThrows: 2, cha: 3 },
      cost: 80000,
      weight: 55
    },
    {
      id: 'robe_of_the_archmagi',
      name: 'Мантия архимага',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'body',
      description: 'Мантия из чистой магической энергии, материализованной в ткань. Даёт КД 15 + мод. Ловкости без доспехов, преимущество на спасброски от магии, +2 к Сл заклинаний.',
      bonuses: { ac: 5, savingThrows: 2, int: 3 },
      cost: 75000,
      weight: 2
    },
    {
      id: 'cloak_of_invisibility',
      name: 'Плащ невидимости',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'back',
      description: 'Плащ из ткани, сотканной в Стране Теней. Накинув капюшон, владелец становится полностью невидимым. Максимальное использование — 2 часа в день.',
      bonuses: { stealth: 5, dex: 2 },
      cost: 70000,
      weight: 1
    },
    {
      id: 'ring_of_three_wishes',
      name: 'Кольцо трёх желаний',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'ring',
      description: 'Кольцо из звёздного адамантия с тремя переливающимися камнями. Содержит 3 заряда заклинания «Исполнение желаний». После использования всех зарядов становится обычным кольцом.',
      bonuses: { savingThrows: 2, cha: 2 },
      cost: 150000,
      weight: 0
    },
    {
      id: 'belt_of_storm_giant',
      name: 'Пояс штормового великана',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'waist',
      description: 'Пояс из шкуры штормового великана, мерцающий молниями. Устанавливает Силу на 29, даёт сопротивление урону молнией и громом.',
      bonuses: { str: 9, coldResist: true },
      cost: 100000,
      weight: 5
    },
    {
      id: 'boots_of_the_planeswalker',
      name: 'Сапоги ходока по планам',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'feet',
      description: 'Сапоги из кожи астрального кита, прошитые серебряной нитью. Позволяют перемещаться между планами по желанию и дают скорость полёта 60 футов.',
      bonuses: { fly: true, speed: 20 },
      cost: 90000,
      weight: 1
    },
    {
      id: 'crown_of_the_lich_king',
      name: 'Корона Короля Личей',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'head',
      description: 'Корона из чёрного железа, венчанная филактерией. Даёт иммунитет к некромантии, позволяет командовать нежитью и произносить «Круг смерти» 3/день.',
      bonuses: { int: 4, wis: 2, savingThrows: 2 },
      cost: 95000,
      weight: 3
    },
    {
      id: 'shield_of_the_celestial',
      name: 'Щит небожителя',
      type: 'armor',
      rarity: 'легендарный',
      slot: 'offhand',
      description: 'Щит из небесного мифрила с ликом солара. Излучает ауру защиты 10 футов: союзники получают +2 к КД. Владелец иммунен к страху.',
      bonuses: { ac: 3, savingThrows: 2 },
      cost: 85000,
      weight: 6
    },
    {
      id: 'amulet_of_immortality',
      name: 'Амулет бессмертия',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'neck',
      description: 'Древний амулет из вечного золота с каплей крови феникса внутри. При падении до 0 хитов раз в 7 дней владелец возвращается с полными хитами.',
      bonuses: { con: 4, healBonus: 5 },
      cost: 120000,
      weight: 1
    },
    {
      id: 'gauntlets_of_the_titan',
      name: 'Рукавицы титана',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'hands',
      description: 'Массивные перчатки из адамантия, покрытые рунами первозданной силы. Устанавливают Силу на 30, удваивают грузоподъёмность, безоружные удары наносят 4d6 урона.',
      bonuses: { str: 10, attack: 3 },
      cost: 110000,
      weight: 5
    },
    {
      id: 'ring_of_elemental_command_fire',
      name: 'Кольцо повелителя огня',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'ring',
      description: 'Кольцо из застывшей лавы с вечно горящим рубином. Даёт иммунитет к огню, позволяет командовать огненными элементалями и произносить «Огненная стена» по желанию.',
      bonuses: { fireResist: true, cha: 3, attack: 2 },
      cost: 95000,
      weight: 0
    },
    {
      id: 'mantle_of_the_void',
      name: 'Мантия пустоты',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'back',
      description: 'Плащ из материи, поглощающей свет. Внутри — бездна звёзд. Даёт иммунитет к урону холодом, невидимость в темноте и сопротивление всему магическому урону.',
      bonuses: { coldResist: true, stealth: 4, savingThrows: 3 },
      cost: 100000,
      weight: 0
    },
    {
      id: 'crown_of_stars',
      name: 'Корона звёзд',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'head',
      description: 'Невесомый обруч с семью вращающимися звёздными осколками. Каждый осколок можно метнуть как дальнобойную атаку, наносящую 4d12 урона излучением.',
      bonuses: { int: 3, cha: 2, attack: 2 },
      cost: 85000,
      weight: 0
    },
    {
      id: 'belt_of_the_chosen',
      name: 'Пояс избранного',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'waist',
      description: 'Пояс из переплетённых нитей судьбы, выкованный богиней удачи. Владелец может перебрасывать любой бросок 3 раза в день и всегда выбирает лучший результат.',
      bonuses: { savingThrows: 3, dex: 2, wis: 2 },
      cost: 90000,
      weight: 1
    },
    {
      id: 'full_plate_of_the_dragon_lord',
      name: 'Латы Повелителя Драконов',
      type: 'armor',
      rarity: 'легендарный',
      slot: 'body',
      description: 'Легендарные латы, выкованные из сплава адамантия и драконьих костей. Даруют иммунитет к дыханию драконов, +3 к КД сверх базового, и вселяют ужас во врагов.',
      bonuses: { ac: 8, fireResist: true, coldResist: true, savingThrows: 2 },
      cost: 130000,
      weight: 55
    },
    {
      id: 'boots_of_the_wind_god',
      name: 'Сапоги бога ветра',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'feet',
      description: 'Невесомые сапоги, окутанные вечным ветром. Дают постоянный полёт со скоростью 90 футов, иммунитет к падению и возможность создавать ураган раз в день.',
      bonuses: { fly: true, speed: 30, dex: 3 },
      cost: 95000,
      weight: 0
    },
    {
      id: 'necklace_of_the_gods',
      name: 'Ожерелье богов',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'neck',
      description: 'Ожерелье с девятью божественными камнями, каждый содержащий частицу силы одного из богов. Даёт +3 ко всем характеристикам и иммунитет к божественной магии ниже 7 уровня.',
      bonuses: { str: 3, dex: 3, con: 3, int: 3, wis: 3, cha: 3 },
      cost: 200000,
      weight: 2
    },
    {
      id: 'ring_of_djinni_summoning',
      name: 'Кольцо призыва джинна',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'ring',
      description: 'Кольцо из дымчатого золота с вечно вращающимся смерчем внутри. Раз в день призывает джинна, который исполняет одно поручение или сражается в течение часа.',
      bonuses: { cha: 4, wis: 2 },
      cost: 100000,
      weight: 0
    },
    {
      id: 'shield_of_the_bulwark',
      name: 'Щит оплота',
      type: 'armor',
      rarity: 'легендарный',
      slot: 'offhand',
      description: 'Гигантский щит из звёздного железа с руной неприступности. По команде создаёт стену силы 30 футов. Владелец получает иммунитет к критическим попаданиям.',
      bonuses: { ac: 4, savingThrows: 2, con: 2 },
      cost: 110000,
      weight: 10
    },
    {
      id: 'mask_of_the_shadow_lord',
      name: 'Маска Повелителя Теней',
      type: 'artifact',
      rarity: 'легендарный',
      slot: 'head',
      description: 'Маска из материализованной тьмы. Даёт истинное зрение на 120 футов, возможность перемещаться через тени и иммунитет к некромантии.',
      bonuses: { stealth: 4, dex: 3, wis: 2 },
      cost: 88000,
      weight: 0
    },


    // ============================================================
    // SCALING (масштабирующийся) — 8 items
    // ============================================================
    {
      id: 'living_armor',
      name: 'Живой доспех',
      type: 'armor',
      rarity: 'масштабирующийся',
      slot: 'body',
      description: 'Доспех из живого металла, найденный в руинах Механуса. Растёт вместе с владельцем: 1-4 ур. — КД +3, 5-10 ур. — КД +5 и сопротивление кислоте, 11-16 ур. — КД +7 и регенерация 1d4, 17+ ур. — КД +9 и иммунитет к критам.',
      bonuses: { ac: 3 },
      cost: 5000,
      weight: 30
    },
    {
      id: 'ring_of_the_bound_soul',
      name: 'Кольцо привязанной души',
      type: 'artifact',
      rarity: 'масштабирующийся',
      slot: 'ring',
      description: 'Кольцо из костяного серебра с привязанным духом-хранителем. 1-4 ур. — +1 спасбросок, 5-10 ур. — +2 спасбросок и 1/день совет духа (преимущество на проверку), 11-16 ур. — +3 и антимагический щит 1/день, 17+ ур. — иммунитет к очарованию и одержимости.',
      bonuses: { savingThrows: 1, wis: 1 },
      cost: 4000,
      weight: 0
    },
    {
      id: 'cloak_of_the_seasons',
      name: 'Плащ времён года',
      type: 'artifact',
      rarity: 'масштабирующийся',
      slot: 'back',
      description: 'Фейский плащ, меняющий цвет со сменой сезонов. 1-4 ур. — сопротивление холоду, 5-10 ур. — + сопротивление огню и КД +1, 11-16 ур. — + сопротивление молнии и регенерация 1/раунд, 17+ ур. — иммунитет к стихийному урону.',
      bonuses: { coldResist: true, ac: 0 },
      cost: 6000,
      weight: 1
    },
    {
      id: 'helm_of_the_war_mage',
      name: 'Шлем боевого мага',
      type: 'artifact',
      rarity: 'масштабирующийся',
      slot: 'head',
      description: 'Шлем из зачарованной стали с кристаллом концентрации. 1-4 ур. — +1 к атаке заклинаниями, 5-10 ур. — +2 и преимущество на Концентрацию, 11-16 ур. — +3 и одно дополнительное заклинание/день, 17+ ур. — +4 и рикошет промахнувшихся заклинаний.',
      bonuses: { int: 1, attack: 1 },
      cost: 5500,
      weight: 2
    },
    {
      id: 'boots_of_the_wanderer',
      name: 'Сапоги вечного странника',
      type: 'artifact',
      rarity: 'масштабирующийся',
      slot: 'feet',
      description: 'Сапоги, принадлежавшие легендарному путешественнику между мирами. 1-4 ур. — +5 скорость, 5-10 ур. — +10 и не оставляют следов, 11-16 ур. — +15 и свободное действие, 17+ ур. — +20, полёт и телепортация 1/день.',
      bonuses: { speed: 5, dex: 1 },
      cost: 4500,
      weight: 1
    },
    {
      id: 'gauntlets_of_the_forge',
      name: 'Рукавицы кузни',
      type: 'artifact',
      rarity: 'масштабирующийся',
      slot: 'hands',
      description: 'Рукавицы, выкованные богом-кузнецом из первородного пламени. 1-4 ур. — +1 атака и огнеупорность, 5-10 ур. — +2 и создание временного оружия, 11-16 ур. — +3 и зачарование оружия на 1 час, 17+ ур. — +4 и все атаки наносят +2d6 огня.',
      bonuses: { attack: 1, fireResist: true, str: 1 },
      cost: 5000,
      weight: 2
    },
    {
      id: 'amulet_of_the_phoenix',
      name: 'Амулет феникса',
      type: 'artifact',
      rarity: 'масштабирующийся',
      slot: 'neck',
      description: 'Амулет с вечно тлеющим пером феникса внутри. 1-4 ур. — +1 хит/уровень, 5-10 ур. — авто-стабилизация при 0 хитов, 11-16 ур. — возрождение с 1 хитом 1/день, 17+ ур. — возрождение с полными хитами и взрыв огня (6d6) вокруг.',
      bonuses: { con: 1, healBonus: 1, autoStabilize: true },
      cost: 7000,
      weight: 0
    },
    {
      id: 'shield_of_the_sentinel',
      name: 'Щит часового',
      type: 'armor',
      rarity: 'масштабирующийся',
      slot: 'offhand',
      description: 'Щит с вечно бодрствующим оком в центре. 1-4 ур. — +2 КД и преимущество на инициативу, 5-10 ур. — +3 КД и реакция-контратака, 11-16 ур. — аура защиты 10 футов (+1 КД союзникам), 17+ ур. — стена силы 1/день и иммунитет к внезапной атаке.',
      bonuses: { ac: 2, wis: 1 },
      cost: 5500,
      weight: 6
    }
];



// ========== Helper functions (no GameState dependency) ==========

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash);
}

function getItemPrice(item) {
    if (!item) return '?';
    const rarity = item.rarity;
    if (rarity === 'масштабирующийся') return 'Бесценно';
    const seed = hashCode(item.id);
    const randomVal = (seed % 100) / 100;
    switch (rarity) {
        case 'обычный': return Math.floor(randomVal * 21) + 10 + ' см';
        case 'необычный': return Math.floor(randomVal * 51) + 30 + ' см';
        case 'редкий': return Math.floor(randomVal * 3) + 1 + ' зм';
        case 'очень редкий': return Math.floor(randomVal * 41) + 10 + ' зм';
        case 'легендарный': return Math.floor(randomVal * 501) + 200 + ' зм';
        default: return '?';
    }
}

function getTypeName(type) {
    var names = { weapon: '⚔️ Оружие', armor: '🛡️ Доспех', artifact: '💍 Артефакт' };
    return names[type] || type;
}

function getSlotName(slot) {
    var names = {
        body: 'Тело', mainhand: 'Основная рука', offhand: 'Вторая рука',
        ring: 'Кольцо', neck: 'Шея', feet: 'Ноги', back: 'Спина',
        hands: 'Руки', head: 'Голова', waist: 'Пояс'
    };
    return names[slot] || slot || '—';
}

function getBonusName(key) {
    var names = {
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

function formatBonus(key, value) {
    if (key === 'stealth' && value === 'advantage') return 'Преимущество';
    if (typeof value === 'boolean' && value) return 'Да';
    if (typeof value === 'number' && value >= 0) return '+' + value;
    return String(value);
}
