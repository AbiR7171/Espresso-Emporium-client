import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../Firebase/firebase.confiq';
import axios from 'axios';



  export const AuthContext = createContext()

const AuthProvidor = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const auth = getAuth(app)

   
    const HandleCreateUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleProfile=(user, name, photo)=>{
         updateProfile(user,{
                       displayName:name, photoURL:photo
        })
        .then(()=>{
            
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const handlesignOut = ()=>{
        setLoading(true)
        return signOut(auth)
        .then(()=>{

        })
        .catch((error)=>{
            console.log(error.message);
        })
    }


    useEffect(()=>{

     const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser) 
         if(currentUser){
              axios.post('http://localhost:5000/jwt')
              .then(res =>{ 
                      
                    console.log(res.data.token);
                    localStorage.setItem('coffee-access-token', res.data.token)
                    setLoading(false)
              })
         }
         else{
             localStorage.removeItem('coffee-access-token')
         }
      })

      return ()=> unsubscribe()

    },[])




    const authInfo = {
        HandleCreateUser,
        signIn,
        handleProfile,
        user,
        handlesignOut,
        loading



    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;