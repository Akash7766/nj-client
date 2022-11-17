import React, { useEffect } from 'react'
import { useState } from 'react'
import firebaseInitialize from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

firebaseInitialize()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user.displayName)
        //     navigate(from, { replace: true })
        //     setError('')
        // })
        // .catch(error => {
        //     setError(error.message)
        // })

    }

    const logUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        //     const newUser = { email, displayName: name }
        //     setUser(newUser)

        //     updateProfile(auth.currentUser, {
        //         displayName: name
        //     })
        //         .then(() => {

        //         })
        //         .catch(error => {

        //         })

        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        //     setError(error)
        // });
    }
    const updateProfileName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
          
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })

    }, [auth])


    const logOut = () => {

        signOut(auth)
            .then(() => {
                console.log('logout')
            })
            .catch((error) => {
                // An error happened.
            })
    }

    return {
        googleSignIn, user, setUser, logOut, logUp, error, setError, logIn, updateProfileName
    }
}

export default useFirebase