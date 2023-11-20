import React, {useState} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import PasswordInput from '../../util/password'

 const SignInSecurity = ({user}) => {
  const [userData, setUserData] = useState({ currentPassword: '', newPassword: '', verify: ''});
  const [hidePassword, setHidePassword] = useState({ password: true, retype: true });
  const [message, setMessage] = useState('')

  const togglePasswordVisibility = (field) => {
    setHidePassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  async function submitData(e) {
    e.preventDefault()
    const payload = {
        userData,
        userId: user._id
    };
    const response = await fetch('/api/updates/changePassword', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json()
    if(data.message){
        setMessage(data.message)
        setTimeout(() => {
            setMessage('')
        }, 3000);
    }
  }

  return (
    <>  
    <h1 className="text-zinc-800 font-semibold">Change Password</h1>
    <div className="flex flex-col gap-2 mt-8">
   <PasswordInput
    id="currentPassword"
    label="Current Password:"
    value={userData.name} // Consider renaming this state to currentPassword for clarity
    onChange={(e) => setUserData({ ...userData, currentPassword: e.target.value })}
    hidePassword={hidePassword.password}
    toggleVisibility={() => togglePasswordVisibility('password')}
  />

  <PasswordInput
    id="retypePassword"
    label="New Password:"
    value={userData.newPassword}
    onChange={(e) => setUserData({ ...userData, newPassword: e.target.value })}
    hidePassword={hidePassword.retype}
    toggleVisibility={() => togglePasswordVisibility('retype')}
  />

  <PasswordInput
    id="verifyPassword"
    label="Verify Password:"
    value={userData.verify} // You need to add this field to your state
    onChange={(e) => setUserData({ ...userData, verify: e.target.value })}
    hidePassword={hidePassword.verify} // You need to add this field to your hidePassword state
    toggleVisibility={() => togglePasswordVisibility('verify')}
  />
 </div>

  <div className="mt-8">
   <span className="text-zinc-800 text-sm">
    {message}
   </span>
  </div>
    <div className="mt-8">
    <button 
    className="bg-black px-20 py-2 text-sm uppercase text-white"
    onClick = {submitData}
    >
      Change Password
    </button>
    </div>
    </>
  )
}


export default SignInSecurity