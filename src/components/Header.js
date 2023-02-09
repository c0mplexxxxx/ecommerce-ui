import React, { useState, useEffect } from "react";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Squash as Hamburger } from "hamburger-react";

const UseScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

const Navbar = () => {
  const scrollDirection = UseScrollDirection();

  const [show, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  const cartSubTotal = useSelector((state) => state.cart.cartSubTotal);

  return (
    <>
      <div
        className={`header-wrapper ${
          scrollDirection === "down" ? "hide" : "show"
        }`}
      >
        <div className="header__contact-wrapper">
          <div className="container">
            <div className="header__contact">
              <div className="header__contact__left">
                <div className="header__contact__left__phone">
                  <Link to="/">
                    <i className="bx bx-phone"></i>
                    Support: <span>+1 (414) 580 - 0473</span>
                  </Link>
                </div>
                <div className="header__contact__left__divider"></div>
                <div className="header__contact__left__email">
                  <Link to="/shop">
                    <i className="bx bx-envelope"></i>
                    Email us: help@storewave.com
                  </Link>
                </div>
              </div>
              <div className="header__contact__right">
                <Link to="#">
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-linkedin"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-youtube"></i>
                </Link>
                <Link to="#">
                  <i className="bx bxl-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header__content">
          <div className="container w-container">
            <div className="header__content--wrapper">
              <Link to="/" className="header__content__logo">
                <img
                  src="https://assets.website-files.com/62f51a90d298e6f454bbffca/630d30dc9ad89c4a3aad5921_storewave-x-webflow-template-logo.svg"
                  alt="Storewave X"
                ></img>
              </Link>
              <form className="header__content__search-box">
                <input
                  type="search"
                  placeholder="Search..."
                  // onChange={handleChange}
                  // value={searchInput}
                  className="input-field"
                />
                <button type="submit" className="search-btn">
                  <i className="bx bx-search"></i>
                </button>
              </form>
              <Link to="#" onClick={() => setShow(true)}>
                <div className="header__content__cart">
                  <div className="cart__quantity">{cartQuantity}</div>
                  <img
                    src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f57f0a0b37197aea34ec5f_icon-cart-shopwave-template.svg"
                    alt="Your cart"
                    className="cart__image"
                  />
                  <div className="cart__info">
                    <div className="cart__info--text">Your cart</div>
                    <div className="cart__info--price">
                      $ {cartSubTotal.toFixed(2)} USD
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="header__menu-wrapper">
          <div className="container w-container">
            <div className="header__menu">
              <nav role="navigation">
                <ul className="header__menu__navbar">
                  <li className="header__menu__navbar__item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="header__menu__navbar__item">
                    <Link to="/shop">Product</Link>
                  </li>
                  <li className="header__menu__navbar__item dropdown-here">
                    <Link to="/shop">
                      Category
                      <i className="bx bx-chevron-down"></i>
                    </Link>
                    <div className="dropdown-wrapper">
                      <div className="container w-container">
                        <div className="dropdown">
                          <div className="dropdown__list">
                            <div className="dropdown__list__item">
                              <div className="dropdown-category__heading">
                                Products by category
                              </div>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <i className="bx bxs-t-shirt"></i>
                                    <span>Fashion</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <i className="bx bx-paint-roll"></i>
                                    <span>Decoration</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <i className="bx bx-leaf"></i>
                                    <span>Garden</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="dropdown__list">
                            <div className="dropdown__list__item">
                              <div className="dropdown-category__heading">
                                Products by category
                              </div>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>Decoration Inc.</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>Fashion Co.</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>Sneakers & Co.</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>Pottery Mark</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="dropdown__list">
                            <div className="dropdown__list__item">
                              <div className="dropdown-category__heading">
                                Products by color
                              </div>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>White</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>Black</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>Grey</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="dropdown__list__item">
                              <Link to="/shop">
                                <div className="dropdown-category__content">
                                  <div className="dropdown-category__content--left">
                                    <span>Others</span>
                                  </div>
                                  <div className="dropdown-category__content--right">
                                    <i className="bx bx-chevron-right"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="header__menu__navbar__item">
                    <Link to="/shop">
                      Pages
                      <i className="bx bx-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="header__menu__navbar__item">
                    <Link to="/shop">Contact</Link>
                  </li>
                  <li className="header__menu__navbar__item">
                    <Link to="/shop">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-header-wrapper">
        <div className="sm-container">
          <div className="mobile-header__content">
            <div className="mobile-header__content--main">
              <div className="mobile-header__logo">
                <a href="/">
                  <img
                    src="https://assets.website-files.com/62f51a90d298e6f454bbffca/630d30dc9ad89c4a3aad5921_storewave-x-webflow-template-logo.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="mobile-header__right">
                <Link to="#" onClick={() => setShow(true)}>
                  <div className="mobile-header__cart">
                    <div className="mobile-header__cart--quantity">
                      {cartQuantity}
                    </div>
                    <div className="mobile-header__cart--image">
                      <img
                        src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f57f0a0b37197aea34ec5f_icon-cart-shopwave-template.svg"
                        alt="cart"
                      />
                    </div>
                  </div>
                </Link>
                <div className="mobile-header__menu-btn">
                  <Hamburger size={18} rounded toggled={isOpen} toggle={setOpen}/>
                </div>
              </div>
            </div>
            <div className="mobile-header__content--search">
              <form className="header__content__search-box">
                <input
                  type="search"
                  placeholder="Search..."
                  // onChange={handleChange}
                  // value={searchInput}
                  className="input-field"
                />
                <button type="submit" className="search-btn">
                  <i className="bx bx-search"></i>
                </button>
              </form>
            </div>
          </div>
          {isOpen ? <div className="header__menu">
            <nav role="navigation">
              <ul className="header__menu__navbar">
                <li className="header__menu__navbar__item">
                  <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="/shop" onClick={() => setOpen(false)}>Product</Link>
                </li>
                <li className="header__menu__navbar__item dropdown-here">
                  <Link to="#" onClick={() => setOpen(false)}>
                    Category
                    <i className="bx bx-chevron-down"></i>
                  </Link>
                  <div className="dropdown-wrapper">
                    <div className="dropdown">
                      <div className="dropdown__list">
                        <div className="dropdown__list__item">
                          <div className="dropdown-category__heading">
                            Products by category
                          </div>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <i className="bx bxs-t-shirt"></i>
                                <span>Fashion</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <i className="bx bx-paint-roll"></i>
                                <span>Decoration</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <i className="bx bx-leaf"></i>
                                <span>Garden</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown__list">
                        <div className="dropdown__list__item">
                          <div className="dropdown-category__heading">
                            Products by category
                          </div>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Decoration Inc.</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Fashion Co.</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Sneakers & Co.</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Pottery Mark</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown__list">
                        <div className="dropdown__list__item">
                          <div className="dropdown-category__heading">
                            Products by color
                          </div>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>White</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Black</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Grey</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Others</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="/shop" onClick={() => setOpen(false)}>
                    Pages
                    <i className="bx bx-chevron-down"></i>
                  </Link>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="#" onClick={() => setOpen(false)}>Contact</Link>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="#" onClick={() => setOpen(false)}>Blog</Link>
                </li>
              </ul>
            </nav>
          </div> : ""}
          {/* <div className="header__menu">
            <nav role="navigation">
              <ul className="header__menu__navbar">
                <li className="header__menu__navbar__item">
                  <Link to="/">Home</Link>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="/shop">Product</Link>
                </li>
                <li className="header__menu__navbar__item dropdown-here">
                  <Link to="#">
                    Category
                    <i className="bx bx-chevron-down"></i>
                  </Link>
                  <div className="dropdown-wrapper">
                    <div className="dropdown">
                      <div className="dropdown__list">
                        <div className="dropdown__list__item">
                          <div className="dropdown-category__heading">
                            Products by category
                          </div>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <i className="bx bxs-t-shirt"></i>
                                <span>Fashion</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <i className="bx bx-paint-roll"></i>
                                <span>Decoration</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <i className="bx bx-leaf"></i>
                                <span>Garden</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown__list">
                        <div className="dropdown__list__item">
                          <div className="dropdown-category__heading">
                            Products by category
                          </div>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Decoration Inc.</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Fashion Co.</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Sneakers & Co.</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Pottery Mark</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown__list">
                        <div className="dropdown__list__item">
                          <div className="dropdown-category__heading">
                            Products by color
                          </div>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>White</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Black</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Grey</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="dropdown__list__item">
                          <Link to="/shop">
                            <div className="dropdown-category__content">
                              <div className="dropdown-category__content--left">
                                <span>Others</span>
                              </div>
                              <div className="dropdown-category__content--right">
                                <i className="bx bx-chevron-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="/shop">
                    Pages
                    <i className="bx bx-chevron-down"></i>
                  </Link>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="/shop">Contact</Link>
                </li>
                <li className="header__menu__navbar__item">
                  <Link to="/shop">Blog</Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
      <CartModal trigger={show} setTrigger={setShow} />
    </>
  );
};

export default Navbar;
