import React, { createContext } from 'react';


import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app)
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const user = {displayName:'ni7'};
    const authInfo = {
        user
    }
    return (
        <div>
        <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>        
        </div>
    );
};

export default AuthProvider;