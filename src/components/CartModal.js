import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";

const CartModal = (props) => {
    
    return (props.trigger) ? (
        <div className="modal-wrapper">
            <div className="overlay" onClick={() => props.setTrigger(false)} >
                <div className="d-flex justify-content-center align-center h-100" >
                    <div className="cart-modal" onClick={() => props.setTrigger(true)}>
                        <div className="cart__header">
                            <h5>Your Cart</h5>
                            <Link to="#" onClick={() => props.setTrigger(false)}>
                                <i className="bx bx-x"></i>
                            </Link>
                        </div>
                        <div className="cart__content">
                            <div className="cart__item">
                                <div className="cart__item__main-content">
                                    <div className="cart__item__image">
                                        <Link to="/">
                                            <img
                                                src="https://uploads-ssl.webflow.com/62f51a90d298e65b94bbffcd/62f6a67c4666f047ada3ba87_image-10-shop-product-shopwave-template.png"
                                                alt="Basic Grey Cap"
                                            />
                                        </Link>
                                    </div>
                                    <div className="cart__item__text">
                                        <Link to="/">
                                            <h6>Basic Grey Cap</h6>
                                        </Link>
                                        <p>$ 9.99 USD</p>
                                        <p className="mb-8">
                                            <span>color: </span>Gray
                                        </p>
                                        <Link to="/">Remove</Link>
                                    </div>
                                </div>
                                <div className="cart__item__input">
                                    <input
                                        type="number"
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div className="cart__item">
                                <div className="cart__item__main-content">
                                    <div className="cart__item__image">
                                        <Link to="/">
                                            <img
                                                src="https://uploads-ssl.webflow.com/62f51a90d298e65b94bbffcd/62f6a36118d02f129150add1_image-7-shop-product-shopwave-template.png"
                                                alt="Basic Grey Cap"
                                            />
                                        </Link>
                                    </div>
                                    <div className="cart__item__text">
                                        <Link to="/">
                                            <h6>Basic Grey Cap</h6>
                                        </Link>
                                        <p>$ 9.99 USD</p>
                                        <p>
                                            <span>color: </span>Gray
                                        </p>
                                        <Link to="/">Remove</Link>
                                    </div>
                                </div>
                                <div className="cart__item__input">
                                    <input
                                        type="number"
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div className="cart__item">
                                <div className="cart__item__main-content">
                                    <div className="cart__item__image">
                                        <Link to="/">
                                            <img
                                                src="https://uploads-ssl.webflow.com/62f51a90d298e65b94bbffcd/62f697ac77a56fb99798e36f_image-1-shop-product-shopwave-template.png"
                                                alt="Basic Grey Cap"
                                            />
                                        </Link>
                                    </div>
                                    <div className="cart__item__text">
                                        <Link to="/">
                                            <h6>Basic Grey Cap</h6>
                                        </Link>
                                        <p>$ 9.99 USD</p>
                                        <p>
                                            <span>color: </span>Gray
                                        </p>
                                        <Link to="/">Remove</Link>
                                    </div>
                                </div>
                                <div className="cart__item__input">
                                    <input
                                        type="number"
                                        className="input-field"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="cart__footer">
                            <div className="cart__subtotal">
                                <div className="cart__subtotal__left">
                                    Subtotal:
                                </div>
                                <div className="cart__subtotal__right">
                                    $ 77.99 USD
                                </div>
                            </div>
                            <div className="cart__subtotal__btn">
                                <button className="btn-primary cart-btn">
                                    Continue to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    ) :"";
};

export default CartModal;