import React, {useEffect} from 'react';
import { useGlobalContext } from '@/ Context/context';
import { urlFor } from '@/lib/sanity';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

//Sidebar Cart view component

const Cart = () => {
  const {cartItems, setItemChosen, isItemChosen, onRemove} = useGlobalContext()
  console.log(isItemChosen)

  const closeCartModal = () =>{
    setItemChosen(false)
  }


  return (
    <>
        {(isItemChosen && cartItems.length) &&
          <div className="bg-gray-300 w-3/6 absolute right-0 top-22 p-8">
              <div className="text-zinc-700 flex justify-between">
                <h1 className="text-3xl font-bold">Your Cart</h1>
                <FaTimes color="black" size="2rem" onClick={closeCartModal} className="cursor-pointer"/>
              </div>
              <div>
                <div>
                {cartItems.map((item)=> {
                  const { brandName, productName, price, images, quantity, _id } = item
                  return (
                    <div className="">
                      <div className="flex gap-5 mt-4">
                        <div>
                          <img src={urlFor(images[0])} alt="" className="cartImage"/>
                        </div>
                        <div className="flex flex-col gap-4 text-zinc-700">
                          <h1 className="text-lg">Brand Name: <span className="font-bold">{brandName}</span></h1>
                          <p className="text-lg">Item: {productName}</p>
                          <div>
                          <div className="flex gap-4 mt-16">
                            <FaPlus className="" onClick={() => toggleCartItemQuantity(_id, 'inc') }/>
                              <span className="font-bold text-lg">{quantity}</span>
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
              </div>
            </div>

          
          </div>
        }
    </>
  );
}

export default Cart;
