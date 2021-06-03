import React, { useState, useEffect, useContext, createContext } from "react";
import {
  auth,
  googleAuthProvider,
  db,
  firebaseConfig,
} from "@/helpers/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseAppProvider } from "reactfire";

export const UserContext = createContext();

export function ProvideAuth({ children }) {
  const authData = useProvideAuth();
  return (
    <UserContext.Provider value={authData}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        {!authData.loading && children}
      </FirebaseAppProvider>
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
      const ref = db.collection("users").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log(doc.data()?.email);
        setUsername(doc.data()?.email);
        setloading(false);
      });
    } else {
      setUsername(null);
      setloading(false);
    }

    return unsubscribe;
  }, [user]);

  const signInWithGoogle = async () => {
    const credential = await auth.signInWithPopup(googleAuthProvider);
    const { uid, email } = credential.user;
    return db.collection("users").doc(uid).set({ email }, { merge: true });
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
  const sendPasswordResetEmail = ({ email }) => {
    return auth().sendPasswordResetEmail(email);
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
