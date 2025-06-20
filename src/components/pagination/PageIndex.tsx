import usePageIndex from "../../context/pagination/usePageIndex";

export default function PageIndex({ totalPages = 0 }) {
  const { currentPage, setCurrentPage } = usePageIndex();

  return (
    <div className="flex justify-center my-6 gap-4">
      <button
        onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 disabled:opacity-50"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 ${
            currentPage === i + 1 ? "border-b-2 border-blue-500" : ""
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded disabled:opacity-50"
      >
        ›
      </button>
    </div>
  );
}
