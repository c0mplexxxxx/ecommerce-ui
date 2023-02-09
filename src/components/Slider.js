import React from 'react'
import Slide from './Slide'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";

const Slider = (props) => {
  
  return (
    <div className="slider-wrapper" data-aos="fade-up">
        <div className="container">
            <div className="slider__header">
                <h2>Popular products</h2>
                <Link to="/">Explore popular products</Link>
            </div>
        </div>
        <Slide data={props}/>
    </div>
  )
}

export default Slider