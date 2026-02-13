import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const items = [
  "JUWA",
  "MILKWAY",
  "FIREKIRIN",
  "ORIONSTAR",
  "GAME VAULT",
  "VEGASSWEEP",
  "VBLINK",
  "ULTRAPANDA",
  "PANDAMASTER",
  "RIVERSWEEPS",
];

const MarqueeSlider: React.FC = () => {
  return (
    <div className="marquee-container">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={2000}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove={false}
        loopAdditionalSlides={items.length}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="my-marquee"
      >
        {[...items, ...items].map((text, i) => (
          <SwiperSlide key={i} style={{ width: "auto" }}>
            <span className="marquee-text">{text}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeSlider;
