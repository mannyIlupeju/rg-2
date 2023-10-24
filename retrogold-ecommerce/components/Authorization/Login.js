import React, {useState, useEffect, useRef} from 'react';
import Router from 'next/router';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useGlobalContext } from '@/ Context/context'
import {FaTimes} from 'react-icons/fa'



const Login = () => {
  const [checkUserData, setcheckUserData] = useState({email: '', password: ''})
  const [isLoading, setisLoading] = useState(false)
  const [color, setColor] = useState('#ffffff')
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
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


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


  //Clear fields login
  const clearLogin= () => {
    setcheckUserData({name: '', email: '', password:''})
  }


  //password hide/show functionality  
  function closePassword() {
    sethidePassword(true)
  }
  function showPassword() {
    sethidePassword(false)
  }



  return (
    <>
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
          <FaTimes size="1.8rem" className="cursor-pointer"/>
        </div>
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
          <div>
            <form className="flex flex-col gap-3" onSubmit={handleLogin}>
              <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-800">
                  Email:
              </label>
              <input type="text" name="email" id="email" className="p-2 formInput text-gray-200" value={checkUserData.email} onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, email:e.target.value})
              }} required/>
              </div>

              <div className="flex flex-col ">
                <label htmlFor="password" className="text-gray-800">
                    Password:
                </label>
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password" className="p-2 formInput"value={checkUserData.password} onChange={(e)=>{
                  e.preventDefault()
                  setcheckUserData({...checkUserData, password:e.target.value})
                }}required/>  
                {!hidePassword.password ? <FaEye className="relative bottom-7 left-52" onClick={() => togglePasswordVisibility('password')} /> : <FaEyeSlash className="relative bottom-7 left-52" onClick={() => togglePasswordVisibility('password')} />}
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
