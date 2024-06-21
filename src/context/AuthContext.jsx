import { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence, signOut } from 'firebase/auth';
import { collection, doc, setDoc, getDoc, Timestamp } from 'firebase/firestore'

import { auth, fireStore } from '../config/firebase';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setLoading] = useState(true)

    // Auth changes management
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
                setIsLogged(true)
                setLoading(false)
            } else {
                setCurrentUser(null)
                setIsLogged(false)
            }
            setLoading(false)
        })
        return unsubscribe
    }, [])


    const register = async (username, email, password) => {
        try {
            // Create new user in Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const uid = userCredential.user.uid

            // Add user to Firestore database
            const userRef = collection(fireStore, 'User')
            await setDoc(doc(userRef, uid), {
                uid,
                username,
                email,
                registrationDate: Timestamp.fromDate(new Date()),
                savedCards: {
                    hiragana: [],
                    katakana: [],
                    kanji: []
                },
                quizScores: []
            })

            // Log in user
            await setPersistence(auth, browserSessionPersistence)
            const loginCredential = await signInWithEmailAndPassword(auth, email, password)
            const token = await loginCredential.user.getIdToken()

            // Recover user data
            const loginRef = doc(fireStore, 'User', uid)
            let data = (await getDoc(loginRef)).data()
            data.token = token

            // Update state
            setUserData(data)
            setIsLogged(true)
        }
        catch (error) {
            console.log('Error: could not create new user')
            console.error(error)
        }
    }

    const login = async (email, password) => {
        try {
            // Log in user
            await setPersistence(auth, browserSessionPersistence)
            const loginCredential = await signInWithEmailAndPassword(auth, email, password)
            const token = await loginCredential.user.getIdToken()

            // Recover user data
            const userRef = doc(fireStore, 'User', loginCredential.user.uid)
            let data = (await getDoc(userRef)).data()
            data.token = token

            // Update state
            setUserData(data)
            setIsLogged(true)
        }
        catch (error) {
            console.log('Error: could not log in')
            console.error(error)
        }
    }

    const logout = async () => {
        // update 'My Cards' on fireStore
        setUserData(null)
        setIsLogged(false)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ currentUser, userData, isLogged, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)