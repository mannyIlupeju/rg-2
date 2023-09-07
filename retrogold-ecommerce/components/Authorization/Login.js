import React from 'react';



const Login = () => {
  return (
    <>
    <div className="flex justify-center mx-auto p-24">
      <div className="postBcground p-12 w-96">
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
       
        {successMessage &&
          <div className="text-center mb-4 bg-slate-800 p-4 w-fit mx-auto">
            <h4>User is now Logged in</h4>
          </div> 

        }
        {errorMessage && 
        <div className="text-center mb-4 bg-slate-800 p-4 w-fit mx-auto">
            <h4>Email address or password is not correct</h4>
          </div> 
        }

          <div>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-white">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={checkUserData.email} onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, email:e.target.value})
              }} required/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-white">
                    Password:
                </label>
                {!hidePassword ? <FaEye className="relative top-5 left-60" onClick={closePassword}/> : <FaEyeSlash className="relative top-5 left-60" onClick={showPassword}/>}
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password" value={checkUserData.password} onChange={(e)=>{
                  e.preventDefault()
                  setcheckUserData({...checkUserData, password:e.target.value})
                }}required/>  
              </div>

              <button className="btn btn-primary mt-6" type="submit" onClick={handleSubmit}>
                {isLoading ? <RiseLoader color="#ffffff" size={10}/> : 'Submit'}
              </button>

              <div className="flex flex-row gap-1 justify-center text-sm mt-4">
              <p className="text-white">Don't have an account?</p>
              <div className="text-underline">
              <Link className="text-black"to="/blog/register">Sign up</Link>
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
