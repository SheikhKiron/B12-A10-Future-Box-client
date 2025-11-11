import React, { use } from 'react';
import Slider from '../Components/Swiper/Slider';
import FeatureSection from '../Components/FeatureSection';
import Gallery from '../Components/Gallery';
import NewsletterSection from '../Components/NewsletterSection';
import { AuthContext } from '../Auth/AuthContext';
import Spinner from '../Components/Spinner';

const Home = () => {
  const { loading } = use(AuthContext)
  if (loading) {
    return <Spinner></Spinner>
  }
  return (
    <div>
      <title>Home- Social Development</title>
      <div className='py-5 w-11/12 mx-auto'>
        <Slider></Slider>
      </div>
      <FeatureSection></FeatureSection>
      <Gallery></Gallery>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default Home;