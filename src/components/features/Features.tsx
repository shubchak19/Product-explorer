// FeatureSection.tsx
import { featureData } from "../../mock_data/featureData";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={`${feature.title}-${index}`}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
