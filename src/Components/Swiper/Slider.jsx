import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function Slider() {
  const slides = [
    {
      image:
        'https://www.paulsrubbish.com.au/wp-content/uploads/2023/04/community-cleanup.png',
      title: 'Community Clean Up Event',
    },
    {
      image:
        'https://stanfordbloodcenter.org/wp-content/uploads/2021/05/iStock-1196814000.jpg',
      title: 'Blood Donation Camp',
    },
    {
      image:
        'https://cloudfrontgharpediabucket.gharpedia.com/uploads/2022/06/Plant-Trees-01-1403070001-1.jpg',
      title: 'Tree Plantation Drive',
    },
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[450px] md:h-[450px] relative overflow-hidden rounded-lg"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 bg-black bg-opacity-50 text-white p-4 rounded">
              <h2 className="text-xl md:text-4xl font-bold">{slide.title}</h2>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
