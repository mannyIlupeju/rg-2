import React from 'react'
import Dropdown from './Dropdown'
import { useGlobalContext } from '../../ Context/context';


const WelcomeDrop = () => {
const { 
  isHovered, 
  isDropdownHovered, 
  handleDropDownMouseEnter, 
  handleDropDownMouseLeave, 
  toggleLoginModal, 
  toggleRegisterModal
} = useGlobalContext()

const content = (
    <>
      <h1 className="text-xl">Welcome to Retrogold</h1>
      <p className="mt-4">Create a free account to check out quickly, build a wish list, and view your orders</p>
    </>
  );
  const shouldShowDropdown = isHovered || isDropdownHovered
  const primaryLabel = "Sign In"
  const secondaryLabel = "Register"


  return (
   <Dropdown
      isVisible={shouldShowDropdown}
      onMouseEnter={handleDropDownMouseEnter}
      onMouseLeave={handleDropDownMouseLeave}
      onPrimaryAction={toggleLoginModal}
      onSecondaryAction={toggleRegisterModal}
      content={content}
      primaryLabel={primaryLabel}
      secondaryLabel={secondaryLabel}
      styleClass="w-1/3 bg-white rounded-lg p-4 flex flex-col gap-4 absolute top-16 right-24 z-10 text-zinc-800"
    />
  )
}

export default WelcomeDrop;