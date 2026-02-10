export type Slide = {
  id: number;
  image: string;
  isNew?: boolean;
  isExclusive?: boolean;
};

export const Slides: Slide[] = [
  {
    id: 1,
    image: "/images/recentsliderimages/blazinghorses.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 2,
    image: "/images/recentsliderimages/eggstreme.png",
    isNew: true,
  },
  {
    id: 3,
    image: "/images/recentsliderimages/hercules.png",
    isNew: true,
  },
  {
    id: 4,
    image: "/images/recentsliderimages/jokerlove.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 5,
    image: "/images/recentsliderimages/socialmedia.png",
    isNew: true,
  },
  {
    id: 6,
    image: "/images/recentsliderimages/totemstacks.png",
    isNew: true,
  },
  {
    id: 7,
    image: "/images/recentsliderimages/ultraace.png",
    isNew: true,
  },
  {
    id: 8,
    image: "/images/recentsliderimages/valentinestorm.png",
    isNew: true,
  },
  {
    id: 9,
    image: "/images/recentsliderimages/wildwoof.png",
    isNew: true,
  },
  {
    id: 10,
    image: "/images/recentsliderimages/wintertrophy.png",
    isNew: true,
  },
];
