import React from 'react'
import Dropdown from './Dropdown'
import Link from 'next/link'
import { useGlobalContext } from '../../ Context/context';

const ProfileDrop = () => {

const { 
  isProfileHovered, 
  isProfileDropdownHovered, 
  handleProfileDropDownMouseEnter, 
  handleProfileDropDownMouseLeave,  
  SignOut
} = useGlobalContext()




const content = (
   <>
   <h1 className="text-xl">Welcome back</h1>
   <div>
     <Link href='/userAccount/account'> 
       View Profile
     </Link>
    </div>
    </>
)

const shouldProfileShowDropdown = isProfileHovered || isProfileDropdownHovered
const primaryLabel = "Sign Out"


  return (
    <Dropdown
      isVisible={shouldProfileShowDropdown}
      onMouseEnter={handleProfileDropDownMouseEnter}
      onMouseLeave={handleProfileDropDownMouseLeave}
      onPrimaryAction={SignOut}
      primaryLabel={primaryLabel}
      content={content} 
      styleClass="w-1/5 bg-white rounded-lg p-4 flex flex-col gap-4 absolute top-16 right-24 z-10 text-zinc-800"
    />
  )
}

export default ProfileDrop