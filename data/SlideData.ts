export type Slide = {
  id: number;
  video: string;
  isNew?: boolean;
  isExclusive?: boolean;
};

export const Slides: Slide[] = [
  {
    id: 1,
    video: "/videos/cashfrenzy_video.mp4",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 2,
    video: "/videos/gameroom_video.mp4",
    isNew: true,
  },
  {
    id: 3,
    video: "/videos/gamevault_video.mp4",
  },
  {
    id: 4,
    video: "/videos/juwa_video.mp4",
    isNew: true,
    isExclusive: true,
  },
  {
    id: 5,
    video: "/videos/juwa2_0_video.mp4",
    isNew: true,
  },
  {
    id: 6,
    video: "/videos/machine_video.mp4",
  },
  {
    id: 7,
    video: "/videos/milkyways_video.mp4",
  },
  {
    id: 8,
    video: "/videos/orionstars_video.mp4",
  },
  {
    id: 9,
    video: "/videos/pandamaster_video.mp4",
  },
  {
    id: 10,
    video: "/videos/riversweeps_video .mp4",
  },
  {
    id: 11,
    video: "/videos/ultrapanda_video.mp4",
  },
  {
    id: 12,
    video: "/videos/vblink_video.mp4",
  },
  {
    id: 13,
    video: "/videos/vegassweeps_video.mp4",
  },
];
