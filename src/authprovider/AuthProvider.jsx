// src/authprovider/AuthProvider.jsx
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../src/Firebase.config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);
  const [pass, setPassError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://restaurant-server-rouge.vercel.app/token", user, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
            setLoading(false);
          })
          .catch((err) => console.error("Token error:", err));
      } else {
        axios
          .post(
            "https://restaurant-server-rouge.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.error("Logout error:", err))
          .finally(() => setLoading(false));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileData = (updatedData) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, updatedData)
        .then(() => {
          // After updating profile, Firebase automatically updates currentUser
          setUser({ ...auth.currentUser, ...updatedData });
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
          throw error;
        });
    } else {
      return Promise.reject(new Error("No user is currently logged in."));
    }
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    setPassError,
    updateProfileData,
    loginUser,
    loginWithGoogle,
    pass,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
