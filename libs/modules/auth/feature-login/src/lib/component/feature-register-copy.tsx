import React, { useEffect, useState } from 'react'

const RegisterComponentCopy = () => {
  useEffect(() => {
     console.log('render')
  },[])

  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
  const [confirmPasswordMismatch, setConfirmPasswordMismatch] = useState<string | null>(null)


  const validatePassword = () => {
    if(password !== confirmPassword){
      setConfirmPasswordMismatch("password doesnt match")
      return
    }
    setConfirmPasswordMismatch(null)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    validatePassword()
    e.preventDefault()
    console.log('formEvent', e)
  }

  return (
    <div>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <div>
         <label htmlFor='firstname'>
          First Name:
         </label>
          <input id='firstname' name='firstname'/>
          </div>

          <div>
          <label htmlFor='lastname'>
             Last Name:
         </label>
          <input id='lastname' name='lastname'/>
          </div>
           
           <div>
          <label htmlFor='age'>
            Age
         </label>
         <input id='age' name='age'/>
         </div>

           <div>
          <label htmlFor='phone'>
            Phone/Mobile:
         </label>
         <input id='phone' name='phone'/>
         </div>

           <div>
           <label htmlFor='password'>
            password:
         </label>
         <input type="password" id='password' name='password' onChange={e => setPassword(e.target.value)}/>
         </div>

<div>
           <label htmlFor='confirm-password'>
            Confirm Password:
         </label>
         <input type="password" id='confirm-password' name='confirm-password' 
              onChange={e => setConfirmPassword(e.target.value)}
              onBlur={validatePassword}
              />
         </div>
           {confirmPasswordMismatch && <span className="text-red-500">{confirmPasswordMismatch}</span>}

<div>

         <button>
          Register
         </button>
         </div>

      </form>
      
    </div>
  )
}

export default RegisterComponentCopy