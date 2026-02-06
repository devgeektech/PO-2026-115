import { SlotCard } from "./SlotCard";

export function SlotGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {Array.from({ length: 24 }).map((_, i) => (
        <SlotCard key={i} />
      ))}
    </div>
  );
}
