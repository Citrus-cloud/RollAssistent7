/**
 * i18n-data.js — English translations for all game data (races, classes, spells, equipment)
 * Russian texts remain in the original data files as the default.
 * This file provides English overrides that are applied when language is 'en'.
 */

// ========== RACE TRANSLATIONS ==========
const raceTranslations = {
  human: { name: 'Human', description: '+1 to all ability scores.' },
  elf: { name: 'Elf', description: 'Dexterity +2, Intelligence +1. Darkvision.' },
  dwarf: { name: 'Dwarf', description: 'Constitution +2, Wisdom +1. Poison resistance.' },
  halfling: { name: 'Halfling', description: 'Dexterity +2, Charisma +1. Lucky.' },
  gnome: { name: 'Gnome', description: 'Intelligence +2, Constitution +1.' },
  half_orc: { name: 'Half-Orc', description: 'Strength +2, Constitution +1. Savage and resilient.' },
  tiefling: { name: 'Tiefling', description: 'Charisma +2, Intelligence +1. Infernal heritage with hellfire.' },
  dragonborn: { name: 'Dragonborn', description: 'Strength +2, Charisma +1. Dragon breath and elemental resistance.' },
  aasimar: { name: 'Aasimar', description: 'Charisma +2, Wisdom +1. Celestial heritage with healing light.' },
  goliath: { name: 'Goliath', description: 'Strength +2, Constitution +1. Mountain giant with stone endurance.' },
  kenku: { name: 'Kenku', description: 'Dexterity +2, Wisdom +1. Master of mimicry and stealth.' },
  tabaxi: { name: 'Tabaxi', description: 'Dexterity +2, Charisma +1. Feline grace and curiosity.' },
  loxodon: { name: 'Loxodon', description: 'Constitution +2, Wisdom +1. Mighty elephant-like folk.' },
  firbolg: { name: 'Firbolg', description: 'Wisdom +2, Strength +1. Forest giants with nature magic.' },
  goblin: { name: 'Goblin', description: 'Dexterity +2, Constitution +1. Cunning and swift.' },
  tortle: { name: 'Tortle', description: 'Strength +1, Wisdom +2. Turtle-like folk with natural shell.' },
  aarakocra: { name: 'Aarakocra', description: 'Dexterity +2, Wisdom +1. Winged guardians of the skies.' },
  githzerai: { name: 'Githzerai', description: 'Wisdom +2, Intelligence +1. Psionic monks from Limbo.' },
  githyanki: { name: 'Githyanki', description: 'Strength +2, Intelligence +1. Warlike psionics with silver swords.' },
  yuan_ti: { name: 'Yuan-Ti', description: 'Charisma +2, Intelligence +1. Serpentine schemers with magical blood.' },
  shadar_kai: { name: 'Shadar-Kai', description: 'Dexterity +2, Constitution +1. Immortal elves from the Shadowfell.' },
  duergar: { name: 'Duergar', description: 'Constitution +2, Strength +1. Gray dwarves with psionics and magic.' },
  kobold: { name: 'Kobold', description: 'Dexterity +2, Intelligence +1. Cunning lizards with pack tactics.' },
  stormforged: { name: 'Stormforged', description: 'Constitution +2, Strength +1. Storm-born, lightning resistant.' },
  shadewalker: { name: 'Shadewalker', description: 'Dexterity +2, Charisma +1. Children of darkness, shadow-sliders.' },
  thri_kreen: { name: 'Thri-Kreen', description: 'Dexterity +2, Wisdom +1. Four-armed insectoid desert warrior.' },
  fairy: { name: 'Fairy', description: 'Dexterity +2, Charisma +1. Tiny fey with innate flight magic.' },
  stonehide: { name: 'Stonehide', description: 'Constitution +2, Wisdom +1. Descendants of mountains, with stone armor.' },
  flamesoul: { name: 'Flamesoul', description: 'Charisma +2, Constitution +1. Fire spirits bound in flesh.' },
  mirrorfolk: { name: 'Mirrorfolk', description: 'Charisma +2, Intelligence +1. Shape-shifting reflections.' },
  leonin: { name: 'Leonin', description: 'Strength +2, Constitution +1. Proud lion-like savanna warriors.' },
  satyr: { name: 'Satyr', description: 'Charisma +2, Dexterity +1. Merry fey creatures with goat legs.' },
  wood_elf: { name: 'Wood Elf', description: 'Dexterity +2, Wisdom +1. Swift guardians of ancient forests.' },
  centaur: { name: 'Centaur', description: 'Strength +2, Wisdom +1. Half-human, half-horse guardians of the plains.' },
  minotaur: { name: 'Minotaur', description: 'Strength +2, Constitution +1. Mighty bull-headed warriors.' },
  drow: { name: 'Drow', description: 'Dexterity +2, Charisma +1. Dark elves of the Underdark with innate magic.' },
  half_elf: { name: 'Half-Elf', description: 'Charisma +2, two others +1. Heirs of two worlds.' },
  svirfneblin: { name: 'Deep Gnome', description: 'Dexterity +1, Intelligence +2. Secret dwellers of the Underdark.' },
  lizardfolk: { name: 'Lizardfolk', description: 'Constitution +2, Wisdom +1. Cold-blooded swamp hunters.' },
  water_genasi: { name: 'Water Genasi', description: 'Constitution +2, Wisdom +1. Descendants of water elementals.' },
  fire_genasi: { name: 'Fire Genasi', description: 'Constitution +2, Intelligence +1. Descendants of fire elementals.' },
  air_genasi: { name: 'Air Genasi', description: 'Dexterity +2, Constitution +1. Descendants of air elementals.' },
  earth_genasi: { name: 'Earth Genasi', description: 'Strength +1, Constitution +2. Descendants of earth elementals.' },
  lycanthrope: { name: 'Lycanthrope', description: 'Strength +1, Constitution +2. Cursed shapeshifters with bestial nature.' },
  vampire_race: { name: 'Vampire', description: 'Charisma +2, Dexterity +1. Immortal night hunters with dark gifts.' },
  warforged: { name: 'Warforged', description: 'Constitution +2, one other +1. Sentient magical constructs.' },
  changeling: { name: 'Changeling', description: 'Charisma +2, one other +1. Shapeshifters at will.' },
  shifter: { name: 'Shifter', description: 'Dexterity +1, Constitution +2. Lycanthrope descendants with partial transformation.' },
  kalashtar: { name: 'Kalashtar', description: 'Wisdom +2, Charisma +1. Spiritual beings with psychic bonds.' },
  bugbear: { name: 'Bugbear', description: 'Strength +2, Dexterity +1. Large goblinoid ambushers.' }
};



// ========== CLASS TRANSLATIONS ==========
const classTranslations = {
  barbarian: { name: 'Barbarian', description: 'Fierce warrior who enters battle rage.', primaryAbility: 'Strength',
    subclasses: { berserker: { name: 'Berserker', description: 'Even more ferocious attacks at the risk of exhaustion.' }, totem_warrior: { name: 'Totem Warrior', description: 'Summons animal spirits for enhancement.' }, ancestral_guardian: { name: 'Ancestral Guardian', description: 'Protects allies by summoning ancestral spirits.' }, zealot: { name: 'Zealot', description: 'Divine fury and resurrection without cost.' } }
  },
  warrior: { name: 'Fighter', description: 'Master of weapons and armor.', primaryAbility: 'Strength or Dexterity',
    subclasses: { champion: { name: 'Champion', description: 'Improved critical hits and athleticism.' }, battle_master: { name: 'Battle Master', description: 'Uses combat maneuvers.' }, eldritch_knight: { name: 'Eldritch Knight', description: 'Combines sword and spells.' }, psi_warrior: { name: 'Psi Warrior', description: 'Mind power in battle.' }, rune_knight: { name: 'Rune Knight', description: 'Awakens the magic of runes.' } }
  },
  mage: { name: 'Wizard', description: 'Scholarly spellcaster.', primaryAbility: 'Intelligence',
    subclasses: { abjuration: { name: 'School of Abjuration', description: 'Master of protection.' }, evocation: { name: 'School of Evocation', description: 'Destructive magic.' }, illusion: { name: 'School of Illusion', description: 'Artful deceptions.' }, necromancy: { name: 'School of Necromancy', description: 'Commanding the dead.' }, divination: { name: 'School of Divination', description: 'Sees the future.' } }
  },
  rogue: { name: 'Rogue', description: 'Stealthy master of deception.', primaryAbility: 'Dexterity',
    subclasses: { thief: { name: 'Thief', description: 'Lockpicking, climbing, quick hands.' }, assassin: { name: 'Assassin', description: 'Deadly first strikes.' }, arcane_trickster: { name: 'Arcane Trickster', description: 'Illusion and enchantment magic.' }, swashbuckler: { name: 'Swashbuckler', description: 'Charismatic duelist.' } }
  },
  cleric: { name: 'Cleric', description: 'Divine healer.', primaryAbility: 'Wisdom',
    subclasses: { life: { name: 'Life Domain', description: 'Greater healing.' }, war: { name: 'War Domain', description: 'Battle cleric.' }, trickery: { name: 'Trickery Domain', description: 'Illusions and stealth.' }, light: { name: 'Light Domain', description: 'Fire and purification.' }, tempest: { name: 'Tempest Domain', description: 'Lightning and thunder.' } }
  },
  druid: { name: 'Druid', description: 'Guardian of nature.', primaryAbility: 'Wisdom',
    subclasses: { land: { name: 'Circle of the Land', description: 'Spells based on terrain.' }, moon: { name: 'Circle of the Moon', description: 'Powerful beast transformations.' }, stars: { name: 'Circle of Stars', description: 'Power of constellations for attack or healing.' }, spores: { name: 'Circle of Spores', description: 'Symbiosis with fungi and toxic spores.' } }
  },
  paladin: { name: 'Paladin', description: 'Holy warrior of the oath.', primaryAbility: 'Strength and Charisma',
    subclasses: { devotion: { name: 'Oath of Devotion', description: 'Protection of the innocent.' }, ancients: { name: 'Oath of the Ancients', description: 'Protection of nature and life.' }, vengeance: { name: 'Oath of Vengeance', description: 'Hunting enemies.' }, redemption: { name: 'Oath of Redemption', description: 'Peacemaker and protector.' } }
  },
  ranger: { name: 'Ranger', description: 'Hunter and survivalist.', primaryAbility: 'Dexterity and Wisdom',
    subclasses: { hunter: { name: 'Hunter', description: 'Damage to one or multiple targets.' }, beast_master: { name: 'Beast Master', description: 'Loyal beast companion.' }, gloom_stalker: { name: 'Gloom Stalker', description: 'Master of ambush in darkness.' }, fey_wanderer: { name: 'Fey Wanderer', description: 'Charm and teleportation.' } }
  },
  monk: { name: 'Monk', description: 'Master of martial arts.', primaryAbility: 'Dexterity and Wisdom',
    subclasses: { open_hand: { name: 'Way of the Open Hand', description: 'Deadly unarmed techniques.' }, shadow: { name: 'Way of Shadow', description: 'Ninja teleporting through shadows.' }, mercy: { name: 'Way of Mercy', description: 'Healing and poison.' }, astral_self: { name: 'Way of the Astral Self', description: 'Attacks with spectral arms.' } }
  },
  warlock: { name: 'Warlock', description: 'Made a pact with an entity.', primaryAbility: 'Charisma',
    subclasses: { fiend: { name: 'The Fiend', description: 'Power from demons, fire and temp HP.' }, archfey: { name: 'The Archfey', description: 'Charm and illusions.' }, hexblade: { name: 'Hexblade', description: 'Magical weapon and Charisma attacks.' }, great_old_one: { name: 'Great Old One', description: 'Telepathy and terror.' } }
  },
  sorcerer: { name: 'Sorcerer', description: 'Magic in the blood, metamagic.', primaryAbility: 'Charisma',
    subclasses: { draconic: { name: 'Draconic Bloodline', description: 'Elemental resistance, scales.' }, wild_magic: { name: 'Wild Magic', description: 'Random surges of magic.' }, divine_soul: { name: 'Divine Soul', description: 'Access to cleric spells.' }, storm: { name: 'Storm Sorcerer', description: 'Control of wind and lightning.' } }
  },
  bard: { name: 'Bard', description: 'Musician-spellcaster and inspirer.', primaryAbility: 'Charisma',
    subclasses: { lore: { name: 'College of Lore', description: 'More spells and skills.' }, valor: { name: 'College of Valor', description: 'Battle bard with armor.' }, glamour: { name: 'College of Glamour', description: 'Charm and support.' }, whispers: { name: 'College of Whispers', description: 'Psychic damage and deception.' } }
  },
  artificer: { name: 'Artificer', description: 'Master of magical devices.', primaryAbility: 'Intelligence',
    subclasses: { alchemist: { name: 'Alchemist', description: 'Elixirs and potions.' }, armorer: { name: 'Armorer', description: 'Magical armor with weapons.' }, artillerist: { name: 'Artillerist', description: 'Magical cannons.' }, battle_smith: { name: 'Battle Smith', description: 'Steel defender and Intelligence attacks.' } }
  },
  blood_hunter: { name: 'Blood Hunter', description: 'Sacrifices life force for power.', primaryAbility: 'Strength or Dexterity',
    subclasses: { ghostslayer: { name: 'Ghostslayer', description: 'Damage against undead and spirits.' }, mutant: { name: 'Mutant', description: 'Mutagens for stat enhancement.' }, lycan: { name: 'Lycan', description: 'Transformation into hybrid beast.' }, profane_soul: { name: 'Profane Soul', description: 'Spells from dark forces.' } }
  },
  mystic: { name: 'Mystic', description: 'Uses the power of the mind.', primaryAbility: 'Intelligence',
    subclasses: { wu_jen: { name: 'Wu Jen', description: 'Elemental control with the mind.' }, immortal: { name: 'Immortal', description: 'Regeneration and body enhancement.' }, nomad: { name: 'Nomad', description: 'Teleportation and spatial anomalies.' }, awakened: { name: 'Awakened', description: 'Mind reading and mental control.' } }
  },
  witch_hunter: { name: 'Witch Hunter', description: 'Monster hunter with alchemical elixirs and monster knowledge.', primaryAbility: 'Strength and Intelligence',
    subclasses: { griffin_school: { name: 'School of the Griffin', description: 'Focus on combat acrobatics and aerial attacks.' }, bear_school: { name: 'School of the Bear', description: 'Heavy armor and endurance.' }, cat_school: { name: 'School of the Cat', description: 'Agility and swift attacks.' }, viper_school: { name: 'School of the Viper', description: 'Poisons and stealth.' } }
  },
  spirit_blade: { name: 'Spirit Blade', description: 'Summons weapons from souls and controls spiritual energy.', primaryAbility: 'Wisdom and Charisma',
    subclasses: { guardian: { name: 'Guardian', description: 'Protects allies with spectral barriers.' }, revenant: { name: 'Revenant', description: 'Extra damage to weakened enemies.' }, harbinger: { name: 'Harbinger', description: 'Summons spirits for scouting and control.' }, soulbinder: { name: 'Soulbinder', description: 'Absorbs souls to restore power.' } }
  },
  rune_master: { name: 'Rune Master', description: 'Carves runes on items and body for magical effects.', primaryAbility: 'Intelligence',
    subclasses: { creation: { name: 'Path of Creation', description: 'Buffing allies and creating defenses.' }, destruction: { name: 'Path of Destruction', description: 'Runes explode dealing damage.' }, transformation: { name: 'Path of Transformation', description: 'Alters body using runes.' }, knowledge: { name: 'Path of Knowledge', description: 'Runes reveal ancient secrets.' } }
  },
  inquisitor: { name: 'Inquisitor', description: 'Religious detective tracking heretics and dark creatures.', primaryAbility: 'Wisdom and Intelligence',
    subclasses: { purifier: { name: 'Purifier', description: 'Banishing undead and demons.' }, interrogator: { name: 'Interrogator', description: 'Mind reading and compelling truth.' }, witchfinder: { name: 'Witchfinder', description: 'Detecting magic and forbidden rituals.' }, fanatic: { name: 'Fanatic', description: 'Empowering allies through religious zeal.' } }
  },
  arcanist: { name: 'Arcanist', description: 'Combines divine and arcane magic using prayers and spells.', primaryAbility: 'Intelligence and Wisdom',
    subclasses: { theurge: { name: 'Theurge', description: 'Mixes cleric and wizard spells.' }, eldritch_weaver: { name: 'Eldritch Weaver', description: 'Creates combined spells.' }, divine_savant: { name: 'Divine Savant', description: 'Access to all schools of magic.' }, arcane_devotee: { name: 'Arcane Devotee', description: 'Empowers spells with deity support.' } }
  },
  dark_knight: { name: 'Dark Knight', description: 'Absorbs darkness and deals devastating negative energy strikes.', primaryAbility: 'Strength and Constitution',
    subclasses: { void_reaver: { name: 'Void Reaver', description: 'Attacks leaving necrotic wounds.' }, shadow_wall: { name: 'Shadow Wall', description: 'Protects allies by covering them with shadow.' }, nightmare: { name: 'Nightmare', description: 'Instilling terror in enemies.' }, death_lord: { name: 'Death Lord', description: 'Summons spectral servants.' } }
  },
  elementalist: { name: 'Elementalist', description: 'Direct control of elements: fire, water, earth, air.', primaryAbility: 'Wisdom',
    subclasses: { pyromancer: { name: 'Pyromancer', description: 'Fire magic in all forms.' }, hydromancer: { name: 'Hydromancer', description: 'Control of water and cold.' }, geomancer: { name: 'Geomancer', description: 'Control of earth and stone.' }, aeromancer: { name: 'Aeromancer', description: 'Wind and lightning.' } }
  },
  plutocrat: { name: 'Plutocrat', description: 'Uses wealth and connections to influence the battlefield, hiring helpers.', primaryAbility: 'Intelligence and Charisma',
    subclasses: { tactician: { name: 'Tactician', description: 'Gives orders granting bonuses to allies.' }, employer: { name: 'Employer', description: 'Hires mercenary bodyguards.' }, financier: { name: 'Financier', description: 'Uses gold for magic and sabotage.' }, schemer: { name: 'Schemer', description: 'Controls enemies through manipulation.' } }
  },
  biomancer: { name: 'Biomancer', description: 'Alters living organisms and own flesh for combat.', primaryAbility: 'Intelligence and Constitution',
    subclasses: { fleshweaver: { name: 'Fleshweaver', description: 'Healing and buffing allies.' }, mutagenist: { name: 'Mutagenist', description: 'Combat mutations with instability risk.' }, plaguebearer: { name: 'Plaguebearer', description: 'Spreads diseases among enemies.' }, symbiotic: { name: 'Symbiont', description: 'Creates parasites for attack.' } }
  },
  dreamcatcher: { name: 'Dreamcatcher', description: 'Controls dreams and nightmares to torment opponents.', primaryAbility: 'Wisdom and Charisma',
    subclasses: { nightmare_weaver: { name: 'Nightmare Weaver', description: 'Deals psychic damage in dreams.' }, dream_healer: { name: 'Dream Healer', description: 'Restores allies through dreams.' }, prophet: { name: 'Prophet', description: 'Foresees the future in trance.' }, lucid_warrior: { name: 'Lucid Warrior', description: 'Enters combat trance in dreams.' } }
  },
  warden: { name: 'Warden', description: 'Nature guardian using earth power for protection.', primaryAbility: 'Constitution and Wisdom',
    subclasses: { earth_guardian: { name: 'Earth Guardian', description: 'Increases endurance and defense.' }, storm_sentinel: { name: 'Storm Sentinel', description: 'Electric attacks and weather control.' }, blooming_ward: { name: 'Blooming Ward', description: 'Healing allies with plants.' }, frost_warden: { name: 'Frost Warden', description: 'Slowing enemies with ice shackles.' } }
  },
  sacred_fist: { name: 'Sacred Fist', description: 'Monk who received divine powers.', primaryAbility: 'Dexterity and Wisdom',
    subclasses: { radiant_palm: { name: 'Radiant Palm', description: 'Deals radiant damage.' }, shadow_strike: { name: 'Shadow Strike', description: 'Stealth and sneak attacks.' }, healing_hand: { name: 'Healing Hand', description: 'Healing by touch.' }, vow_of_poverty: { name: 'Vow of Poverty', description: 'Gives up equipment for bonuses.' } }
  },
  spellthief: { name: 'Spellthief', description: 'Stealthy thief who steals spells and magical energy.', primaryAbility: 'Dexterity and Intelligence',
    subclasses: { arcane_siphon: { name: 'Arcane Siphon', description: 'Absorbs spells and converts to damage.' }, identity_thief: { name: 'Identity Thief', description: 'Steals appearance and abilities.' }, shadow_scout: { name: 'Shadow Scout', description: 'Teleportation and invisibility.' }, curse_spitter: { name: 'Curse Spitter', description: 'Returns enemy magic with debuffs.' } }
  },
  magewright: { name: 'Magewright', description: 'Combines craft skills with magic to create temporary artifacts.', primaryAbility: 'Intelligence',
    subclasses: { enchanter: { name: 'Enchanter', description: 'Temporarily improves weapons and armor.' }, golem_builder: { name: 'Golem Builder', description: 'Creates magical servants.' }, potioneer: { name: 'Potioneer', description: 'Enhanced potions and elixirs.' }, trap_master: { name: 'Trap Master', description: 'Magical mines and traps.' } }
  },
  demonologist: { name: 'Demonologist', description: 'Summons and controls demons, risking own soul.', primaryAbility: 'Intelligence and Charisma',
    subclasses: { summoner: { name: 'Summoner', description: 'Calls powerful demons to help.' }, binder: { name: 'Binder', description: 'Binds demons into items.' }, corruptor: { name: 'Corruptor', description: 'Weakens enemies with dark energy.' }, hellfire: { name: 'Hellfire', description: 'Attacks with infernal fire.' } }
  },
  seraph: { name: 'Seraph', description: 'Mortal empowered by higher planes.', primaryAbility: 'Strength and Charisma',
    subclasses: { wings_of_light: { name: 'Wings of Light', description: 'Flight and aerial attacks.' }, holy_ward: { name: 'Holy Ward', description: 'Protecting allies from evil.' }, judgement: { name: 'Judgement', description: 'Powerful radiant attacks.' }, redemption: { name: 'Redemption', description: 'Routing enemies.' } }
  },
  shadowcaster: { name: 'Shadowcaster', description: 'Draws power from the Plane of Shadow.', primaryAbility: 'Intelligence or Charisma',
    subclasses: { umbral_weaver: { name: 'Umbral Weaver', description: 'Creates tangible shadows.' }, night_stalker: { name: 'Night Stalker', description: 'Stealth and damage from darkness.' }, void_caller: { name: 'Void Caller', description: 'Summons creatures from shadows.' }, eclipse: { name: 'Eclipse', description: 'Weakens enemies by extinguishing light.' } }
  },
  lycanthrope: { name: 'Lycanthrope', description: 'Character capable of assuming a hybrid beast form.', primaryAbility: 'Strength or Dexterity',
    subclasses: { wolf: { name: 'Wolf', description: 'Pack tactics and claw damage.' }, bear: { name: 'Bear', description: 'Resilience and powerful attacks.' }, tiger: { name: 'Tiger', description: 'Speed and leaps.' }, rat: { name: 'Rat', description: 'Evasiveness and diseases.' } }
  },
  samurai: { name: 'Samurai', description: 'Sword master with iron discipline and spirit.', primaryAbility: 'Strength or Dexterity',
    subclasses: { kensei: { name: 'Kensei', description: 'Weapon master.' }, shogun: { name: 'Shogun', description: 'Leadership abilities and tactics.' }, ronin: { name: 'Ronin', description: 'Masterless fighter, resilient and armored.' }, sohei: { name: 'Sohei', description: 'Warrior-monk with divine support.' } }
  },
  mentalist: { name: 'Mentalist', description: 'Affects minds, creating illusions and controlling thoughts.', primaryAbility: 'Intelligence and Charisma',
    subclasses: { hypnotist: { name: 'Hypnotist', description: 'Suggestion and sleep.' }, telepath: { name: 'Telepath', description: 'Mind reading and remote link.' }, illusionist: { name: 'Illusionist', description: 'Realistic illusions.' }, emotional: { name: 'Empath', description: 'Controls emotions for buffs/debuffs.' } }
  },
  oathbreaker: { name: 'Oathbreaker', description: 'Paladin who rejected his oath for dark power.', primaryAbility: 'Strength and Charisma',
    subclasses: { death_knight: { name: 'Death Knight', description: 'Undead control and necrotic damage.' }, tyrant: { name: 'Tyrant', description: 'Control over the weak through fear.' }, fallen_angel: { name: 'Fallen Angel', description: 'Dark radiance and wings.' }, desecrator: { name: 'Desecrator', description: 'Destroys sanctuaries and heals from evil.' } }
  },
  fatalist: { name: 'Fatalist', description: 'Reads fate threads and places curses.', primaryAbility: 'Wisdom',
    subclasses: { fortune_teller: { name: 'Fortune Teller', description: 'Predicts outcomes, granting advantage.' }, curse_bearer: { name: 'Curse Bearer', description: 'Inflicts curses on enemies.' }, fate_weaver: { name: 'Fate Weaver', description: 'Alters probabilities.' }, doombringer: { name: 'Doombringer', description: 'Increases damage against doomed targets.' } }
  },
  jester: { name: 'Jester', description: 'Brings chaos to the battlefield with mockery and tricks.', primaryAbility: 'Dexterity and Charisma',
    subclasses: { trickster: { name: 'Trickster', description: 'Illusions and deception.' }, acrobat: { name: 'Acrobat', description: 'Evasion and quick attacks.' }, harlequin: { name: 'Harlequin', description: 'Energizes allies with laughter.' }, prankster: { name: 'Prankster', description: 'Traps and surprises for enemies.' } }
  },
  hunter_ranger: { name: 'Ranger (Hunter)', description: 'Expert in survival and tracking.', primaryAbility: 'Dexterity and Wisdom',
    subclasses: { big_game: { name: 'Big Game Hunter', description: 'Enhanced damage against large targets.' }, trapper: { name: 'Trapper', description: 'Setting snares and ambushes.' }, falconer: { name: 'Falconer', description: 'Loyal falcon companion.' }, survivalist: { name: 'Survivalist', description: 'Immunity to extreme environments.' } }
  },
  blood_mage: { name: 'Blood Mage', description: 'Uses life force to empower spells.', primaryAbility: 'Intelligence or Constitution',
    subclasses: { hemomancer: { name: 'Hemomancer', description: 'Controls enemy blood.' }, sacrificial: { name: 'Sacrificial Priest', description: 'Empowers spells at cost of HP.' }, plague_doctor: { name: 'Plague Doctor', description: 'Diseases and cures.' }, marrow_mage: { name: 'Marrow Mage', description: 'Strengthens body using blood.' } }
  }
};



// ========== SPELL TRANSLATIONS ==========
const spellTranslations = {
  // Cantrips (Level 0)
  acid_splash: { name: 'Acid Splash', description: 'You hurl a bubble of acid. One creature or two targets within 5 ft must make a Dexterity save or take 1d6 acid damage.' },
  chill_touch: { name: 'Chill Touch', description: 'A ghostly hand attacks the target. On hit — 1d8 necrotic damage, target cannot regain HP until start of your next turn.' },
  dancing_lights: { name: 'Dancing Lights', description: 'You create up to four torch-sized floating lights that move at your command.' },
  fire_bolt: { name: 'Fire Bolt', description: 'You hurl a mote of fire. Ranged spell attack, 1d10 fire damage.' },
  light: { name: 'Light', description: 'You touch an object, and it sheds bright light in a 20 ft radius and dim light for an additional 20 ft.' },
  mage_hand: { name: 'Mage Hand', description: 'A spectral hand appears that can manipulate objects at a distance of up to 30 ft.' },
  minor_illusion: { name: 'Minor Illusion', description: 'You create a sound or image of an object within 30 ft for 1 minute.' },
  poison_spray: { name: 'Poison Spray', description: 'Target must make a Constitution save or take 1d12 poison damage.' },
  prestidigitation: { name: 'Prestidigitation', description: 'Minor magical tricks: light/extinguish a candle, clean an object, create harmless sensory effects, etc.' },
  ray_of_frost: { name: 'Ray of Frost', description: 'An icy beam reduces target speed by 10 ft and deals 1d8 cold damage.' },
  shocking_grasp: { name: 'Shocking Grasp', description: 'Lightning strikes target on touch. Advantage if target wears metal armor. 1d8 lightning damage, target loses reaction.' },
  thorn_whip: { name: 'Thorn Whip', description: 'You create a long thorny vine that strikes a target up to 30 ft away, dealing 1d6 piercing damage and pulling it 10 ft closer.' },
  vicious_mockery: { name: 'Vicious Mockery', description: 'A stream of insults. Target must make Wisdom save or take 1d4 psychic damage and have disadvantage on next attack.' },
  guidance: { name: 'Guidance', description: 'You grant an ally a 1d4 bonus to one ability check of their choice within 1 minute.' },
  resistance: { name: 'Resistance', description: 'You touch a creature, granting it a 1d4 bonus to one saving throw. Concentration up to 1 minute.' },
  sacred_flame: { name: 'Sacred Flame', description: 'Radiance descends from above. Target must make Dexterity save or take 1d8 radiant damage.' },
  thaumaturgy: { name: 'Thaumaturgy', description: 'Minor divine wonders: voice booms, flames flicker, ground trembles, etc.' },
  eldritch_blast: { name: 'Eldritch Blast', description: 'A beam of crackling energy. Ranged spell attack, 1d10 force damage. Creates additional beams at higher levels.' },
  mending: { name: 'Mending', description: 'You repair a small break or tear in an object (up to 1 foot).' },
  message: { name: 'Message', description: 'You whisper a message to a creature within 120 ft, and it can reply.' },
  // Level 1
  magic_missile: { name: 'Magic Missile', description: 'Three glowing darts automatically hit targets, each dealing 1d4+1 force damage.' },
  burning_hands: { name: 'Burning Hands', description: 'A 15-foot cone of fire erupts from your hands. Creatures take 3d6 fire damage (Dex save halves).' },
  charm_person: { name: 'Charm Person', description: 'A humanoid within 30 ft must succeed on Wisdom save or be charmed by you for 1 hour.' },
  color_spray: { name: 'Color Spray', description: 'A dazzling array of flashing colors blinds creatures with the fewest HP in a 15-ft cone for 1 round.' },
  cure_wounds: { name: 'Cure Wounds', description: 'Touch a creature and restore 1d8 + spellcasting modifier hit points.' },
  detect_magic: { name: 'Detect Magic', description: 'You sense magic within 30 ft and can determine its school.' },
  disguise_self: { name: 'Disguise Self', description: 'You change your appearance including clothing and equipment for 1 hour.' },
  faerie_fire: { name: 'Faerie Fire', description: 'You outline creatures in an area with light. They cannot become invisible, attacks against them have advantage.' },
  feather_fall: { name: 'Feather Fall', description: 'You and up to five creatures within 60 ft slow your falling rate to 60 ft per round.' },
  fog_cloud: { name: 'Fog Cloud', description: 'You create a 20-ft radius sphere of thick fog that heavily obscures the area.' },
  grease: { name: 'Grease', description: 'You cover the ground in a 10-ft square with slippery grease. Creatures must succeed Dex save or fall prone.' },
  healing_word: { name: 'Healing Word', description: 'As a bonus action, restore 1d4 + spellcasting modifier HP to a visible creature.' },
  inflict_wounds: { name: 'Inflict Wounds', description: 'By touch, deal 3d10 necrotic damage.' },
  mage_armor: { name: 'Mage Armor', description: 'You give an unarmored creature magical protection, its AC becomes 13 + Dex modifier for 8 hours.' },
  shield: { name: 'Shield', description: 'As a reaction, create a magical barrier granting +5 AC until the start of your next turn.' },
  sleep: { name: 'Sleep', description: 'You put creatures in a 20-ft area to sleep, starting with those with fewest HP, up to 5d8 total.' },
  thunderwave: { name: 'Thunderwave', description: 'A wave of thunder in a 15-ft cube. Creatures take 2d8 thunder damage and are pushed 10 ft.' },
  witch_bolt: { name: 'Witch Bolt', description: 'A lightning arc connects you to target. Concentration: action to auto-deal 1d12 lightning each turn.' },
  bless: { name: 'Bless', description: 'Grant three allies a 1d4 bonus to attack rolls and saving throws for 1 minute (concentration).' },
  command: { name: 'Command', description: 'You give a one-word command ("Drop", "Flee", "Grovel"). On failed Wisdom save, target obeys for 1 round.' },
  armor_of_agathys: { name: 'Armor of Agathys', description: 'You gain 5 temp HP; while they remain, melee attackers take 5 cold damage.' },
  bane: { name: 'Bane', description: 'Three targets within 30 ft must subtract 1d4 from attack rolls and saving throws.' },
  expeditious_retreat: { name: 'Expeditious Retreat', description: 'As bonus action you can Dash for 10 minutes (concentration).' },
  hellish_rebuke: { name: 'Hellish Rebuke', description: 'As a reaction when damaged, target within 60 ft must make Dex save or take 2d10 fire damage.' },
  heroism: { name: 'Heroism', description: 'Ally gains temp HP equal to your spellcasting modifier each turn and immunity to fear for 1 minute.' },
  ice_knife: { name: 'Ice Knife', description: 'Hurl an ice shard. On hit — 1d10 piercing, then cold explosion for 2d6 (Dex save) within 5 ft.' },
  tashas_hideous_laughter: { name: "Tasha's Hideous Laughter", description: 'Target falls prone laughing, incapacitated until it succeeds on Wisdom save at end of its turn.' },
  wrathful_smite: { name: 'Wrathful Smite', description: 'Next weapon attack deals extra 1d6 psychic damage and frightens target (Wisdom save).' },
  zephyr_strike: { name: 'Zephyr Strike', description: 'For 1 minute you don\'t provoke opportunity attacks, and one weapon attack gains advantage plus 1d8 force damage.' },
  // Level 2
  acid_arrow: { name: 'Acid Arrow', description: 'Launch an acid arrow. Ranged spell attack, 4d4 acid immediately and 2d4 at end of target\'s next turn.' },
  blur: { name: 'Blur', description: 'Your body becomes blurred. Attackers have disadvantage for 1 minute (concentration).' },
  darkness: { name: 'Darkness', description: 'You create a 15-ft radius sphere of magical darkness through which normal and darkvision cannot see.' },
  flaming_sphere: { name: 'Flaming Sphere', description: 'You create a 5-ft fire ball that you can move and ram enemies, dealing 2d6 fire damage.' },
  hold_person: { name: 'Hold Person', description: 'Humanoid within 60 ft must succeed Wisdom save or be paralyzed for 1 minute (concentration).' },
  invisibility: { name: 'Invisibility', description: 'You become invisible for 1 hour (concentration) until you attack or cast another spell.' },
  mirror_image: { name: 'Mirror Image', description: 'You create 3 illusory duplicates. Attacks targeting you may hit a duplicate instead (d20 roll).' },
  misty_step: { name: 'Misty Step', description: 'As a bonus action, teleport up to 30 ft to an unoccupied space you can see.' },
  scorching_ray: { name: 'Scorching Ray', description: 'You create three fire rays, each ranged spell attack dealing 2d6 fire damage.' },
  shatter: { name: 'Shatter', description: 'A loud ringing in a 10-ft radius deals 3d8 thunder damage and shatters fragile objects.' },
  suggestion: { name: 'Suggestion', description: 'You suggest a course of action (1-2 sentences). On failed Wisdom save, target follows for up to 8 hours.' },
  web: { name: 'Web', description: 'You fill an area with sticky webs. Creatures entering must make Strength saves or be restrained.' },
  spiritual_weapon: { name: 'Spiritual Weapon', description: 'You create a hovering weapon that strikes enemies within 60 ft. Bonus action to attack (1d8 + mod force).' },
  moonbeam: { name: 'Moonbeam', description: 'A silver beam descends, dealing 2d10 radiant damage to creatures starting their turn in the zone.' },
  pass_without_trace: { name: 'Pass without Trace', description: 'You and up to ten allies gain +10 to Stealth checks for 1 hour.' },
  silence: { name: 'Silence', description: 'You create a 20-ft sphere where no sound can be created and creatures are immune to thunder damage for 10 minutes.' },
  blindness_deafness: { name: 'Blindness/Deafness', description: 'Target must make Con save or be blinded or deafened (your choice) for 1 minute.' },
  enhance_ability: { name: 'Enhance Ability', description: 'Touch a creature and give it advantage on checks of one chosen ability for 1 hour.' },
  find_traps: { name: 'Find Traps', description: 'You sense the presence of traps within 120 ft, but not their exact location.' },
  knock: { name: 'Knock', description: 'You open a locked lock, door, or container within 60 ft, including those sealed by magic.' },
  // Level 3
  fireball: { name: 'Fireball', description: 'A bright flash in a 20-ft radius explosion deals 8d6 fire damage (Dex save halves).' },
  lightning_bolt: { name: 'Lightning Bolt', description: 'A bolt of lightning in a 100-ft line deals 8d6 lightning damage (Dex save halves).' },
  haste: { name: 'Haste', description: 'Creature gains +2 AC, advantage on Dex saves, additional action (Attack, Dash, Disengage, Use Object) for 1 minute (conc.).' },
  slow: { name: 'Slow', description: 'Up to six creatures in a 40-ft cube are slowed: -2 AC, -2 Dex saves, only action or bonus action, one attack per turn.' },
  fly: { name: 'Fly', description: 'You give a creature 60 ft flying speed for 10 minutes (concentration).' },
  counterspell: { name: 'Counterspell', description: 'You interrupt spellcasting. Spells of 3rd level or lower automatically fail; higher require an ability check (DC 10 + level).' },
  dispel_magic: { name: 'Dispel Magic', description: 'You end one spell of 3rd level or lower on a target. Higher levels require an ability check.' },
  fear: { name: 'Fear', description: 'You instill terror in a 30-ft cone. Creatures failing Wisdom save drop weapons and flee for 1 minute.' },
  stinking_cloud: { name: 'Stinking Cloud', description: 'A 20-ft radius cloud of noxious gas. Creatures inside must succeed Con save or spend action retching.' },
  tongues: { name: 'Tongues', description: 'You can understand and speak any language for 1 hour.' },
  vampiric_touch: { name: 'Vampiric Touch', description: 'Touch deals 3d6 necrotic and heals you for half. Can repeat action each turn for 1 minute.' },
  animate_dead: { name: 'Animate Dead', description: 'You create a zombie or skeleton from a humanoid corpse. They obey your commands for 24 hours.' },
  bestow_curse: { name: 'Bestow Curse', description: 'You touch a creature and place a curse (disadvantage on checks, saves or attacks, or extra 1d8 damage).' },
  clairvoyance: { name: 'Clairvoyance', description: 'You create an invisible sensor at a known location within 1 mile through which you can see or hear for 10 min.' },
  gaseous_form: { name: 'Gaseous Form', description: 'You transform a willing creature into a misty cloud with 10 ft fly speed that can pass through small openings.' },
  hypnotic_pattern: { name: 'Hypnotic Pattern', description: 'A multicolored pattern in a 30-ft cube. Creatures must succeed Wisdom save or be charmed and incapacitated.' },
  remove_curse: { name: 'Remove Curse', description: 'You touch a creature or object and end all curses on it.' },
  speak_with_dead: { name: 'Speak with Dead', description: 'You ask up to 5 questions to a dead body, whose spirit can answer using knowledge it had in life.' },
  spirit_guardians: { name: 'Spirit Guardians', description: 'You summon spirits around you for 10 min. Enemies within 15 ft treat area as difficult terrain and take 3d8 radiant damage.' },
  water_breathing: { name: 'Water Breathing', description: 'You grant up to ten creatures the ability to breathe underwater for 24 hours.' },
  // Level 4
  arcane_eye: { name: 'Arcane Eye', description: 'You create an invisible flying eye that transmits visual information to you for 1 hour.' },
  banishment: { name: 'Banishment', description: 'You try to send a creature to another plane. On failed Charisma save, target vanishes for 1 min (permanently if from another plane).' },
  blight: { name: 'Blight', description: 'You drain moisture from a creature, dealing 8d8 necrotic damage (Con save halves).' },
  dimension_door: { name: 'Dimension Door', description: 'You teleport to a visible location up to 500 ft away and can bring one willing creature.' },
  greater_invisibility: { name: 'Greater Invisibility', description: 'Target becomes invisible for 1 minute (concentration), even while attacking or casting spells.' },
  ice_storm: { name: 'Ice Storm', description: 'Hail and ice in a 20-ft radius cylinder. Creatures take 2d8 bludgeoning + 4d6 cold damage (Dex save halves).' },
  polymorph: { name: 'Polymorph', description: 'You transform a creature into a beast of equal or lower CR. Reverts when reduced to 0 HP.' },
  wall_of_fire: { name: 'Wall of Fire', description: 'You create a wall of fire 60 ft long and 20 ft high. Creatures within 10 ft take 5d8 fire damage (Dex save halves).' },
  // Level 5
  animate_objects: { name: 'Animate Objects', description: 'You animate up to 10 small objects that can attack enemies, each dealing 1d4+4 damage.' },
  cloudkill: { name: 'Cloudkill', description: 'A 20-ft radius toxic fog deals 5d8 poison damage (Con save halves) and moves 10 ft each turn.' },
  cone_of_cold: { name: 'Cone of Cold', description: 'A 60-ft cone of freezing air deals 8d8 cold damage (Con save halves).' },
  hold_monster: { name: 'Hold Monster', description: 'Like Hold Person but works on any creature. Target must succeed Wisdom save or be paralyzed.' },
  telekinesis: { name: 'Telekinesis', description: 'You move a creature or object up to 1000 lbs with your mind, or restrain a creature (Str check to resist).' },
  wall_of_force: { name: 'Wall of Force', description: 'You create an invisible, indestructible wall up to 100 square feet. Nothing can pass through it.' },
  // Level 6
  chain_lightning: { name: 'Chain Lightning', description: 'Lightning arcs to a target dealing 10d8 damage, then jumps to 3 more targets for 10d8 each (Dex save halves).' },
  disintegrate: { name: 'Disintegrate', description: 'A green ray deals 10d6+40 force damage. If reduced to 0 HP, creature is completely disintegrated.' },
  globe_of_invulnerability: { name: 'Globe of Invulnerability', description: 'A shimmering barrier blocks all spells of 5th level or lower for 1 minute.' },
  mass_suggestion: { name: 'Mass Suggestion', description: 'You suggest a course of action to up to 12 creatures. On failed Wisdom save, they comply for 24 hours.' },
  // Level 7
  delayed_blast_fireball: { name: 'Delayed Blast Fireball', description: 'A bead of fire that can be held for up to 1 minute, then explodes for 12d6+ fire damage in a 20-ft radius.' },
  finger_of_death: { name: 'Finger of Death', description: 'You send negative energy through a creature dealing 7d8+30 necrotic damage. Humanoid killed rises as zombie under your control.' },
  teleport: { name: 'Teleport', description: 'You instantly transport yourself and up to 8 willing creatures to a destination you know.' },
  // Level 8
  dominate_monster: { name: 'Dominate Monster', description: 'You take control of a creature (Wisdom save). You can issue commands telepathically for up to 1 hour.' },
  power_word_stun: { name: 'Power Word Stun', description: 'If target has 150 HP or fewer, it is stunned. It can make Con saves at end of each turn to end the effect.' },
  sunburst: { name: 'Sunburst', description: 'Brilliant sunlight in a 60-ft radius deals 12d6 radiant damage and blinds for 1 minute (Con save halves/negates blind).' },
  // Level 9
  meteor_swarm: { name: 'Meteor Swarm', description: 'Four 40-ft radius meteors crash down. Each creature in area takes 20d6 fire + 20d6 bludgeoning (Dex save halves).' },
  power_word_kill: { name: 'Power Word Kill', description: 'If target has 100 HP or fewer, it dies instantly. No save.' },
  wish: { name: 'Wish', description: 'The mightiest spell. You can duplicate any 8th-level or lower spell, or create nearly any effect imaginable.' },
  time_stop: { name: 'Time Stop', description: 'You briefly stop time for everyone but yourself, taking 1d4+1 extra turns in a row.' },
  true_resurrection: { name: 'True Resurrection', description: 'You restore life to a creature that has died within the last 200 years, even if no body remains.' },
  // === Level 0 (Cantrips) - 15 spells ===
  arcane_fusillade: { name: 'Arcane Fusillade', description: 'You launch three shimmering projectiles of pure magic at one target within 60 feet. Each projectile deals 1d4 force damage. The number of projectiles increases by 1 at 5th (4), 11th (5), and 17th (6) level.' },
  frost_lash: { name: 'Frost Lash', description: 'You create a whip of frozen water 10 feet long. Make a melee spell attack. On a hit, the target takes 1d8 cold damage and its speed is reduced by 10 feet until the start of your next turn. Damage increases at 5th (2d8), 11th (3d8), and 17th (4d8) level.' },
  shadow_needle: { name: 'Shadow Needle', description: 'You form a needle of condensed shadow and hurl it at a creature within 60 feet. The target must succeed on a Dexterity saving throw or take 1d6 necrotic damage and have disadvantage on its next attack roll until the end of its turn. Damage increases at 5th (2d6), 11th (3d6), and 17th (4d6) level.' },
  stone_fist: { name: 'Stone Fist', description: 'You coat your fist in a layer of magical stone. Make a melee spell attack. On a hit, the target takes 1d10 bludgeoning damage. If the target is a construct or object, the damage is doubled. Damage increases at 5th (2d10), 11th (3d10), and 17th (4d10) level.' },
  wind_slash: { name: 'Wind Slash', description: 'You swing your hand and send a blade of compressed air in a line 15 feet long and 5 feet wide. Each creature in the area must succeed on a Dexterity saving throw or take 1d6 slashing damage. Damage increases at 5th (2d6), 11th (3d6), and 17th (4d6) level.' },
  spark_shield: { name: 'Spark Shield', description: 'You surround yourself with a halo of crackling sparks until the end of your next turn. When a creature within 5 feet deals damage to you with a melee attack, it takes 1d4 lightning damage. Damage increases at 5th (2d4), 11th (3d4), and 17th (4d4) level.' },
  mending_touch: { name: 'Mending Touch', description: 'You touch a creature and channel a drop of life energy into it. The target regains 1 hit point. This spell has no effect on undead or constructs. Hit points restored increase at 5th (2), 11th (3), and 17th (4) level.' },
  phantom_echo: { name: 'Phantom Echo', description: 'You create an echo of a sound you heard within the last hour. The echo originates from a point within 30 feet of you and lasts up to 1 minute. You can control the volume from a whisper to a shout. Creatures can identify the illusion with an Investigation check (DC equals your spell save DC).' },
  verdant_grasp: { name: 'Verdant Grasp', description: 'You cause a vine to grow from the ground and grab a creature within 30 feet. The target must succeed on a Strength saving throw or become restrained until the end of your next turn. The restrained creature can use an action to make a Strength check against your spell save DC to break free.' },
  ember_dance: { name: 'Ember Dance', description: 'You cause smoldering embers to swirl around one creature within 30 feet for 1 minute. The creature sheds dim light in a 10-foot radius and gains advantage on saving throws against cold effects. Concentration is not required.' },
  whisper_of_dread: { name: 'Whisper of Dread', description: 'You whisper words of fear to a creature within 30 feet that can hear you. The target must succeed on a Wisdom saving throw or take 1d6 psychic damage and become frightened of you until the end of your next turn. Damage increases at 5th (2d6), 11th (3d6), and 17th (4d6) level.' },
  magnetic_pull: { name: 'Magnetic Pull', description: 'You create a magnetic force that attracts a metal object weighing up to 5 pounds within 30 feet to your hand. If the object is held by a creature, it must succeed on a Strength saving throw or drop it. The object flies to you in a straight line.' },
  gloom_veil: { name: 'Gloom Veil', description: 'You shroud yourself in a veil of shadow until the end of your next turn. Ranged weapon attacks against you have disadvantage. The spell dissipates if you attack or cast a spell.' },
  static_charge: { name: 'Static Charge', description: 'You charge one creature\'s weapon within touch range with static electricity for 1 minute. The next successful attack with that weapon deals an additional 1d4 lightning damage. Additional damage increases at 5th (2d4), 11th (3d4), and 17th (4d4) level.' },
  bone_chill_aura: { name: 'Bone Chill Aura', description: 'You emanate an aura of otherworldly cold in a 5-foot radius until the start of your next turn. Creatures ending their turn in this area must succeed on a Constitution saving throw or take 1d4 necrotic damage. Damage increases at 5th (2d4), 11th (3d4), and 17th (4d4) level.' },

  // === Level 1 - 20 spells ===
  arcane_arrow: { name: 'Arcane Arrow', description: 'You create a glowing arrow of pure energy and launch it at a creature within 120 feet. Make a ranged spell attack. On a hit, the target takes 2d10 force damage. At higher levels: damage increases by 1d10 for each slot level above 1st.' },
  blood_ward: { name: 'Blood Ward', description: 'You inscribe a blood rune on your skin. For 1 hour, when you take damage, you can use your reaction to reduce it by 1d6 + your spellcasting ability modifier. The spell ends after 3 uses. At higher levels: uses increase by 1 for each slot level above 1st.' },
  spectral_servant: { name: 'Spectral Servant', description: 'You summon a spectral servant in an unoccupied space within 30 feet. The servant exists for 1 hour (concentration) and can perform simple tasks: carry objects weighing up to 20 pounds, open doors, hand items. It has 1 hit point, AC 10, and cannot attack.' },
  flame_cloak: { name: 'Flame Cloak', description: 'You wreathe yourself in flames for 10 minutes (concentration). Creatures that deal melee damage to you within 5 feet take 1d8 fire damage. You also have resistance to cold damage. At higher levels: damage increases by 1d8 for every 2 slot levels above 1st.' },
  thunderous_step: { name: 'Thunderous Step', description: 'You teleport to an unoccupied space within 30 feet. Each creature within 10 feet of the space you left must succeed on a Constitution saving throw or take 2d6 thunder damage and become deafened until the end of its next turn.' },
  natures_embrace: { name: 'Nature\'s Embrace', description: 'You touch a creature and invoke the power of nature. The target regains 1d8 + your spellcasting ability modifier hit points and is cured of one poison. At higher levels: healing increases by 1d8 for each slot level above 1st.' },
  iron_skin: { name: 'Iron Skin', description: 'You touch a creature and its skin takes on a metallic sheen for 1 hour. The target gains +2 to AC, but its speed is reduced by 10 feet. The spell does not stack with armor heavier than light.' },
  mind_spike: { name: 'Mind Spike', description: 'You drive a psychic spike into the mind of a creature within 60 feet. The target must succeed on an Intelligence saving throw or take 2d8 psychic damage. On a failure, you also know the target\'s exact location until the end of your next turn.' },
  veil_of_silence: { name: 'Veil of Silence', description: 'You create a zone of silence in a 10-foot radius centered on you for 10 minutes (concentration). Sounds inside the zone do not escape beyond its boundaries, and external sounds enter muffled. Spells with verbal components within the zone are not blocked.' },
  gravity_well: { name: 'Gravity Well', description: 'You create a point of intensified gravity within 60 feet. Each creature within a 10-foot radius of that point must succeed on a Strength saving throw or be pulled 10 feet toward the center and knocked prone. The area counts as difficult terrain until the end of your next turn.' },
  venomous_spray: { name: 'Venomous Spray', description: 'You unleash a 15-foot cone of poisonous liquid. Each creature in the area must succeed on a Constitution saving throw or take 2d8 poison damage and become poisoned until the end of its next turn. On a success — half damage without poisoning.' },
  phantom_steed_minor: { name: 'Minor Phantom Steed', description: 'You summon a translucent steed for 1 hour (concentration). The steed has a speed of 60 feet, AC 10, and 10 hit points. It can carry only you and vanishes if it takes damage. The steed cannot attack.' },
  restorative_mist: { name: 'Restorative Mist', description: 'You create a cloud of healing mist in a 10-foot radius centered on a point within 30 feet. Each creature of your choice in the area regains 1d4 hit points at the start of its turn. The mist lasts 3 rounds (concentration).' },
  arcane_lock_blast: { name: 'Arcane Lock Blast', description: 'You touch a lock, latch, or similar mechanism. The mechanism is destroyed in a magical explosion, dealing 1d6 thunder damage to each creature within 5 feet (Dexterity saving throw for half). Magical locks receive a saving throw, DC 10 + slot level.' },
  soul_link: { name: 'Soul Link', description: 'You create a bond between two willing creatures within 30 feet for 1 hour (concentration). When one creature takes damage, it can transfer up to half of that damage to the other linked creature (with the recipient\'s consent).' },
  ice_path: { name: 'Ice Path', description: 'You create a strip of ice 30 feet long and 5 feet wide on a surface within 30 feet. The area becomes difficult terrain for everyone except you. Creatures entering the area or starting their turn there must succeed on a Dexterity saving throw (your spell save DC) or fall prone. The ice melts after 1 minute.' },
  bolstering_cry: { name: 'Bolstering Cry', description: 'You emit a magical battle cry. Up to 3 creatures of your choice within 30 feet gain 1d4 + your spellcasting ability modifier temporary hit points for 1 hour. At higher levels: the number of creatures increases by 1 for each slot level above 1st.' },
  corrosive_touch: { name: 'Corrosive Touch', description: 'You coat your hand with caustic acid. Make a melee spell attack. On a hit, the target takes 2d6 acid damage and its AC is reduced by 1 until the end of your next turn (does not stack). At higher levels: damage increases by 1d6 for each slot level above 1st.' },
  primal_vigor: { name: 'Primal Vigor', description: 'You touch a creature and fill it with primal energy for 1 minute (concentration). The target gains +10 feet to movement speed and advantage on Athletics checks. On its first melee attack hit, the target deals an additional 1d4 damage.' },
  echo_ward: { name: 'Echo Ward', description: 'You create a magical ward on one creature within touch range, lasting 8 hours. When the warded creature is targeted by an attack, the ward emits a loud auditory alarm, audible within 100 feet. The ward triggers 3 times before dissipating.' },


  // === Level 2 - 20 spells ===
  shadow_step: { name: 'Shadow Step', description: 'You enter one shadow and emerge from another within 60 feet. You must see both shadows. After teleporting, you have advantage on your first attack until the end of the turn. The spell only works in dim light or darkness.' },
  flame_barrier: { name: 'Flame Barrier', description: 'You create a wall of fire 10 feet high, 20 feet long, and 1 foot thick within 60 feet for 1 minute (concentration). Creatures passing through the wall take 3d6 fire damage. Creatures within 5 feet of the wall take 1d6 fire damage at the start of their turn.' },
  winters_grasp: { name: 'Winter\'s Grasp', description: 'You direct a wave of bitter cold at a creature within 60 feet. The target must succeed on a Constitution saving throw or take 3d8 cold damage and become slowed (speed halved) for 1 minute. The target can repeat the saving throw at the end of each turn.' },
  animate_weapon: { name: 'Animate Weapon', description: 'You animate one weapon within 30 feet for 1 minute (concentration). It hovers in the air and attacks a target you designate as a bonus action. The weapon uses your spell attack modifier and deals its normal damage + 1d4 force damage.' },
  fortify_mind: { name: 'Fortify Mind', description: 'You strengthen the mental defenses of one creature within touch range for 1 hour. The target gains advantage on saving throws against being charmed and frightened, as well as resistance to psychic damage. At higher levels: you can target one additional creature for each slot level above 2nd.' },
  nether_bolt: { name: 'Nether Bolt', description: 'You fire a beam of dark energy at a creature within 90 feet. Make a ranged spell attack. On a hit, the target takes 3d10 necrotic damage. If the target is undead, it instead regains that amount of hit points.' },
  mirror_ward: { name: 'Mirror Ward', description: 'You create a mirrored shield around yourself for 1 minute (concentration). When you are targeted by a spell of 2nd level or lower, you can use your reaction to reflect it back at the caster. The reflected spell uses your spell save DC.' },
  summon_swarm: { name: 'Summon Swarm', description: 'You summon a swarm of insects into a space within 60 feet for 1 minute (concentration). The swarm occupies a 10x10-foot area, has 22 hit points, and AC 12. Creatures starting their turn in the swarm\'s area take 2d6 piercing damage (Constitution saving throw for half).' },
  healing_rain: { name: 'Healing Rain', description: 'You conjure a soft glowing rain in a 20-foot radius centered on a point within 60 feet for 1 minute (concentration). Creatures of your choice starting their turn in the area regain 1d4 hit points. Undead take 1d4 radiant damage instead.' },
  stone_pillars: { name: 'Stone Pillars', description: 'You conjure three stone pillars 10 feet tall in unoccupied spaces within 60 feet. Each pillar has AC 15, 30 hit points, and provides three-quarters cover. The pillars last 10 minutes or until destroyed.' },
  phantom_armor: { name: 'Phantom Armor', description: 'You clothe a creature within touch range in translucent armor of ethereal energy for 8 hours. The target\'s AC becomes 13 + Dexterity modifier. The armor has no weight and does not impede movement. The spell ends if the target dons regular armor.' },
  life_drain: { name: 'Life Drain', description: 'You drain life force from a creature within 30 feet. The target must succeed on a Constitution saving throw or take 3d6 necrotic damage. You regain hit points equal to half the damage dealt. Does not affect undead or constructs.' },
  wind_wall: { name: 'Wind Wall', description: 'You create a wall of raging wind 30 feet long and 15 feet high within 60 feet for 1 minute (concentration). Ranged weapon attacks through the wall automatically miss. Flying creatures of Small size or smaller cannot pass through the wall.' },
  tremor_sense: { name: 'Tremorsense', description: 'You gain tremorsense in a 30-foot radius for 10 minutes (concentration). You sense the exact location of any creature touching the ground within that area, even if you cannot see it. Invisible creatures do not gain advantage on attacks against you.' },
  psychic_scream: { name: 'Psychic Scream', description: 'You emit a wave of mental energy in a 15-foot radius from you. Each creature in the area must succeed on an Intelligence saving throw or take 3d6 psychic damage and become stunned until the end of its next turn. On a success — half damage without stunning.' },
  barkskin_armor: { name: 'Oaken Bark', description: 'You cover a creature within touch range with magical tree bark for 1 hour (concentration). The target\'s AC cannot be less than 16, and it gains resistance to piercing damage. The target has disadvantage on Dexterity (Acrobatics) checks.' },
  radiant_smite: { name: 'Radiant Smite', description: 'Your weapon fills with holy light. On your next successful weapon attack before the end of the turn, you deal an additional 3d8 radiant damage. If the target is undead or a fiend, the damage increases to 4d8. The target sheds bright light for 5 feet for 1 minute.' },
  ghoul_touch: { name: 'Ghoul Touch', description: 'Your hand is wreathed in necrotic energy. Make a melee spell attack. On a hit, the target takes 3d6 necrotic damage and must succeed on a Constitution saving throw or become paralyzed for 1 minute. The target repeats the saving throw at the end of each turn.' },
  sanctuary_circle: { name: 'Sanctuary Circle', description: 'You draw a magical circle with a 10-foot radius on the ground. Creatures inside the circle regain 2d4 hit points at the start of their turn and have advantage on saving throws against disease and poison. The circle lasts 1 minute (concentration). Undead cannot enter the circle.' },
  eldritch_sight: { name: 'Eldritch Sight', description: 'Your eyes glow with purple light. For 1 hour, you see magical auras within 60 feet, identify the school of magic of items and spells, and can see ethereal creatures. You also see invisible creatures as blurred silhouettes.' },

  // === Level 3 - 20 spells ===
  erupting_earth: { name: 'Erupting Earth', description: 'You cause the ground to explode in a 20-foot radius centered on a point within 120 feet. Each creature in the area must succeed on a Dexterity saving throw or take 4d10 bludgeoning damage. On a success — half. The area becomes difficult terrain.' },
  vampiric_touch_enhanced: { name: 'Enhanced Vampiric Touch', description: 'Your hand radiates dark energy for 1 minute (concentration). Make a melee spell attack. On a hit, the target takes 4d6 necrotic damage, and you regain hit points equal to the damage dealt. You can attack with an action each turn.' },
  elemental_aegis: { name: 'Elemental Aegis', description: 'You surround yourself with a shield of a chosen element (fire, cold, lightning, acid) for 1 hour (concentration). You gain resistance to the chosen damage type. When a creature deals melee damage to you, it takes 2d6 damage of the chosen type.' },
  mass_healing_word: { name: 'Mass Healing Word', description: 'You speak a word of power that fills up to 6 creatures of your choice within 60 feet with healing energy. Each target regains 1d4 + your spellcasting ability modifier hit points. Bonus action. At higher levels: +1d4 for each level above 3rd.' },
  gravity_slam: { name: 'Gravity Slam', description: 'You increase gravity above a creature within 60 feet. The target must succeed on a Strength saving throw or take 4d8 bludgeoning damage and be knocked prone. On a success — half damage without falling. Flying creatures that fail the save fall to the ground.' },
  spirit_wolf: { name: 'Spirit Wolf', description: 'You summon a spirit wolf into an unoccupied space within 30 feet for 1 hour (concentration). The wolf has 30 HP, AC 14, speed 50 feet. It attacks as a bonus action: +7 to hit, 2d6+4 force damage. The wolf has advantage on attacks near allies.' },
  arcane_fortress: { name: 'Arcane Fortress', description: 'You create a translucent dome with a 10-foot radius centered on you for 1 minute (concentration). The dome has 50 hit points and AC 15. Creatures inside have three-quarters cover from attacks outside. Spells of 2nd level or lower cannot pass through the dome.' },
  life_transference: { name: 'Life Transference', description: 'You sacrifice your own life force for another. You take 4d8 necrotic damage (cannot be reduced), and one creature within 60 feet regains hit points equal to twice the damage you took.' },
  temporal_slip: { name: 'Temporal Slip', description: 'You briefly shift yourself in time. You vanish until the start of your next turn, becoming invulnerable to all damage and effects. You reappear in the same spot or the nearest unoccupied space. You cannot act while outside time.' },
  thunder_wave_greater: { name: 'Greater Thunder Wave', description: 'You emit a powerful thunder wave in a 30-foot cone. Each creature in the area must succeed on a Constitution saving throw or take 4d8 thunder damage and be pushed 20 feet. On a success — half damage without being pushed. Unsecured objects are pushed automatically.' },
  shadow_conjuration: { name: 'Shadow Conjuration', description: 'You form a creature from shadow matter in an unoccupied space within 60 feet for 1 minute (concentration). The creature has 25 HP, AC 13, and attacks with an action: +6 to hit, 2d8+3 necrotic damage. It is vulnerable to radiant damage.' },
  cleansing_flame: { name: 'Cleansing Flame', description: 'You touch a creature with sacred flame. The target regains 3d8 hit points and is cured of one disease, one curse, or one condition (blindness, deafness, poisoning, paralysis). Undead and fiends take 3d8 radiant damage instead of being healed.' },
  psychic_fortress: { name: 'Psychic Fortress', description: 'You create a mental barrier around up to 5 creatures of your choice within 30 feet for 10 minutes (concentration). Targets gain resistance to psychic damage and advantage on Intelligence, Wisdom, and Charisma saving throws.' },
  chain_lightning_minor: { name: 'Minor Chain Lightning', description: 'Lightning strikes a creature within 60 feet, then arcs to 2 additional targets within 20 feet of the first. Each target must succeed on a Dexterity saving throw or take 3d8 lightning damage. On a success — half. At higher levels: +1 additional target for each level above 3rd.' },
  spectral_guardian: { name: 'Spectral Guardian', description: 'You summon a spectral warrior in an unoccupied space within 30 feet for 1 minute (concentration). The guardian has 40 HP, AC 15, speed 30 feet. When a hostile creature enters within 5 feet, it can use its reaction to attack: +6, 2d8+3 force damage.' },
  natures_wrath: { name: 'Nature\'s Wrath', description: 'You conjure roots and branches in a 30x30-foot area within 90 feet for 1 minute (concentration). Each creature in the area must succeed on a Strength saving throw or become restrained. Restrained creatures take 2d6 bludgeoning damage at the start of each turn. Strength saving throw as an action to break free.' },
  borrowed_time: { name: 'Borrowed Time', description: 'You hasten one creature within 30 feet, granting it an additional action for 1 turn. However, at the start of its next turn, the target loses its action and can only take a bonus action or move. Does not stack with the Haste spell.' },
  acid_rain: { name: 'Acid Rain', description: 'You conjure a rain of acid in a cylinder with a 20-foot radius and 40-foot height centered on a point within 90 feet for 1 minute (concentration). Creatures starting their turn in the area take 3d4 acid damage. Metal armor in the area permanently takes -1 to AC.' },
  shadow_mantle: { name: 'Shadow Mantle', description: 'You wrap yourself in swirling shadows for 1 hour (concentration). You are considered to be in dim light for the purposes of cover. Attacks against you from more than 30 feet away have disadvantage. You have advantage on Stealth checks.' },
  restorative_surge: { name: 'Restorative Surge', description: 'You release a wave of healing energy. Each creature of your choice within a 30-foot radius of you regains 2d8 + your spellcasting ability modifier hit points. Creatures at 0 hit points automatically stabilize and regain 1 hit point.' },


  // === Level 4 - 15 spells ===
  elemental_storm: { name: 'Elemental Storm', description: 'You call forth a storm of elements in a 20-foot radius sphere centered on a point within 120 feet. Choose two damage types: fire, cold, lightning, acid. Each creature in the area must succeed on a Dexterity saving throw or take 3d6 damage of each chosen type. On a success — half.' },
  death_ward_greater: { name: 'Greater Death Ward', description: 'You touch a creature and protect it from death for 8 hours. The first time the target\'s hit points drop to 0, they instead become 1, and the target gains 2d10 temporary hit points. The spell also grants advantage on saving throws against instant death.' },
  summon_earth_elemental: { name: 'Summon Earth Elemental', description: 'You summon an earth elemental in an unoccupied space within 60 feet for 1 hour (concentration). The elemental has 60 HP, AC 16, speed 30 feet. Attack: +8 to hit, 2d10+5 bludgeoning damage. It has resistance to non-magical physical damage.' },
  psychic_lance: { name: 'Psychic Lance', description: 'You fire a beam of mental energy at a creature within 120 feet. The target must succeed on an Intelligence saving throw or take 7d6 psychic damage and become stunned until the end of its next turn. On a success — half damage without stunning.' },
  life_cocoon: { name: 'Life Cocoon', description: 'You encase a creature within touch range in a cocoon of healing energy for 1 minute (concentration). At the start of each of its turns, the target regains 3d4 hit points. While in the cocoon, the target has resistance to all damage but cannot move or take actions.' },
  temporal_anchor: { name: 'Temporal Anchor', description: 'You fix your current state in time. At any point within the next 10 minutes, you can use your reaction to return to the state you were in when you cast it: hit points, position, spell slots. Used items are not restored.' },
  blade_storm: { name: 'Blade Storm', description: 'You create a whirlwind of magical blades in a cylinder with a 15-foot radius and 20-foot height within 90 feet for 1 minute (concentration). Creatures entering the area or starting their turn there take 4d8 slashing damage (Dexterity saving throw for half).' },
  vitality_transfer: { name: 'Vitality Transfer', description: 'You drain life force from a hostile creature within 30 feet and transfer it to an ally within 30 feet. The enemy must succeed on a Constitution saving throw or take 4d8 necrotic damage. The ally regains hit points equal to the damage dealt.' },
  phantom_chariot: { name: 'Phantom Chariot', description: 'You summon a phantom chariot with two spectral horses for 8 hours. The chariot holds 4 creatures, moves at 100 feet, and flies (hover). It has AC 14, 50 hit points. Passengers have three-quarters cover.' },
  iron_body: { name: 'Iron Body', description: 'Your body becomes iron for 10 minutes (concentration). You gain resistance to non-magical physical damage, +2 to AC, and immunity to poison. However, your speed is reduced by 20 feet, and you sink in water.' },
  spectral_chains: { name: 'Spectral Chains', description: 'Spectral chains burst from the ground and grab up to 3 creatures of your choice within 60 feet. Each target must succeed on a Strength saving throw or become restrained for 1 minute (concentration) and take 2d6 necrotic damage at the start of each turn. The saving throw is repeated each turn.' },
  aura_of_courage: { name: 'Aura of Courage', description: 'You radiate an aura in a 30-foot radius for 10 minutes (concentration). Allies in the aura are immune to being frightened and gain +2 to attack rolls. If an ally is already frightened, the condition is removed upon entering the aura.' },
  tornado: { name: 'Tornado', description: 'You create a tornado in a cylinder with a 10-foot radius and 40-foot height within 90 feet for 1 minute (concentration). Creatures starting their turn in the area take 3d8 bludgeoning damage and are hurled 20 feet upward (Strength saving throw negates the hurling). You can move the tornado 30 feet as a bonus action.' },
  protective_runes: { name: 'Protective Runes', description: 'You inscribe runes on a surface within touch range, protecting a 20-foot radius area for 8 hours. Hostile creatures entering the area must succeed on a Charisma saving throw or take 4d6 force damage and be pushed 10 feet back. Each creature makes the saving throw only once.' },
  divination_eye: { name: 'Divination Eye', description: 'You create an invisible magical eye within 120 feet for 1 hour (concentration). The eye transmits everything it sees (darkvision 60 feet) and hears to you. You can move it 30 feet as a bonus action. The eye can pass through gaps as narrow as 1 inch.' },

  // === Level 5 - 15 spells ===
  inferno_blast: { name: 'Inferno Blast', description: 'You hurl a sphere of concentrated hellfire at a point within 150 feet. The sphere explodes in a 30-foot radius. Each creature in the area must succeed on a Dexterity saving throw or take 8d6 fire damage. On a success — half. The fire ignores resistance to fire damage.' },
  mass_restoration: { name: 'Mass Restoration', description: 'A wave of restorative energy washes over up to 6 creatures of your choice within 60 feet. Each creature regains 4d8 + your spellcasting ability modifier hit points and is cured of one condition: blindness, deafness, poisoning, or paralysis.' },
  steel_wind_strike: { name: 'Steel Wind Strike', description: 'You become a whirlwind of steel. Choose up to 5 creatures within 30 feet. Make a melee spell attack against each. On a hit, the target takes 6d10 force damage. After all attacks, you teleport to an unoccupied space within 5 feet of one of the targets.' },
  planar_binding_circle: { name: 'Planar Binding Circle', description: 'You create a magical circle that binds a summoned creature to your service for 24 hours. A creature of CR 5 or lower must succeed on a Charisma saving throw (with disadvantage) or serve you. It follows your commands and cannot harm you. At higher levels: +1 CR for each level above 5th.' },
  gravity_crush: { name: 'Gravity Crush', description: 'You multiply gravity in a 15-foot radius sphere centered on a point within 90 feet for 1 minute (concentration). Creatures in the area must succeed on a Constitution saving throw or take 5d8 bludgeoning damage and fall prone. Flying creatures fall. Speed in the area is halved.' },
  wraithform: { name: 'Wraithform', description: 'You become incorporeal for 1 minute (concentration). You can pass through creatures and objects. You have resistance to all damage except force and radiant. You cannot attack or cast spells. Flying speed 30 feet (hover).' },
  empowered_smite: { name: 'Empowered Smite', description: 'You infuse one creature\'s weapon within touch range with divine might for 1 minute (concentration). Each successful attack with that weapon deals an additional 2d8 radiant damage. A critical hit stuns the target until the end of its next turn (Constitution saving throw negates).' },
  dome_of_protection: { name: 'Dome of Protection', description: 'You create an impenetrable dome with a 15-foot radius for 1 minute (concentration). Nothing can enter or exit the dome: neither creatures, nor projectiles, nor spells. Creatures inside can breathe normally. The dome is opaque from outside, transparent from inside.' },
  soul_cage: { name: 'Soul Cage', description: 'When a humanoid dies within 60 feet, you use your reaction to capture its soul in a magical cage for 8 hours. You can ask the soul up to 5 questions (it must answer truthfully), or consume it to regain 3d8 hit points, or use it for advantage on one attack or saving throw.' },
  maelstrom: { name: 'Maelstrom', description: 'You create a maelstrom in a cylinder with a 20-foot radius and 20-foot depth within 120 feet for 1 minute (concentration). Creatures starting their turn in the area are pulled 10 feet toward the center and take 4d8 bludgeoning damage (Strength saving throw for half damage without pulling).' },
  arcane_hand: { name: 'Arcane Hand', description: 'You create a Large shimmering hand of force within 120 feet for 1 minute (concentration). The hand has 80 HP, AC 18, Strength 26. As a bonus action, you command it to: strike (4d8 damage), push (Strength save or pushed 20 feet), grapple (Strength check to escape), or protect (three-quarters cover).' },
  mass_fly: { name: 'Mass Fly', description: 'You grant up to 10 willing creatures within 30 feet the ability to fly for 10 minutes (concentration). Flying speed 60 feet. If the spell ends while airborne, creatures gently descend at 60 feet per round.' },
  necrotic_shroud: { name: 'Necrotic Shroud', description: 'You shroud yourself in dark energy of death for 1 minute (concentration). You gain 30 temporary hit points. Creatures within 10 feet of you at the start of your turn take 3d6 necrotic damage (Constitution saving throw for half). You have advantage on Intimidation checks.' },
  holy_weapon: { name: 'Holy Weapon', description: 'The weapon in your hand shines with divine light for 1 hour (concentration). It deals an additional 2d8 radiant damage on each hit. As a bonus action, you can end the spell to cause a burst: each creature within 30 feet makes a Constitution saving throw or takes 4d8 radiant damage and becomes blinded for 1 minute.' },
  dimension_lock: { name: 'Dimension Lock', description: 'You seal an area in a 60-foot radius centered on you for 1 hour (concentration). No teleportation, interplanar travel, or summoning can occur in this area. Creatures cannot enter the Ethereal Plane. The spell can only be dispelled by Dispel Magic of 5th level or higher.' },

  // === Level 6 - 12 spells ===
  sunfire_burst: { name: 'Sunfire Burst', description: 'You call forth a blinding burst of solar flame in a 30-foot radius sphere centered on a point within 150 feet. Each creature in the area must succeed on a Dexterity saving throw or take 8d8 radiant damage and become blinded for 1 minute. On a success — half damage without blinding. Undead have disadvantage on the save.' },
  soul_binding: { name: 'Soul Binding', description: 'You bind the soul of a recently deceased creature (up to 1 hour) to its body, creating a powerful undead for 24 hours. The creature retains its statistics but its type changes to undead. It obeys your commands and has 80 hit points, even if it had fewer in life.' },
  prismatic_shield: { name: 'Prismatic Shield', description: 'You surround yourself with a spinning shield of seven colored layers for 1 minute (concentration). Each layer has 15 HP and grants immunity to one damage type (red-fire, orange-acid, yellow-lightning, green-poison, blue-cold, indigo-psychic, violet-necrotic). Destroyed layers do not regenerate.' },
  mass_haste: { name: 'Mass Haste', description: 'You accelerate up to 5 creatures of your choice within 30 feet for 1 minute (concentration). Each target gains +2 to AC, doubled speed, advantage on Dexterity saving throws, and an additional action (attack, dash, disengage, or dodge). When the spell ends — they lose a turn.' },
  word_of_healing: { name: 'Word of Greater Healing', description: 'You speak a word of divine power. Up to 6 creatures of your choice within 60 feet regain 5d8 + your spellcasting ability modifier hit points. Each target is also cured of all diseases and poisons.' },
  gravity_well_greater: { name: 'Greater Gravity Well', description: 'You create a point of colossal gravity within 120 feet for 1 minute (concentration). Each creature within a 30-foot radius must succeed on a Strength saving throw at the start of its turn or be pulled 20 feet toward the center and take 4d10 bludgeoning damage. At the center — movement is impossible.' },
  contingency_ward: { name: 'Contingency Ward', description: 'You set a condition and bind a protective spell of 4th level or lower to it. When the condition is met within 10 days, the spell automatically triggers on you. For example: "If I drop to 0 hit points — Death Ward activates." Component: a gemstone worth 500 gp.' },
  freezing_sphere: { name: 'Freezing Sphere', description: 'You create a ball of frozen energy and hurl it at a point within 300 feet. The sphere explodes in a 30-foot radius. Each creature takes 10d6 cold damage (Constitution saving throw for half). Water in the area freezes for 1 minute, creating a solid surface.' },
  investiture_of_storm: { name: 'Investiture of Storm', description: 'You wreathe yourself in a raging storm for 10 minutes (concentration). You gain: immunity to lightning and thunder damage, flying speed 60 feet, and can use a bonus action to strike a creature within 60 feet with lightning (Dexterity save or 3d10 lightning damage).' },
  raise_undead_army: { name: 'Raise Undead Army', description: 'You raise up to 8 skeletons or zombies from corpses within 60 feet. They obey your commands for 24 hours. Each creature has enhanced statistics: +2 to attack and damage, +10 to hit point maximum. You can recast the spell to maintain control.' },
  mental_prison: { name: 'Mental Prison', description: 'You trap the mind of a creature within 60 feet in an illusory prison for 1 minute (concentration). The target must succeed on an Intelligence saving throw or take 5d10 psychic damage. On a failure, the target believes it is surrounded by deadly barriers. If the target moves, it takes 10d10 psychic damage and the spell ends.' },
  sanctuary_dome: { name: 'Sanctuary Dome', description: 'You create a glowing dome with a 20-foot radius for 1 minute (concentration). Allies inside regain 3d6 hit points at the start of each turn and have resistance to all damage. Hostile creatures cannot enter (Charisma saving throw against your spell save DC). You cannot attack while inside.' },


  // === Level 7 - 12 spells ===
  divine_judgment: { name: 'Divine Judgment', description: 'You call down a pillar of divine light on a creature within 120 feet. The target must succeed on a Dexterity saving throw or take 10d8 radiant damage. On a failure, the target is also blinded and stunned for 1 round. On a success — half damage without additional effects. Fiends and undead have disadvantage on the save.' },
  prismatic_wall: { name: 'Prismatic Wall', description: 'You create a vertical wall of shimmering light 60 feet long and 20 feet high within 90 feet for 10 minutes (concentration). The wall consists of 7 layers. Each layer deals its own type of damage (4d6) and has an additional effect. Destroying a layer requires a specific type of spell.' },
  mass_resurrection: { name: 'Mass Resurrection', description: 'You return to life up to 3 creatures that died no more than 1 hour ago, within 30 feet. Each creature returns with half its maximum hit points. The spell does not work on creatures that died of old age or on undead. Component: diamonds worth 1,000 gp per creature.' },
  summon_celestial: { name: 'Summon Celestial', description: 'You summon a celestial of CR 7 or lower into an unoccupied space within 60 feet for 1 hour (concentration). The celestial is friendly to you and your allies. It acts independently but obeys your commands. It has a 10-foot aura that grants allies +2 to saving throws.' },
  time_stop_minor: { name: 'Minor Time Stop', description: 'You briefly stop time for everyone except yourself. You gain 1d4 additional turns in a row. During these turns, other creatures and objects are frozen. If you affect a frozen creature or its belongings, the spell ends early.' },
  annihilation_beam: { name: 'Annihilation Beam', description: 'You fire a beam of destructive energy in a line 100 feet long and 5 feet wide. Each creature in the line must succeed on a Dexterity saving throw or take 12d6 force damage. On a success — half. If a creature drops to 0 hit points from this damage, it disintegrates to dust.' },
  legendary_resistance: { name: 'Legendary Resistance', description: 'You endow yourself with legendary resilience for 1 hour. During this time, you can automatically succeed on a failed saving throw 3 times. Additionally, you have advantage on all saving throws and resistance to damage from spells.' },
  create_demiplane: { name: 'Create Demiplane', description: 'You create a small demiplane — a room 30x30x30 feet. You determine its appearance and atmosphere. A portal remains open for 1 hour. Creatures can freely enter and exit. When the portal closes, creatures inside remain until the spell is cast again. The demiplane exists forever.' },
  storm_avatar: { name: 'Storm Avatar', description: 'You transform into an avatar of the storm for 1 minute (concentration). You gain: flying speed 90 feet, immunity to lightning and thunder, immunity to non-magical physical damage. At the start of each of your turns, each creature of your choice within 30 feet takes 3d8 lightning damage.' },
  illusory_fortress: { name: 'Illusory Fortress', description: 'You create an illusion of a fortress in a 30-foot radius for 24 hours. Creatures that believe the illusion perceive the walls as impassable and take psychic damage (6d6) when attempting to pass through. An Investigation check (your spell save DC) reveals the illusion. Those who see through it pass freely.' },
  rejuvenation_field: { name: 'Rejuvenation Field', description: 'You create a field of healing energy in a 30-foot radius for 1 minute (concentration). At the start of each turn, each creature of your choice in the area regains 4d6 hit points. Unconscious creatures regain consciousness. Undead take this as radiant damage instead.' },
  enslave_elemental: { name: 'Enslave Elemental', description: 'You subjugate one elemental of CR 8 or lower within 60 feet for 24 hours. The target must succeed on a Charisma saving throw with disadvantage or become subject to your will. The elemental follows your commands and cannot harm you. When it takes damage, it repeats the saving throw.' },

  // === Level 8 - 11 spells ===
  apocalypse_flame: { name: 'Apocalypse Flame', description: 'You call down a pillar of hellfire in a cylinder with a 30-foot radius and 60-foot height within 150 feet. Each creature in the area must succeed on a Dexterity saving throw or take 12d8 fire damage. On a success — half. The area burns for 1 minute: creatures entering or starting their turn take 4d8 fire damage.' },
  absolute_zero: { name: 'Absolute Zero', description: 'You lower the temperature to absolute zero in a 20-foot radius sphere within 120 feet. Each creature in the area must succeed on a Constitution saving throw or take 10d10 cold damage and become frozen (paralyzed) for 1 minute. On a success — half damage. A frozen target repeats the saving throw at the end of its turn.' },
  divine_intervention: { name: 'Divine Intervention', description: 'You invoke divine intervention. Each creature of your choice within a 60-foot radius is fully healed and cured of all diseases, curses, poisons, blindness, deafness, and paralysis. Creatures at 0 hit points are returned to life with full hit points (if they died no more than 1 minute ago).' },
  temporal_prison: { name: 'Temporal Prison', description: 'You freeze a creature in time. A target within 60 feet must succeed on a Wisdom saving throw or be imprisoned in stopped time for 1 day. The creature is invulnerable and cannot be moved. Only Wish or a 9th-level Dispel Magic can free the target early.' },
  avatar_of_war: { name: 'Avatar of War', description: 'You become an embodiment of war for 1 minute (concentration). Your size becomes Huge, you gain: +50 temporary HP, immunity to being frightened and charmed, three attacks per action, +4 to attack and damage rolls. Your attacks count as magical and deal an additional 2d8 force damage.' },
  soul_storm: { name: 'Soul Storm', description: 'You release a vortex of damned souls in a 30-foot radius sphere centered on a point within 120 feet. Each creature in the area must succeed on a Charisma saving throw or take 8d8 necrotic damage and 4d8 psychic damage. On a success — half. Creatures killed by this spell rise as specters under your control.' },
  invulnerability_field: { name: 'Invulnerability Field', description: 'You create a field of absolute protection around yourself for 10 minutes (concentration). You are immune to all damage. You cannot be targeted by spells. However, you cannot attack or cast spells directed beyond the field. Component: diamond dust worth 500 gp.' },
  summon_elder_elemental: { name: 'Summon Elder Elemental', description: 'You summon an elder elemental (CR 11) within 60 feet for 1 hour (concentration). The elemental has 150 HP, AC 18, and multiattack (3 attacks per turn). It obeys your commands and can use one legendary ability of its element once per turn.' },
  reality_warp: { name: 'Reality Warp', description: 'You alter the perception of reality in a 60-foot radius area for 1 hour (concentration). You determine how the area looks, sounds, smells, and feels. The illusion includes tactile sensations. Creatures in the area must succeed on an Investigation check (your spell save DC + 5) to see through it.' },
  mass_domination: { name: 'Mass Domination', description: 'You dominate up to 5 creatures of your choice within 60 feet for 1 hour (concentration). Each target must succeed on a Wisdom saving throw or become charmed and under your control. You can issue commands as a bonus action. When a target takes damage, it repeats the saving throw with advantage.' },
  fortress_of_will: { name: 'Fortress of Will', description: 'You strengthen the mind and body of up to 6 creatures within 30 feet for 1 hour. Targets gain: immunity to psychic damage, immunity to charm and fear, resistance to all spell damage, +3 to saving throws. The spell ends for a creature if it attacks or casts a hostile spell.' },

  // === Level 9 - 10 spells ===
  world_ender: { name: 'World Ender', description: 'You channel all your magical might into one devastating attack. A creature within 60 feet must succeed on a Dexterity saving throw or take 20d6 + 40 force damage. On a success — half. If the damage exceeds the target\'s maximum hit points, it instantly dies. After casting, you gain 3 levels of exhaustion.' },
  divine_ascension: { name: 'Divine Ascension', description: 'For 1 minute, you attain a semi-divine form. You gain: +100 temporary HP, immunity to all damage below 20 per instance, flying speed 120 feet, your spell attacks deal an additional 6d8 radiant damage, and you can cast spells of 5th level and below without slots.' },
  rewrite_fate: { name: 'Rewrite Fate', description: 'You alter the fabric of fate for one creature or event. You can: undo a creature\'s death (if it died no more than 1 minute ago), change the result of any d20 roll to any desired value, or undo the consequences of one spell/event that occurred in the last round. Can be used once every 30 days.' },
  eternal_prison: { name: 'Eternal Prison', description: 'You imprison a creature in a magical prison forever. A target within 30 feet must succeed on a Wisdom saving throw or be imprisoned in one of several forms: crystal (placed in a secret location), miniature sphere (you carry it), or slumber (eternal sleep in an extradimensional space). Only Wish can free the target.' },
  army_of_the_dead: { name: 'Army of the Dead', description: 'You raise an army of undead. Up to 30 skeletons or zombies rise from the dead within 120 feet and serve you for 24 hours. Additionally, you can raise up to 3 creatures as death knights (CR 5 each). All raised creatures obey your mental commands and act on your turn.' },
  cosmic_devastation: { name: 'Cosmic Devastation', description: 'You call upon the energy of distant stars. In a 40-foot radius area centered on a point within 300 feet, each creature must succeed on a Constitution saving throw or take 10d10 radiant damage and 5d10 fire damage. On a success — half. The area becomes an antimagic zone for 1 minute.' },
  genesis: { name: 'Genesis', description: 'You create a permanent demiplane up to 1 mile in diameter. You determine: landscape, climate, gravity, flow of time (up to 10:1 relative to the Material Plane). The demiplane exists forever and is accessible through a special portal. Casting time: 1 hour. Component: gemstones worth 25,000 gp.' },
  divine_restoration: { name: 'Divine Restoration', description: 'You release a wave of divine energy. Each creature of your choice within a 120-foot radius is fully healed: all hit points restored, all conditions removed, all curses lifted, lost limbs regenerated, exhaustion levels removed. Works even on creatures at 0 hit points.' },
  reality_collapse: { name: 'Reality Collapse', description: 'You tear a rift in the fabric of reality at a point within 120 feet. A 20-foot radius sphere becomes a zone of chaos for 1 minute. Each creature starting its turn in the zone rolls a d10: 1-3 — 8d10 force damage, 4-6 — teleported to a random point within 100 feet, 7-9 — frozen in time for 1 round, 10 — nothing.' },
  absolute_dominion: { name: 'Absolute Dominion', description: 'You overwhelm the will of one creature within 60 feet permanently (until dispelled). The target must succeed on a Wisdom saving throw with disadvantage or become completely under your control. The dominated creature follows any of your commands. It repeats the saving throw once every 30 days or when it takes damage from you.' }
};



// ========== EQUIPMENT TRANSLATIONS ==========
const equipmentTranslations = {
  // Armor
  padded_armor: { name: 'Padded Armor', description: 'Light armor made of quilted fabric. AC = 11 + Dex modifier.' },
  leather_armor: { name: 'Leather Armor', description: 'Light armor made of tanned leather. AC = 11 + Dex modifier.' },
  studded_leather: { name: 'Studded Leather', description: 'Light armor of leather with metal rivets. AC = 12 + Dex modifier.' },
  hide_armor: { name: 'Hide Armor', description: 'Medium armor made of thick hides. AC = 12 + Dex modifier (max 2).' },
  chain_shirt: { name: 'Chain Shirt', description: 'Medium armor of interlocking rings. AC = 13 + Dex modifier (max 2).' },
  scale_mail: { name: 'Scale Mail', description: 'Medium armor of overlapping metal scales. AC = 14 + Dex modifier (max 2). Stealth disadvantage.' },
  breastplate: { name: 'Breastplate', description: 'Medium armor of solid metal. AC = 14 + Dex modifier (max 2).' },
  half_plate: { name: 'Half Plate', description: 'Medium armor of large metal plates. AC = 15 + Dex modifier (max 2). Stealth disadvantage.' },
  ring_mail: { name: 'Ring Mail', description: 'Heavy armor of metal rings. AC = 14, stealth disadvantage.' },
  chain_mail: { name: 'Chain Mail', description: 'Heavy armor of interlocking rings. AC = 16, requires Str 13, stealth disadvantage.' },
  splint_armor: { name: 'Splint Armor', description: 'Heavy armor of metal strips. AC = 17, requires Str 15, stealth disadvantage.' },
  plate_armor: { name: 'Plate Armor', description: 'Heavy armor of fitted metal plates. AC = 18, requires Str 15, stealth disadvantage.' },
  wooden_shield: { name: 'Wooden Shield', description: 'A simple wooden shield. Grants +2 AC.' },
  steel_shield: { name: 'Steel Shield', description: 'A sturdy metal shield. Grants +2 AC.' },
  tower_shield: { name: 'Tower Shield', description: 'A huge shield granting +3 AC. Reduces speed by 5 feet.' },
  // Weapons
  dagger: { name: 'Dagger', description: 'Light weapon, 1d4 piercing. Can be thrown (20/60 ft).' },
  shortsword: { name: 'Shortsword', description: 'Light weapon, 1d6 piercing. Can be used in each hand.' },
  longsword_std: { name: 'Longsword', description: 'Versatile weapon, 1d8 slashing (1d10 two-handed).' },
  rapier: { name: 'Rapier', description: 'Finesse weapon, 1d8 piercing. Can use Dexterity instead of Strength.' },
  greatsword: { name: 'Greatsword', description: 'Heavy two-handed weapon, 2d6 slashing.' },
  greataxe: { name: 'Greataxe', description: 'Heavy two-handed weapon, 1d12 slashing.' },
  warhammer: { name: 'Warhammer', description: 'Versatile weapon, 1d8 bludgeoning (1d10 two-handed).' },
  shortbow: { name: 'Shortbow', description: 'Ranged weapon, 1d6 piercing. Range 80/320 ft.' },
  longbow: { name: 'Longbow', description: 'Heavy ranged weapon, 1d8 piercing. Range 150/600 ft.' },
  crossbow_light: { name: 'Light Crossbow', description: 'Ranged weapon, 1d8 piercing. Range 80/320 ft. Loading.' },
  halberd: { name: 'Halberd', description: 'Heavy polearm, 1d10 slashing. Reach 10 ft.' },
  morningstar: { name: 'Morningstar', description: 'Spiked mace, 1d8 piercing.' },
  scimitar: { name: 'Scimitar', description: 'Curved blade, 1d6 slashing. Light, can dual-wield.' },
  hand_crossbow: { name: 'Hand Crossbow', description: 'Small crossbow, 1d6 piercing. Range 30/120 ft. Can dual-wield.' },
  pike: { name: 'Pike', description: 'Long spear, 1d10 piercing. Reach 10 ft. Heavy, two-handed.' },
  battleaxe: { name: 'Battleaxe', description: 'Versatile weapon, 1d8 slashing (1d10 two-handed).' },
  flail: { name: 'Flail', description: 'Spiked ball on chain, 1d8 bludgeoning.' },
  maul: { name: 'Maul', description: 'Heavy two-handed hammer, 2d6 bludgeoning.' },
  whip: { name: 'Whip', description: 'Long whip, 1d4 slashing. Reach 10 ft.' },
  dart: { name: 'Dart', description: 'Thrown weapon, 1d4 piercing. Range 20/60 ft. Light.' },
  // Amulets & Necklaces
  amulet_of_health: { name: 'Amulet of Health', description: 'Increases wearer\'s Constitution to 19.' },
  periapt_of_wound_closure: { name: 'Periapt of Wound Closure', description: 'Automatically stabilizes wearer at 0 HP. Doubles hit die healing.' },
  amulet_of_proof_against_detection: { name: 'Amulet of Proof against Detection', description: 'Protects from Divination spells and magical scrying.' },
  necklace_of_adaptation: { name: 'Necklace of Adaptation', description: 'Allows breathing in any environment and conditions.' },
  medallion_of_thoughts: { name: 'Medallion of Thoughts', description: 'Allows reading surface thoughts of creatures within 30 ft (3 times per day).' },
  holy_symbol_of_protection: { name: 'Holy Symbol of Protection', description: 'Grants advantage on saves against undead and demon spells.' },
  talisman_of_pure_good: { name: 'Talisman of Pure Good', description: 'By touch, can destroy an evil creature (Dex save DC 20 or 8d6 radiant damage).' },
  scarlet_and_blue_bead: { name: 'Scarlet and Blue Bead', description: 'Grants resistance to fire and cold damage.' },
  // Rings
  ring_of_protection: { name: 'Ring of Protection', description: 'A simple iron ring with a shield symbol. Grants +1 AC and +1 to all saving throws.' },
  ring_of_resistance_fire: { name: 'Ring of Fire Resistance', description: 'A copper ring with a ruby spark inside. Grants resistance to fire damage.' },
  ring_of_evasion: { name: 'Ring of Evasion', description: 'A silver ring with an evasive figure. Allows rerolling a failed Dex save (3 times per day).' },
  ring_of_jumping: { name: 'Ring of Jumping', description: 'A ring of flexible reed. Doubles jump distance.' },
  ring_of_mind_shielding: { name: 'Ring of Mind Shielding', description: 'A dull iron ring, cold to the touch. Protects from mind reading and telepathy.' },
  ring_of_water_walking: { name: 'Ring of Water Walking', description: 'A pearlescent ring with a wave motif. Allows walking on water and other liquids.' },
  ring_of_regeneration: { name: 'Ring of Regeneration', description: 'A ring of living wood with a pulsing green spark. Restores 1d6 HP every 10 minutes. Regrows lost limbs.' },
  ring_of_spell_storing: { name: 'Ring of Spell Storing', description: 'A sapphire ring with shimmering stardust inside. Stores up to 5 levels of spells to cast later.' },
  // Gloves & Bracers
  gloves_of_ogre_power: { name: 'Gauntlets of Ogre Power', description: 'Rough leather gloves infused with giant sweat. Increase Strength to 19.' },
  gauntlets_of_flaming_fury: { name: 'Gauntlets of Flaming Fury', description: 'Steel gauntlets with tongues of flame. Add 1d6 fire damage to melee attacks.' },
  bracers_of_archery: { name: 'Bracers of Archery', description: 'Dark leather bracers with arrow embroidery. Grant +2 to damage from ranged bow attacks.' },
  bracers_of_defense: { name: 'Bracers of Defense', description: 'Polished steel bracers. Grant +2 AC if not wearing armor.' },
  gloves_of_thievery: { name: 'Gloves of Thievery', description: 'Thin black gloves leaving no traces. Grant +5 to Sleight of Hand and lockpicking.' },
  hands_of_the_healer: { name: 'Hands of the Healer', description: 'White silk gloves with a life symbol. Healing spells restore an additional 2d6 HP.' },
  // Boots
  boots_of_elvenkind: { name: 'Boots of Elvenkind', description: 'Muffle steps. Advantage on Stealth checks (silent movement).' },
  boots_of_speed: { name: 'Boots of Speed', description: 'Bonus action to double speed for 10 minutes (once per day).' },
  winged_boots: { name: 'Winged Boots', description: 'Grant 30 ft flying speed for 4 hours per day (can be split).' },
  boots_of_striding_and_springing: { name: 'Boots of Striding and Springing', description: 'Speed not reduced by heavy armor, jump distance tripled.' },
  slippers_of_spider_climbing: { name: 'Slippers of Spider Climbing', description: 'Allow walking on walls and ceilings.' },
  boots_of_the_winterlands: { name: 'Boots of the Winterlands', description: 'Cold resistance, ignore difficult terrain (snow/ice).' },
  // Cloaks
  cloak_of_protection: { name: 'Cloak of Protection', description: 'Grants +1 AC and +1 to all saving throws.' },
  cloak_of_elvenkind: { name: 'Cloak of Elvenkind', description: 'Advantage on Stealth checks. Observers have disadvantage on Perception.' },
  cloak_of_displacement: { name: 'Cloak of Displacement', description: 'Creates displacement illusion. Attacks against you have disadvantage. Resets when you take damage.' },
  cloak_of_the_manta_ray: { name: 'Cloak of the Manta Ray', description: 'Grants 60 ft swim speed and ability to breathe underwater.' },
  cloak_of_invisibility: { name: 'Cloak of Invisibility', description: 'Action to become invisible for 2 hours (once per day).' },
  mantle_of_spell_resistance: { name: 'Mantle of Spell Resistance', description: 'Advantage on saving throws against spells.' },
  // Headgear
  helm_of_comprehending_languages: { name: 'Helm of Comprehending Languages', description: 'Allows understanding all languages.' },
  helm_of_telepathy: { name: 'Helm of Telepathy', description: 'Allows telepathic communication with creatures within 30 ft.' },
  circlet_of_blasting: { name: 'Circlet of Blasting', description: 'Allows casting Scorching Ray (2nd level) once per day.' },
  headband_of_intellect: { name: 'Headband of Intellect', description: 'Increases wearer\'s Intelligence to 19.' },
  dragon_helm: { name: 'Dragon Helm', description: 'Grants resistance to one element (chosen when donned).' },
  cap_of_water_breathing: { name: 'Cap of Water Breathing', description: 'Allows breathing underwater indefinitely.' },
  // Belts
  belt_of_dwarvenkind: { name: 'Belt of Dwarvenkind', description: 'Grants +2 Constitution, darkvision 60 ft, poison resistance.' },
  belt_of_giant_strength_hill: { name: 'Belt of Hill Giant Strength', description: 'Increases wearer\'s Strength to 21.' },
  belt_of_giant_strength_stone: { name: 'Belt of Stone Giant Strength', description: 'Increases wearer\'s Strength to 23.' },
  belt_of_giant_strength_frost: { name: 'Belt of Frost Giant Strength', description: 'Increases wearer\'s Strength to 25.' },
  belt_of_giant_strength_fire: { name: 'Belt of Fire Giant Strength', description: 'Increases wearer\'s Strength to 27.' },
  belt_of_giant_strength_cloud: { name: 'Belt of Cloud Giant Strength', description: 'Increases wearer\'s Strength to 29.' },
  // Staves & Wands
  staff_of_the_python: { name: 'Staff of the Python', description: 'Can be turned into a giant constrictor snake as an action. Fights for you (once per day).' },
  staff_of_charming: { name: 'Staff of Charming', description: 'Allows casting Charm Person (1st level, 3 charges).' },
  staff_of_power: { name: 'Staff of Power', description: 'Grants +2 AC, +2 to attacks and saves. Contains powerful spells.' },
  wand_of_magic_missiles: { name: 'Wand of Magic Missiles', description: 'Fires Magic Missile (up to 7 charges, regains 1d6+1 daily).' },
  wand_of_fireballs: { name: 'Wand of Fireballs', description: 'Allows casting Fireball (3rd level, up to 7 charges).' },
  // Misc artifacts
  bag_of_holding: { name: 'Bag of Holding', description: 'Holds up to 500 pounds of cargo while weighing only 15 pounds.' },
  lantern_of_revealing: { name: 'Lantern of Revealing', description: 'Illuminates invisible creatures and objects within 30 ft.' },
  gem_of_brightness: { name: 'Gem of Brightness', description: 'Emits bright light. 50 charges, regains 4d10 daily.' },
  stone_of_good_luck: { name: 'Stone of Good Luck', description: 'Grants +1 to all ability checks and saving throws.' },
  crystal_ball: { name: 'Crystal Ball', description: 'Allows scrying on creatures at a distance (Divination, once per day).' },
  pearl_of_power: { name: 'Pearl of Power', description: 'Restores one spell slot of 3rd level or lower (once per day).' },
  portable_hole: { name: 'Portable Hole', description: 'Creates a 10-ft deep extradimensional hole. Can store objects or be used as an entrance.' },
  deck_of_many_things: { name: 'Deck of Many Things', description: 'A legendary artifact. Each drawn card creates a random powerful effect — for good or ill.' },
  // === NEW ITEMS (100) ===
  travelers_cloak: { name: 'Traveler\'s Cloak', description: 'A sturdy cloak enchanted to protect against bad weather. The wearer does not suffer from rain, wind, or moderate cold.' },
  iron_buckler: { name: 'Iron Buckler', description: 'A small round shield attached to the forearm with leather straps. Allows the hand to be used for simple actions.' },
  quilted_gambeson: { name: 'Quilted Gambeson', description: 'A thick padded armor of multiple layers of linen, capable of softening blows. A favorite protection of militiamen.' },
  copper_ring_of_warmth: { name: 'Copper Ring of Warmth', description: 'A simple copper ring with a fire rune. Maintains comfortable body temperature even in light frost.' },
  wooden_shield_of_thorns: { name: 'Wooden Shield of Thorns', description: 'A round wooden shield studded with iron spikes. When blocking, deals 1 damage to the attacker in melee.' },
  rope_belt_of_climbing: { name: 'Rope Belt of Climbing', description: 'A belt woven from magical rope. Grants advantage on Athletics checks when climbing.' },
  iron_shod_boots: { name: 'Iron-Shod Boots', description: 'Heavy boots with metal studs. Prevent slipping on ice and wet surfaces.' },
  padded_coif: { name: 'Padded Coif', description: 'A soft padded hood worn under a helmet or on its own. Cushions blows to the head.' },
  charm_of_minor_luck: { name: 'Charm of Minor Luck', description: 'A silver coin on a leather cord. Once per day allows rerolling a failed saving throw with +1.' },
  leather_bracers_of_archery: { name: 'Leather Bracers of Archery', description: 'Stiff leather bracers protecting forearms from bowstring. Grant +1 to ranged attack rolls.' },
  mithril_chain_shirt: { name: 'Mithral Chain Shirt', description: 'A light chain shirt of mithral, nearly weightless. Can be worn under clothing without Stealth disadvantage.' },
  cloak_of_elvenkind: { name: 'Cloak of Elvenkind', description: 'A thin gray-green cloak woven by elves. Its color shifts to match surroundings, granting advantage on Stealth.' },
  boots_of_elvenkind: { name: 'Boots of Elvenkind', description: 'Soft deerskin boots with elven enchantment. The wearer\'s steps make no sound.' },
  gauntlets_of_ogre_power: { name: 'Gauntlets of Ogre Power', description: 'Crude leather gauntlets reinforced with giant magic. Set Strength to 19.' },
  ring_of_swimming: { name: 'Ring of Swimming', description: 'A polished aquamarine ring in silver. Grants swimming speed equal to walking speed.' },
  amulet_of_health: { name: 'Amulet of Health', description: 'A golden medallion with a ruby heart. Sets Constitution to 19.' },
  sentinel_shield: { name: 'Sentinel Shield', description: 'A steel shield with an engraved eye. Grants advantage on Perception and initiative.' },
  boots_of_striding: { name: 'Boots of Striding', description: 'Tall boots of bull leather with wind runes. Walking speed cannot be reduced below 30 feet.' },
  adamantine_breastplate: { name: 'Adamantine Breastplate', description: 'A breastplate of rarest adamantine. Critical hits against wearer become normal hits.' },
  ring_of_mind_shielding: { name: 'Ring of Mind Shielding', description: 'A platinum ring with a sapphire. Protects thoughts from being read or detected by magic.' },
  cloak_of_protection: { name: 'Cloak of Protection', description: 'A cloak infused with abjuration magic. Grants +1 to AC and saving throws.' },
  bracers_of_defense: { name: 'Bracers of Defense', description: 'Silver bracers with protective runes. Without armor or shield, grants +2 to AC.' },
  helm_of_comprehending: { name: 'Helm of Comprehending Languages', description: 'A bronze circlet with a crystal. Understand any spoken language while worn.' },
  belt_of_dwarvenkind: { name: 'Belt of Dwarvenkind', description: 'A wide leather belt with adamantine buckle. +2 Constitution, advantage against poison, darkvision 60ft.' },
  periapt_of_wound_closure: { name: 'Periapt of Wound Closure', description: 'A blood-colored oval stone on gold chain. Auto-stabilize at 0 HP, hit dice restore maximum.' },
  winged_boots: { name: 'Winged Boots', description: 'Boots with small wings at ankles. Grant flying speed equal to walking speed for 4 hours/day.' },
  ring_of_warmth: { name: 'Ring of Warmth', description: 'A golden ring with fire opal. Grants cold resistance and comfort to -50 degrees.' },
  scale_mail_of_the_deep: { name: 'Scale Mail of the Deep', description: 'Armor from sea serpent scales. Grants 30ft swimming speed and does not hinder in water.' },
  headband_of_intellect: { name: 'Headband of Intellect', description: 'A silver headband with a rune. Sets Intelligence to 19.' },
  half_plate_of_gleaming: { name: 'Gleaming Half Plate', description: 'Polished steel half plate that never tarnishes. Magic prevents dirt and blood from remaining.' },
  armor_of_resistance_fire: { name: 'Armor of Fire Resistance', description: 'Plate armor tempered in a volcano. Grants resistance to fire damage.' },
  cloak_of_displacement: { name: 'Cloak of Displacement', description: 'A displacer beast hide cloak. Shifts wearer\'s image, attacks have disadvantage.' },
  ring_of_protection: { name: 'Ring of Protection', description: 'Platinum ring with abjuration runes. +1 to AC and all saving throws.' },
  mantle_of_spell_resistance: { name: 'Mantle of Spell Resistance', description: 'Heavy purple velvet mantle with silver thread. Advantage on saves against spells.' },
  belt_of_hill_giant: { name: 'Belt of Hill Giant Strength', description: 'A crude belt of giant leather. Sets Strength to 21.' },
  flame_tongue_shield: { name: 'Flame Tongue Shield', description: 'Steel shield with bound fire elemental. On command erupts in flame, 1d6 fire to attackers.' },
  amulet_of_proof_against_detection: { name: 'Amulet of Proof Against Detection', description: 'Black obsidian medallion. Invisible to divination magic.' },
  elven_chain: { name: 'Elven Chain', description: 'Weightless mithral chain shirt by elven smiths. Light armor, AC 13 + Dex.' },
  cape_of_the_mountebank: { name: 'Cape of the Mountebank', description: 'Purple cape with smoke lining. 1/day Dimension Door up to 500 feet.' },
  ring_of_evasion: { name: 'Ring of Evasion', description: 'Thin mithral ring. 3/day turn failed Dex save into success.' },
  helm_of_teleportation: { name: 'Helm of Teleportation', description: 'Crystalline helm. 3/day cast Teleport without components.' },
  boots_of_speed: { name: 'Boots of Speed', description: 'On command double walking speed for 10 minutes (recharges after rest).' },
  necklace_of_adaptation: { name: 'Necklace of Adaptation', description: 'Silver and gold chain with lung pendant. Breathe in any environment.' },
  animated_shield: { name: 'Animated Shield', description: 'Steel shield with animation rune. On command floats and protects, freeing both hands.' },
  gloves_of_missile_snaring: { name: 'Gloves of Missile Snaring', description: 'Manticore leather gloves. Catch projectiles, reduce damage by 1d10 + Dex mod.' },
  dragon_scale_mail: { name: 'Dragon Scale Mail', description: 'Red dragon scale armor. Fire resistance and advantage vs dragon Frightful Presence.' },
  ring_of_free_action: { name: 'Ring of Free Action', description: 'Mithral ring with spinning mechanism. Cannot be paralyzed or restrained by magic.' },
  ioun_stone_of_protection: { name: 'Ioun Stone of Protection', description: 'Dusty rose prismatic stone orbiting head. +1 to AC.' },
  crown_of_the_winter_court: { name: 'Crown of the Winter Court', description: 'Icy crown that never melts. Cold resistance and 1/day ice wall.' },
  girdle_of_stone_giant: { name: 'Girdle of Stone Giant Strength', description: 'Belt of stone fibers from the Underdark. Sets Strength to 23.' },
  mask_of_many_faces: { name: 'Mask of Many Faces', description: 'White porcelain mask. Takes any appearance at will.' },
  boots_of_spider_climbing: { name: 'Boots of Spider Climbing', description: 'Black velvet boots with phase spider web soles. Walk on walls and ceilings.' },
  amulet_of_the_planes: { name: 'Amulet of the Planes', description: 'Multifaceted crystal in platinum. Allows casting Plane Shift.' },
  mithril_half_plate: { name: 'Mithral Half Plate', description: 'Pure mithral half plate. Light as chain mail, no Stealth disadvantage.' },
  gauntlets_of_flaming_fists: { name: 'Gauntlets of Flaming Fists', description: 'Metal gauntlets with fire runes. Unarmed strikes deal +1d6 fire.' },
  shield_of_the_stalwart: { name: 'Shield of the Stalwart', description: 'Heavy adamantine shield. +3 AC and advantage vs push effects.' },
  bracers_of_the_arcanist: { name: 'Bracers of the Arcanist', description: 'Silver bracers with runes of all schools. +1 to spell save DC.' },
  ring_of_regeneration: { name: 'Ring of Regeneration', description: 'Gold ring with green jade. Restores 1d6 HP every 10 minutes.' },
  breastplate_of_the_champion: { name: 'Breastplate of the Champion', description: 'Gilded breastplate. Crits on 19-20, enemy crits become normal hits.' },
  belt_of_returning: { name: 'Belt of Returning', description: 'Silver chain belt. Thrown weapons magically return to hand.' },
  plate_armor_of_etherealness: { name: 'Plate Armor of Etherealness', description: 'Shimmering plate partially in Ethereal Plane. 1/day become ethereal 10 min.' },
  cloak_of_arachnida: { name: 'Cloak of Arachnida', description: 'Black cloak of demon spider web. Wall climbing, poison resistance, create webs.' },
  ring_of_telekinesis: { name: 'Ring of Telekinesis', description: 'Weightless metal ring with floating crystal. Telekinesis at will without concentration.' },
  belt_of_fire_giant: { name: 'Belt of Fire Giant Strength', description: 'Salamander leather belt. Sets Strength to 25, fire resistance.' },
  helm_of_brilliance: { name: 'Helm of Brilliance', description: 'Golden helm with gemstones. Each stone holds a spell: Fireball, Wall of Fire, Prismatic Spray.' },
  boots_of_dimensional_stride: { name: 'Boots of Dimensional Stride', description: 'Displacer beast leather boots. 3/day teleport 30 feet as bonus action.' },
  amulet_of_the_devout_plus3: { name: 'Amulet of the Devout +3', description: 'Pure gold holy symbol. +3 spell attack and save DC, restore one spell slot 1/day.' },
  adamantine_full_plate: { name: 'Adamantine Full Plate', description: 'Full plate of adamantine. Crits become normal hits, virtually indestructible.' },
  shield_of_missile_attraction: { name: 'Shield of Missile Deflection', description: 'Mirrored shield with deflection runes. Redirects ranged attacks, resistance to their damage.' },
  ring_of_spell_storing: { name: 'Ring of Spell Storing', description: 'Star silver ring. Stores up to 5 levels of spells for any wearer to cast.' },
  bracers_of_the_blinding_strike: { name: 'Bracers of the Blinding Strike', description: 'Platinum bracers. +3 attack, +2d6 radiant on critical hits.' },
  necklace_of_prayer_beads: { name: 'Necklace of Prayer Beads', description: 'Consecrated gemstone beads. Each holds: Bless, Cure Wounds, Restoration, Planar Ally.' },
  plate_of_the_dawnmaster: { name: 'Plate of the Dawnmaster', description: 'Golden plate blessed by sun god. Bright light 30ft, 2d6 radiant to undead, blindness immunity.' },
  robe_of_the_archmagi: { name: 'Robe of the Archmagi', description: 'Robe of pure magic. AC 15+Dex without armor, advantage vs spells, +2 spell save DC.' },
  cloak_of_invisibility: { name: 'Cloak of Invisibility', description: 'Shadowfell-woven cloak. Pull hood for full invisibility, max 2 hours/day.' },
  ring_of_three_wishes: { name: 'Ring of Three Wishes', description: 'Star adamantine ring. 3 charges of Wish. Becomes mundane after all used.' },
  belt_of_storm_giant: { name: 'Belt of Storm Giant Strength', description: 'Storm giant hide belt. Sets Strength to 29, lightning and thunder resistance.' },
  boots_of_the_planeswalker: { name: 'Boots of the Planeswalker', description: 'Astral whale leather boots. Plane shift at will, 60ft flying speed.' },
  crown_of_the_lich_king: { name: 'Crown of the Lich King', description: 'Black iron crown with phylactery. Necromancy immunity, command undead, Circle of Death 3/day.' },
  shield_of_the_celestial: { name: 'Shield of the Celestial', description: 'Celestial mithral shield. 10ft aura +2 AC to allies, fear immunity.' },
  amulet_of_immortality: { name: 'Amulet of Immortality', description: 'Eternal gold with phoenix blood. Every 7 days, return from 0 HP to full.' },
  gauntlets_of_the_titan: { name: 'Gauntlets of the Titan', description: 'Adamantine gauntlets. Strength 30, double carry, unarmed 4d6.' },
  ring_of_elemental_command_fire: { name: 'Ring of Fire Elemental Command', description: 'Solidified lava ring. Fire immunity, command fire elementals, Wall of Fire at will.' },
  mantle_of_the_void: { name: 'Mantle of the Void', description: 'Light-devouring cloak. Cold immunity, invisible in darkness, magic damage resistance.' },
  crown_of_stars: { name: 'Crown of Stars', description: 'Weightless circlet with star fragments. Hurl each for 4d12 radiant damage.' },
  belt_of_the_chosen: { name: 'Belt of the Chosen', description: 'Belt of fate threads. Reroll any roll 3/day, choose better result.' },
  full_plate_of_the_dragon_lord: { name: 'Full Plate of the Dragon Lord', description: 'Adamantine-dragon bone plate. Dragon breath immunity, +3 AC, inspires terror.' },
  boots_of_the_wind_god: { name: 'Boots of the Wind God', description: 'Weightless wind-shrouded boots. 90ft flight, fall immunity, 1/day hurricane.' },
  necklace_of_the_gods: { name: 'Necklace of the Gods', description: 'Nine divine stones. +3 to all ability scores, immunity to divine magic below 7th level.' },
  ring_of_djinni_summoning: { name: 'Ring of Djinni Summoning', description: 'Smoky gold ring. 1/day summon a djinni for one task or 1 hour combat.' },
  shield_of_the_bulwark: { name: 'Shield of the Bulwark', description: 'Star iron shield. On command 30ft wall of force, critical hit immunity.' },
  mask_of_the_shadow_lord: { name: 'Mask of the Shadow Lord', description: 'Materialized darkness mask. Truesight 120ft, shadow travel, necromancy immunity.' },
  living_armor: { name: 'Living Armor', description: 'Living metal armor from Mechanus ruins. Grows with wearer: 1-4 AC+3, 5-10 AC+5 acid resist, 11-16 AC+7 regen, 17+ AC+9 crit immunity.' },
  ring_of_the_bound_soul: { name: 'Ring of the Bound Soul', description: 'Bone silver ring with guardian spirit. Scales: +1/+2/+3 saves and additional powers by level.' },
  cloak_of_the_seasons: { name: 'Cloak of the Seasons', description: 'Fey cloak changing with seasons. Cold/fire/lightning resistance by level, eventual elemental immunity.' },
  helm_of_the_war_mage: { name: 'Helm of the War Mage', description: 'Enchanted steel helm with concentration crystal. +1/+2/+3/+4 spell attacks by level.' },
  boots_of_the_wanderer: { name: 'Boots of the Eternal Wanderer', description: 'Legendary traveler\'s boots. +5/+10/+15/+20 speed, eventually flight and teleport.' },
  gauntlets_of_the_forge: { name: 'Gauntlets of the Forge', description: 'God-smith gauntlets. +1/+2/+3/+4 attack, fire resistance, weapon creation by level.' },
  amulet_of_the_phoenix: { name: 'Amulet of the Phoenix', description: 'Smoldering phoenix feather amulet. Auto-stabilize, then 1/day revival, then full HP revival with fire burst.' },
  shield_of_the_sentinel: { name: 'Shield of the Sentinel', description: 'Ever-watchful eye shield. +2/+3 AC, counterattack, aura, eventually wall of force.' }
};

// ========== RARITY TRANSLATIONS ==========
const rarityTranslations = {
  'обычный': 'Common',
  'необычный': 'Uncommon',
  'редкий': 'Rare',
  'очень редкий': 'Very Rare',
  'легендарный': 'Legendary',
  'масштабирующийся': 'Scaling'
};

// ========== ABILITY TRANSLATIONS ==========
const abilityTranslations = {
  power_attack: { name: 'Power Attack', description: 'You can sacrifice accuracy for power. -2 to attack, +4 to damage.' },
  darkvision: { name: 'Darkvision', description: 'You can see in darkness up to 60 feet.' },
  sneak_attack: { name: 'Sneak Attack', description: 'Extra 1d6 damage when attacking from stealth.' },
  spellcasting: { name: 'Spellcaster', description: 'You can cast spells.' }
};

// ========== SPELL SCHOOL TRANSLATIONS ==========
const schoolTranslations = {
  'Воплощение': 'Evocation',
  'Некромантия': 'Necromancy',
  'Иллюзия': 'Illusion',
  'Очарование': 'Enchantment',
  'Ограждение': 'Abjuration',
  'Преобразование': 'Transmutation',
  'Прорицание': 'Divination',
  'Вызов': 'Conjuration',
  'Особая': 'Special'
};

// ========== APPLY TRANSLATIONS FUNCTION ==========
function applyTranslations(lang) {
  if (lang !== 'en') return; // Russian is default, no changes needed

  // Translate races
  if (typeof races !== 'undefined') {
    races.forEach(race => {
      const tr = raceTranslations[race.id];
      if (tr) {
        race.name = tr.name;
        race.description = tr.description;
      }
    });
  }

  // Translate classes
  if (typeof classes !== 'undefined') {
    classes.forEach(cls => {
      const tr = classTranslations[cls.id];
      if (tr) {
        cls.name = tr.name;
        cls.description = tr.description;
        if (tr.primaryAbility) cls.primaryAbility = tr.primaryAbility;
        if (tr.subclasses && cls.subclasses) {
          cls.subclasses.forEach(sub => {
            const subTr = tr.subclasses[sub.id];
            if (subTr) {
              sub.name = subTr.name;
              sub.description = subTr.description;
            }
          });
        }
      }
    });
  }

  // Translate spells
  if (typeof spells !== 'undefined') {
    spells.forEach(spell => {
      const tr = spellTranslations[spell.id];
      if (tr) {
        spell.name = tr.name;
        spell.description = tr.description;
      }
      // Translate school
      if (schoolTranslations[spell.school]) {
        spell.school = schoolTranslations[spell.school];
      }
    });
  }

  // Translate equipment
  if (typeof equipmentList !== 'undefined') {
    equipmentList.forEach(item => {
      const tr = equipmentTranslations[item.id];
      if (tr) {
        item.name = tr.name;
        item.description = tr.description;
      }
      // Translate rarity
      if (rarityTranslations[item.rarity]) {
        item.rarity = rarityTranslations[item.rarity];
      }
    });
  }

  // Translate abilities
  if (typeof abilities !== 'undefined') {
    abilities.forEach(ab => {
      const tr = abilityTranslations[ab.id];
      if (tr) {
        ab.name = tr.name;
        ab.description = tr.description;
      }
    });
  }
}

// Auto-apply translations on load
(function() {
  const lang = localStorage.getItem('app-lang') || 'ru';
  applyTranslations(lang);
})();
