import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, googleAuthProvider, firestore } from "@/helpers/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const UserContext = createContext();

export function ProvideAuth({ children }) {
  const authData = useProvideAuth();
  return (
    <UserContext.Provider value={authData}>
      {!authData.loading && children}
    </UserContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(UserContext);
};

function useProvideAuth() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

      if (user) {
         unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                etloading(false);
            } else {
             setUsername(null);
             setloading(false);
            }
          });
      const ref = firestore.collection("users").doc(user.uid);
      

    return unsubscribe;
  }, [user]);

  const signInWithGoogle = async () => {
    return await auth.signInWithPopup(googleAuthProvider);
  };

  const signOut = async () => {
    return await auth.signOut();
  };

  const login = ({ email, password }) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const signup = ({ email, password }) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const sendPasswordResetEmail = (email) => {
    return;
    auth().sendPasswordResetEmail(email);
  };
  return {
    signInWithGoogle,
    signOut,
    login,
    signup,
    sendPasswordResetEmail,
    user,
    username,
    loading,
  };
}
