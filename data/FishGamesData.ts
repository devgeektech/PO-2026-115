export type Slide = {
  id: number;
  image: string;
  isNew?: boolean;
  isExclusive?: boolean;
};

export const Slides: Slide[] = [
  {
    id: 1,
    image: "/images/fishgamesslider/buffalorampage.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 2,
    image: "/images/fishgamesslider/chillibells.png",
    isNew: true,
  },
  {
    id: 3,
    image: "/images/fishgamesslider/christmas.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 4,
    image: "/images/fishgamesslider/jokershow.png",
    isNew: true,
  },
  {
    id: 5,
    image: "/images/fishgamesslider/pengwins.png",
    isNew: true,
  },
  {
    id: 6,
    image: "/images/fishgamesslider/pigsxmas.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 7,
    image: "/images/fishgamesslider/chillibells.png",
    isExclusive: true,
  },
  {
    id: 8,
    image: "/images/fishgamesslider/christmas.png",
    isNew: true,
    isExclusive: true,
  },
];
