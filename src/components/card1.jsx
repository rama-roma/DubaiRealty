import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import '../styles/style.css';

import { EffectFlip, Pagination } from 'swiper/modules';

export default function Card1({ img }) {
  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={false} 
        modules={[EffectFlip, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="font-bold text-[black] bg-[#FCD54C] p-4 flex flex-col  gap-[30px]">
          <p>Dubai</p><br /><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vitae dui massa tellus magna sit.</p><br /><br />
          <p>See project</p>
        </SwiperSlide>
      </Swiper>
      <br /><br />
    </>
  );
}
