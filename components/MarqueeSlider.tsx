// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// const items = [
//   "JUWA",
//   "MILKWAY",
//   "FIREKIRIN",
//   "ORIONSTAR",
//   "GAME VAULT",
//   "VEGASSWEEP",
//   "VBLINK",
//   "ULTRAPANDA",
//   "PANDAMASTER",
//   "RIVERSWEEPS",
// ];

// const MarqueeSlider: React.FC = () => {
//   return (
//     <div className="marquee-container">
//       <Swiper
//         modules={[Autoplay]}
//         // loop={true}
//         slidesPerView="auto"
//         spaceBetween={50}
//         allowTouchMove={false}
//         speed={1200}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         className="marquee-swiper"
//       >
//         {[...items, ...items].map((text, index) => (
//           <SwiperSlide key={index} style={{ width: "auto" }}>
//             <span className="marquee-text">{text}</span>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MarqueeSlider;
"use client";

import React from "react";

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

const MarqueeSlider = () => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item marquee-text">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
