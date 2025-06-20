import type { ProductCategory } from "../../mock_data/categoriesData";

type CategoryProps = {
  category: ProductCategory;
};

export default function CategoryCard({ category }: CategoryProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm">{category.description}</p>
      </div>
    </div>
  );
}
