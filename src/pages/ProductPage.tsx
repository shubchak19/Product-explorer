import AllProducts from "../components/product/AllProducts";
import SearchBar from "../components/search/SearchBar";
import Filter from "../components/search/Filter";
import AllContextProvider from "../context/AllContextProvider";

export default function ProductPage() {
  return (
    <AllContextProvider>
      <section className="p-4 md:p-8">
        <div className="flex lg:flex-row flex-col gap-4 lg:items-center justify-between">
          <h1 className="text-3xl font-bold mb-4">Our Products</h1>
          <SearchBar />
        </div>
        <div className="w-full flex lg:justify-end mb-4">
          <Filter />
        </div>
        <AllProducts />
      </section>
    </AllContextProvider>
  );
}
