import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

//configuracion que viene de la pagina
const config = {
    apiKey: "AIzaSyC3EQi5TjxoTv_dwUVEzTp3JCwGF6r3jiM",
    authDomain: "crwn-db-5d064.firebaseapp.com",
    projectId: "crwn-db-5d064",
    storageBucket: "crwn-db-5d064.appspot.com",
    messagingSenderId: "140476222732",
    appId: "1:140476222732:web:726f4e92a48bfbcf6a8d29",
    measurementId: "G-P89HJ1CH6Y"
  }

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//configuracion para autenticacion con google:
const provider =  new firebase.auth.GoogleAuthProvider()
//esto dispara el google pop up cuando el usuario accede a este tipo de autenticacion o sign in
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)//toma el popup de google

export default firebase;