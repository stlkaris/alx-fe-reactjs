import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)

}

export function AuthProvider ({children}){
  const [isAuthenticated, setIsAuthenticated] = useState(false)



    
     const login = (cb) => {
        setIsAuthenticated(true);
        setTimeout(cb, 100);
    }
    const logout = (cb) => {
        setIsAuthenticated(false);
        setTimeout(cb, 100)
    }


const value = {
    isAuthenticated,
    login,
    logout,
}

return <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
}