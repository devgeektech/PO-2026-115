export type Slide = {
  id: number;
  image: string;
  isNew?: boolean;
  isExclusive?: boolean;
};

export const Slides: Slide[] = [
  {
    id: 1,
    image: "/images/slotsgamesslider/wildwoof.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 2,
    image: "/images/slotsgamesslider/socialmedia.png",
    isNew: true,
  },
  {
    id: 3,
    image: "/images/slotsgamesslider/wildwoof.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 4,
    image: "/images/slotsgamesslider/eggstreme.png",
    isNew: true,
  },
  {
    id: 5,
    image: "/images/slotsgamesslider/jokerlove.png",
    isNew: true,
  },
  {
    id: 6,
    image: "/images/slotsgamesslider/wildwoof.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 7,
    image: "/images/slotsgamesslider/socialmedia.png",
    isExclusive: true,
  },
  {
    id: 8,
    image: "/images/slotsgamesslider/eggstreme.png",
    isNew: true,
    isExclusive: true,
  },
];
