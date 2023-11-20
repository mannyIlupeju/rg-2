import React, {useState} from 'react'

const PersonalInfo = () => {
const [userData, setUserData] = useState({ newEmail: '', currentEmail: ''});
const [message, setMessage] = useState('')

  async function submitData(e) {
    console.log(userData)
    e.preventDefault()
    const response = await fetch('/api/updates/personalInfo', {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
    });
    const data = await response.json()
    console.log(data)

    if(data.message){
    setMessage(data.message)

    setTimeout(() => {
       setMessage('') 
    },2000);
    }
   setUserData({newEmail: '', currentEmail: ''})
       
  }




  return (
    <>  
    <h1 className="text-zinc-800 font-semibold">Change Information</h1>
    <div className="flex flex-col gap-2 mt-8">
        <label htmlFor="currentEmail" className="text-gray-800">
        Current Email: 
        </label>
         <input type="email" name="currentEmail" id="currentEmail" className="p-2 formInput text-gray-800" value={userData.currentEmail} onChange={(e)=>{
           e.preventDefault()
           setUserData({...userData, currentEmail: e.target.value})
         }} required/>
        <label htmlFor="newEmail" className="text-gray-800">
        New Email Address:
        </label>
         <input type="email" name="newEmail" id="newEmail" className="p-2 formInput text-gray-800" value={userData.email} onChange={(e)=>{
           e.preventDefault()
           setUserData({...userData, newEmail: e.target.value})
         }} required/>
    </div>

    <div className="mt-4">
      <span className="text-zinc-800">
        {message}
      </span>
    </div>

    <div className="mt-8">
    <button className="bg-black px-20 py-2 text-sm uppercase text-white"
     onClick={submitData}
    >
        Change Email Address
    </button>
    </div>
    </>
  )
}

export default PersonalInfo
