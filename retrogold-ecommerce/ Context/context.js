import {createContext, useContext,  useState, useEffect} from 'react';
import { sanityClient } from '../lib/sanity';
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
  const [cartNav, setCartNav] = useState([])
  const [isSignIn, setIsSignIn] = useState(false)
  const [isUserRegistered, setIsUserRegistered] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isToken, setIsToken] = useState(null)

  console.log(isToken)


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
  function openCartModal(){
    setItemChosen(!isItemChosen)
    document.body.style.overflowY = "hidden"
  }


  //Close Modal
  function closeCartModal(){
    setItemChosen(false)
    document.body.style.overflowY = "scroll"
    document.body.classList.remove('overlay')
  }

  function handleLogin() {
		setIsSignIn(!isSignIn)
	}

  function closeLoginModal() {
    setIsSignIn(false)
  }

  function registerModal(){
    setIsSignIn(false)
    setIsUserRegistered(!isUserRegistered)
  }

  function loginModal() {
    setIsUserRegistered(!isUserRegistered)
    setIsSignIn(true)
  }
  
  function closeRegisterModal() {
    setIsUserRegistered(!isUserRegistered)
  }





  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const token = process.env.NEXT_PUBLIC_API_KEY

  const activateSearch = (e) => {
    e.preventDefault()
    setSearchBar(!searchBar)
    setShowSearch(!showSearch)
  }

  const deactivateSearch = (e) => {
    e.preventDefault()
    setSearchBar(false)
    setShowSearch(!showSearch)
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



    

        
  return (
    <GlobalContext.Provider value={{ 
      currentIndex,
      setCurrentIndex,
      isOpenMenu,
      setOpenMenu,
      isUserRegistered, 
      setIsUserRegistered,
  
     
   
    
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
      closeRegisterModal,
      handleLogin,
      loginModal,
      closeLoginModal,
      registerModal,
      closeRegisterModal,
      isUserLoggedIn,
      setIsUserLoggedIn,
      searchBar,
      setSearchBar,
      activateSearch,
      deactivateSearch,
      showSearch,
      setShowSearch,
      isToken,
      setIsToken
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;