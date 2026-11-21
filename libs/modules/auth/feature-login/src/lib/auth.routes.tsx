import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginContainer from './container/login.container'
import RegisterContainer from './container/register.container'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginContainer/>}/>
        <Route path='/register' element={<RegisterContainer/>}/>
    </Routes>
  )
}

export default AuthRoutes