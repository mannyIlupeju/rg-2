
import React from 'react';
import Quantitycounter from './quantityCounter';

const Addtocart = () => {
 const submitItem = () => {
    console.log({
      brandName: productDetail.brandName,
      name: productDetail.productName,
      id: productDetail._id,
      quantity: defaultAmount, 
      price: (productDetail.price * defaultAmount),
      image: images[currentIndex].asset._ref
    })
  }


  return (
    <div className="mt-8">
      <button className="bg-black px-20 py-2 text-sm uppercase text-white w-">Add to Cart</button>
    </div>
  );
}

export default Addtocart;
