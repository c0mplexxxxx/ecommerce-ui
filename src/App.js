import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
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
                path: "/category/:id",
                element: <Category />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
        ],
    },
]);

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
