import React from 'react';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-slider.js';

const Home = () => {
  return (
    <Helmet title='Trang chu'>
      {/* {hero slide} */}
      <HeroSlider data ={heroSliderData}/>
      {/* {end hero slide} */}
    </Helmet>
  )
}

export default Home