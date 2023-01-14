import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";

const ShopPerks = () => {
    return (
        <div className="shop-perks-wrapper" data-aos="fade-up">
            <div className="shop-perks__container">
                <div className="shop-perks">
                    <div className="shop-perks__item">
                        <img
                            src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f5a49bbbbfc1dfc66b03e2_icon-1-shop-perks-shopwave-template.svg"
                            alt="free shipping"
                        ></img>
                        <div className="shop-perks__item__text">
                            <h6>Free Shipping</h6>
                            <p>on all orders over $99 USD</p>
                        </div>
                    </div>
                    <div className="shop-perks__item shop-perks__item--middle">
                        <img
                            src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f5a49b2130ef1090ebc2a8_icon-2-shop-perks-shopwave-template.svg"
                            alt="Secure checkout"
                        ></img>
                        <div className="shop-perks__item__text">
                            <h6>Secure checkout</h6>
                            <p>with credit and debit card</p>
                        </div>
                    </div>
                    <div className="shop-perks__item">
                        <img
                            src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f5a49baf7b5b453a2f6307_icon-3-shop-perks-shopwave-template.svg"
                            alt="24/7 Help center"
                        ></img>
                        <div className="shop-perks__item__text">
                            <h6>24/7 Help center</h6>
                            <p>to help you!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPerks;
