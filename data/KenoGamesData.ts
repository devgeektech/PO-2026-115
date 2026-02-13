export type Slide = {
  id: number;
  image: string;
  isNew?: boolean;
  isExclusive?: boolean;
};

export const Slides: Slide[] = [
  {
    id: 1,
    image: "/images/kenogamesslider/aztecfire.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 2,
    image: "/images/kenogamesslider/blackwolf.png",
    isNew: true,
  },
  {
    id: 3,
    image: "/images/kenogamesslider/hitmoregold.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 4,
    image: "/images/kenogamesslider/loingems.png",
    isNew: true,
  },
  {
    id: 5,
    image: "/images/kenogamesslider/piratechest.png",
    isNew: true,
  },
  {
    id: 6,
    image: "/images/kenogamesslider/royalcoins.png",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 7,
    image: "/images/kenogamesslider/aztecfire.png",
    isExclusive: true,
  },
  {
    id: 8,
    image: "/images/kenogamesslider/blackwolf.png",
    isNew: true,
    isExclusive: true,
  },
];
