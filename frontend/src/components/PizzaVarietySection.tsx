import React from 'react'
import PizzaVarieties from './PizzaVarietiesSlider'

const PizzaVarietySection = () => {
  return (
    <div className='px-4 md:px-32 flex flex-col gap-y-6 md:gap-y-10'>
      <h2 className='font-landing text-base md:text-2xl font-semibold text-primaryOrange uppercase'>Special dishes</h2>
      <PizzaVarieties />
    </div>
  )
}

export default PizzaVarietySection