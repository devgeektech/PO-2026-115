export type Slide = {
  id: number;
  image: string;
  isNew?: boolean;
  category: string;
  name: string;
  isExclusive?: boolean;
};

export const Slides: Slide[] = [
  {
    id: 1,
    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
    name: "BigBassBonzana.png",
    category: "JuwaFish",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 2,
    image: "/images/Juwa/JuwaFishGamesLogo/CashCow.png",
    name: "CashCow.png",
    category: "JuwaFish",
    isNew: true,
  },
  {
    id: 3,
    image: "/images/Juwa/JuwaFishGamesLogo/DeepSea.png",
    name: "/DeepSea.png",
    category: "JuwaFish",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 4,
    image: "/images/Juwa/JuwaFishGamesLogo/DeepSeaPredator.png",
    name: "DeepSeaPredator.png",
    category: "JuwaFish",
    isNew: true,
  },
  {
    id: 5,
    image: "/images/Juwa/JuwaFishGamesLogo/DragonTreasure.png",
    name: "DragonTreasure.png",
    category: "JuwaFish",
    isNew: true,
  },
  {
    id: 6,
    image: "/images/Juwa/JuwaFishGamesLogo/HappyFishing.png",
    name: "HappyFishing.png",
    category: "JuwaFish",
    isNew: true,
    isExclusive: true,
  },
];
