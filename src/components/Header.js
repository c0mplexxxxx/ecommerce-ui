import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartModal from './CartModal';
import {Link} from "react-router-dom";

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

    return (
        <>
            <div className={`header-wrapper ${scrollDirection === "down" ? "hide" : "show"}`}>
                <div className="header__contact-wrapper">
                    <Container>
                        <Row>
                            <div className="header__contact">
                                <Col xs={6}>
                                    <div className="header__contact__left">
                                        <div className="header__contact__left__phone">
                                            <Link to="/">
                                                <i className="bx bx-phone"></i>
                                                Support:{" "}
                                                <span>+1 (414) 580 - 0473</span>
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
                                </Col>
                                <Col xs={6}>
                                    <div className="header__contact__right">
                                        <Link to="/shop">
                                            <i className="bx bxl-facebook"></i>
                                        </Link>
                                        <Link to="/shop">
                                            <i className="bx bxl-twitter"></i>
                                        </Link>
                                        <Link to="/shop">
                                            <i className="bx bxl-instagram"></i>
                                        </Link>
                                        <Link to="/shop">
                                            <i className="bx bxl-linkedin"></i>
                                        </Link>
                                        <Link to="/shop">
                                            <i className="bx bxl-youtube"></i>
                                        </Link>
                                        <Link to="/shop">
                                            <i className="bx bxl-whatsapp"></i>
                                        </Link>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
                <div className="header__content">
                    <div className="container w-container">
                        <div className="header__content--wrapper">
                            <Link to="/shop" className="header__content__logo">
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
                            <Link to="/shop" onClick={() => setShow(true)}>
                                <div className="header__content__cart">
                                    <div className="cart__quantity">3</div>
                                    <img
                                        src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f57f0a0b37197aea34ec5f_icon-cart-shopwave-template.svg"
                                        alt="Your cart"
                                        className="cart__image"
                                    />
                                    <div className="cart__info">
                                        <div className="cart__info--text">
                                            Your cart
                                        </div>
                                        <div className="cart__info--price">
                                            $ 110.99 USD
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
                                                                        <span>
                                                                            Fashion
                                                                        </span>
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
                                                                        <span>
                                                                            Decoration
                                                                        </span>
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
                                                                        <span>
                                                                            Garden
                                                                        </span>
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
                                                                        <span>
                                                                            Decoration
                                                                            Inc.
                                                                        </span>
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
                                                                        <span>
                                                                            Fashion
                                                                            Co.
                                                                        </span>
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
                                                                        <span>
                                                                            Sneakers
                                                                            & Co.
                                                                        </span>
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
                                                                        <span>
                                                                            Pottery
                                                                            Mark
                                                                        </span>
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
                                                                        <span>
                                                                            White
                                                                        </span>
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
                                                                        <span>
                                                                            Black
                                                                        </span>
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
                                                                        <span>
                                                                            Grey
                                                                        </span>
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
                                                                        <span>
                                                                            Others
                                                                        </span>
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
            <CartModal trigger={show} setTrigger={setShow}/>
        </>
    );
};

export default Navbar;
