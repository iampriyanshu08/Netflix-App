import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 md:p-8  fixed top-0 left-0 z-[999] w-full bg-transparent'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='pr-4 text-white'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar