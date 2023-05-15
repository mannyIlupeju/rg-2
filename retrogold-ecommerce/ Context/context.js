import {createContext, useContext,  useState} from 'react';

//set up createContext
const GlobalContext = createContext()

//use the useContext to distribute the values gloablly 
export const useGlobalContext = () => useContext(GlobalContext)



const AppContext = ({ children }) => {
  const [name, setName] = useState('Peter');

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;