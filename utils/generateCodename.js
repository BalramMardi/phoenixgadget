const adjectives = [
  "Silent",
  "Dark",
  "Crimson",
  "Phantom",
  "Shadow",
  "Frost",
  "Iron",
  "Obsidian",
  "Ghost",
  "Storm",
  "Savage",
  "Midnight",
  "Cursed",
  "Blazing",
  "Venomous",
  "Steel",
  "Infernal",
  "Eternal",
  "Arcane",
  "Lone",
  "Frozen",
  "Howling",
  "Ancient",
  "Sinister",
  "Grim",
  "Raging",
  "Twisted",
  "Scarlet",
  "Vengeful",
  "Hollow",
  "Doomed",
  "Ruthless",
  "Radiant",
  "Mortal",
  "Celestial",
  "Dreadful",
  "Silent",
  "Burning",
  "Shattered",
  "Nocturnal",
  "Rogue",
  "Mystic",
  "Wicked",
  "Savage",
  "Thunderous",
  "Broken",
  "Lurking",
  "Bleeding",
  "Spectral",
  "Feral",
];
const nouns = [
  "Nightingale",
  "Kraken",
  "Viper",
  "Falcon",
  "Scorpion",
  "Wraith",
  "Raven",
  "Serpent",
  "Wolf",
  "Specter",
  "Reaper",
  "Phoenix",
  "Hydra",
  "Panther",
  "Raptor",
  "Hunter",
  "Dragon",
  "Shade",
  "Nomad",
  "Assassin",
  "Banshee",
  "Lion",
  "Tiger",
  "Jackal",
  "Leviathan",
  "Direwolf",
  "Gargoyle",
  "Valkyrie",
  "Ghoul",
  "Harbinger",
  "Manticore",
  "Predator",
  "Widow",
  "Omen",
  "Rogue",
  "Siren",
  "Cyclone",
  "Inferno",
  "Tempest",
  "Warlock",
  "Griffin",
  "Monarch",
  "Slayer",
  "Corsair",
  "Juggernaut",
  "Beast",
  "Fang",
  "Claw",
  "Stalker",
  "Rider",
];

module.exports = function generateCodename() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `The ${adj} ${noun}`;
};
