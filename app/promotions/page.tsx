import { PromoBanner } from "@/components/PromoBanner";
import { SectionTitle } from "@/components/SectionTitle";


export default function PromotionsPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Current Promotions" />
      <PromoBanner />
      <PromoBanner />
    </div>
  );
}
