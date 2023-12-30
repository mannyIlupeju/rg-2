import React, {useEffect} from 'react'
import {useGlobalContext} from './context'


const AuthenticationCheck = ({children}) => {
    const { setIsToken } = useGlobalContext();

    useEffect(()=>{
        const checkAuthStatus = () => {
            const token = document.cookie.includes('token')
            setIsToken(token)
        };
        
        checkAuthStatus();
    }, [setIsToken]);

    return <>{children}</>;
}

export default AuthenticationCheck;