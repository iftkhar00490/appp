import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getApp } from "firebase/app";

export const loginRequest = (email, password) => {
  const auth = getAuth(getApp());
  return signInWithEmailAndPassword(auth, email, password);
};
