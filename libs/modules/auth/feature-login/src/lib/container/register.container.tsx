import React from 'react'
import RegisterComponent from '../component/feature-register'
import { useRegisterUserMutation } from '@react-nx26-nov/auth-data-access'

const RegisterContainer = () => {

  const [registerUser, {isLoading}] = useRegisterUserMutation()

  // console.log(data)

  return (
    <div>
        <RegisterComponent registerUser={registerUser} isLoading={isLoading}/>
    </div>
  )
}

export default RegisterContainer