import React from 'react'
import pizza from '../images/margarita-pizza-margherita-italian-cuisine-tomato-pizza-17ea769986130c7fb21afdc4bed3bf9f 1.svg'
import { FaRegHeart, FaStar } from "react-icons/fa";
import { motion } from 'framer-motion'

const PizzaVarietyCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
       className='relative bg-white p-7 md:p-10 overflow-hidden flex flex-col gap-y-1 md:gap-y-2 rounded-l-md rounded-br-md rounded-tr-3xl shadow-lg shadow-primaryOrange'>
      <div className='absolute top-0 right-0  bg-primaryOrange text-white p-4 md:p-6 rounded-bl-3xl'>
        <FaRegHeart className='w-4 md:w-7 h-auto' />
      </div>

      <img src={pizza} alt='' className='w-44 md:w-64 h-auto' />
      <p className='text-xl font-semibold'>Fattoush salad</p>
      <p className='text-gray-700'>Description of the item</p>
      <div className='flex justify-between items-center'>
        <p className='text-xl font-semibold' ><span className='text-primaryOrange'>$</span>23.00</p>
        <p className='flex items-center gap-x-1'><span className='text-primaryOrange'><FaStar /></span> 4.9</p>
      </div>
    </motion.div>
  )
}

export default PizzaVarietyCard