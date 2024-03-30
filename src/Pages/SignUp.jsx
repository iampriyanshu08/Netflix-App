import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { UserAuth } from '../UserContext/AuthContext'

const SignUp = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {user,SignUp}= UserAuth()
  const navigate = useNavigate()
  const handleSubmit=async(e)=>{
     e.preventDefault()
     try {
      await SignUp(email,password)
      navigate('/')
     } catch (error) {
      console.log(error)
     }
  }
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full py-24 px-4 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form className='flex flex-col w-full py-4' onSubmit={handleSubmit}>
              <input onChange={(e)=>setemail(e.target.value)} className='p-3 my-2 bg-gray-800 rounded' type="email" placeholder='Email' autoComplete='email'/>
              <input onChange={(e)=>setpassword(e.target.value)} className='p-3 my-2 bg-gray-800 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'><span className='text-gray-600'>Already Subscribed to Netflix?</span>  <Link to='/login'> SignIn now.</Link></p>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SignUp