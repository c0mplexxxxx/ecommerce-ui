import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 800});
    }, [])
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-content" data-aos="fade">
                    <Container>
                        <Row>
                            <div className="d-flex gap-40">
                                <Col xl="auto">
                                    <div className="footer-content__col__menu">
                                        <h4>Menu</h4>
                                        <div className="nav-content">
                                            <div className="footer-content__col__menu-list">
                                                <ul>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">
                                                            Sales home
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">Shop</a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">
                                                            Product single
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">
                                                            Product category
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="footer-content__col__menu-list">
                                                <ul>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">About</a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">Blog</a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">
                                                            Blog post
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item">
                                                        <a href="/">Contact</a>
                                                    </li>
                                                    <li className="footer-content__col__menu-item special">
                                                        <a href="/">
                                                            Fore more infomation
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl="auto">
                                    <div className="footer-content__col__pages">
                                        <h4>Utility pages</h4>
                                        <div className="nav-content">
                                            <div className="footer-content__col__pages-list">
                                                <ul>
                                                    <li className="footer-content__col__pages-item">
                                                        <a href="/">
                                                            Start here
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__pages-item">
                                                        <a href="/">
                                                            Style guide
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__pages-item">
                                                        <a href="/">
                                                            Password protected
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__pages-item">
                                                        <a href="/">
                                                            404 Not found
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__pages-item">
                                                        <a href="/">Licenses</a>
                                                    </li>
                                                    <li className="footer-content__col__pages-item">
                                                        <a href="/">
                                                            Changelog
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl="auto">
                                    <div className="footer-content__col__product">
                                        <h4>Popular products</h4>
                                        <div className="nav-content">
                                            <div className="footer-content__col__product-list">
                                                <ul>
                                                    <li className="footer-content__col__product-item">
                                                        <a href="/">
                                                            <div className="nav-product">
                                                                <div className="nav-product--image">
                                                                    <img src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f677ae1f141b61a0ece159_image-3-footer-best-product-shopwave-template.webp"></img>
                                                                </div>
                                                                <div className="nav-product__info">
                                                                    <h5>
                                                                        11-Inch
                                                                        Indoor
                                                                        Plant
                                                                    </h5>
                                                                    <p>
                                                                        $19.99{" "}
                                                                        <span>
                                                                            $29.99
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__product-item">
                                                        <a href="/">
                                                            <div className="nav-product">
                                                                <div className="nav-product--image">
                                                                    <img src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f677ae58cd9bd555322519_image-2-footer-best-product-shopwave-template.webp"></img>
                                                                </div>
                                                                <div className="nav-product__info">
                                                                    <h5>
                                                                        11-Inch
                                                                        Indoor
                                                                        Plant
                                                                    </h5>
                                                                    <p>
                                                                        $19.99{" "}
                                                                        <span>
                                                                            $29.99
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="footer-content__col__product-item">
                                                        <a href="/">
                                                            <div className="nav-product">
                                                                <div className="nav-product--image">
                                                                    <img src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f677ad1068fd47136a92e7_image-1-footer-best-product-shopwave-template.webp"></img>
                                                                </div>
                                                                <div className="nav-product__info">
                                                                    <h5>
                                                                        11-Inch
                                                                        Indoor
                                                                        Plant
                                                                    </h5>
                                                                    <p>
                                                                        $19.99{" "}
                                                                        <span>
                                                                            $29.99
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl="auto">
                                    <div className="newsletter-wrapper">
                                        <div className="newsletter">
                                            <h3>
                                                Get 10% OFF of your first
                                                purchase
                                            </h3>
                                            <form>
                                                <input
                                                    type="input"
                                                    placeholder="Enter your email adress"
                                                    className="input-field"
                                                ></input>
                                                <button
                                                    type="submit"
                                                    className="btn-primary"
                                                >
                                                    Subcribe
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
