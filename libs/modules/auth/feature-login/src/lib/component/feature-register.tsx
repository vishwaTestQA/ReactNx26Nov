import React, { useEffect, useState } from 'react'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../model/registration.props.schema'
import { useForm } from 'react-hook-form'

export type RegisterFormData = z.infer<typeof registerSchema> 

export const DefaultFormValues: RegisterFormData = {
  firstname: '',
  lastname: '',
  email: '',
  age:0,
  phone: 0,
  password: '',
  confirmPassword:''
}
const RegisterComponent = () => {
  useEffect(() => {
     console.log('render')
  },[])



  // const [password, setPassword] = useState<string | null>(null);
  // const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
  // const [confirmPasswordMismatch, setConfirmPasswordMismatch] = useState<string | null>(null)


  // const validatePassword = () => {
  //   if(password !== confirmPassword){
  //     setConfirmPasswordMismatch("password doesnt match")
  //     return
  //   }
  //   setConfirmPasswordMismatch(null)
  // }

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   validatePassword()
  //   e.preventDefault()
  //   console.log('formEvent', e)
  // }

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting}
  }  = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: DefaultFormValues
  })

   const onSubmit = (data: RegisterFormData) => {
     //removing confirmPassword before sending it ot backend
     const {confirmPassword, ...payload} = data;
     console.log("payload", payload)
  }

  return (
    <div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
         <label htmlFor='firstname'>
          First Name :
         </label>
          <input id='firstname' {...register('firstname')}/>
          </div>

          <div>
          <label htmlFor='lastname'>
             Last Name:
         </label>
          <input id='lastname' {...register('lastname')}/>
          </div>
           
           <div>
          <label htmlFor='age'>
            Age
         </label>
         <input id='age' {...register('age')}/>
         </div>

           <div>
          <label htmlFor='phone'>
            Phone/Mobile:
         </label>
         <input id='phone' {...register('phone')}/>
         </div>

           <div>
           <label htmlFor='password'>
            password:
         </label>
         <input type="password" id='password' {...register('password')}/>
         </div>

<div>
           <label htmlFor='confirm-password'>
            Confirm Password:
         </label>
         <input type="password" id='confirm-password' {...register('confirmPassword')}/>
         {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}
         </div>

<div>

         <button>
          Register
         </button>
         </div>

      </form>
      
    </div>
  )
}

export default RegisterComponent