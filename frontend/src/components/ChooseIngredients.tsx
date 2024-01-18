import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './ingredientStyles.css';
import IngredientCard from './IngredientCard';

// import required modules
// import { EffectCards, Pagination } from 'swiper/modules';

const ChooseIngredients = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext(); 
  };

  return (
    <div className='flex flex-col overflow-x-hidden gap-y-6 md:gap-y-10'>
      <div className='flex justify-around md:gap-x-28 items-end'>
        <h3 className='text-3xl md:text-5xl text-white w-full px-6 md:px-0 text-center md:text-start md:w-4/12 font-semibold'>
          Choose Pizza base
        </h3>
        <div className='space-x-8 hidden md:block'>
          <button onClick={prevHandler} className='rounded-full p-4 bg-primaryGray bg-gradient-to-r from-primaryOrange to-red-600 hover:bg-gradient-to-br text-black' ><IoIosArrowBack className='h-auto w-7' /></button>
          <button onClick={nextHandler} className='rounded-full p-4 bg-primaryGray bg-gradient-to-r from-primaryOrange to-red-600 hover:bg-gradient-to-br text-black' ><IoIosArrowForward className='h-auto w-7' /></button>
        </div>
      </div>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        onSwiper={(swiper: any) => setSwiperRef(swiper)}
        className="mySwiper bg-black"
      >
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
        <SwiperSlide><IngredientCard /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ChooseIngredients