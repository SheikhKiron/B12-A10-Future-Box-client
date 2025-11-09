import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
  const[user,setUser]=useState(null)
  const createUser = (email,password) => {
  return createUserWithEmailAndPassword(auth,email,password)
  }

  const profileupdate = (displayName,photoURL) => {
  return  updateProfile(auth.currentUser, {
      displayName,photoURL
    })
  }
  const logOut = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser => {
      setUser(currentUser)
    }))
    return ()=>unsubscribe()
  },[])
  const userInfo = {
    createUser,
    user,
    profileupdate,
    logOut
  }
  return (
    <AuthContext value={userInfo}>
      {children}
</AuthContext>
  );
};

export default AuthProvider;