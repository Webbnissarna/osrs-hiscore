const skillNames = [
  "Overall",
  "Attack",
  "Defence",
  "Strength",
  "Hitpoints",
  "Ranged",
  "Prayer",
  "Magic",
  "Cooking",
  "Woodcutting",
  "Fletching",
  "Fishing",
  "Firemaking",
  "Crafting",
  "Smithing",
  "Mining",
  "Herblore",
  "Agility",
  "Thieving",
  "Slayer",
  "Farming",
  "Runecraft",
  "Hunter",
  "Construction",
];
const minigamesNames = [
  "League Points",
  "Bounty hunter - Hunter",
  "Bounty hunter - Rogue",
  "Clue scrolls (all)",
  "Clue scrolls (beginner)",
  "Clue scrolls (easy)",
  "Clue scrolls (medium)",
  "Clue scrolls (hard)",
  "Clue scrolls (elite)",
  "Clue scrolls (master)",
  "LMS - Rank",
];
const bossNames = [
  "Abyssal Sire",
  "Alchemical Hydra",
  "Barrows chests",
  "Bryophyta",
  "Callisto",
  "Cerberus",
  "Chambers of Xeric",
  "Chambers of Xeric: Challenge Mode",
  "Chaos Elemental",
  "Chaos Fanatic",
  "Commander Zilyana",
  "Corporeal Beast",
  "Crazy Archaeologist",
  "Dagannoth Prime",
  "Dagannoth Rex",
  "Dagannoth Supreme",
  "Deranged Archaeologist",
  "General Graardor",
  "Giant Mole",
  "Grotesque Guardians",
  "Hespori",
  "Kalphite Queen",
  "King Black Dragon",
  "Kraken",
  "Kree'Arra",
  "K'ril Tsutsaroth",
  "Mimic",
  "Nightmare",
  "Obor",
  "Sarachnis",
  "Scorpia",
  "Skotizo",
  "The Gauntlet",
  "The Corrupted Gauntlet",
  "Theatre of Blood",
  "Thermonuclear Smoke Devil",
  "Tzkal-Zuk",
  "TzTok-Jad",
  "Venenatis",
  "Vet'ion",
  "Vorkath",
  "Wintertodt",
  "Zalcano",
  "Zulrah",
];

export default function mapData(data) {
  const numberOfSkills: number = skillNames.length;
  const numberOfMinigames: number = minigamesNames.length;

  const lines: Array<string> = data.split("\n");
  const skills: Array<string> = lines.slice(0, numberOfSkills);
  const minigames: Array<string> = lines.slice(
    numberOfSkills,
    numberOfSkills + numberOfMinigames
  );
  const bosses: Array<string> = lines.slice(
    numberOfSkills + numberOfMinigames,
    lines.length - 1
  );

  return {
    skills: skills.map((skill, idx) => {
      const [rank, level, xp] = skill.split(",");
      return {
        name: skillNames[idx],
        rank: rank !== "-1" ? rank : "Not tracked yet",
        level: level !== "-1" ? level : "Not tracked yet",
        xp: xp !== "-1" ? xp : "Not tracked yet",
      };
    }),
    minigames: minigames.map((minigame, idx) => {
      const [rank, points] = minigame.split(",");
      return {
        name: minigamesNames[idx],
        rank: rank !== "-1" ? rank : "Not tracked yet",
        points: points !== "-1" ? points : "Not tracked yet",
      };
    }),
    bosses: bosses.map((boss, idx) => {
      const [rank, kills] = boss.split(",");
      return {
        name: bossNames[idx],
        rank: rank !== "-1" ? rank : "Not tracked yet",
        kills: kills !== "-1" ? kills : "Not tracked yet",
      };
    }),
  };
}
