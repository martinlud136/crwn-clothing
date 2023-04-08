import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils" 

const  logGoogleUser = async() =>{
    const {user} = await signInWithGooglePopup();
    console.log(user)
    createUserDocumentFromAuth(user)
}

const SignIn = () =>{
    return (
        <div>
            <h1>SIGN IN COMPONENT</h1>
            <button onClick={logGoogleUser}>Sign in width google Popup</button>
        </div>
    )
}

export default SignIn