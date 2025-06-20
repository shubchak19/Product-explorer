import { useContext } from "react";
import { PageContext } from "./PageContext";

export default function usePageIndex() {
  const context = useContext(PageContext);
  if (!context)
    throw new Error("usePageIndex must be used within a PageIndexProvider");
  return context;
}
