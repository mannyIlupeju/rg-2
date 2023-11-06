import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import { useGlobalContext } from '@/ Context/context';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
//Sidebar Cart view component

const Cart = () => {
  const {isItemChosen, onRemove, cartItems, toggleCartItemQuantity, totalPrice, closeCartModal} = useGlobalContext()
<<<<<<< HEAD


  
=======
>>>>>>> origin/main

  //close cart modal functionality if cart items in modal is less than 1
  if(cartItems.length < 1) {
    closeCartModal()
  }

  const closeOverlay = () => {
    if(isItemChosen){
      !isItemChosen
    }
  }

<<<<<<< HEAD


  
 

=======
>>>>>>> origin/main
  return (
    <div className={isItemChosen ? "overlay" : ""} onClick={closeOverlay}>
        {(isItemChosen && cartItems.length) ?
          <div className="bg-gray-300 w-2/6 absolute z-9 right-0 top-0 p-8 h-screen">
              <div className="text-zinc-700 flex justify-between">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <FaTimes color="black" size="2rem" onClick={closeCartModal} className="cursor-pointer"/>
              </div>
              <div>
                <div>
                  {cartItems.map((item, index)=> {
                    const { brandName, productName, price, imageUrls, quantity, _id } = item
                    return (
                      <div className="border-t-4 border-gray-400" key={index}>
                        <div className="flex gap-5 mt-4 ">
                          <div>
                            <Image src={imageUrls[0]} alt={productName} width="200" height="200" className="cartModalImage"/>
                          </div>
                          
                          <div className="flex flex-col gap-4 text-zinc-700">
                            <h1 className="text-md">Brand Name: <span className="font-bold">{brandName}</span></h1>
                            <p className="text-md">Item: {productName}</p>
                            <div>
                            <div>
                              <h1 className="text-xl font-bold">${price}</h1>
                            </div>
                            <div className="flex gap-4 mt-4">
                              <FaPlus className="" onClick={() => toggleCartItemQuantity(_id, 'inc')}/>
                                <span className="font-bold text-xl">{quantity}</span>
                              <FaMinus className="flex" onClick={() => toggleCartItemQuantity(_id, 'dec')}/>
                            </div>
                            
                          </div>
                          </div>
                        </div>
                        <div className="flex justify-end relative bottom-24 text-zinc-700 font-bold underline">
                          <button onClick={()=> onRemove(_id, quantity)}><p>On Remove</p></button>
                        </div>
                      </div>
                    )
                  })}
                    <div className="flex justify-between text-zinc-700 ">
                      <h1 className="text-2xl">Subtotal</h1>
                      <p className="text-2xl font-bold">${totalPrice}</p>
                    </div>

                    <div>
                      <button className="btn">Checkout</button>
                    </div>
              </div>
            </div>

          
          </div>
        :
        " "
        }
    </div>
  );
}

export default Cart;
