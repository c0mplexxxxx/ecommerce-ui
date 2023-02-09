import React, { useEffect } from "react";
// import { default as products } from "../assets/Data";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProducts } from "../pages/Home";

const BestProduct = (props) => {
  const popularProducts = getProducts(props.data, 3);
  const topRatedProducts = getProducts(props.data, 3);
  const topSellingProducts = getProducts(props.data, 3);
  const listPopularItems = popularProducts.map((product, index) => {
    return (
      <li key={product.id}>
        <Link to={`/product/${product.slug}`}>
          <div className="best-product__item">
            <div className="best-product__item__image">
              <img src={product.src} alt={product.title}></img>
            </div>
            <div className="best-product__item__text">
              <h4>{product.title}</h4>
              <p>
                ${product.sOPrice} USD{" "}
                <span className="line-through">${product.price} USD</span>
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  });
  const listTopRatedItems = topRatedProducts.map((product, index) => {
    return (
      <li key={product.id}>
        <Link to={`/product/${product.slug}`}>
          <div className="best-product__item">
            <div className="best-product__item__image">
              <img src={product.src} alt={product.title}></img>
            </div>
            <div className="best-product__item__text">
              <h4>{product.title}</h4>
              <p>
                ${product.sOPrice} USD{" "}
                <span className="line-through">${product.price} USD</span>
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  });
  const listTopSellingItems = topSellingProducts.map((product, index) => {
    return (
      <li key={product.id}>
        <Link to={`/product/${product.slug}`}>
          <div className="best-product__item">
            <div className="best-product__item__image">
              <img src={product.src} alt={product.title}></img>
            </div>
            <div className="best-product__item__text">
              <h4>{product.title}</h4>
              <p>
                ${product.sOPrice} USD{" "}
                <span className="line-through">${product.price} USD</span>
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <div className="best-product-wrapper">
      <div className="container">
        <div className="best-product">
          <div className="best-product__list" data-aos="fade-up">
            <h3>Popular products</h3>
            <ul>{listPopularItems}</ul>
          </div>
          <div
            className="best-product__list"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3>Top rated products</h3>
            <ul>{listTopRatedItems}</ul>
          </div>
          <div
            className="best-product__list"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3>Top selling products</h3>
            <ul>{listTopSellingItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
