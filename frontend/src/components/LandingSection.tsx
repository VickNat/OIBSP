import React from 'react';
import Homebg from '../images/Home.svg';
import './Landing.css'
import line from '../images/Line 1.svg'
import { motion } from 'framer-motion';

const LandingSection = () => {

  return (
    <div className="bgImage py-32 md:py-0 h-auto md:h-screen bg-cover bg-no-repeat bg-center md:bg-top lg:bg-bottom xl:bg-left flex flex-col items-center justify-center gap-y-8 md:gap-y-12">
      <motion.div
        className='flex flex-col items-center justify-center w-11/12 md:w-9/12'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: "backInOut",
        }}
      >
        <h1 className='text-white font-cursived text-3xl md:text-5xl font-extralight tracking-wider md:tracking-widest text-center'>Best Pizza in town</h1>
        <h2 className='text-primaryOrange font-landing tracking-wider font-bold text-4xl md:text-7xl text-center'>
          Taste the rich flavor of high quality pizza
        </h2>
      </motion.div>
      <motion.div
        className='flex justify-center items-center flex-col gap-y-3 md:gap-y-4'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          delay: 0.75,
          ease: "backIn",
        }}
      >
        <p className='text-white font-light text-center w-9/12 md:w-7/12 text-base md:text-2xl'>
          We only use the five star quality for
          our menu, come and get the richness in
          every food we serve.
        </p>
        <button
          type="button"
          className="flex justify-between gap-x-8 items-center text-black font-semibold text-lg md:text-xl bg-primaryOrange hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-orange-50 rounded-sm px-4 md:px-6 py-3 shadow-lg shadow-yellow-900 text-center font-landing "
        >
          Contact Us
          <img src={line} alt='Phone' className='w-20 h-auto' />
        </button>
      </motion.div>
    </div>
  );
};

export default LandingSection;
