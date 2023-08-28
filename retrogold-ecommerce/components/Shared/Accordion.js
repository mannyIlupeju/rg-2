import React, {useState} from 'react';
import {FaCaretUp} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'

const Accordion = ({title, content, id}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [itemClose, setIsItemClose] = useState(null)

  const toggleAccordion = (e) => {
    setIsItemClose(id)
    if(itemClose === id){
      setIsOpen(!isOpen)
    }
  }


  return (
    <div>
      <div onClick={toggleAccordion} className="flex gap-20 w-3/5 justify-between border-t-2 border-gray-300 mb-4">
        <h3>{title}</h3>  
        <div className="flex items-center">
        <p>{isOpen ? <FaCaretDown/> :<FaCaretUp/>}</p>
        </div>
      </div> 
      <div>
      {isOpen && 
        <div className="text-sm leading-loose w-3/5 ">
          <p>{content}</p>
        </div> 
      }
      </div>
    </div>
  );
}

export default Accordion;
