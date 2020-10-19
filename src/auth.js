import React, {useState, useEffect} from 'react'
import firebase from './firebase'

export const AuthContext = React.createContext()
///////////////////////////////////////////////////////////////////////////////
const useGetUser = () => {
    const [user, setUser] = useState(null)
    useEffect(()=> {
        firebase.auth().onAuthStateChanged(currentUser => {
            if(currentUser){   
                setUser(currentUser)             
            }else{
                setUser(null)
            }
        })
    }, [])
    return user
}
///////////////////////////////////////////////////////////////////////////////
const useSignInUser = () => {
    const [state, setState] = useState({
        error: '',
        success: ''
    })
    const signInUser = (email, password) => { 
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            setState({
                ...state,
                error: err.message
            })
        })
    }
    return [state, signInUser]
}
///////////////////////////////////////////////////////////////////////////////
const useCreateUser = () => {
    const [state, setState] = useState({
        error: '',
        success: ''
    })
    const createUser = (email, password) => { 
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            if(user){
                setState({
                    ...state,
                    success: 'Ok'
                })
            }
        })
        .catch(err => {
            setState({
                ...state,
                error: err.message
            })
        })
    }
    return [state, createUser]
}

//////////////////////////////////////////////////////////////////////////////
const signout = () => {
    firebase.auth().signOut().then(()=>{
    })
}

/////////////////////////////////////////////////////////////////////////////
export const AuthProvider = ({children}) => {
    const user = useGetUser()
    const [createUseState, createUser] = useCreateUser()
    const [signInUserState, signInUser] = useSignInUser()
    return(
        <AuthContext.Provider value={{
            user, 
            createUser:{createUseState, createUser},
            signInUser: {signInUser, signInUserState},
            signout }}>
                
            {children}
        </AuthContext.Provider>
    )
}