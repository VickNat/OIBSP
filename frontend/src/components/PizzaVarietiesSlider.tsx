// import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import PizzaVarietyCard from './PizzaVarietyCard';


const PizzaVarieties = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className='flex flex-col overflow-x-hidden gap-y-5 md:gap-y-8'>
      <div className='flex justify-between items-end'>
        <h3 className='text-3xl md:text-5xl text-white w-full px-6 md:px-0 text-center md:text-start md:w-4/12 font-semibold'>
          Standout Dishes From Our Menu
        </h3>
        <div className='space-x-8 hidden md:block'>
          <button onClick={prevHandler} className='rounded-full p-4 bg-primaryGray bg-gradient-to-r from-primaryOrange to-red-600 hover:bg-gradient-to-br text-black' ><IoIosArrowBack className='h-auto w-7' /></button>
          <button onClick={nextHandler} className='rounded-full p-4 bg-primaryGray bg-gradient-to-r from-primaryOrange to-red-600 hover:bg-gradient-to-br text-black' ><IoIosArrowForward className='h-auto w-7' /></button>
        </div>
      </div>
      <Swiper
        spaceBetween={60}
        slidesPerView="auto"
        width={1200}
        onSwiper={(swiper: any) => setSwiperRef(swiper)}
      >
        <SwiperSlide ><PizzaVarietyCard /></SwiperSlide>
        <SwiperSlide ><PizzaVarietyCard /></SwiperSlide>
        <SwiperSlide ><PizzaVarietyCard /></SwiperSlide>
        <SwiperSlide ><PizzaVarietyCard /></SwiperSlide>
        <SwiperSlide ><PizzaVarietyCard /></SwiperSlide>
        <SwiperSlide ><PizzaVarietyCard /></SwiperSlide>
        <SwiperSlide ><PizzaVarietyCard /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PizzaVarieties