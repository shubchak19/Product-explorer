import useFilter from "../../context/filter/useFilter";
import usePageIndex from "../../context/pagination/usePageIndex";
import useSearch from "../../context/search/useSearch";
import { allProducts } from "../../mock_data/productsData";
import PageIndex from "../pagination/PageIndex";
import ProductCard from "./ProductCard";

export default function AllProducts() {
  const { search } = useSearch();
  const { filter } = useFilter();
  const { currentPage } = usePageIndex();

  const productsPerPage = 10;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLetter = filter ? product.name.startsWith(filter) : true;
    return matchesSearch && matchesLetter;
  });
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <section className="mt-2">
      {paginatedProducts.length === 0 ? (
        <p>No products match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <PageIndex totalPages={totalPages} />
    </section>
  );
}
