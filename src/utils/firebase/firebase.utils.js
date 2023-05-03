import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query, 
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkaey2QvC03I5iUI8HmEYPo6aQHz8lcOc",
  authDomain: "crwn-clothing-db-b80b8.firebaseapp.com",
  projectId: "crwn-clothing-db-b80b8",
  storageBucket: "crwn-clothing-db-b80b8.appspot.com",
  messagingSenderId: "620671990113",
  appId: "1:620671990113:web:e427177ac82b051be1ed20",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirection = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db,collectionKey);
  const batch =  writeBatch(db)

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object)
  })

  await batch.commit()
  console.log("done")
}

export const getCategoriesAndDocuments = async () =>{
  const collectionRef = collection(db, "categories")
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (userAuth, infoExtra) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...infoExtra,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWhithEmailAndPasword = async (email, pasword) => {
  if (!email || !pasword) return;
  return await createUserWithEmailAndPassword(auth, email, pasword);
};

export const signUserWithEmailAndPasword = async (email, password) => {
  if (!email && !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
