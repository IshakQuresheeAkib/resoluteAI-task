import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/Firebase";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser =(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut =() => {
        setLoading(true)
        return signOut(auth);
    }


    const authInfo = {
        createUser,
        user,
        logIn,
        logOut,
        loading
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{                      
            setUser(currentUser)
            setLoading(false)
        });       
        return ()=>unSubscribe();
    },[user?.email])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}
export default Authprovider;