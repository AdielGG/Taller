import { createBrowserRouter } from "react-router";


import HomePage from "../pages/Home";
import ProductPage from "../pages/Products";
import AboutPage from "../pages/About";
import NotFoundPage from "../pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/products", 
    Component: ProductPage

  },
  {
    path: "/products/:id",
    Component: ProductPage
  },
  {
    path: "/about",
    Component: AboutPage
  },
  {
    path: "*",
    Component: NotFoundPage
  } 
]);

export default router;