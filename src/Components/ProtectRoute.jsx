import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../UserContext/AuthContext'


const ProtectRoute = ({children}) => {
    const {user} = UserAuth()

   if(!user){
    return <Navigate to='/'/>
   }
   else {
    return children
   }
 
}

export default ProtectRoute