import React from 'react'
import ServicesCard from './ServicesCard'

const ServicesSection = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center gap-y-10'>
      <div className='px-4 md:px-32 flex flex-col gap-y-6 md:gap-y-14 md:w-1/2'>
        <h2 className='font-landing text-base md:text-2xl font-semibold text-primaryOrange uppercase'>Our Story & Services</h2>
        <h3 className='text-2xl md:text-5xl text-white w-full px-4 md:px-0 text-center md:text-start md:w-4/12 font-semibold'>
          Our Culinary Journey And Services
        </h3>

        <p className='text-white font-light text-center w-full md:w-7/12 text-lg md:text-2xl'>
          Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
        </p>

        <button
          type="button"
          className="flex justify-center items-center text-white bg-primaryOrange hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-orange-50 font-medium rounded-sm text-sm px-4 py-2 text-center w-6/12 self-center md:w-4/12"
        >
          Explore
        </button>
      </div>
      <div className='grid md:grid-cols-2 md:grid-rows-2 gap-6 justify-center'>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  )
}

export default ServicesSection