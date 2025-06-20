import useSearch from "../../context/search/useSearch";

export default function SearchBar() {
  const { search, setSearch } = useSearch();
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search products..."
      className="px-2 max-w-xl w-full py-1 rounded border-2 border-blue-200 "
    />
  );
}
