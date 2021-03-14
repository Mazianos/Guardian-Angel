import React, { useEffect, useState } from "react";
import app from "./firebase";

//Allows us to propogate this data across the entire tree of components
export const AuthContext = React.createContext();

//Holds the user and updates any time the authentication status changes
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
        value = {{
            currentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
