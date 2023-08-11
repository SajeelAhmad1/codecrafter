import React from 'react'
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section className="pt-40 sm:pt-28 px-4">
      <div className='flex flex-col justify-center items-center'>
        <p className='text-3xl'>
          Want to know, <span className="text-4xl text-[#6366f1]"> How To Code?</span>
        </p>
        <p className='text-grey-700'>
          Master Programming, Create Limitless Possibilities!
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full lg:w-1/2 md:mx-4'>
          <h3 className="font-medium text-3xl text-gray-900">Kickstart your programming career with us!</h3>
          <p>Do not know where to start? Check out our beginner guide now. Choose a language and start reading tutorials. Do exercises and quizes to check your knowledge and unleash your imagination, learn cutting-edge techniques, and leave your mark on the digital landscape with our diverse range of inspiring coding projects.</p>
          <div className='flex gap-4 mt-2'>
            <Link to='/tutorials' className='bg-black text-white rounded-lg px-4 py-2'>Tutorials</Link>
            <Link to='/tutorials' className='bg-black text-white rounded-lg px-4 py-2'>Beginner's Guide</Link>
          </div>
        </div>
        <div className='flex justify-center w-full lg:w-1/2 m-8'>
          <form action={''} className='bg-white px-8 py-6 w-96 rounded-lg border-2 shadow-lg shadow-indigo-500 drop-shadow-2xl'>
            <h3 className='text-2xl mb-4'>Sign up</h3>
            <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <label for="full-name" className="leading-7 text-sm text-gray-600">Phone Number</label>
            <input type="number" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <button type='submit' className="text-white mt-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Intro;