// ProductCategoriesSection.tsx
import { categoriesData } from "../../mock_data/categoriesData";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesData.map((category, index) => (
            <CategoryCard
              key={`${category.name}-${index}`}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
