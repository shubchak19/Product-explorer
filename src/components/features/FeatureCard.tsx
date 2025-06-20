import type { Feature } from "../../mock_data/featureData";

type FeatureProps = {
  feature: Feature;
};
export default function FeatureCard({ feature }: FeatureProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}
