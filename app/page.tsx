import Image from "next/image";

const games = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Game ${i + 1}`,
  image: `https://picsum.photos/300/400?random=${i + 10}`,
}));

export default function HomePage() {
  return (
    <div className="flex bg-[#0b0b0f] text-white min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col gap-4 px-4 py-6 bg-black border-r border-white/10">
        {[
          "Social Casino",
          "Recommended Games",
          "Recently Played",
          "Slots by Volatility",
          "Live Casino",
          "Promos",
          "Player Trust & Safety",
          "Help",
          
        ].map((item) => (
          <button
            key={item}
            className="text-left text-sm text-white/70 hover:text-white transition"
          >
            {item}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6 space-y-10">
        {/* Hero Banner */}
        <div className="relative h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1606167668584-78701c57f13d"
            alt="Promo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="px-8">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                GET YOUR <span className="text-orange-500">150% EXTRA</span>
              </h1>
              <button className="mt-4 rounded-lg bg-orange-500 px-6 py-3 font-bold text-black">
                Claim Bonus
              </button>
            </div>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            "Social Casino",
            "Recommended",
            "Hold & Win",
            "Classic",
            "Megaways",
            "Cascading Reels",
          ].map((cat) => (
            <span
              key={cat}
              className="whitespace-nowrap rounded-full bg-[#1b1b24] px-4 py-2 text-sm hover:bg-orange-500 hover:text-black cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Sections */}
        <GameSection title="Recommended Games" />
        <GameSection title="Top 10 In Your State" numbered />
        <GameSection title="Online Slots 717 Exclusives" />
        <GameSection title="Arcade Games" />
        <GameSection title="Themes" />
      </main>
    </div>
  );
}

/* -------------------------------- */

function GameSection({
  title,
  numbered = false,
}: {
  title: string;
  numbered?: boolean;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-sm text-orange-400 hover:text-orange-300">
          See All →
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {games.map((game, i) => (
          <div
            key={game.id}
            className="relative min-w-[160px] h-[240px] rounded-xl overflow-hidden bg-[#1b1b24] transition-transform hover:scale-105"
          >
            {numbered && (
              <span className="absolute top-2 left-2 z-10 text-4xl font-extrabold text-white/80 drop-shadow">
                {i + 1}
              </span>
            )}

            <Image
              src={game.image}
              alt={game.title}
              fill
              sizes="(max-width: 768px) 160px, 200px"
              className="object-cover object-center transition-transform duration-300 hover:scale-110"
            />

            {/* Bottom gradient + title */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
              <p className="text-xs font-medium truncate">{game.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
