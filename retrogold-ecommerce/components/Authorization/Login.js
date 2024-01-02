import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '@/ Context/context';

const Login = () => {
  const [checkUserData, setCheckUserData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [message, setMessage] = useState('');

  const { setIsSignIn, setIsToken, toggleLoginModal, toggleRegisterModal, incrementOverflowHidden, decrementOverflowHidden } = useGlobalContext();
  const modalRef = useRef();


  useEffect(() => {
    incrementOverflowHidden();

    return () => {
      decrementOverflowHidden();
    };
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/login/login', {
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(checkUserData)
      });
      const data = await response.json();
      setMessage(data.message);
      setTimeout(() => setMessage(''), 5000);

      if (response.ok) {
        setIsToken(data.token);
        document.cookie = `token=${data.token}; path=/; max-age=3600; Secure; SameSite=Strict`;
        toggleLoginModal();
      }
    } catch (error) {
      setMessage('An error occurred. Please try again');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setHidePassword(prevState => !prevState);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 bg-opacity-75 fixed inset-0 z-40">
      <div className="loginStyle p-12 rounded-lg shadow-lg max-w-md mx-auto" ref={modalRef}>
        <div className="relative bottom-5 left-80" onClick={toggleLoginModal}>
          <FaTimes size="1.8rem" className="cursor-pointer text-gray-800" />
        </div>
        <div className="text-center my-6">
          <p className="text-zinc-800 font-semibold">{message}</p>
        </div>
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
        <form className="flex flex-col justify-center gap-3" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-gray-800">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={checkUserData.email}
              className="text-zinc-800 formInput "
              onChange={(e) => setCheckUserData({ ...checkUserData, email: e.target.value })}
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col w-fit">
            <label htmlFor="password" className="text-gray-800">Password:</label>
            <div className="relative">
              <input
                type={hidePassword ? 'password' : 'text'}
                name="password"
                id="password"
                className="formInput "
                value={checkUserData.password}
                onChange={(e) => setCheckUserData({ ...checkUserData, password: e.target.value })}
                required
              />
              {hidePassword ?
                <FaEyeSlash className="absolute top-2 right-5 text-zinc-800 cursor-pointer" onClick={togglePasswordVisibility} /> :
                <FaEye className="absolute top-2 right-5 text-zinc-800 cursor-pointer" onClick={togglePasswordVisibility} />
              }
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary mt-6 md:max-w-lg" type="submit">
            {isLoading ? 'Loading...' : 'Login'}
          </button>

          {/* Sign Up Link */}
          <div className="flex flex-row gap-1 justify-center text-lg mt-4">
            <p className="text-gray-800">Dont have an account?</p>
            <p className="text-green-500 cursor-pointer" onClick={toggleRegisterModal}>Sign Up!</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;