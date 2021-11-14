import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [isLoading,setIsLoading] = useState(true)


    const auth = getAuth()


    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)
            })
            .finally(()=>setIsLoading(false))
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(()=>setIsLoading(false))
    }

    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut
    } 
}

export default useFirebase