import {createContext, useContext,  useState, useEffect} from 'react';

//set up createContext
const GlobalContext = createContext()

//use the useContext to distribute the values gloablly 
export const useGlobalContext = () => useContext(GlobalContext)



const AppContext = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpenMenu, setOpenMenu] = useState(false)

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
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;