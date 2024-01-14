import React from 'react'
import pizzaCheff from '../images/splash guy.svg'
import pizza from '../images/margarita-pizza-margherita-italian-cuisine-tomato-pizza-17ea769986130c7fb21afdc4bed3bf9f 1.svg'
import lightning from '../images/lightning.svg'
import { Link } from 'react-router-dom'

const Splash = () => {
  return (
    <div className='flex flex-col gap-y-8 items-center pb-20' >
      <div className='flex flex-col items-center w-full' >
        <img src={pizzaCheff} alt='pizzaCheff' className='w-full h-auto' />
        <img src={pizza} alt='Pizza' className='w-4/12 -mt-10 md:-mt-32' />
      </div>

      <div className='flex'>
        <img src={lightning} alt='Lightning' className='w-11 md:w-16' />
        <p className='text-slate-500 text-2xl md:text-4xl' >Everyday new pizza <br />eat fresh pizza</p>
      </div>

      <div className='flex flex-col w-full items-center gap-y-4' >
        <Link
          to={'signup'}
          className="w-52 md:w-3/12 text-white bg-gradient-to-br from-primaryOrange to-pink-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 shadow-md shadow-primaryGreen"
        >
          Sign Up
        </Link>
        <Link
          to={'signin'}
          className="w-52 md:w-3/12 text-white bg-gradient-to-br from-primaryOrange to-pink-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 shadow-md shadow-primaryGreen"
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Splash