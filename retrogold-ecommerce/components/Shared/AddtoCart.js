
import React from 'react';
import { useGlobalContext } from '@/ Context/context';

const Addtocart = ({productName, brandName, price, image, id, quantity}) => {

 const {cartInfo, setCartInfo} = useGlobalContext()



 //Add to cart to Cart functionality (with no checks)
  const submitInfo = () => {
  setCartInfo([
    ...cartInfo,
    {
    brandName,
    productName,
    price,
    image,
    id,
    quantity,
  }]
  )
 }

 console.log(cartInfo)













  return (
    <div className="mt-8">
      <button className="bg-black px-20 py-2 text-sm uppercase text-white" onClick={submitInfo}>Add to Cart</button>
    </div>
  );
}

export default Addtocart;
