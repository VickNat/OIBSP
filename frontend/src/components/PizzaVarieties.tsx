// import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import {  } from 'swiper/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useRef } from 'react';

const PizzaVarieties = () => {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  return (
    <div className='bg-white h-screen'>
      <Swiper
        // modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        // pagination={{ clickable: true }}
        navigation={{
          prevEl: navigationPrev.current!, // Assert non-null
          nextEl: navigationNext.current!, // Assert non-null
        }}
        // onInit={(swiper) => {
        //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //   // @ts-ignore
        //   // eslint-disable-next-line no-param-reassign
        //   swiper.params.navigation.prevEl = prevRef.current
        //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //   // @ts-ignore
        //   // eslint-disable-next-line no-param-reassign
        //   swiper.params.navigation.nextEl = nextRef.current
        //   swiper.navigation.update()
        // }}
      >
        <div>
          <div ref={prevRef} />
          <div ref={nextRef} />
        </div>
        <div>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </div>
      </Swiper>
    </div>
  )
}

export default PizzaVarieties