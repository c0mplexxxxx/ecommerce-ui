import React from "react";

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="container">
                <div className="d-flex gap-32 mb-32">
                    <div className="hero__categories-wrapper">
                        <div className="hero__categories">
                            <div className="hero__categories__heading">
                                <i className="bx bx-list-ul"></i>
                                <h3>Categories</h3>
                            </div>
                            <div className="hero__categories__list">
                                <a href="/">
                                    <div className="hero__categories__list-item">
                                        <div className="d-flex align-center">
                                            <i className="bx bx-star start-ic"></i>
                                            <p>Popular products</p>
                                            <span>Hot</span>
                                        </div>
                                        <i className="bx bx-chevron-right end-ic"></i>
                                    </div>
                                </a>
                                <a href="/">
                                    <div className="hero__categories__list-item">
                                        <div className="d-flex align-center">
                                            <i className="bx bxs-t-shirt start-ic"></i>
                                            <p>Fashion</p>
                                        </div>
                                        <i className="bx bx-chevron-right end-ic"></i>
                                    </div>
                                </a>
                                <a href="/">
                                    <div className="hero__categories__list-item">
                                        <div className="d-flex align-center">
                                            <i className="bx bx-paint-roll start-ic"></i>
                                            <p>Decoration</p>
                                        </div>
                                        <i className="bx bx-chevron-right end-ic"></i>
                                    </div>
                                </a>
                                <a href="/">
                                    <div className="hero__categories__list-item">
                                        <div className="d-flex align-center">
                                            <i className="bx bx-leaf start-ic"></i>
                                            <p>Garden</p>
                                        </div>
                                        <i className="bx bx-chevron-right end-ic"></i>
                                    </div>
                                </a>
                                <button
                                    type="submit"
                                    className="btn-primary hero__categories__list-btn"
                                >
                                    All products
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero__promotion-feature-wrapper">
                        <div className="hero__promotion-feature">
                            <div className="hero__promotion-feature__content">
                                <h5>New arrival</h5>
                                <h2>2x1 in Basic Hoodies</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    <br /> elit. Maecenas turpis dictumst sed
                                    lectus.
                                </p>
                                <button type="submit" className="hero__buy-btn">
                                    Buy now
                                </button>
                            </div>
                            <img
                                    src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f59f2e85742f2812aad006_image-1-promotion-shopwave-template-p-500.webp"
                                    alt="2x1 in basic hoodies"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-32">
                    <div className="hero__promotion-banner">
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
                        <img
                            src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f5a123c23d652751277825_image-2-promotion-shopwave-template.webp"
                            alt="Get 40% OFF in plants"
                        ></img>
                    </div>
                    <div className="hero__promotion-banner">
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
                        <img
                            src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f59f2e3ef1494f28c278de_image-3-promotion-shopwave-template.webp"
                            alt="Get 15% OFF in decoration"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
