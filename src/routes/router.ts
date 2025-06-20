import { createBrowserRouter } from "react-router";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "product", Component: ProductPage },
    ],
  },
]);

export default router;
