import useFilter from "../../context/filter/useFilter";

export default function Filter() {
  const { filter, setFilter } = useFilter();
  return (
    <div className="px-2 my-2">
      <label className="mr-4 text-sm text-gray-500">Filter by alphabet</label>
      <select
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value || null)}
        className="px-3 py-1 border-b-2 border-gray-200 text-sm"
      >
        <option value="">All</option>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => (
          <option key={char} value={char}>
            {char}
          </option>
        ))}
      </select>
    </div>
  );
}
