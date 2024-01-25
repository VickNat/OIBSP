import React from 'react'
import cheff from '../images/cheff.svg'
import { motion } from 'framer-motion'
import feedback from '../images/feedbackGuys.svg'

const CustomPizzaLandingSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center md:justify-center'>
      <motion.div
        className='flex items-center justify-center'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          ease: "backInOut", 
        }}
      >
        <img src={cheff} alt="" className='w-10/12 h-auto' />
      </motion.div>
      <div className='flex flex-col gap-y-6 md:gap-y-10 md:w-7/12'>
        <h2 className='font-landing text-base md:text-2xl font-semibold text-primaryOrange uppercase'>Testimonials</h2>
        <h3 className='text-3xl md:text-5xl text-white w-full px-4 md:px-0 text-center md:text-start  font-semibold'>
          Create Your Custom Pizza
        </h3>

        <p className='text-white font-light text-center md:text-start w-full md:w-11/12 text-lg md:text-2xl'>
          “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
        </p>

        <div className='flex items-center gap-x-4 md:gap-x-7'>
          <img src={feedback} alt="" className='' />
          <div className=''>
            <p className='font-medium text-base md:text-xl text-white'>Customer Feedback</p>
            <p className='text-base md:text-xl font-semibold text-gray-300' ><span className='text-primaryOrange'>$</span>23.00 (18.6k Reviews)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomPizzaLandingSection