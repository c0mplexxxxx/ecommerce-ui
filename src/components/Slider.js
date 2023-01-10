import React, {useEffect} from 'react'
import Slide from './Slide'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
}, [])
  return (
    <div className="slider-wrapper" data-aos="fade-up">
        <div className="container">
            <div className="slider__header">
                <h2>Popular products</h2>
                <a href="/">Explore popular products</a>
            </div>
        </div>
        <Slide/>
    </div>
  )
}

export default Slider