import React, { useEffect, useState } from "react";
import app from "./firebase.js";

<<<<<<< HEAD
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
=======
//Allows us to propogate this data across the entire tree of components
export const AuthContext = React.createContext();

//Holds the user and updates any time the authentication status changes
export const AuthProvider = ({ childre }) => {
>>>>>>> 1fbdf143d516ecd0a04d0b21f31242acfd4d2b37
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
<<<<<<< HEAD
        value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};
=======
        value = {{
            currentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
>>>>>>> 1fbdf143d516ecd0a04d0b21f31242acfd4d2b37
