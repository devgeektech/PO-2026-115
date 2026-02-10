export type Slide = {
  id: number;
  title: string;
  provider: string;
  image: string;
  isNew?: boolean;
  isExclusive?: boolean;
};

export const Slides: Slide[] = [
  {
    id: 1,
    title: "Wild Woof Returns",
    provider: "Gaming Corps",
    image: "/images/recentsliderimages/blazinghorses.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 2,
    title: "The King of Social Media",
    provider: "Betsoft",
    image: "/images/recentsliderimages/eggstreme.png",
    isNew: true,
  },
  {
    id: 3,
    title: "Barnyard Bash Egg-Streme",
    provider: "Golden Gopher Gaming",
    image: "/images/recentsliderimages/hercules.png",
    isNew: true,
  },
  {
    id: 4,
    title: "Wild Woof Returns",
    provider: "Gaming Corps",
    image: "/images/recentsliderimages/jokerlove.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 5,
    title: "The King of Social Media",
    provider: "Betsoft",
    image: "/images/recentsliderimages/socialmedia.png",
    isNew: true,
  },
  {
    id: 6,
    title: "Barnyard Bash Egg-Streme",
    provider: "Golden Gopher Gaming",
    image: "/images/recentsliderimages/totemstacks.png",
    isNew: true,
  },
  {
    id: 7,
    title: "Barnyard Bash Egg-Streme",
    provider: "Golden Gopher Gaming",
    image: "/images/recentsliderimages/ultraace.png",
    isNew: true,
  },
  {
    id: 8,
    title: "Barnyard Bash Egg-Streme",
    provider: "Golden Gopher Gaming",
    image: "/images/recentsliderimages/valentinestorm.png",
    isNew: true,
  },
  {
    id: 9,
    title: "Barnyard Bash Egg-Streme",
    provider: "Golden Gopher Gaming",
    image: "/images/recentsliderimages/wildwoof.png",
    isNew: true,
  },
  {
    id: 10,
    title: "Barnyard Bash Egg-Streme",
    provider: "Golden Gopher Gaming",
    image: "/images/recentsliderimages/wintertrophy.png",
    isNew: true,
  },
];
