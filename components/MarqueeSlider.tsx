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
