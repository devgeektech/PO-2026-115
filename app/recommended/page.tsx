import { SectionTitle } from "@/components/SectionTitle";
import { SlotGrid } from "@/components/SlotGrid";

export default function RecommendedPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Recommended For You" />
      <SlotGrid />
    </div>
  );
}
