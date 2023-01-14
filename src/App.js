import React, {useEffect} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {
    AOS.init({
        once: true,
        offset: 150,
        easing: 'ease-out'
    });
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
                path: "/shop",
                element: <Shop />,
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
