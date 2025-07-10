import { createBrowserRouter } from "react-router";


import HomePage from "../pages/Home";
import ProductPage from "../pages/Products";
import AboutPage from "../pages/About";
import NotFoundPage from "../pages/NotFound";
import ComprarPage from "../pages/Comprar";

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
    path: "/comprar",
    Component: ComprarPage
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