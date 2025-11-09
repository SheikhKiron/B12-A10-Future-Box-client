import React from 'react';
import Slider from '../Components/Swiper/Slider';
import FeatureSection from '../Components/FeatureSection';

const Home = () => {
  return (
    <div>
      <title>Home- Social Development</title>
      <div className='py-5'>
        <Slider></Slider>
      </div>
      <FeatureSection></FeatureSection>
    </div>
  );
};

export default Home;