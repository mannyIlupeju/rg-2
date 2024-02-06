import React from 'react'

const Dropdown = ({ isVisible, onMouseEnter, onMouseLeave, onPrimaryAction, onSecondaryAction, content, primaryLabel, secondaryLabel, styleClass }) => {
   if (!isVisible) {
    return null;
  }
  return (
     <div className={`container ${styleClass}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div>
        {content}
        <div className="flex gap-3 mt-6">
         {primaryLabel && 
          (<button className="btn" onClick={onPrimaryAction}>
            {primaryLabel}
          </button>)
        }
        {secondaryLabel && 
          (<button className="btn" onClick={onSecondaryAction}>
            {secondaryLabel}
          </button>  )
        }
        </div>
      </div>  
    </div>
  );
}

export default Dropdown; 