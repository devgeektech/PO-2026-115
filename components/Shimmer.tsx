export default function Shimmer({ height = 200 }: { height?: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]"
      style={{ height }}
    >
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}