
import React, {useState, useEffect, useRef} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useGlobalContext } from '@/ Context/context';
import {FaTimes} from 'react-icons/fa'



const Login = () => {
  const [checkUserData, setcheckUserData] = useState({email: '', password: ''})
  const [isLoading, setisLoading] = useState(false)
  const [color, setColor] = useState('#ffffff')
  const [hidePassword, sethidePassword] = useState(false)
  const[registerUser, setRegisterUser] = useState(false)
  const[message, setMessage] = useState('')
  
  const {isSignIn, setIsSignIn, isToken, setIsToken, isUserRegistered, setIsUserRegistered, closeLoginModal, registerModal} = useGlobalContext()
  



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
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




 useEffect(()=>{
  localStorage.setItem('myToken', isToken);
 }, [isToken])
 


 const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch('/api/login/login', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(checkUserData)
  })

  if(response.ok){
    const data = await response.json()
    setMessage(data.message)
    setTimeout(() => {
      setMessage('')
      closeLoginModal();
    }, 3000);
    document.cookie = `token=${data.token}; path=/; max-age=3600; Secure; SameSite=Strict`;
    setIsToken(data.token)
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
    <div className="flex items-center justify-center h-screen bg-gray-800 bg-opacity-75 fixed inset-0 z-40">
      <div className="loginStyle p-12 rounded-lg shadow-lg" ref={modalRef}>
        <div className="relative bottom-8 left-64" onClick={closeLoginModal}>
          <FaTimes size="1.8rem" className="cursor-pointer text-gray-800"/>
        </div>
      <div className="text-center my-6">
        <p className="text-zinc-800">
        {message}
       </p>
      </div>
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
          <div>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-gray-800">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={checkUserData.email} className="text-zinc-800" onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, email:e.target.value})
              }} required/>
              </div>

              <div className="flex flex-col w-fit">
                <label htmlFor="password" className="text-gray-800">
                    Password:
                </label>
                {!hidePassword ? <FaEye className="relative top-6 left-56 text-zinc-800" onClick={closePassword}/> : <FaEyeSlash className="relative top-6 left-56 text-zinc-800" onClick={showPassword}/>}
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password" className="formInput"value={checkUserData.password} onChange={(e)=>{
                  e.preventDefault()
                  setcheckUserData({...checkUserData, password:e.target.value})
                }}required/>  
              </div>

              <button
               className="btn btn-primary mt-6" 
               type="submit" 
               onClick={handleSubmit}
              >
                Login
              </button>

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
