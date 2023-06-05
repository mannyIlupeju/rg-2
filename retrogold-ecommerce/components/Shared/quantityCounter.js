import React, {useState} from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useGlobalContext } from '@/ Context/context';

const Quantitycounter = () => {

const [quantity, setQuantity] = useState(1)
  
console.log(quantity)
  
  //Increase and Decrease Amount funcitonality
  const increaseAmt = () => {
    setQuantity((prev)=> prev + 1)
  }

  const decreaseAmt = () => {
    if(quantity === 1){
      setQuantity((prev)=> prev)
    }
    else {
      setQuantity((prev)=> prev - 1)
    }
  }


  return (
    <div className="flex gap-5 w-fit  px-1 mt-2">
      <FaMinus className="flex self-center" onClick={decreaseAmt}/>
        <span className="font-bold text-lg">{quantity}</span>
      <FaPlus className="flex self-center" onClick={increaseAmt}/>
    </div>
  );
}

export default Quantitycounter;
