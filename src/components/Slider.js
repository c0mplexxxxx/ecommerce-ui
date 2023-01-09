import React from 'react'
import Slide from './Slide'

const Slider = () => {
  return (
    <div className="slider-wrapper">
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