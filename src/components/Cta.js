import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cta = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    return (
        <div className="cta-wrapper">
            <div className="container">
                <div className="cta-section">
                    <div className="cta">
                        <div className="cta__content-wrapper" data-aos="fade-up">
                            <div className="cta__content">
                                <div className="cta__vertical-line"></div>
                                <div className="cta-content__text">
                                    <h2>Save</h2>
                                    <h1>20% OFF</h1>
                                    <h2>In Fashion</h2>
                                </div>
                            </div>
                            <div className="discount-text">
                                Use the discount code
                                <div className="discount-code">FASH2022</div>
                            </div>
                        </div>
                        <img 
                            data-aos="fade-up"
                            data-aos-delay="500"
                            src="https://assets.website-files.com/62f51a90d298e6f454bbffca/62f5a283764027ab420ddfc3_image-cta-v1-shopwave-template-p-500.png"
                            alt="cta-image"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
