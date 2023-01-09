import React from "react";
import { default as products } from "../assets/Products";

const listItems = products.map((product, index) => {
    if (index < 3) {
        return (
            <li>
                <a href="/">
                    <div className="best-product__item">
                        <div className="best-product__item__image">
                            <img src={product.src} alt={product.title}></img>
                        </div>
                        <div className="best-product__item__text">
                            <h4>{product.title}</h4>
                            <p>
                                ${product.sOPrice} USD <span className="line-through">${product.price} USD</span>
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
});

const BestProduct = () => {
    return (
        <div className="best-product-wrapper">
            <div className="container">
                <div className="best-product">
                    <div className="best-product__list">
                        <h3>Popular products</h3>
                        <ul>{listItems}</ul>
                    </div>
                    <div className="best-product__list">
                        <h3>Top rated products</h3>
                        <ul>{listItems}</ul>
                    </div>
                    <div className="best-product__list">
                        <h3>Top selling products</h3>
                        <ul>{listItems}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestProduct;
