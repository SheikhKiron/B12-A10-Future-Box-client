import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function Slider() {
  const faqVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={faqVariants}
    >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1681140560805-de6115554023?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h2 className="absolute md:text-5xl text-2xl text-yellow-300 font-bold">
            May our city live green.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1723114876196-3ad72b4d17f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJsb29kJTIwZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <h2 className="absolute md:text-5xl text-2xl text-blue-600 font-bold">
            One bag of blood, one new life
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1661964155049-f8a24a60be74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3MlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h2 className="absolute md:text-5xl text-2xl text-blue-600 font-bold">
            Help distribute winter clothes/clothes
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1758599668429-121d54188b9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
            alt=""
          />
          <h2 className="absolute md:text-5xl text-2xl text-white font-bold">
            We keep it clean wherever We live.
          </h2>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
