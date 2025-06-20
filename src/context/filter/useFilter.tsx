import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export default function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilter must be used within a FilterProvider"
    );
  }
  return context;
}
