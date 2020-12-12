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

// almacenar al usuario en la base de datos si no existe todavía
//userAuth lo agarro luego de hacer el sign in en app.js component
export const createUserProfileDocument = async (userAuth, additionalData) => {
//del userAuth puedo recibir null o el objeto, solo quiero almacenar el objeto
    if (!userAuth) return; //si el usuario es null retorno,  porque nadie esta logeado!!

// ok, el usuario se logeo, primero tengo que ver en firebase si existe este usuario
// si no existe tengo que guardarlo
    //console.log(firestore.doc(`user/jñdfljg4837ñlkjdjfa`))   //un id ficticio para ver que me trae 
    //aca viene propiedades con info de la query:
    const userRef = firestore.doc(`user/${userAuth.uid}`)
    //aca viene la data del usuario buscado
    const snapShot = await userRef.get()//en este objeto esta la propiedad exists, que nos dice si existe en la base de datos

    if (!snapShot.exists) {//aca chequeo si existen datos 
        const {displayName, email} = userAuth //objeto gigante que me trae luego del sign in
        const createdAt = new Date() //aca coloco los datos del momento en que creo el usuario en la base de datos

        try{
            await userRef.set({ // aca utilizo el metodo set para guardar este objeto con todos los datos
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userRef;
    console.log({snapShot})
}

//permite almacenar el usuario en la base deluego de hacer el sing in en la app 
firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//configuracion para autenticacion con google:
const provider =  new firebase.auth.GoogleAuthProvider()
//esto dispara el google pop up cuando el usuario accede a este tipo de autenticacion o sign in
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)//toma el popup de google

export default firebase;