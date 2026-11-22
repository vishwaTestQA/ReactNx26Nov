import React from 'react'
import LoginComponent from '../component/feature-login'
import { useLoginUserMutation } from '@react-nx26-nov/auth-data-access'

const LoginContainer = () => {
  const [loginUser] = useLoginUserMutation()
  return (
    <div>
        <LoginComponent loginUser={loginUser}/>
    </div>
  )
}

export default LoginContainer