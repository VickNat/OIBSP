import React from 'react'
import signUpImage from '../images/Sign In.svg'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <div className='flex lg:flex-row flex-col'>
      <div className='h-screen w-1/2 overflow-hidden lg:block hidden'>
        <img src={signUpImage} alt='Sign In' className='object-cover' />
      </div>
      <div className='flex flex-col h-screen justify-center items-center lg:items-start lg:justify-start lg:pl-32 lg:pt-24 lg:w-1/2 gap-y-6'>
        <div>
          <h1 className='text-3xl'>Create an account</h1>
          <p>Already have an Account? <Link to={'/signin'} className='underline text-slate-500 hover:text-slate-900' >Login</Link></p>
        </div>
        <form onSubmit={formik.handleSubmit} className='w-full flex flex-col gap-y-4 items-center lg:items-start'>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <label htmlFor="name" className='text-slate-600'>Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <label htmlFor="email" className='text-slate-600'>Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <label htmlFor="password" className='text-slate-600'>Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <label htmlFor="confirmPassword" className='text-slate-600'>Confirm Password:</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className='flex flex-col w-8/12 gap-y-1'>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-primaryOrange hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <p>Already have an Account? <Link to={'/signin'} className='underline text-slate-500 hover:text-slate-900' >Login</Link></p>

          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp