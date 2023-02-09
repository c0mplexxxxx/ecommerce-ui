import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="container" data-aos="fade">
          <div className="footer-content">
            <div className="footer-content__col__menu">
              <h4>Menu</h4>
              <div className="nav-content">
                <div className="footer-content__col__menu-list">
                  <ul>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Sales home</Link>
                    </li>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Shop</Link>
                    </li>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Product single</Link>
                    </li>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Product category</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-content__col__menu-list">
                  <ul>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">About</Link>
                    </li>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Blog</Link>
                    </li>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Blog post</Link>
                    </li>
                    <li className="footer-content__col__menu-item">
                      <Link to="/">Contact</Link>
                    </li>
                    <li className="footer-content__col__menu-item special">
                      <Link to="/">
                        Fore more infomation
                        <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-content__col__pages">
              <h4>Utility pages</h4>
              <div className="nav-content">
                <div className="footer-content__col__pages-list">
                  <ul>
                    <li className="footer-content__col__pages-item">
                      <Link to="/">Start here</Link>
                    </li>
                    <li className="footer-content__col__pages-item">
                      <Link to="/">Style guide</Link>
                    </li>
                    <li className="footer-content__col__pages-item">
                      <Link to="/">Password protected</Link>
                    </li>
                    <li className="footer-content__col__pages-item">
                      <Link to="/">404 Not found</Link>
                    </li>
                    <li className="footer-content__col__pages-item">
                      <Link to="/">Licenses</Link>
                    </li>
                    <li className="footer-content__col__pages-item">
                      <Link to="/">Changelog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-content__col__product">
              <h4>Popular products</h4>
              <div className="nav-content">
                <div className="footer-content__col__product-list">
                  <ul>
                    <li className="footer-content__col__product-item">
                      <Link to="/">
                        <div className="nav-product">
                          <div className="nav-product--image">
                            <img src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f677ae1f141b61a0ece159_image-3-footer-best-product-shopwave-template.webp"></img>
                          </div>
                          <div className="nav-product__info">
                            <h5>11-Inch Indoor Plant</h5>
                            <p>
                              $19.99 <span>$29.99</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="footer-content__col__product-item">
                      <Link to="/">
                        <div className="nav-product">
                          <div className="nav-product--image">
                            <img src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f677ae58cd9bd555322519_image-2-footer-best-product-shopwave-template.webp"></img>
                          </div>
                          <div className="nav-product__info">
                            <h5>11-Inch Indoor Plant</h5>
                            <p>
                              $19.99 <span>$29.99</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="footer-content__col__product-item">
                      <Link to="/">
                        <div className="nav-product">
                          <div className="nav-product--image">
                            <img src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f677ad1068fd47136a92e7_image-1-footer-best-product-shopwave-template.webp"></img>
                          </div>
                          <div className="nav-product__info">
                            <h5>11-Inch Indoor Plant</h5>
                            <p>
                              $19.99 <span>$29.99</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="newsletter-wrapper">
              <div className="newsletter">
                <h3>Get 10% OFF of your first purchase</h3>
                <form>
                  <input
                    type="input"
                    placeholder="Enter your email adress"
                    className="input-field"
                  ></input>
                  <button type="submit" className="btn-primary">
                    Subcribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
