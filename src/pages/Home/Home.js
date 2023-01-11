import React from 'react'
import Hero from '../../components/Hero'
import Latest from '../../components/Latest'
import Cta from '../../components/Cta'
import Slider from '../../components/Slider'
import TopCategories from '../../components/TopCategories'
import BestProduct from '../../components/BestProduct'
import ShopPerks from '../../components/ShopPerks'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Latest/>
      <Cta/>
      <Slider/>
      <TopCategories/>
      <BestProduct/>
      <ShopPerks/>
    </div>
  )
}

export default Home