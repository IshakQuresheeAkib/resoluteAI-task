import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/Firebase";

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    
    const [user,setUser] = useState(null)

    const createUser =(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut =() => {
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        user,
        logIn,
        logOut,

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
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