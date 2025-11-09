import React from 'react';
import Slider from '../Components/Swiper/Slider';
import FeatureSection from '../Components/FeatureSection';
import Gallery from '../Components/Gallery';
import NewsletterSection from '../Components/NewsletterSection';

const Home = () => {
  return (
    <div>
      <title>Home- Social Development</title>
      <div className='py-5'>
        <Slider></Slider>
      </div>
      <FeatureSection></FeatureSection>
      <Gallery></Gallery>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;