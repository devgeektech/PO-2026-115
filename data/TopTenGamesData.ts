export type GameItem = {
    label: string;
    href: string;
    image?: string;   // for fish
    icon?: string;    // for keno & slot
    isNew?: boolean;
    isExclusive?: boolean;
};

export type SubCategories = {
    fish: GameItem[];
    keno: GameItem[];
    slot: GameItem[];
};

export type Category = {
    id: number;
    video: string;
    isNew?: boolean;
    isExclusive?: boolean;
    subcategoies: SubCategories;
};

export type CategoriesType = {
    [key: string]: Category;
};

export const TopTenGamesData: CategoriesType = {
    juwa: {
        id: 1,
        video: "/videos/juwa_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [
                {
                    isNew: true,
                    isExclusive: true,
                    label: "Big Bass Bonzana",
                    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
                    href: "/",
                },
                {
                    label: "Big Bass Bonzana",
                    image: "/images/Juwa/JuwaFishGamesLogo/CashCow.png",
                    href: "/",
                },
                {
                    label: "Deep Sea",
                    image: "/images/Juwa/JuwaFishGamesLogo/DeepSea.png",
                    href: "/",
                },
                {
                    isNew: true,
                    label: "Deep Sea Predator",
                    image: "/images/Juwa/JuwaFishGamesLogo/DeepSeaPredator.png",
                    href: "/",
                },
                {
                    label: "Dragon Treasure",
                    image: "/images/Juwa/JuwaFishGamesLogo/DragonTreasure.png",
                    href: "/",
                },
                {
                    label: "Happy Fishing",
                    image: "/images/Juwa/JuwaFishGamesLogo/HappyFishing.png",
                    href: "/",
                },
            ],
            keno: [
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/JuwaKenoGamesLogo/BuffaloKeno.png",
                    href: "/",
                },
                {
                    label: "Top Hitting Games",
                    icon: "/images/Juwa/JuwaKenoGamesLogo/HexaKeno.png",
                    href: "/",
                },
                {
                    label: "Recently Played",
                    icon: "/images/Juwa/JuwaKenoGamesLogo/SuperballKeno.png",
                    href: "/",
                },
            ],
            slot: [
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/777Lucky.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/BlackWhiteDouble.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/BonusHot7_s.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/BurningHOT.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/CashZone.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/CherryValentine.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/CrystalClovers.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/DiamondRiches.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/EpicSummer.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/EpicVault.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/FarmLife.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/FruitMary.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/FortuneLion.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/Glitz.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/HexGems.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/HugeCash.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/JackpotInferno.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/KingKong_sRampage.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/LifeofLuxury.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/LoteriaDon.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/MegaballDeluxe.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/MegaMoneyMachine.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/MegsPay.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/MoolahBingo.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/OhmyGirls.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/PerfectPurpleJackpots.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/President45.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/RainbowRiches.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/SimpleTriple.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/SpinGoldenWheel.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/SuperStars.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/WildRoyaleGold.png",
                    href: "/",
                },
                {
                    label: "Social Casino",
                    icon: "/images/Juwa/juwaSlotGamesLogo/WildWest.png",
                    href: "/",
                },
            ],
        },
    },
    cashfrenzy: {
        id: 1,
        video: "/videos/cashfrenzy_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    gameRoom: {
        id: 1,
        video: "/videos/gameroom_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    gamevalut: {
        id: 1,
        video: "/videos/gamevault_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    juwa2: {
        id: 1,
        video: "/videos/juwa2_0_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    machine: {
        id: 1,
        video: "/videos/machine_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    milkyWays: {
        id: 1,
        video: "/videos/milkyways_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    orionstars: {
        id: 1,
        video: "/videos/orionstars_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    pandamaster: {
        id: 1,
        video: "/videos/pandamaster_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    riverSweeps: {
        id: 1,
        video: "/videos/pandamaster_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    ultraPanda: {
        id: 1,
        video: "/videos/pandamaster_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    vblink: {
        id: 1,
        video: "/videos/pandamaster_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
    vegassweeps: {
        id: 1,
        video: "/videos/pandamaster_video.mp4",
        isNew: true,
        isExclusive: true,
        subcategoies: {
            fish: [],
            keno: [],
            slot: [],
        },
    },
};
