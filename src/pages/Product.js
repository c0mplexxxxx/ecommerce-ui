import React, { useEffect, useState } from "react";
import { default as products } from "../assets/Data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";
import { getProducts } from "./Home";

const Product = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const data = getProducts(products, 3);

  const listItems = data.map((product, index) => {
    return (
      <li key={product.id}>
        <Link to="/shop">
          <div className="sidebar__popular__item">
            <div className="sidebar__popular__item--image">
              <img src={product.src} alt={product.title}></img>
            </div>
            <div className="sidebar__popular__item--text">
              <h5>{product.title}</h5>
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

  const listLastestProducts = getProducts(products, 4);

  const params = useParams();

  const singleProduct = products.find(
    (product) => product.slug === params.slug
  );

  const relatedProducts = products.filter(
    (product) =>
      product.category === singleProduct.category &&
      product.title != singleProduct.title
  );

  const handleAddToCart = (singleProduct, quantity) => {
    dispatch(
      addToCart({
        product: singleProduct,
        quantity: quantity,
      })
    );
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="wrapper" data-aos="fade-scale">
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs-content">
            <Link to="/">Home</Link>
            <div className="breadcrumbs-divider">/</div>
            <Link to="/shop">Shop</Link>
            <div className="breadcrumbs-divider">/</div>
            <Link to="#">{singleProduct.title}</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product__hero" data-aos="fade-up">
          <div className="product__hero__main-content" data-aos="fade-up-sm">
            <div className="preview__section">
              <div className="preview__section--zoom">
                <div className="preview__section--zoom-item">
                  <Link to="#">
                    <img
                      src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f697b67b9d8d605cd0fde8_more-image-1-shop-product-shopwave-template.png"
                      alt="."
                    />
                  </Link>
                </div>
                <div className="preview__section--zoom-item">
                  <Link to="#">
                    <img
                      src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f697b67640273bfe19c51b_more-image-2-shop-product-shopwave-template.png"
                      alt="."
                    />
                  </Link>
                </div>
                <div className="preview__section--zoom-item">
                  <Link to="#">
                    <img
                      src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f697b6ea32fefb0084af2c_more-image-3-shop-product-shopwave-template.png"
                      alt="."
                    />
                  </Link>
                </div>
                <div className="preview__section--zoom-item">
                  <Link to="#">
                    <img
                      src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f697b658cd9b63ae33e44d_more-image-4-shop-product-shopwave-template.png"
                      alt="."
                    />
                  </Link>
                </div>
              </div>
              <div className="preview__section--main">
                <Link to="#">
                  <img src={singleProduct.src} alt={singleProduct.title} />
                </Link>
              </div>
            </div>
            <div className="related-product__section" data-aos="fade-up">
              <div className="related-product__header">Related products</div>
              <div className="related-product__list">
                {relatedProducts.map((product, index) => (
                  <Link to={`/product/${product.slug}`}>
                    <div className="related-product__item">
                      <div className="related-product__item--image">
                        <img src={product.src} alt={product.title} />
                      </div>
                      <div className="related-product__item--text">
                        <p>{product.brand}</p>
                        <h4>{product.title}</h4>
                        <p>
                          $ {product.sOPrice} USD{" "}
                          <span className="line-through">
                            ${product.price} USD
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="product-information" data-aos="fade-up">
              <div className="main-header">Product information</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <span>adipiscing</span>{" "}
                elit lobortis arcu enim urna adipiscing praesent velit viverra
                sit semper lorem eu cursus vel hendrerit elementum morbi
                curabitur etiam nibh justo, lorem aliquet donec sed sit mi
                dignissim at ante massa mattis.
              </p>
              <p>
                Viverra aliquet eget sit amet tellus cras. Cursus sit amet
                dictum sit amet. Diam donec adipiscing tristique risus nec. Diam
                donec adipiscing tristique risus nec feugiat in. Quisque egestas
                diam in arcu cursus euismod quis viverra nibh. Quis imperdiet
                massa tincidunt nunc.
              </p>
              <ol>
                <li>
                  Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                  auctor
                </li>
                <li>
                  Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                  potent purus in massa temp
                </li>
                <li>
                  Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
                </li>
                <li>
                  Adipiscing elit ut aliquam purus sit amet viverra suspendisse
                  potenti diam vel quam
                </li>
              </ol>
              <p>
                Lorem ipsum dolor sit amet, consectetur <span>adipiscing</span>{" "}
                elit lobortis arcu enim urna adipiscing praesent velit viverra
                sit semper lorem eu cursus vel hendrerit elementum morbi
                curabitur etiam nibh justo, lorem aliquet donec sed sit mi
                dignissim at ante massa mattis.
              </p>
            </div>
            <div className="product-details" data-aos="fade-up">
              <div className="main-header">Product details</div>
              <div className="product-details__content">
                <div className="product-details__content__item">
                  <div className="product-details__content--left">Brand:</div>
                  <div className="product-details__content--right">
                    Fashion Co.
                  </div>
                </div>
                <div className="product-details__content__item">
                  <div className="product-details__content--left">
                    Model name :
                  </div>
                  <div className="product-details__content--right">
                    Basic Gray T-Shirt
                  </div>
                </div>
                <div className="product-details__content__item">
                  <div className="product-details__content--left">Color :</div>
                  <div className="product-details__content--right">Grey</div>
                </div>
                <div className="product-details__content__item">
                  <div className="product-details__content--left">Size :</div>
                  <div className="product-details__content--right">Medium</div>
                </div>
                <div className="product-details__content__item">
                  <div className="product-details__content--left">
                    Package dimensions :
                  </div>
                  <div className="product-details__content--right">
                    11.54 x 10.59 x 3.42 inches; 5.28 Ounces
                  </div>
                </div>
                <div className="product-details__content__item">
                  <div className="product-details__content--left">
                    Item weight :
                  </div>
                  <div className="product-details__content--right">
                    3 ounces
                  </div>
                </div>
              </div>
              <div className="main-header">Shipping information</div>
              <p className="product-paragraph">
                Lorem ipsum dolor sit amet, consectetur <span>adipiscing</span>{" "}
                elit lobortis arcu enim urna adipiscing praesent velit viverra
                sit semper lorem eu cursus vel hendrerit elementum morbi
                curabitur etiam nibh justo, lorem aliquet donec sed sit mi
                dignissim at ante massa mattis.
              </p>
              <p className="product-paragraph">
                Viverra aliquet eget sit amet tellus cras. Cursus sit amet
                dictum sit amet. Diam donec adipiscing tristique risus nec. Diam
                donec adipiscing tristique risus nec feugiat in. Quisque egestas
                diam in arcu cursus euismod quis viverra nibh. Quis imperdiet
                massa tincidunt nunc.
              </p>
            </div>
          </div>

          <div
            className="product__sidebar"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="sidebar__cart-section">
              <div className="sidebar__cart__top">
                <div className="hot-span">
                  <span>Hot</span>
                </div>
                <h4>{singleProduct.title}</h4>
                <p>{singleProduct.desc}</p>
                <div className="product__price line-through">
                  {`\$ ${singleProduct.price} USD`}
                </div>
                <div className="product__sale-price">
                  <h3>{`\$ ${singleProduct.sOPrice} USD`}</h3>
                  <span>25% OFF</span>
                </div>
              </div>
              <div className="sidebar__cart__middle">
                <h5>Product information</h5>
                <div className="sidebar__cart-info">
                  <div className="sidebar__cart-info--left">Brand:</div>
                  <div className="sidebar__cart-info--right">
                    {singleProduct.brand}
                  </div>
                </div>
                <div className="sidebar__cart-info">
                  <div className="sidebar__cart-info--left">Model name:</div>
                  <div className="sidebar__cart-info--right">
                    {singleProduct.title}
                  </div>
                </div>
                <div className="sidebar__cart-info">
                  <div className="sidebar__cart-info--left">Color:</div>
                  <div className="sidebar__cart-info--right">
                    {singleProduct.color}
                  </div>
                </div>
                <div className="sidebar__cart-info">
                  <div className="sidebar__cart-info--left">Size:</div>
                  <div className="sidebar__cart-info--right">Medium</div>
                </div>
              </div>
              <div className="sidebar__cart__bottom">
                <div className="sidebar__cart__bottom__purchase">
                  <div className="select-section-wrapper">
                    <div className="select-quantity">
                      <label htmlFor="">Quantity</label>
                      <input
                        value={quantity}
                        type="number"
                        className="input-field product__input-field"
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value < 0) {
                            setQuantity(0);
                          } else {
                            setQuantity(value);
                          }
                        }}
                      />
                    </div>
                    <div className="select-color">
                      <label htmlFor="">Color</label>
                      <div className="select-color__input">
                        <select name="" id="">
                          <option value="">Select color</option>
                          <option value="">{singleProduct.color}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="product-btn">
                    <button
                      className="btn-primary"
                      onClick={() => handleAddToCart(singleProduct, quantity)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="sidebar__cart__bottom__perks">
                  <div className="perks-item">
                    <img
                      src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62fa80dc45fcfab83e071ad2_icon-1-product-features-shopwave-template.svg"
                      alt="truck"
                    />
                    <div className="perks-item--text">
                      <h6>Free shipping</h6>
                      <p>Nisi quis eleifend quam adipis lorem ipsum</p>
                    </div>
                  </div>
                  <div className="perks-item">
                    <img
                      src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62fa80dcd46d138d70fedf6b_icon-2-product-features-shopwave-template.svg"
                      alt="truck"
                    />
                    <div className="perks-item--text">
                      <h6>Secure payment</h6>
                      <p>Lorem ipsum dolor sit ame consectur dragon dolrmer</p>
                    </div>
                  </div>
                  <div className="perks-item">
                    <img
                      src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62fa80dc852bce7560ffa546_icon-3-product-features-shopwave-template.svg"
                      alt="truck"
                    />
                    <div className="perks-item--text">
                      <h6>Free returns</h6>
                      <p>Lorem ipsum dolor sit ame consectur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__popular-section">
              <h4>Popular products</h4>
              <div className="sidebar__popular-list">
                <ul>{listItems}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="product__latest-section" data-aos="fade-up">
          <div className="lastest__header">
            <h2>Lastest product</h2>
            <Link to="/" className="lastest__btn">
              Explore products
            </Link>
          </div>
          <div className="lastest__products-list">
            {listLastestProducts.map((product) => (
              <div className="lastest__product lastest__product--singlepage">
                <Link to={`/product/${product.slug}`}>
                  <div className="lastest__product__image">
                    <img src={product.src} alt={product.title}></img>
                  </div>
                  <div className="lastest__product__content">
                    <p>{product.brand}</p>
                    <h4>{product.title}</h4>
                    <p>
                      $ {product.sOPrice} USD{" "}
                      <span className="line-through">${product.price} USD</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
