import {createContext, useContext,  useState, useEffect} from 'react';
import { sanityClient } from '@/lib/sanity';
import { FaWindows } from 'react-icons/fa';



//set up createContext
const GlobalContext = createContext()

//use the useContext to distribute the values gloablly 
export const useGlobalContext = () => useContext(GlobalContext)


const AppContext = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpenMenu, setOpenMenu] = useState(false)
  const[totalQuantity, setTotalQuantities] = useState(0) //this is the handler function for the cart quantity, so we can increase/decrease
  const[totalPrice, setTotalPrice] = useState(0)
  const [isItemChosen, setItemChosen] = useState(false)
  const[cartItems, setCartItems] = useState([]) //handler function that will store the checked items in the cart
  const [cartNav, setCartNav] = useState([])
  const [isSignIn, setIsSignIn] = useState(false)
  const [isUserRegistered, setIsUserRegistered] = useState(false)




  const [messageDetails, setMessageDetails] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      telephone: '',
      message: '',
      donate: '',
      quantity: 1,
      subject: '',
    }
  )
  

  //Navigation Modal functionality
  useEffect(() => {
    if (isOpenMenu) {
    document.body.style.overflowY = "hidden";
    }
    if(!isOpenMenu){
    document.body.style.overflowY = "scroll"
    }
  }, [isOpenMenu]);

  //Cart Modal functionality
  //Open Modal
  const openCartModal = () => {
    setItemChosen(!isItemChosen)
    document.body.style.overflowY = "hidden"
  }
  //Close Modal
  const closeCartModal = () =>{
    setItemChosen(false)
    document.body.style.overflowY = "scroll"
    document.body.classList.remove('overlay')
  }


   function closeLoginModal() {
    setIsSignIn(false)
  }

  function registerModal(){
    setIsSignIn(false)
    setIsUserRegistered(true)
  }

  function loginModal() {
    setIsUserRegistered(!isUserRegistered)
    setIsSignIn(true)
  }
  
  function closeRegisterModal() {
    setIsUserRegistered(false)
  }





  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const token = process.env.NEXT_PUBLIC_API_KEY




  //Add item to cart
  const onAdd = async(product, quantity) => {
    //checking if item is already in cart, and if it is add an additional item, if it is not just add the item for the first time
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);


    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,
        }
      })
      setCartItems(updatedCartItems);

    } else {
      const updatedProduct = { ...product, quantity: quantity }
      setCartItems([...cartItems, updatedProduct]);
    }
    openCartModal()
  }


  const toggleCartItemQuantity = (id, value) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === id) {
        if (value === 'inc') {
          return { 
            ...item, quantity: item.quantity + 1 
          };
        } else if (value === 'dec' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return(item)
      
    });
    
    setCartItems(updatedCartItems);

    // Calculate totalPrice and totalQuantities based on the updatedCartItems
    const newTotalPrice = updatedCartItems.reduce((total, item) =>  total + item.price * item.quantity, 0);
    const newTotalQuantities = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
    
    setTotalPrice(newTotalPrice);
    setTotalQuantities(newTotalQuantities);


  }

  //Remove item from Cart
  const onRemove = (id, quantity) => {
   const filteredProduct = cartItems.filter(item => item._id !== id)
  
   if(filteredProduct) {
     setCartItems(filteredProduct)
   }

   const updatedTotal = filteredProduct.reduce((total, item)=> total + item.price * item.quantity, 0)
   const updatedQuantities = filteredProduct.reduce((total, item) => total + item.quantity, 0);

   setTotalPrice(updatedTotal)
   setTotalQuantities(updatedQuantities)
  }
    

        
  return (
    <GlobalContext.Provider value={{ 
      currentIndex,
      setCurrentIndex,
      isOpenMenu,
      setOpenMenu,
      isUserRegistered, 
      setIsUserRegistered,
      cartItems,
      setCartItems,
      totalPrice,
      setTotalPrice,
      totalQuantity,
      setTotalQuantities,
      toggleCartItemQuantity,
      onAdd,
      onRemove,
      messageDetails,
      openCartModal,
      setMessageDetails,
      isItemChosen,
      setItemChosen,
      closeCartModal,
      isSignIn,
      setIsSignIn,
      loginModal,
      closeLoginModal,
      registerModal,
      closeRegisterModal
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;