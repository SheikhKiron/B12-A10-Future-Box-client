import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const[user,setUser]=useState(null)
  const createUser = (email,password) => {
  return createUserWithEmailAndPassword(auth,email,password)
  }

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const profileupdate = (displayName,photoURL) => {
  return updateProfile(auth.currentUser, {
    displayName,
    photoURL,
  }).then(() => {
    setUser({ ...auth.currentUser });
  });
  }
  const logOut = () => {
    return signOut(auth)
  }

  const login = (email,password) => {
  return signInWithEmailAndPassword(auth,email,password)
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
    logOut,
    login,
    googleLogin
  }
  return (
    <AuthContext value={userInfo}>
      {children}
</AuthContext>
  );
};

export default AuthProvider;