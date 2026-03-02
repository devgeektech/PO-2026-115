"use client";

import { useState } from "react";
import { TopTenGamesData } from "@/data/TopTenGamesData";

export default function Slots() {
  const slotGames = TopTenGamesData.juwa.subcategoies.slot || [];

  const [visibleCount, setVisibleCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Juwa Slot Games</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {slotGames.slice(0, visibleCount).map((game, index) => (
          <li key={index}>
            <img
              src={game.image}
              alt={game.label}
              className="w-full h-auto cursor-pointer"
            />
          </li>
        ))}
      </ul>

      {/* Load More Button */}
      {visibleCount < slotGames.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-10 py-3 bg-[#64008b] border-[#bc13fe] text-white rounded-md  transition cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
