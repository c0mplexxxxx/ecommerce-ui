import React from "react";
import Hero from "../components/Hero"
import Latest from "../components/Latest";
import Cta from "../components/Cta";
import Slider from "../components/Slider";
import TopCategories from "../components/TopCategories";
import BestProduct from "../components/BestProduct";
import ShopPerks from "../components/ShopPerks";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector(state => state.products.products);
  return (
    <div>
      <Hero />
      <Latest data={data} />
      <Cta />
      <Slider data={data} />
      <TopCategories />
      <BestProduct data={data} />
      <ShopPerks />
    </div>
  );
};
export const getProducts = (data, count) => {
  const max = data.length - count
  const min = 0
  const start = Math.floor(Math.random() * (max - min) + min)
  return data.slice(start, start + count)
}

export default Home;
