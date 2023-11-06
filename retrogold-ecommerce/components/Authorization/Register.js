import React, {useState, useEffect, useRef} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useGlobalContext } from '@/ Context/context';
import {FaTimes} from 'react-icons/fa'

const Register = () => {
  const [userCreated, setUserCreated] = useState(false)
  const [userData, setUserData] = useState({name: '', email: '', password:'', retype: ''})
<<<<<<< HEAD
  const [hidePassword, sethidePassword] = useState(false)



  const {closeLoginModal, registerModal, closeRegisterModal, setIsUserRegistered, loginModal} = useGlobalContext()

  console.log(userData)



  const modalRef = useRef();

  //password hide/show functions
  function closePassword() {
    sethidePassword(true)
  }
  function showPassword() {
    sethidePassword(false)
=======
  const [hidePassword, setHidePassword] = useState({
    password: true,
    retype: true
  });

  const {closeLoginModal, registerModal, closeRegisterModal, setIsUserRegistered, loginModal} = useGlobalContext()

  const modalRef = useRef();

  //password hide/show functions
  function togglePasswordVisibility(field) {
    setHidePassword(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }))
>>>>>>> origin/main
  }
  
    useEffect(() => {
    // Disable scrolling on the body element
    document.body.style.overflow = 'hidden';

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Set isSignIn to false to close the modal (assuming you have a method to do this)
        setIsUserRegistered(false);
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
 

  const clear = () => {
<<<<<<< HEAD
    setUserData({name: '', email: '', password:'', retype: ''})
  }

  function handleRegistration(e) {
    e.preventDefault();
    
    
    fetch('api/register/register', {
=======
    setUserData({name: '', email: '', username: '',  password:'', retype: ''})
  }


  async function handleRegistration(e) {
    e.preventDefault();
    
    const response = await fetch('api/register/register', {
>>>>>>> origin/main
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })

<<<<<<< HEAD
=======
    const data = await response.json()
    console.log(data)

>>>>>>> origin/main
  }

  return (
    <>
      <div className="flex items-center justify-center fixed bg-gray-800 bg-opacity-75 inset-0 z-40">
        <div className="loginStyle p-12 rounded-lg shadow-lg max-w-md h-fit" ref={modalRef}>
          <div className="relative left-64 bottom-8">
<<<<<<< HEAD
          <FaTimes size="1.8rem" className="cursor-pointer" onClick={closeRegisterModal}/>
          </div>
            <div className="text-center mb-2">
            <h1 className="uppercase text-gray-900 text-2xl">Register</h1>
            <p className="text-center text-sm">Create a Retrogold account for a quick checkout</p>
            </div>
            <form className="flex flex-col gap-3 mt-8">
              <label htmlFor="name" className="text-gray-800 formInput">
                  Full Name:
              </label>
              <input type="text" name="name" id="name" className="formInput" value={userData.name} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, name: e.target.value})
              }} required/>
              <label htmlFor="email" className="text-gray-800 formInput">
                  Email:
              </label>
              <input type="text" name="email" id="email" className="formInput" value={userData.email} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, email: e.target.value})
              }}required/>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-800 formInput">
                    Password:
                </label>
                {!hidePassword ? <FaEye className="relative top-6 left-60" onClick={closePassword}/> : <FaEyeSlash className="relative top-6 left-60" onClick={showPassword}/>}
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password1" className="formInput" value={userData.password} onChange={(e)=>{
                  e.preventDefault()
                  setUserData({...userData, password: e.target.value})
                }} required/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 formInput">
                  Retype password:
              </label>
              {!hidePassword ? <FaEye className="relative top-6 left-60" onClick={closePassword}/> : <FaEyeSlash className="relative top-6 left-60" onClick={showPassword}/>}
              <input type={!hidePassword ? 'text' : 'password'} name="password" id="password2" className="" value={userData.retype} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, retype: e.target.value})
              }}required/>
              </div>
=======
          <FaTimes size="1.8rem" className="cursor-pointer text-gray-900" onClick={closeRegisterModal}/>
          </div>
            <div className="text-center">
            <h1 className="uppercase text-gray-900 text-2xl">Register</h1>
            <p className="text-center text-sm text-gray-900">Create a Retrogold account for a quick checkout</p>
            </div>
            <form className="flex flex-col mt-8 gap-6">

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-800">
                    Full Name:
                </label>
                <input type="text" name="name" id="name" className="p-2 formInput text-gray-800" value={userData.name} onChange={(e)=>{
                  e.preventDefault()
                  setUserData({...userData, name: e.target.value})
                }} required/>
              </div>
            
              <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-800">
                  Email:
              </label>
              <input type="text" name="email" id="email" className="p-2 formInput text-gray-800" value={userData.email} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, email: e.target.value})
              }}required/>
              </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-800">
                    Password:
                </label>
              <input type={!hidePassword.password ? 'text' : 'password'} name="password" id="password1" className="p-2 formInput text-gray-800" value={userData.password} onChange={(e) => {
                setUserData({ ...userData, password: e.target.value })
              }} required />
              {!hidePassword.password ? <FaEye className="relative bottom-9 left-60" onClick={() => togglePasswordVisibility('password')} /> : <FaEyeSlash className="relative bottom-9 left-60" onClick={() => togglePasswordVisibility('password')} />}

                </div>
              

              <div className="flex flex-col gap-2">
               <label htmlFor="name" className="text-gray-800">
                    Retype Password:
                </label>
           
              <input type={!hidePassword.retype ? 'text' : 'password'} name="retype" id="password2" className="p-2 formInput text-gray-800" value={userData.retype} onChange={(e) => {
                setUserData({ ...userData, retype: e.target.value })
              }} required />
              {!hidePassword.retype ? <FaEye className="relative bottom-9 left-60" onClick={() => togglePasswordVisibility('retype')} /> : <FaEyeSlash className="relative bottom-9 left-60" onClick={() => togglePasswordVisibility('retype')} />}
              </div>
          
>>>>>>> origin/main

              <button type="submit" className="btn mt-4 btn-primary" onClick={handleRegistration}>Register</button>
              
              <div className="flex flex-row gap-1 justify-center text-lg mt-4">
                <p className="text-gray-800">Already got an account?</p>
                <p onClick={loginModal} className="text-green-500">Login</p>
              </div>
            </form>
          
        </div>
      </div>

    </>
  )
}

export default Register;