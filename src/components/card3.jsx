import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import '../styles/styless.css';

import { EffectFlip, Pagination } from 'swiper/modules';

export default function Card3({ img }) {
  return (
    <>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={false} // 🚫 отключаем стрелки
        modules={[EffectFlip, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} alt="" />
        </SwiperSlide>
        <SwiperSlide className="text-[white] border border-[#FCD54C] bg-[#fcd64c00] p-4 flex flex-col gap-[30px]">
          <p>Jule 03, 2022</p><br />
          <h1 className='font-bold'>Discover Architecture</h1><br />
          <p className='text-[#929292]'>Projects for many large domestic and foreign corporations, enterprises in many elds such</p><br />
          <p className='text-[#FCD54C]'>Learn more</p>
        </SwiperSlide>
      </Swiper>
      <br /><br />
    </>
  );
}
