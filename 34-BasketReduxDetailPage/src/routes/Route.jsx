import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Wishlist from "../pages/Wishlist";
import Basket from "../pages/Basket";
import ProductDetailPage from "../pages/ProductDetailPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wishlist",
        element: <Wishlist/>,
      },
      {
        path: "/basket",
        element: <Basket/>,
      },
      {
        path: "/productdetail/:id",
        element: <ProductDetailPage/>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);


