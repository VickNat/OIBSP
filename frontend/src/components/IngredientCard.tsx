import breakfast from '../images/breakfast.svg'

const IngredientCard = () => {
  return (
    <div className='cursor-pointer bg-white py-6 md:py-10 px-10 md:px-16 flex flex-col justify-center items-center md:gap-y-2 gap-x-1 rounded-lg shadow-md shadow-primaryOrange hover:transform hover:scale-105 transition-transform duration-300'>
      <div className='w-36 h-36 flex items-center justify-center bg-primaryOrange rounded-full'>
        <img src={breakfast} alt='' className='' />
      </div>

      <p className='font-semibold text-lg md:text-xl'>Breakfast</p>
      <p className='text-gray-600 text-base md:text-lg'>(12 breakfast)</p>
    </div>
  )
}

export default IngredientCard