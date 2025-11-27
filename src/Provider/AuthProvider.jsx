import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () =>{
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }

    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOutUser,
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;