import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";

const TopCategories = () => {
    
    return (
        <div className="top-categories container" data-aos="fade-up">
            <div className="inner-container">
                <div className="mb-40">
                    <h2>Top categories this month</h2>
                </div>
                <div className="top-categories__list">
                    <div className="top-categories__item">
                        <Link to="/shop">
                            <div className="mb-21 top-categories__image">
                                <img
                                    src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6ac6d071b6785a7bb4a14_image-1-shop-categories-shopwave-template.png"
                                    alt="fashion"
                                ></img>
                            </div>
                            <h3>Fashion</h3>
                        </Link>
                    </div>
                    <div className="top-categories__item">
                        <Link to="/shop">
                            <div className="mb-21 top-categories__image">
                                <img
                                    src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6ac60e2632be762e5829e_image-2-shop-categories-shopwave-template.png"
                                    alt="decoration"
                                ></img>
                            </div>
                            <h3>Decoration</h3>
                        </Link>
                    </div>
                    <div className="top-categories__item">
                        <Link to="/shop">
                            <div className="mb-21 top-categories__image">
                                <img
                                    src="https://assets.website-files.com/62f51a90d298e65b94bbffcd/62f6ac5358cd9b714534d7b8_image-3-shop-categories-shopwave-template.png"
                                    alt="garden"
                                ></img>
                            </div>
                            <h3>Garden</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;
