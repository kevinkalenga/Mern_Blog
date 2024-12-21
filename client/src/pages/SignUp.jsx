import {Link, useNavigate} from "react-router-dom";
import {Alert, Button, Label, Spinner, TextInput} from 'flowbite-react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { useState } from "react";
export default function Signup() {

  // for showing pwd
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });
   // destructuring
   const {username, email, password} = formData;
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:e.target.value.trim()
    })
  }
  console.log(formData)
  
   const handleSubmit = async(e) => {
      e.preventDefault();
      if(!formData.username || !formData.email || !formData.password) {
        return setErrorMessage('Please fill out all fields')
      }
      try {
        setLoading(true)
        setErrorMessage(null)
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(formData),
        })
        const data = await res.json();
        if(data.success === false) {
          return setErrorMessage(data.message)
        }
        setLoading(false);
        if(res.ok) {
          navigate('/sign-in')
        }
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false)
      }
   }
  
  
  return (
    <div className="min-h-screen mt-20">
       <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row
         md:items-center gap-5">
          {/* left */}
          <div className="flex-1">
            <Link
              to='/'
              className='font-bold dark:text-white text-4xl'
            >
             <span className='px-5 py-1 bg-gradient-to-r from-indigo-500
                  via-purple-500 to-pink-500 rounded-lg text-white'>
                 Blog
             </span>
                 Website
            </Link>
            <p className="text-sm mt-5">
                This is a demo project. You can sign up with your email and password
                or with Google.
            </p>
          </div>
          {/* right */}
          <div className="flex-1">
             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
               <div>
                 <Label value="Your username" />
                 <TextInput value={username} type="text" placeholder="Username" id="username" onChange={handleChange}/>
               </div>
               <div>
                 <Label value="Your email" />
                 <TextInput value={email} type="email" placeholder="name@company.com" id="email"onChange={handleChange} />
               </div>
               <div className="relative">
                 <Label value="Your password" />
                 <TextInput value={password} type={showPassword ? "text": "password"} placeholder="Password" id="password"onChange={handleChange} />
               
               
                 {
                  showPassword ? (<AiFillEyeInvisible className='absolute 
                    right-3 bottom-3 text-xl cursor-pointer' onClick={() =>setShowPassword((prevState)=>!prevState)} />

                  ) : (
                  <AiFillEye className='absolute right-3 bottom-3 
                   text-xl cursor-pointer' onClick={() =>setShowPassword((prevState)=>!prevState)} />)
                }
               
               
               </div>
               <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                  {
                    loading ? (
                      <>
                        <Spinner size="sm" />
                        <span className="pl-3">Loading...</span>
                      </>
                    ) :  ('Sign Up'
                  )}
               </Button>
             </form>
             <div className="flex gap-2 mt-5 text-sm">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                 Sign In
              </Link>
             </div>
             {
               errorMessage && (
                 <Alert className="mt-5" color="failure">
                    {errorMessage}
                 </Alert>
               )
             }
          </div>
       </div>
    </div>
  )
}
