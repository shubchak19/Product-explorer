import { createContext } from "react";

type PageContextType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const PageContext = createContext<PageContextType | null>(null);
