export function PromoBanner() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff3d00] via-[#ff9800] to-[#ffd54f]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-10">
        {/* Left Content */}
        <div className="max-w-xl text-black">
          <span className="inline-block mb-2 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white">
            LIMITED TIME
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Get Your First Deposit Bonus
          </h2>
          <p className="mt-2 text-sm md:text-base font-medium">
            Play top online slots and unlock exclusive rewards instantly.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-lg bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-black/90">
              Claim Bonus
            </button>
            <button className="rounded-lg border border-black px-5 py-2 text-sm font-semibold text-black hover:bg-black/10">
              View Details
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-40 w-full max-w-sm md:h-48">
          <div className="absolute inset-0 rounded-xl bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-black text-black/70">
            🎰
          </div>
        </div>
      </div>
    </div>
  );
}
