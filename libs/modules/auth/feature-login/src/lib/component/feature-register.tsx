import { useEffect } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../model/registration.props.schema'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export type RegisterFormData = z.infer<typeof registerSchema>

export const DefaultFormValues: RegisterFormData = {
  firstname: 'test',
  lastname: 'tt',
  email: 'tt@gmail.com',
  age: 20,
  phone: '1234567890',
  password: 'password',
  confirmPassword: 'password'
}

interface RegisterComponentTypes {
  registerUser: (data: RegisterFormData) => void
  isLoading: boolean
}

const RegisterComponent = ({registerUser, isLoading}:RegisterComponentTypes) => {
  useEffect(() => {
    console.log('render')
  }, [])

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    // mode: 'onBlur',
    mode: 'onTouched',
    defaultValues: DefaultFormValues
  })

  const onSubmit = async (data: RegisterFormData) => {
    //removing confirmPassword before sending it ot backend
    const { confirmPassword, ...payload } = data;
    console.log("payload", payload)
    // setTimeout(() =>{
    //   setError('email', {message: "email alredy exist"})
    // }, 4000)

    await registerUser(payload).unwrap()
    navigate('/home', { replace: true });
  }

  return (
    <div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='firstname'>First Name:</label>
          <input id='firstname' {...register('firstname')} />
          {errors.firstname && <span>{errors.firstname.message}</span>}
        </div>

        <div>
          <label htmlFor='lastname'>Last Name:</label>
          <input id='lastname' {...register('lastname')} />
          {errors.lastname && <span>{errors.lastname.message}</span>}
        </div>

        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' {...register('age', { valueAsNumber: true })} />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label htmlFor='phone'>Phone/Mobile:</label>
          <input id='phone' {...register('phone')} />
        </div>

        <div>
          <label htmlFor='password'> password:</label>
          <input type="password" id='password' {...register('password')} />
        </div>

        <div>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input type="password" id='confirm-password' {...register('confirmPassword')} />
          {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}
        </div>

        <div>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}</button>
        </div>
      </form>

    </div>
  )
}

export default RegisterComponent