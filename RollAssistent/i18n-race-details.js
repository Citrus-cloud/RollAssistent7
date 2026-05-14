/**
 * i18n-race-details.js — English translations for race details
 * Applied when language is 'en'
 */
const raceDetailsEN = {
  human: {
    description: 'Humans are the youngest and most ambitious race. They lack innate magic or longevity but compensate with incredible adaptability and cultural diversity.',
    features: [
      { title: '🔹 Versatility', text: '+1 to all six ability scores.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' },
      { title: '🔹 Languages', text: 'Common + one of your choice.' },
      { title: '🔹 Flexibility', text: 'No innate abilities, but can gain an extra skill and feat (optional).' }
    ],
    languages: ['Common', 'one of choice']
  },
  elf: {
    description: 'Elves are an ancient, graceful race living in harmony with nature and magic. Known for keen sight and longevity.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Intelligence.' },
      { title: '🔹 Darkvision', text: '60 feet.' },
      { title: '🔹 Keen Senses', text: 'Proficiency in Perception.' },
      { title: '🔹 Fey Ancestry', text: 'Advantage on saves against being charmed; cannot be put to sleep by magic.' },
      { title: '🔹 Trance', text: 'Elves don\'t sleep; they meditate 4 hours for a full rest.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Elvish']
  },
  dwarf: {
    description: 'Dwarves are stout, bearded masters of smithing and stonework. They dwell in mountain citadels and are renowned for their resilience.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Constitution, +1 Wisdom.' },
      { title: '🔹 Darkvision', text: '60 feet.' },
      { title: '🔹 Dwarven Resilience', text: 'Resistance to poison damage, advantage on saves against poison.' },
      { title: '🔹 Tool Proficiency', text: 'Smith\'s tools, mason\'s tools, or brewer\'s supplies (your choice).' },
      { title: '🔹 Stonecunning', text: 'When making History checks related to stonework, add double proficiency bonus.' },
      { title: '🔹 Size', text: 'Medium. Speed 25 ft (not reduced by heavy armor).' }
    ],
    languages: ['Common', 'Dwarvish']
  },
  halfling: {
    description: 'Halflings are small, lucky, and cheerful creatures who value home, family, and good food.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Charisma.' },
      { title: '🔹 Size', text: 'Small. Speed 25 ft.' },
      { title: '🔹 Lucky', text: 'When you roll a 1 on attack, ability check, or save, you can reroll and must use the new result.' },
      { title: '🔹 Brave', text: 'Advantage on saves against being frightened.' },
      { title: '🔹 Halfling Nimbleness', text: 'You can move through the space of any creature larger than you.' },
      { title: '🔹 Languages', text: 'Common, Halfling.' }
    ],
    languages: ['Common', 'Halfling']
  },
  gnome: {
    description: 'Gnomes are energetic inventors, alchemists, and mechanics. They live in underground workshops and love gadgets, gemstones, and illusion magic.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Intelligence, +1 Constitution.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Gnome Cunning', text: 'Advantage on Int, Wis, and Cha saves against magic.' },
      { title: '🔹 Gnome Sense', text: 'Detects presence of precious metals/gems and direction to water.' },
      { title: '🔹 Natural Illusionist', text: 'You can cast the Minor Illusion cantrip (Intelligence).' },
      { title: '🔹 Size', text: 'Small. Speed 25 ft.' }
    ],
    languages: ['Common', 'Gnomish']
  },
  half_orc: {
    description: 'Half-orcs are descendants of humans and orcs — fierce and resilient.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Strength, +1 Constitution.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Savage Attacks', text: 'On a critical hit, add one extra weapon damage die.' },
      { title: '🔹 Relentless Endurance', text: 'When reduced to 0 HP but not killed, drop to 1 HP instead (once per day).' },
      { title: '🔹 Intimidation', text: 'You gain proficiency in Intimidation.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Orc']
  },
  tiefling: {
    description: 'Tieflings carry the legacy of demonic powers, manifested in horns, tails, and mystical abilities.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Charisma, +1 Intelligence.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Hellish Resistance', text: 'Resistance to fire damage.' },
      { title: '🔹 Infernal Legacy', text: 'You know Thaumaturgy. At 3rd level Burning Hands, at 5th Darkness (once/day).' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Infernal']
  },
  dragonborn: {
    description: 'Dragonborn are proud descendants of dragons, possessing scales, claws, and destructive breath.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Strength, +1 Charisma.' },
      { title: '🔹 Breath Weapon', text: '15 ft cone (or 30 ft line), 2d6 damage (scales), recharges on short rest.' },
      { title: '🔹 Damage Resistance', text: 'Resistance to the same damage type as your breath weapon.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Draconic']
  },
  aasimar: {
    description: 'Aasimar are mortals with celestial blood in their veins. Chosen by higher powers, they possess the gift of healing and light.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Charisma, +1 Wisdom.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Celestial Resistance', text: 'Resistance to radiant and necrotic damage.' },
      { title: '🔹 Healing Hands', text: 'As action, touch to restore HP equal to your level (once/day).' },
      { title: '🔹 Light Bearer', text: 'Light cantrip; at 3rd level Divine Blessing once/day.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Celestial']
  },
  goliath: {
    description: 'Goliaths are high-mountain nomads, descendants of giants, known for physical might and honesty.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Strength, +1 Constitution.' },
      { title: '🔹 Stone\'s Endurance', text: 'As reaction, reduce damage by 1d12 + Con modifier (once per short rest).' },
      { title: '🔹 Powerful Build', text: 'Doubled carrying capacity; count as one size larger for pushing.' },
      { title: '🔹 Mountain Survival', text: 'Proficiency in Athletics.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Giant']
  }
};


// Continuation of race details EN
Object.assign(raceDetailsEN, {
  kenku: {
    description: 'Kenku are bird-like humanoids cursed by ancient magic, stripped of their own voice. They are master mimics of sounds and movements.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Wisdom.' },
      { title: '🔹 Mimicry', text: 'You can perfectly replicate any sound you\'ve heard, including voices. Creatures can identify the forgery with an Insight check.' },
      { title: '🔹 Skill Proficiency', text: 'Deception and Stealth.' },
      { title: '🔹 Claws', text: 'Unarmed strikes deal 1d4 piercing damage.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Sign Language']
  },
  tabaxi: {
    description: 'Tabaxi are bipedal felines, curious and swift. Their mood changes as quickly as they move.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Charisma.' },
      { title: '🔹 Feline Agility', text: 'Double movement speed on your turn if you don\'t move on the next.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Claws', text: 'Unarmed strikes deal 1d4 slashing damage.' },
      { title: '🔹 Skill Proficiency', text: 'Perception and Acrobatics.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Feline']
  },
  loxodon: {
    description: 'Loxodons are mighty bipedal elephants known for calm, loyalty, and incredible memory.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Constitution, +1 Wisdom.' },
      { title: '🔹 Thick Hide', text: 'AC = 12 + Constitution modifier (no armor).' },
      { title: '🔹 Powerful Build', text: 'Doubled carrying capacity; count as one size larger for pushing.' },
      { title: '🔹 Trunk', text: 'Can use trunk to grab objects but not for attacks.' },
      { title: '🔹 Elephant Memory', text: 'Proficiency in History.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Elephant']
  },
  firbolg: {
    description: 'Firbolgs are tall, fey-like giants living in forests. Secretive, peaceful, and possessing innate magic.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Wisdom, +1 Strength.' },
      { title: '🔹 Firbolg Magic', text: 'Cast Detect Magic and Disguise Self (self only) once/day each. Spellcasting ability is Wisdom.' },
      { title: '🔹 Powerful Build', text: 'Doubled carrying capacity; count as one size larger for pushing.' },
      { title: '🔹 Speech of Beast and Leaf', text: 'Limited communication with plants and animals.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Giant', 'Sylvan']
  },
  goblin: {
    description: 'Goblins are small but fierce creatures living in dungeons and wilds. Known for cunning and swift attacks.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Constitution.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Nimble Escape', text: 'As bonus action you can Disengage or Hide each turn.' },
      { title: '🔹 Skill Proficiency', text: 'Stealth.' },
      { title: '🔹 Size', text: 'Small. Speed 30 ft.' }
    ],
    languages: ['Common', 'Goblin']
  },
  tortle: {
    description: 'Tortles are humanoid turtles with natural shells. Wise, patient, often becoming monks or druids.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+1 Strength, +2 Wisdom.' },
      { title: '🔹 Natural Armor', text: 'AC = 17. Can withdraw: AC 19 but cannot attack, +4 to Con saves.' },
      { title: '🔹 Hold Breath', text: 'Can hold breath for 1 hour.' },
      { title: '🔹 Claws', text: 'Unarmed strikes deal 1d4 slashing damage.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Aquan']
  },
  aarakocra: {
    description: 'Aarakocra are winged humanoids soaring the skies. Guardians of air and wind.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Wisdom.' },
      { title: '🔹 Flight', text: 'Flying speed 50 ft (cannot wear medium/heavy armor).' },
      { title: '🔹 Talons', text: 'Unarmed strikes deal 1d4 piercing damage.' },
      { title: '🔹 Keen Sight', text: 'Proficiency in Perception.' },
      { title: '🔹 Size', text: 'Medium. Speed 25 ft.' }
    ],
    languages: ['Common', 'Auran']
  },
  githzerai: {
    description: 'Githzerai are strict monks from the plane of Limbo, possessing innate psionic abilities.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Wisdom, +1 Intelligence.' },
      { title: '🔹 Psionic Defense', text: 'Can cast Shield once/day (Wisdom).' },
      { title: '🔹 Mental Discipline', text: 'Advantage on saves against being charmed and frightened.' },
      { title: '🔹 Innate Spellcasting', text: 'At 3rd level Detect Thoughts, at 5th Hold Person (once/day).' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Gith']
  },
  githyanki: {
    description: 'Githyanki are the warlike branch of gith, living on the Astral Plane. They wield silver swords and psionics.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Strength, +1 Intelligence.' },
      { title: '🔹 Martial Training', text: 'Proficiency with light and medium armor, shortswords and longswords.' },
      { title: '🔹 Psionic Magic', text: 'At 3rd level Jump, at 5th Misty Step (once/day, Intelligence).' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Gith']
  },
  yuan_ti: {
    description: 'Yuan-Ti are serpentine humanoids with cold blood and innate magic. Skilled manipulators.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Charisma, +1 Intelligence.' },
      { title: '🔹 Darkvision', text: '60 ft (can see in magical darkness).' },
      { title: '🔹 Magic Resistance', text: 'Advantage on all saves against spells and magical effects.' },
      { title: '🔹 Innate Spellcasting', text: 'Vicious Mockery cantrip. At 3rd Charm Person, at 5th Suggestion (once/day, Charisma).' },
      { title: '🔹 Poison Immunity', text: 'Full immunity to poison damage and effects.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Serpentine']
  },
  shadar_kai: {
    description: 'Shadar-Kai are immortal elves allied with the Raven Queen. They live in the grim beauty of the Shadowfell with necrotic resistance.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Constitution.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Necrotic Resistance', text: 'Resistance to necrotic damage.' },
      { title: '🔹 Blessing of the Raven Queen', text: 'Bonus action teleport 30 ft. After teleport, resistance to all damage until start of next turn (once/day).' },
      { title: '🔹 Skill Proficiency', text: 'Perception.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Elvish', 'Undercommon']
  },
  duergar: {
    description: 'Duergar, or gray dwarves, are an underground race once enslaved by illithids, gaining psionic abilities.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Constitution, +1 Strength.' },
      { title: '🔹 Superior Darkvision', text: '120 ft.' },
      { title: '🔹 Dwarven Resilience', text: 'Resistance to poison, advantage on saves against poison and charm.' },
      { title: '🔹 Psionic Fortitude', text: 'Can cast Enlarge/Reduce (enlarge only) and Invisibility once/day (Intelligence).' },
      { title: '🔹 Sunlight Sensitivity', text: 'Disadvantage on attacks and Perception in bright light.' },
      { title: '🔹 Size', text: 'Medium. Speed 25 ft (not reduced by heavy armor).' }
    ],
    languages: ['Common', 'Dwarvish', 'Undercommon']
  },
  kobold: {
    description: 'Kobolds are small reptilian creatures living in caves. Cunning, inventive, and fighting with pack tactics.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Intelligence.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Pack Tactics', text: 'If you attack an enemy adjacent to your ally, you get advantage on the attack roll.' },
      { title: '🔹 Sunlight Sensitivity', text: 'Disadvantage on attacks and Perception in bright light.' },
      { title: '🔹 Claws and Teeth', text: 'Unarmed strikes deal 1d4 slashing or piercing damage.' },
      { title: '🔹 Size', text: 'Small. Speed 30 ft.' }
    ],
    languages: ['Common', 'Draconic']
  },
  stormforged: {
    description: 'Stormforged are a people born at the epicenter of endless storms. Their bodies are suffused with electricity.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Constitution, +1 Strength.' },
      { title: '🔹 Lightning Resistance', text: 'Full resistance to lightning damage.' },
      { title: '🔹 Thunder Strike', text: 'As reaction to melee attack, deal 1d4 thunder damage to attacker (uses = Con mod, recharges on short rest).' },
      { title: '🔹 Storm Born', text: 'Can cast Thunderwave once/day (at 5th level twice), spellcasting ability is Constitution.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Primordial']
  },
  shadewalker: {
    description: 'Shadewalkers are stealthy creatures born from primordial darkness. Gray skin, glowing eyes, able to merge with shadows.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Charisma.' },
      { title: '🔹 Superior Darkvision', text: '120 ft.' },
      { title: '🔹 Shadow Stealth', text: 'Can attempt Stealth checks even when observed, while in dim light or darkness.' },
      { title: '🔹 Shadow Step', text: 'Bonus action teleport from one area of dim light/darkness to another within 60 ft (once per short rest).' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Deep Speech']
  },
  thri_kreen: {
    description: 'Thri-Kreen are sentient desert insects. Four-armed, they don\'t need sleep.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Wisdom.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Four Arms', text: 'Can hold up to four one-handed items/weapons. Extra limbs don\'t grant extra attacks.' },
      { title: '🔹 Carapace', text: 'AC = 13 + Dexterity modifier.' },
      { title: '🔹 Sleepless', text: 'Don\'t need sleep; 4 hours of stillness grants a full rest.' },
      { title: '🔹 Spring', text: 'Jump distances are doubled.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Thri-Kreen']
  },
  fairy: {
    description: 'Fairies are tiny creatures from the Feywild with colorful wings and a love of mischief.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Charisma.' },
      { title: '🔹 Size and Flight', text: 'Small. Speed 30 ft, fly 30 ft (no medium/heavy armor).' },
      { title: '🔹 Fey Magic', text: 'Thaumaturgy cantrip. At 3rd Disguise Self, at 5th Charm Person (once/day, Charisma).' },
      { title: '🔹 Gravity Control', text: 'Action to make an ally/object within 60 ft hover 1 ft (concentration up to 1 min).' }
    ],
    languages: ['Common', 'Sylvan']
  },
  stonehide: {
    description: 'Stonehides are an ancient people born of earth and stone. Their bodies are covered in durable mineral armor.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Constitution, +1 Wisdom.' },
      { title: '🔹 Stone Armor', text: 'AC = 14 + Constitution modifier. Cannot wear heavy armor, can use shield.' },
      { title: '🔹 Poison Resistance', text: 'Advantage on saves against poison, resistance to poison damage.' },
      { title: '🔹 Earth Walk', text: 'Once/day — pass through stone/earth barrier up to 5 ft thick (self only).' },
      { title: '🔹 Size', text: 'Medium. Speed 25 ft (not reduced by armor).' }
    ],
    languages: ['Common', 'Terran']
  },
  flamesoul: {
    description: 'Flamesouls are beings with sacred phoenix flame burning in their hearts. They can ignite enemies.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Charisma, +1 Constitution.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Phoenix Spark', text: 'When reduced to 0 HP, reaction to ignite: all within 5 ft take 1d6 + level fire damage, you remain at 1 HP (once/day).' },
      { title: '🔹 Burning Strike', text: 'Once per turn, when you hit with a spell/weapon, add 1d4 fire damage.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Ignan']
  },
  mirrorfolk: {
    description: 'Mirrorfolk are a mysterious people who can assume the appearance of others. True form: pale, translucent humanoids with mirror eyes.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Charisma, +1 Intelligence.' },
      { title: '🔹 Reflection', text: 'Action to change appearance to any humanoid creature your size you\'ve seen (advantage on Deception). Lasts up to 1 hour.' },
      { title: '🔹 Mirror Shield', text: 'Reaction to deflect a spell attack that missed: redirect the spell to another creature within 30 ft (once/short rest).' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Elvish']
  },
  leonin: {
    description: 'Leonin are proud lion-like warriors of the hot savannas. They value honor, strength, and pride protection above all.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Strength, +1 Constitution.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Claws', text: 'Unarmed strikes deal 1d4 slashing damage.' },
      { title: '🔹 Daunting Roar', text: 'Bonus action: all creatures within 10 ft must make Wis save (DC 8 + prof + Cha mod) or be frightened until end of your next turn. Once/short rest.' },
      { title: '🔹 Size', text: 'Medium. Speed 35 ft.' }
    ],
    languages: ['Common', 'Leonin']
  },
  satyr: {
    description: 'Satyrs are merry and charming fey creatures with goat legs. They live for pleasure, music, and adventure.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Charisma, +1 Dexterity.' },
      { title: '🔹 Creature Type: Fey', text: 'You count as fey, not humanoid. Immune to spells targeting only humanoids.' },
      { title: '🔹 Magic Resistance', text: 'Advantage on saves against spells and magical effects.' },
      { title: '🔹 Ram', text: 'Unarmed strikes deal 1d4 bludgeoning damage (horns).' },
      { title: '🔹 Size', text: 'Medium. Speed 35 ft.' }
    ],
    languages: ['Common', 'Sylvan']
  },
  wood_elf: {
    description: 'Wood elves are secretive guardians of ancient forests. Faster and wiser than their kin, preferring tree shade to city glitter.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Wisdom.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Fleet of Foot', text: 'Speed 35 ft (instead of standard 30).' },
      { title: '🔹 Mask of the Wild', text: 'Can hide when only lightly obscured by foliage, rain, or snow.' },
      { title: '🔹 Keen Senses', text: 'Proficiency in Perception.' },
      { title: '🔹 Size', text: 'Medium. Speed 35 ft.' }
    ],
    languages: ['Common', 'Elvish']
  },
  centaur: {
    description: 'Centaurs are majestic half-human, half-horse beings. Plains guardians combining wisdom and strength, running faster than the wind.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Strength, +1 Wisdom.' },
      { title: '🔹 Hooves', text: 'Unarmed strikes deal 1d4 + Str mod bludgeoning damage.' },
      { title: '🔹 Charge', text: 'If you move 30 ft straight and hit with melee attack — bonus action hoof attack.' },
      { title: '🔹 Equine Build', text: 'A creature one size smaller can ride you.' },
      { title: '🔹 Size', text: 'Medium. Speed 40 ft.' }
    ],
    languages: ['Common', 'Sylvan']
  },
  minotaur: {
    description: 'Minotaurs are powerful bull-headed warriors living by laws of honor and battle. Their horns are deadly weapons.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Strength, +1 Constitution.' },
      { title: '🔹 Horns', text: 'Unarmed: 1d6 + Str mod piercing damage.' },
      { title: '🔹 Goring Rush', text: 'After 20+ ft straight movement, bonus action horn attack. On hit, target must make Str save (DC 8 + prof + Str mod) or be pushed 10 ft.' },
      { title: '🔹 Hammering Horns', text: 'When a connected ally attacks, you can reaction horn attack.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Minotaur']
  },
  drow: {
    description: 'Drow are dark elves exiled to the Underdark millennia ago. Their society is cruel and matriarchal, but renegades seek light on the surface.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Dexterity, +1 Charisma.' },
      { title: '🔹 Superior Darkvision', text: '120 ft.' },
      { title: '🔹 Sunlight Sensitivity', text: 'Disadvantage on attacks and Perception in direct sunlight.' },
      { title: '🔹 Drow Magic', text: 'Dancing Lights cantrip. At 3rd Faerie Fire (1/day). At 5th Darkness (1/day).' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Elvish', 'Undercommon']
  },
  half_elf: {
    description: 'Half-elves combine the best of both worlds — human adaptability and elven grace. They easily connect with any race.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Charisma, +1 to two others of your choice.' },
      { title: '🔹 Darkvision', text: '60 ft.' },
      { title: '🔹 Fey Ancestry', text: 'Advantage on saves against charm. Cannot be put to sleep by magic.' },
      { title: '🔹 Versatility', text: 'Proficiency in two skills of your choice.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft.' }
    ],
    languages: ['Common', 'Elvish', 'one of choice']
  },
  svirfneblin: {
    description: 'Deep gnomes are secretive inhabitants of the darkest Underdark caves. They use stone magic for defense against the horrors of the deep.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Intelligence, +1 Dexterity.' },
      { title: '🔹 Superior Darkvision', text: '120 ft.' },
      { title: '🔹 Stone Camouflage', text: 'Advantage on Stealth checks among stone.' },
      { title: '🔹 Gnome Cunning', text: 'Advantage on Int, Wis, and Cha saves against magic.' },
      { title: '🔹 Size', text: 'Small. Speed 25 ft.' }
    ],
    languages: ['Common', 'Gnomish', 'Undercommon']
  },
  lizardfolk: {
    description: 'Lizardfolk are cold-blooded hunters of swamps and jungles. Their rational thinking lacks emotion, making them ideal survivalists.',
    features: [
      { title: '🔹 Ability Score Increase', text: '+2 Constitution, +1 Wisdom.' },
      { title: '🔹 Natural Armor', text: 'Without armor, AC = 13 + Dex modifier.' },
      { title: '🔹 Bite', text: 'Unarmed: 1d6 + Str mod piercing damage.' },
      { title: '🔹 Hungry Jaws', text: 'Bonus action bite gaining temp HP = Con mod (min 1). Once/short rest.' },
      { title: '🔹 Hold Breath', text: 'Can hold breath for 15 minutes.' },
      { title: '🔹 Size', text: 'Medium. Speed 30 ft, swim 30 ft.' }
    ],
    languages: ['Common', 'Draconic']
  }
});

// Apply race details translations
function applyRaceDetailsTranslations(lang) {
  if (lang !== 'en') return;
  if (typeof raceDetails === 'undefined') return;
  
  Object.keys(raceDetailsEN).forEach(raceId => {
    if (raceDetails[raceId]) {
      raceDetails[raceId].description = raceDetailsEN[raceId].description;
      raceDetails[raceId].features = raceDetailsEN[raceId].features;
      raceDetails[raceId].languages = raceDetailsEN[raceId].languages;
    }
  });
}

// Auto-apply on load
(function() {
  const lang = localStorage.getItem('app-lang') || 'ru';
  applyRaceDetailsTranslations(lang);
})();
