import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)

}

export function AuthProvider ({children}){
  const [isAuthenticated, setAuthenticated] = useState(false)


// const auth = {
//     isAuthenticated:false,
     const login = (cb) => {
        auth.isAuthenticated = true;
        setTimeout(cb, 100);
    }
    const logout = (cb) => {
        auth.isAuthenticated = false;
        setTimeout(cb, 100)
    }
};

const value = {
    isAuthenticated,
    login,
    logout,
}

return <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
