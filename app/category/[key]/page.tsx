"use client";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { TopTenGamesData } from "@/data/TopTenGamesData";
import { useParams } from "next/navigation";

export default function Slots() {
  const params = useParams<{ key: string }>();
  const key = params?.key;
  const [visibleCount, setVisibleCount] = useState(10);
  const router = useRouter();
  const slotGames = useMemo(() => {
    if (!key) return [];

    return (Object.values(TopTenGamesData) as any[])
      .filter((platform) => platform.subcategoies?.[key])
      .flatMap((platform) => platform.subcategoies?.[key] || []);
  }, [key]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const goToGames = (slide: any) => {
    if (slide.type == "sub-cat" && slide.detailImage) {
      router.push(`/${slide.cat}/${slide.sub}/${slide.key}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {key ? key.charAt(0).toUpperCase() + key.slice(1) : ""} Games
      </h1>

      <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {slotGames.slice(0, visibleCount).map((game, index) => (
          <li key={index}>
            <img
              src={game.image}
              alt={game.label}
              className="w-full h-auto cursor-pointer"
              onClick={() => {
                goToGames(game);
              }}
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
            More {key} Games
          </button>
        </div>
      )}
    </div>
  );
}
