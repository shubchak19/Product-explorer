import type { Product } from "../../mock_data/productsData";

type ProductProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div key={product.id} className="border border-gray-200 shadow-md rounded p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <div>
        <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
        <p className="text-sm">{product.description}</p>
      </div>
      <p className="text-sm text-gray-500 mt-6 bg-blue-100 w-fit px-2 rounded">{product.category}</p>
      <div className="flex flex-col sm:flex-row gap-2 w-full mt-4">
        <button className="btn-outlined w-full">
            Add to cart
        </button>
        <button className="btn-filled w-full">
            Buy now
        </button>
      </div>
    </div>
  );
}
