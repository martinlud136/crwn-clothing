import { initializeApp } from "firebase/app"

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkaey2QvC03I5iUI8HmEYPo6aQHz8lcOc",
    authDomain: "crwn-clothing-db-b80b8.firebaseapp.com",
    projectId: "crwn-clothing-db-b80b8",
    storageBucket: "crwn-clothing-db-b80b8.appspot.com",
    messagingSenderId: "620671990113",
    appId: "1:620671990113:web:e427177ac82b051be1ed20"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, "users", userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot);
    console.log(userSnapshot.exists())
}