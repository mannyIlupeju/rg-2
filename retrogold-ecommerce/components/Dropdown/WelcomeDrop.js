import React from 'react'
import Link from 'next/link'
import { useGlobalContext } from '@/ Context/context';


const WelcomeDrop = () => {
const { isHovered, isDropdownHovered, handleDropDownMouseEnter, handleDropDownMouseLeave, toggleLoginModal, toggleRegisterModal} = useGlobalContext()
  const shouldShowDropdown = isHovered || isDropdownHovered
  return (
    <div className="container w-1/4 bg-white rounded-lg p-4 flex flex-col gap-4 absolute top-16 right-24 z-10 text-zinc-800" onMouseEnter={handleDropDownMouseEnter} onMouseLeave={handleDropDownMouseLeave}>
      <div>
      <h1 className="text-xl">Welcome to Retrogold</h1>
      <p className="mt-4">Create a free account to check out quickly, build a wish list, and view your orders</p>
      <div className="flex gap-3 mt-6">
      <button 
      className="btn" 
      onClick={toggleLoginModal}>
      Sign In
      </button>
      <button 
      className="btn" 
      onClick={toggleRegisterModal}>
      Register
      </button>  
      </div>
      </div>  
    </div>
  )
}

export default WelcomeDrop;