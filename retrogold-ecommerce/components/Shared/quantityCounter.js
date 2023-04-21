import React, {useState} from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Quantitycounter = () => {
  const [defaultAmount, setDefaultAmount] = useState(1)

  const increaseAmt = () => {
    setDefaultAmount((prev)=> prev + 1)
  }

  const decreaseAmt = () => {
    if(defaultAmount === 1){
      setDefaultAmount((prev)=> prev)
    }
    else {
      setDefaultAmount((prev)=> prev -1)
    }
  }


  return (
    <div className="flex gap-5 border-2 w-fit border border-zinc-400 px-1 mt-2">
      <FaMinus className="flex self-center" onClick={decreaseAmt}/>
        <span className="font-bold text-lg">{defaultAmount}</span>
      <FaPlus className="flex self-center" onClick={increaseAmt}/>
    </div>
  );
}

export default Quantitycounter;
