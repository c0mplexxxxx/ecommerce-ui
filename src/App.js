import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/productsSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route element={<Home />} path="/" />
      <Route element={<Shop />} path="/shop" />
      <Route element={<Product />} path="/product/:slug" />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
