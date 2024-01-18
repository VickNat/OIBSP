import React from 'react'
import serviceIcon from '../images/service1.svg'
import { motion } from 'framer-motion'


const ServicesCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      className='bg-white flex flex-col justify-center items-center p-6 w-60 h-auto gap-y-4 rounded-lg shadow-lg shadow-primaryOrange'>
      <img src={serviceIcon} alt="" />
      <p className='uppercase text-primaryOrange font-bold text-2xl text-center'>
        Catering
      </p>
      <p className='text-primaryGreen text-xl text-center font-semibold'>
        Delight your guests with our flavors and  presentation
      </p>
    </motion.div>
  )
}

export default ServicesCard