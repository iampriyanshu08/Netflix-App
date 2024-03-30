import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../UserContext/AuthContext'

const Navbar = () => {
  const navigate  = useNavigate()
  const {user,LogOut} = UserAuth()
  // console.log(user.email)

  const handleLogout =async()=>{
try {
  await LogOut(user)
  navigate('/')
} catch (error) {
  console.log(error)
}
  }
  return (
    <div className='flex justify-between items-center p-4 md:p-8  fixed top-0 left-0 z-[999] w-full bg-transparent'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
        {user?.email? (<div>
           <Link to='/account'> <button className='pr-4 text-white'>Account</button></Link>
           <button onClick={handleLogout} className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Logout</button>
        </div>):(
          <div>
          <Link to='/login'> <button className='pr-4 text-white'>Sign In</button></Link>
          <Link to='/signup'> <button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Sign Up</button></Link>
       </div>
        )}
    </div>
  )
}

export default Navbar