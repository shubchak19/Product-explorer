import { useState } from "react";
import { FilterContext } from "./filter/FilterContext";
import { SearchContext } from "./search/SearchContext";
import { PageContext } from "./pagination/PageContext";

type FilterProviderProps = {
  children: React.ReactNode;
};

export default function AllContextProvider({ children }: FilterProviderProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
          {children}
        </PageContext.Provider>
      </FilterContext.Provider>
    </SearchContext.Provider>
  );
}
