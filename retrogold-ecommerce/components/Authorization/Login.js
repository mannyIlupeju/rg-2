import React, {useState, useEffect, useRef} from 'react';
<<<<<<< HEAD
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useGlobalContext } from '@/ Context/context';
=======
import Router from 'next/router';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useGlobalContext } from '@/ Context/context'
>>>>>>> origin/main
import {FaTimes} from 'react-icons/fa'



const Login = () => {
  const [checkUserData, setcheckUserData] = useState({email: '', password: ''})
  const [isLoading, setisLoading] = useState(false)
  const [color, setColor] = useState('#ffffff')
<<<<<<< HEAD
  const [hidePassword, sethidePassword] = useState(false)
  const[registerUser, setRegisterUser] = useState(false)
  
  const {isSignIn, setIsSignIn, isUserRegistered, setIsUserRegistered, closeLoginModal, registerModal} = useGlobalContext()
  



  const modalRef = useRef();

  useEffect(() => {
    // Disable scrolling on the body element
    document.body.style.overflow = 'hidden';

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Set isSignIn to false to close the modal (assuming you have a method to do this)
        setIsSignIn(false);
      }
    };

    // Listen for clicks on the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener and re-enable scrolling when component unmounts
=======
  const [hidePassword, setHidePassword] = useState({
    password:true
  })
  const[registerUser, setRegisterUser] = useState(false)
  
  const {
    isSignIn,
    setIsSignIn, 
    isUserRegistered, 
    setIsUserRegistered, 
    closeLoginModal, 
    registerModal,
    isUserLoggedIn,
    setIsUserLoggedIn,
    isToken,
    setIsToken,
  } = useGlobalContext()

  const modalRef = useRef();


  //password hide/show functions
  function togglePasswordVisibility(field) {
    setHidePassword(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }))
  }



  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsSignIn(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
>>>>>>> origin/main
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

<<<<<<< HEAD
 

 



  //Login submit functionality
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(loginPost(checkUserData))
  //   setisLoading(true)

  //   setTimeout(() => {
  //     const token = localStorage.getItem('token')
  //     if(token){
  //       setisLoading(false)
  //       setisLogin(true)
  //       setsuccessMessage(true)
  //       navigate ('/', {replace: true})
  //     }
  //     else {
  //       setErrorMessage(true)
  //       setTimeout(() => {
  //         setErrorMessage(false)
  //         setisLoading(false)
  //         clearLogin()
  //       }, 1000);
  //     }

  //   }, 2000);
  // }

  //Clear fields login
=======

  if(isToken) {
    console.log ('token is present')
  }


  async function handleLogin(e){
    e.preventDefault()
    const response = await fetch('/api/login/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(checkUserData)
    })

    const data = await response.json();
    console.log(data)
    const{token, message} = data;

    if(token){ 
      setIsToken(token)
      setIsUserLoggedIn(!isUserLoggedIn)
      setTimeout(() => {
        setIsUserLoggedIn(false)
        closeLoginModal()
      }, 1000);
    }
    

  }

>>>>>>> origin/main
  const clearLogin= () => {
    setcheckUserData({name: '', email: '', password:''})
  }

<<<<<<< HEAD

  //password hide/show functionality  
=======
>>>>>>> origin/main
  function closePassword() {
    sethidePassword(true)
  }
  function showPassword() {
    sethidePassword(false)
  }



  return (
    <>
<<<<<<< HEAD
    <div className="flex items-center justify-center h-screen bg-gray-800 bg-opacity-75 fixed inset-0 z-40">
      
      <div className="loginStyle p-12 rounded-lg shadow-lg" ref={modalRef}>
        <div className="relative bottom-8 left-64" onClick={closeLoginModal}>
=======
    <div className="flex justify-center">
    {isUserLoggedIn && 
    <div className="w-fit absolute top-40 z-50">
      <span className="text-gray-800">
        Login Successful
      </span>
    </div>
    }
    </div>
    <div className="flex items-center justify-center h-screen bg-gray-800 bg-opacity-75 fixed inset-0 z-40">
      <div className="loginStyle p-12 rounded-lg shadow-lg" ref={modalRef}>
        <div className="relative bottom-8 left-60 text-gray-900" onClick={closeLoginModal}>
>>>>>>> origin/main
          <FaTimes size="1.8rem" className="cursor-pointer"/>
        </div>
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
          <div>
<<<<<<< HEAD
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-gray-800">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={checkUserData.email} onChange={(e)=>{
=======
            <form className="flex flex-col gap-3" onSubmit={handleLogin}>
              <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-800">
                  Email:
              </label>
              <input type="text" name="email" id="email" className="p-2 formInput text-gray-200" value={checkUserData.email} onChange={(e)=>{
>>>>>>> origin/main
                e.preventDefault()
                setcheckUserData({...checkUserData, email:e.target.value})
              }} required/>
              </div>

<<<<<<< HEAD
              <div className="flex flex-col w-fit">
                <label htmlFor="password" className="text-gray-800">
                    Password:
                </label>
                {!hidePassword ? <FaEye className="relative top-6 left-56" onClick={closePassword}/> : <FaEyeSlash className="relative top-6 left-56" onClick={showPassword}/>}
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password" className="formInput"value={checkUserData.password} onChange={(e)=>{
                  e.preventDefault()
                  setcheckUserData({...checkUserData, password:e.target.value})
                }}required/>  
=======
              <div className="flex flex-col ">
                <label htmlFor="password" className="text-gray-800">
                    Password:
                </label>
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password" className="p-2 formInput text-gray-200" value={checkUserData.password} onChange={(e)=>{
                  e.preventDefault()
                  setcheckUserData({...checkUserData, password:e.target.value})
                }}required/>  
                {!hidePassword.password ? <FaEye className="relative bottom-7 left-52 positioning-class cursor-pointer" onClick={() => togglePasswordVisibility('password')} /> : <FaEyeSlash className="positioning-class cursor-pointer relative bottom-7 left-52" onClick={() => togglePasswordVisibility('password')} />}
>>>>>>> origin/main
              </div>

              <button className="btn btn-primary mt-6" type="submit">Login</button>

              <div className="flex flex-row gap-1 justify-center text-lg mt-4">
              <p className="text-gray-800">Don't have an account?</p>
              <div className="text-underline">
                <p className="text-green-500 cursor-pointer"onClick={registerModal}>Sign Up!</p>
              </div>
              </div>
            </form>
          </div>
      </div>
      </div>
    </>
  )
};



export default Login;
