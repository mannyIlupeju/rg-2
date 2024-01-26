import React from 'react'
import { useGlobalContext } from '@/ Context/context';

const ProfileDrop = () => {

    return (
   <div className="container w-1/5 bg-white rounded-lg p-4 flex flex-col gap-4 absolute top-16 right-24 z-10 text-zinc-800">
      <div>
      <h1 className="text-xl">Welcome back</h1>
      <div className="">
        Sign Out 
      </div>
      </div>  
    </div>
  )
}

export default ProfileDrop