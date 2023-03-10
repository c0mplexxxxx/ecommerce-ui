import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
// import { default as products } from "../../assets/Data";
import Cta from "../components/Cta";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { fetchProducts } from "../redux/productsSlice";
import { searchFilterChange } from "../redux/filterSlice";

const Shop = () => {
  const data = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(searchFilterChange(e.target.value));
  };
  const searchInput = useSelector((state) => state.filters.search);
  const products = data.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      <div className="shop" data-aos="fade-scale" data-aos-duration="1200">
        <div className="breadcrumbs">
          <div className="container">
            <div className="breadcrumbs-content">
              <Link to="/">Home</Link>
              <div className="breadcrumbs-divider">/</div>
              <Link to="/shop">Shop</Link>
            </div>
          </div>
        </div>
        <div className="shop__hero-wrapper" data-aos="fade">
          <div className="container sm-container">
            <div className="shop__hero">
              <div className="shop__hero__content">
                <h1>Shop</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop__main-content">
          <div className="container">
            <div className="shop-content-wrapper">
              <div
                className="shop__sidebar"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="shop__search-box">
                  <div className="shop__search-icon">
                    <IoIosSearch />
                  </div>
                  <input
                    type="text"
                    className="input-field shop__input-field"
                    placeholder="Search for products"
                    onChange={(e) => handleSearch(e)}
                  />
                </div>
                <div className="shop__sidebar__section">
                  <div className="shop__sidebar__header">
                    Products by category
                  </div>
                  <div className="shop__sidebar__list">
                    <Link to="/category/fashion">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <i className="bx bxs-t-shirt start-ic"></i>
                          <p>Fashion</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="/category/decoration">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <i className="bx bx-paint-roll start-ic"></i>
                          <p>Decoration</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="/category/garden">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <i className="bx bx-leaf start-ic"></i>
                          <p>Garden</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="shop__sidebar__section">
                  <div className="shop__sidebar__header">Products by brand</div>
                  <div className="shop__sidebar__list">
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>Decoration Inc.</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>Fashion Co.</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>Sneakers & Co.</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>Pottery Mark</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="shop__sidebar__section">
                  <div className="shop__sidebar__header">Products by brand</div>
                  <div className="shop__sidebar__list">
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>White</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>Black</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>Gray</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="shop__sidebar__item">
                        <div className="d-flex align-center">
                          <p>Others</p>
                        </div>
                        <i className="bx bx-chevron-right end-ic"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="shop__stand">
                {products.map((product, index) => (
                  <div className="shop__card" key={index}>
                    <Link to={`/product/${product.slug}`}>
                      <div className="shop__card__image">
                        <img src={product.src} alt={product.title} />
                      </div>
                      <div className="shop__card__text">
                        <h4>{product.title}</h4>
                        <p>
                          $ {product.sOPrice} USD
                          <span className="line-through">
                            $ {product.price} USD
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__promotion-wrapper shop__hero-v2">
                    <div className="hero__promotion-banner" >
                        <div className="hero__promotion-banner__content">
                            <h2 className="hero__promotion-banner__heading">
                                Get 40% OFF in plants
                            </h2>
                            <p className="hero__promotion-banner__description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas turpis dictu
                            </p>
                            <button className="hero__buy-btn" type="submit">
                                Buy now
                            </button>
                        </div>
                        <div className="hero__promotion__image-wrapper">
                            <img
                                data-aos="fade"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                                src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f5a123c23d652751277825_image-2-promotion-shopwave-template.webp"
                                alt="Get 40% OFF in plants"
                            ></img>
                        </div>
                    </div>
                    <div className="hero__promotion-banner" >
                        <div className="hero__promotion-banner__content">
                            <h2 className="hero__promotion-banner__heading">
                                Get 15% OFF in decoration
                            </h2>
                            <p className="hero__promotion-banner__description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas turpis dictu
                            </p>
                            <button className="hero__buy-btn" type="submit">
                                Buy now
                            </button>
                        </div>
                        <div className="hero__promotion__image-wrapper">
                            <img
                                data-aos="fade"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                                src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f59f2e3ef1494f28c278de_image-3-promotion-shopwave-template.webp"
                                alt="Get 15% OFF in decoration"
                            ></img>
                        </div>
                    </div>
                </div>
    </>
  );
};

export default Shop;
