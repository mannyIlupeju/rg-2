import {createContext, useContext,  useState, useEffect} from 'react';
import { sanityClient } from '@/lib/sanity';
import { FaWindows } from 'react-icons/fa';
import secureLocalStorage from 'react-secure-storage';


//set up createContext
const GlobalContext = createContext()

//use the useContext to distribute the values gloablly 
export const useGlobalContext = () => useContext(GlobalContext)


const AppContext = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpenMenu, setOpenMenu] = useState(false)
  const [cartInfo, setCartInfo] = useState([]) //stores the unchecked items in the cart
  const[totalQuantity, setTotalQuantities] =useState(0) //this is the handler function for the cart quantity, so we can increase/decrease
  const[totalPrice, setTotalPrice] = useState(0)
  const [isItemChosen, setItemChosen] = useState(false)
   const [cartNav, setCartNav]= useState([])

  let savedCart = secureLocalStorage.getItem('cart')

  const[newCart, setNewCart] = useState(savedCart)

  const[cartItems, setCartItems] = useState([]) //handler function that will store the checked items in the cart
  

  console.log(totalQuantity)

 



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
  




  useEffect(()=>{
  const cartNav = secureLocalStorage.getItem("cart")
  if(cartNav){
    setCartNav(cartNav)
  }
 },[cartNav]);

  console.log(cartNav)







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


  const onRemove = (id, quantity) => {
    console.log(quantity)
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
      cartInfo,
      setCartInfo,
      cartItems,
      setCartItems,
      totalPrice,
      setTotalPrice,
      totalQuantity,
      setTotalQuantities,
      toggleCartItemQuantity,
      onRemove,
      messageDetails,
      openCartModal,
      setMessageDetails,
      isItemChosen,
      setItemChosen,
      closeCartModal,
      savedCart,
      newCart,
      setNewCart,
      cartNav
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;