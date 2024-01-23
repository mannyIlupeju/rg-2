import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import { useGlobalContext } from '@/ Context/context';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { onRemove, toggleCartItemQuantity } from '../store'
import {useSelector, useDispatch} from 'react-redux'
import {handleToggle, handleRemove} from '../util/cartFunctions/functions'
//Sidebar Cart view component

const Cart = ({ cartId }) => {
  const {isItemChosen, closeCartModal} = useGlobalContext()
  const dispatch = useDispatch()
  const totalPrice = useSelector((state) => state.totalPrice)
  const cartItems = useSelector((state)=> state.cart)

  
  //close cart modal functionality if cart items in modal is less than 1
  useEffect(() => {
    if (cartItems.length < 1) {
      closeCartModal();
    }
  }, [cartItems.length, closeCartModal]);




  const closeOverlay = () => {
    if(isItemChosen){
      !isItemChosen
    }
  }

   function handleToggle(id, value){
    dispatch(toggleCartItemQuantity({
      id,
      value
    }))
   }

   function handleRemove(id){
    dispatch(onRemove({id}))
   }

   console.log(cartItems)


  return (
    <div className={`overflow-y-auto ${isItemChosen ? "overlay" : ""}`} onClick={closeOverlay}>
        {(isItemChosen) ?
        <div className="bg-gray-300 absolute z-9 right-0 top-0 p-8 sideCart lg:w-2/6 w-full">
              <div className="text-zinc-700 flex justify-between">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <FaTimes color="black" size="2rem" onClick={closeCartModal} className="cursor-pointer"/>
              </div>
              <div>
                <div>
              {cartItems.map((items, index) => {
                  const {images, currency, lineId, merchandiseId, price, quantity, title, vendor} = items
                
                  return (
                    <div className="border-t-4 border-gray-400" key={index}>
                          <div className="flex gap-4 mt-4">
                            <div>
                              <Image src={images.edges[0].node.originalSrc} alt='' width="40" height="40" className="cartImage" unoptimized/>
                            </div>
                            <div className="flex flex-col gap-4 text-zinc-700">
                              <h1 className="text-lg"><span className="font-bold">{vendor}</span></h1>
                              <p className="text-md ">Item: {title}</p>
                              <div className="flex gap-4 mt-4">
                                <FaPlus className="" onClick={() => { handleToggle(lineId, 'inc') }} />
                                <span className="text-lg">{quantity}</span>
                                <FaMinus className="flex" onClick={() => { handleToggle(lineId, 'dec') }} />
                              </div>
                              <div>
                                <h1 className="text-xl">${price}</h1>
                              </div>
                              <div className=" text-zinc-700 font-bold underline">
                                <button onClick={() => handleRemove(lineId)}>
                                  <p>On Remove</p>
                                </button>
                              </div>
                            </div>
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



export async function getServerSideProps(context) {
     const {req} = context;
     const parsedCookies = Cookies.parse(req.headers.cookie || '');

     const cartId = parsedCookies.cartId;
     console.log(cartId);// Retrieve the cookie
     return {
      props: {
        cartId
      }
     }
}