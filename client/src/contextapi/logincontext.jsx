import React, { createContext, useContext, useEffect, useState ,useMemo} from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [token,settoken] = useState(localStorage.getItem('token'));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    

    async function tokensetter(token){
        localStorage.setItem('token', token);
        settoken(token);
    }
    useEffect(() => {
        settoken(localStorage.getItem('token'))
        if(token){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    },[token]);
    
    return (
        <LoginContext.Provider value={{ isLoggedIn , setUser , token ,tokensetter}}>
            {children}
        </LoginContext.Provider>
    );
}
export const UseLoginContext = () => {
    const authContextValue = useContext(LoginContext);
    if (!authContextValue) {
        throw new Error("login usage must be used within an AuthProvider");
    }
    return authContextValue;
};