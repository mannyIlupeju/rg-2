import React, {useState} from 'react';
import {FaCaretUp} from 'react-icons/fa'
import {FaCaretDown} from 'react-icons/fa'

const Accordion = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div onClick={toggleAccordion} className="flex gap-20 w-3/5 justify-between">
        <h3>{title}</h3>  
        <div className="flex items-center">
        <p>{isOpen ? <FaCaretDown/> :<FaCaretUp/>}</p>
        </div>
      </div> 
      <div>
      {isOpen && (
        <div className="text-sm leading-loose w-3/5 ">
          <p>{content}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Accordion;
