import {createContext, useContext,  useState, useEffect} from 'react';

//set up createContext
const GlobalContext = createContext()

//use the useContext to distribute the values gloablly 
export const useGlobalContext = () => useContext(GlobalContext)



const AppContext = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpenMenu, setOpenMenu] = useState(false)
  const [cartInfo, setCartInfo] = useState([]) //stores the unchecked items in the cart
  const[cartItems, setCartItems] = useState([]) //handler function that will store the checked items in the cart
  const[totalQuantity, setTotalQuantity] =useState() //this is the handler function for the cart quantity, so we can increase/decrease

  



  useEffect(() => {
    if (isOpenMenu) {
    document.body.style.overflowY = "hidden";
    }
    if(!isOpenMenu){
    document.body.style.overflowY = "scroll"
    }
  }, [isOpenMenu]);



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


      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;