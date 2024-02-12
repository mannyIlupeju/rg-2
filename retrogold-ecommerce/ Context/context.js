import {createContext, useContext,  useState, useEffect} from 'react';
import { sanityClient } from '../lib/sanity';
import { FaWindows } from 'react-icons/fa';
import { useRouter } from 'next/router'
 import { initializeCart } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import searchDev from '@/pages/api/search/dist/search.dev';


//set up createContext
const GlobalContext = createContext()
//use the useContext to distribute the values gloablly 
export const useGlobalContext = () => useContext(GlobalContext)


const AppContext = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpenMenu, setOpenMenu] = useState(false)
  const [isItemChosen, setItemChosen] = useState(false)
  const [isSignIn, setIsSignIn] = useState(false)
  const [isUserRegistered, setIsUserRegistered] = useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [searchBar, setSearchBar] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [isToken, setIsToken] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false)
  const [isProfileDropdownHovered, setIsProfileDropdownHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [overflowHiddenCount, setOverflowHiddenCount] = useState(0);
  const [shopifyCartID, setShopifyCartID] = useState(null)
  const [cartData, setCartData] = useState({})
  const [showSearchDropdown, setSearchDropdown] = useState(false)
  const [searchValues, setSearchValues] = useState(null)
  const [isSearchValue, setIsSearchValue] = useState(false)


  
  useEffect(() => {
    setIsSearchValue(!!searchValues && searchValues.length > 0);
    }, [searchValues]);



  const hideDropdown = () => {
    setIsSearchValue(false);
  };



 
  const dispatch = useDispatch();

  const incrementOverflowHidden = () => {
    setOverflowHiddenCount(prevCount => prevCount + 1);
  };

  const decrementOverflowHidden = () => {
    setOverflowHiddenCount(prevCount => Math.max(prevCount - 1, 0));
  };

  useEffect(() => {
    document.body.style.overflow = overflowHiddenCount > 0 ? 'hidden' : 'unset';
  }, [overflowHiddenCount]);


  //Adding Items to the initializeCart State
  useEffect(() => {
    if(cartData.data?.cart.lines){
      const fetchedCartData = cartData.data.cart.lines.edges
      const submittedData = fetchedCartData.map((item)=> ({
        
        merchandiseId: item.node.merchandise.id,
        price: item.node.merchandise.priceV2.amount,
        currency: item.node.merchandise.priceV2.currencyCode,
        quantity: item.node.quantity,
        image: item.node.merchandise.image.src,
        title: item.node.merchandise.product.title,
        vendor: item.node.merchandise.product.vendor,
        id: item.node.id
        
      }));
      dispatch(initializeCart(submittedData))
    }
  }, [cartData, dispatch])


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
  
  const router = useRouter();

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

  function handleLogin(e) {
    console.log('Login modal opened');
    e.stopPropagation();
		setIsSignIn(!isSignIn)
	}

  function closeLoginModal() {
    setIsSignIn(false)
  }




  const toggleRespMenu = (e) => {
    console.log('resp menu should open');
    setOpenMenu(prevState => !prevState);
  };

  const toggleRegisterModal = (event) => {
    setIsUserRegistered(prevState => !prevState);
    setIsSignIn(false); // Ensure only one modal is open at a time
  };

  const toggleLoginModal = (event) => {
   
    setIsSignIn(prevState => !prevState);
    setIsUserRegistered(false); // Ensure only one modal is open at a time
  };



  /*** Drop Down Feature ***/
  const displayWelcomeModal = () => {
   console.log('hovered');
		 clearTimeout(hoverTimeout); // Clear any existing timeout
    setIsHovered(true);
    console.log(isHovered);
	}

	const removeWelcomeModal = () => {
		 // Start a delay before hiding the dropdown
    const timeout = setTimeout(() => {
        setIsHovered(false);
    }, 300); // Delay of 300ms, adjust as needed
    setHoverTimeout(timeout);
	}

  const handleDropDownMouseEnter = () => {
    console.log('dropdown hovered');
    clearTimeout(hoverTimeout); // Clear the timeout when entering the dropdown
    setIsDropdownHovered(true);
  }

  const handleDropDownMouseLeave = () => {
   setIsDropdownHovered(false);
    setIsHovered(false);
  }

  const handleShowSearchDropDown = () => {
    setSearchDropdown(true)
  }



/******************************************* */
/*****Profile Modal  */

const displayProfileModal = () => {
  setIsProfileHovered(true);
		clearTimeout(hoverTimeout); // Clear any existing timeout
}

const removeProfileModal = () => {
  console.log('remove hovered profile');
   // Start a delay before hiding the dropdown
    const timeout = setTimeout(() => {
        setIsProfileHovered(false);
    }, 300); // Delay of 300ms, adjust as needed
    setHoverTimeout(timeout);
}

const handleProfileDropDownMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear the timeout when entering the dropdown
    setIsProfileDropdownHovered(true);
}

const handleProfileDropDownMouseLeave = () => {
  console.log('dropdown left')
    setIsProfileDropdownHovered(false);
    setIsProfileHovered(false);
}








/*********************** */

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


  const SignOut = (e) => {
    e.preventDefault();
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsToken(null);
    router.push('/');

  }

        
  return (
    <GlobalContext.Provider value={{ 
      currentIndex,
      setCurrentIndex,
      isOpenMenu,
      setOpenMenu,
      isUserRegistered, 
      setIsUserRegistered,
      incrementOverflowHidden, 
      decrementOverflowHidden,
      
      toggleRegisterModal,
      toggleLoginModal,
      toggleRespMenu,
     
   
      closeLoginModal,
      messageDetails,
      openCartModal,
      setMessageDetails,
      isItemChosen,
      setItemChosen,
      closeCartModal,
      isSignIn,
      setIsSignIn,
      handleLogin,
      isUserLoggedIn,
      setIsUserLoggedIn,
      searchBar,
      setSearchBar,
      activateSearch,
      deactivateSearch,
      showSearch,
      setShowSearch,
      isToken,
      setIsToken,
      SignOut,
      shopifyCartID,
      setShopifyCartID,     
      cartData,
      setCartData,
      isHovered,
      setIsHovered,
      displayWelcomeModal,
      removeWelcomeModal,
      isProfileHovered,
      isDropdownHovered,
      setIsDropdownHovered,
      handleDropDownMouseEnter,
      handleDropDownMouseLeave,
      displayProfileModal,
      removeProfileModal,
      handleProfileDropDownMouseEnter,
      handleProfileDropDownMouseLeave,
      handleShowSearchDropDown,
      setSearchDropdown,
      searchValues,
      setSearchValues,
      isSearchValue,
      setIsSearchValue,
      hideDropdown
      
      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;