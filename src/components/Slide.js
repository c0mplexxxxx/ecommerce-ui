import React, { Component } from "react";
import { default as products } from "../assets/Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className={"arrow arrow--right"} onClick={onClick}>
            <i class="bx bx-chevron-right"></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={"arrow arrow--left"} onClick={onClick}>
            <i class="bx bx-chevron-left"></i>
        </div>
    );
}

export default class Responsive extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div className="container">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div className="slider__product" key={product.id}>
                            <a href="/">
                                <div className="slider__product__image">
                                    <img
                                        src={product.src}
                                        alt={product.title}
                                    ></img>
                                    <div className="slider__product__price">
                                        ${product.sOPrice} USD
                                    </div>
                                </div>
                                <div className="slider__product__text">
                                    <div className="mb-21">
                                        <h3>{product.title}</h3>
                                        <p>{product.desc}</p>
                                    </div>
                                    <button
                                        className="btn-primary slider-btn"
                                        type="submit"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
