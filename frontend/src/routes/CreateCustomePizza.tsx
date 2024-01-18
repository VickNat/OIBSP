import React from 'react'
import CustomPizzaLandingSection from '../components/CustomPizzaLandingSection'
import ChooseIngredients from '../components/ChooseIngredients'

const CreateCustomePizza = () => {
  return (
    <div className='px-4 md:px-32 py-6 md:py-10 flex flex-col gap-y-14 md:gap-y-20'>
      <CustomPizzaLandingSection />
      <div className='flex flex-col gap-y-6 md:gap-y-10 '>
        <h2 className='font-landing text-base md:text-2xl font-semibold text-primaryOrange uppercase'>Create Custom Pizza</h2>
        <ChooseIngredients />
        <ChooseIngredients />
        <ChooseIngredients />
        <ChooseIngredients />
        <ChooseIngredients />
        <ChooseIngredients />
      </div>
    </div>
  )
}

export default CreateCustomePizza