export const playerStats = {
  level: 44,
  maxHealth: 177,
  health: 177,
  name: "Pika",
  img: "/assets/pikachu.png",

  magic: 32,
  attack: 50,
  defense: 30,
  magicDefense: 30,
  INT: 32,
  STR: 50,
  DEF: 30,
  MDEF: 30,
  AGI: 22,
};

const randomNum = (min, max) => {
  //Returns a random integer from 0 to 100:
  //Math.floor(Math.random() * 101);
  // Returns a random integer from 1 to 10:
  //Math.floor(Math.random() * 10) + 1;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomOpponent = () => {
  let rand = randomNum(0, 1);
  return opponents[rand];
};

const opponents = [
  {
    level: 44,
    name: "Meowth",
    maxHealth: 188,
    health: 188,
    img: "/assets/meowth.png",

    magic: 50,
    attack: 32,
    defense: 20,
    magicDefense: 48,
    INT: 32,
    STR: 50,
    DEF: 30,
    MDEF: 30,
    AGI: 22,
  },
  {
    level: 555,
    name: "Snorlax",
    maxHealth: 300,
    health: 300,
    img: "/assets/snorlax.png",

    magic: 20,
    attack: 60,
    defense: 100,
    magicDefense: 20,
    INT: 32,
    STR: 50,
    DEF: 30,
    MDEF: 30,
    AGI: 22,
  },
];
