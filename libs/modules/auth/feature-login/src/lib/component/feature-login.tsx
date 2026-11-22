import { useNavigate } from 'react-router-dom';
import styles from './feature-login.module.css';
import { useRef } from 'react';
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
    navigate('/home', {replace:true})
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting}
  } = useForm<LoginFormData>({
    defaultValues: {email:'test@gmail.com', password:'password'},
    resolver: zodResolver(loginFormSchema),
    mode: 'onTouched'
  })

  return (
    <div className={styles['container']}>
      <form onSubmit={handleSubmit(handleLogin)}>
      <input type="text" id="email" placeholder="email" {...register('email')}/>
      {errors.email && <span>{errors.email.message}</span>}
      <input type="password" id="password" placeholder="password" {...register('password')}/>
      {errors.password && <span>{errors.password.message}</span>} 
      <button type="submit" disabled={isSubmitting}>{
         isSubmitting ? 'Login...' : 'Login'
        }</button>
      <button onClick={() => navigate('/auth/register')}>Sign Up</button>
      </form>
    </div>
  );
}

export default LoginComponent;
