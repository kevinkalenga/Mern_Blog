
import OAuth from "../components/OAuth"
import {Link, useNavigate} from "react-router-dom";
import {Button, Label, Spinner, TextInput} from 'flowbite-react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice'
import {toast} from 'react-toastify'

export default function SignIn() {
  // for showing pwd
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });
  // destructuring
  const {email, password} = formData;
  const {loading, error:errorMessage} = useSelector((state) => state.user)
// useDispatch so as to dispatch signInStart, signInSuccess, signInFailure
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:e.target.value.trim()
    })
  }
  console.log(formData)
  
  //  const handleSubmit = async(e) => {
  //     e.preventDefault();
  //     if(!formData.email || !formData.password) {
  //       // return dispatch(signInFailure('Please fill out all fields'))
  //        dispatch(signInFailure('Please fill out all fields'));
  //        toast.error('Please fill out all fields');
  //        setShowToast(true);
  //        return;
  //     }
  //     try {
  //       dispatch(signInStart())
  //       const res = await fetch('/api/auth/signin', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type':'application/json'
  //         },
  //         credentials: "include",
  //         body: JSON.stringify(formData),
  //       })
  //       const data = await res.json();
  //       if(data.success === false) {
  //         dispatch(signInFailure(data.message))
  //       }
  //       if(res.ok) {
  //         dispatch(signInSuccess(data))
  //         navigate('/')
  //       }
  //     } catch (error) {
  //       dispatch(signInFailure(error.message))
  //     }
  //  }

      const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    dispatch(signInFailure('Please fill out all fields'));
    toast.error('Please fill out all fields');
    return;
  }

  try {
    dispatch(signInStart());
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      // Afficher le message d’erreur du backend dans le toast
      dispatch(signInFailure(data.message));
      toast.error(data.message);
    } else {
      dispatch(signInSuccess(data));
      navigate('/');
    }
  } catch (error) {
    dispatch(signInFailure(error.message));
    toast.error(error.message);
  }
};

  
  
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
                This is a demo project. You can sign in with your email and password
                or with Google.
            </p>
          </div>
          {/* right */}
          <div className="flex-1">
             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
               
               <div>
                 <Label value="Your email" />
                 <TextInput value={email} type="email" placeholder="name@company.com" id="email"onChange={handleChange} />
               </div>
               <div className="relative">
                 <Label value="Your password" />
                 <TextInput  value={password} type={showPassword ? "text": "password"}  placeholder="***********" id="password"onChange={handleChange} />

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
                    ) :  ('Sign In'
                  )}
               </Button>
               <OAuth />
             </form>
             <div className="flex gap-2 mt-5 text-sm">
              <span>Dont have an account?</span>
              <Link to="/sign-up" className="text-blue-500">
                 Sign Up
              </Link>
             </div>
             {/* {
               errorMessage && (
                 <Alert className="mt-5" color="failure">
                    {errorMessage}
                 </Alert>
               )
             } */}
          </div>
       </div>
    </div>
  )
}
