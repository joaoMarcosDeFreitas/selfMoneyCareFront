"use client";

import { createContext, useState } from "react";
import { redirect } from "next/navigation";

export const AuthContext = createContext({
    isAuthenticated: false, 
    login: () => {}, 
    logout: () => {}
});

export function AuthProvider ({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    function login() {
        setIsAuthenticated(true);
        redirect("/dashboard")
    }

    function logout() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
