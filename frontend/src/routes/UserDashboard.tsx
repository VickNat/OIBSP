import React from 'react'
import LandingSection from '../components/LandingSection'
import PizzaVarietySection from '../components/PizzaVarietySection'
import ServicesSection from '../components/ServicesSection'

const UserDashboard = () => {
  return (
    <div className='flex flex-col gap-y-12 md:gap-y-20'>
      <LandingSection />
      <PizzaVarietySection />
      <ServicesSection />
    </div>
  )
}

export default UserDashboard