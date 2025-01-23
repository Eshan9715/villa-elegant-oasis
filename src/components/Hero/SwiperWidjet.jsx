import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const SwiperWidjet = ({data}) => {

  return (
    <>
      <Swiper
        // cssMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {data?.map((d, index) => (
          <SwiperSlide key={index}><img src={d.img} alt='' className='h-[300px] md:h-[500px] bg-cover md:container'/></SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}

export default SwiperWidjet

