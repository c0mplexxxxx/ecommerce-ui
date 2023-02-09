import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {getProducts} from "../pages/Home"

const Latest = (props) => {
  const products = getProducts(Object.values(props.data),8);
  return (
    <div className="lastest-wrapper" data-aos="fade-up">
      <div className="container">
        <div className="lastest__header">
          <h2>Lastest product</h2>
          <Link to="/" className="lastest__btn">
            Explore products
          </Link>
        </div>
        <div className="lastest__products-list">
          {products.map((product, index) => (
            <div className="lastest__product" key={index}>
              <Link to={`/product/${product.slug}`}>
                <div className="lastest__product__image">
                  <img src={product.src} alt={product.title}></img>
                </div>
                <div className="lastest__product__content">
                  <p>{product.category}</p>
                  <h4>{product.title}</h4>
                  <p>
                    {`\$ ${product.sOPrice} USD `}
                    <span className="line-through">
                      {`\$ ${product.price} USD`}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
