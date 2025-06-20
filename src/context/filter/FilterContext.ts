import { createContext } from "react";

type FilterContextType = {
  filter: string | null;
  setFilter: (value: string | null) => void;
};

export const FilterContext = createContext<FilterContextType | null>(null);
