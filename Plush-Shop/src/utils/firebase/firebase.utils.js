import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqNT2JoYsGEWYpAQtyB2uofFMLdVsj0pY",
  authDomain: "plush-shop.firebaseapp.com",
  projectId: "plush-shop",
  storageBucket: "plush-shop.appspot.com",
  messagingSenderId: "1721815988",
  appId: "1:1721815988:web:423cea1c6f2b1ddfe418e1",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
