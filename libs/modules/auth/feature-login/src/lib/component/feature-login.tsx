import { useNavigate } from 'react-router-dom';
import styles from './feature-login.module.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface LoginComponentProps {
  loginUser: (payload: any) => any
}

const loginFormSchema = z.object({
  email: z.string().email({message: "Email is required"}),
  password: z.string().min(6, {message: "password should be atleast 6 charecters"})
})

// type LoginFormData = {
//   email: string,
//   password: string
// }

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginComponent({
   loginUser
}: LoginComponentProps) {
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = async (data: LoginFormData) => {
    // const email = emailRef.current?.value.trim();
    // const password = passwordRef.current?.value;

    // if(!email || !password){
    //   return
    // }
    // console.log(emailRef.current)

    const {email, password} = data;


    await loginUser({email, password}).unwrap()
    navigate('/products', {replace:true})
  }

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    getValues,
    watch,
    formState: {errors, isSubmitting, isDirty}
  } = useForm<LoginFormData>({
    defaultValues: {email:'test@gmail.com', password:'password'},
    resolver: zodResolver(loginFormSchema),
    // mode: 'onTouched'
    mode: 'onBlur'
  })

  const emailText = watch('email')

  // const res = useMemo(() => {
  //    return emailText+123
  // }, [emailText])
    // console.log('resss', res)

  useEffect(() => {
    console.log('render===')
  })

  //inform the user if they close tab or navigate before saving the form
  useEffect(() => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (isDirty) {
      e.preventDefault();
    }
  };
  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, [isDirty]);

const [passwordDisplay, setPasswordDisplay] = useState(false)

  return (
    <div className={styles['container']}>
      <form onSubmit={handleSubmit(handleLogin)}>
      <input type="email" id="email" placeholder="email"
       {...register('email'), 
        {
          onChange: () => {
            if(errors.email) clearErrors('email')
            }
          }
        }
        aria-invalid={errors.email ? 'true' : 'false'}
        autoComplete='email'
      />
      {errors.email && <span>{errors.email.message}</span>}
      <div className='flex'>
      <input type={passwordDisplay ? 'text' : 'password'} id="password" placeholder="password" {...register('password')}/>
      <button 
          type='button' 
          // disabled={getValues('password').length<6} 
          onClick={() => setPasswordDisplay(!passwordDisplay)}>
            {!passwordDisplay ? 'Show Password' : 'hide password'}
      </button>
     </div>

      {errors.password && <span>{errors.password.message}</span>} 
      <button 
          type="submit" 
          className={getValues('password').length<6 ? 'bg-gray-500' : ''}
          disabled={isSubmitting}>{
         isSubmitting ? 'Login...' : 'Login'
        }</button>
      <button type="button" onClick={() => navigate('/auth/register')}>Sign Up</button>
      </form>
    </div>
  );
}

export default LoginComponent;
