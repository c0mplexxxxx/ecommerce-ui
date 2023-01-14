import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";

const Latest = () => {
    
    return (
        <div className="lastest-wrapper" data-aos="fade-up">
            <div className="container" >
                <div className="lastest__header">
                    <h2>Lastest product</h2>
                    <Link to="/" className="lastest__btn">
                        Explore products
                    </Link>
                </div>
            </div>
            <Container>
                <Row>
                    <div className="lastest__products-list">
                        <div className="d-flex gap-40">
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6a777d6557d526b9dba47_image-12-shop-product-shopwave-template.png"
                                                alt="Basic Gray T-Shirt"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>Basic Gray T-Shirt</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template.png"
                                                alt="Basic Gray Cap"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>Basic Gray Cap</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6a36118d02f129150add1_image-7-shop-product-shopwave-template.png"
                                                alt="White Sneakers"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>White Sneakers</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f697ac77a56fb99798e36f_image-1-shop-product-shopwave-template.png"
                                                alt="Pink Sweater"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>Pink Sweater</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="lastest__products-list">
                        <div className="d-flex gap-40">
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6a777d6557d526b9dba47_image-12-shop-product-shopwave-template.png"
                                                alt="Basic Gray T-Shirt"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>Basic Gray T-Shirt</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template.png"
                                                alt="Basic Gray Cap"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>Basic Gray Cap</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6a36118d02f129150add1_image-7-shop-product-shopwave-template.png"
                                                alt="White Sneakers"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>White Sneakers</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={true}>
                                <div className="lastest__product">
                                    <Link to="/product/1">
                                        <div className="lastest__product__image">
                                            <img
                                                src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f697ac77a56fb99798e36f_image-1-shop-product-shopwave-template.png"
                                                alt="Pink Sweater"
                                            ></img>
                                        </div>
                                        <div className="lastest__product__content">
                                            <p>Fashion</p>
                                            <h4>Pink Sweater</h4>
                                            <p>
                                                $ 29.99 USD{" "}
                                                <span className="line-through">
                                                    $39.99 USD
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Latest;
