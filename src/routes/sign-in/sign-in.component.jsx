import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils" 
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const  logGoogleUser = async() =>{
    const {user} = await signInWithGooglePopup();
    console.log(user)
    const userDocRef = await createUserDocumentFromAuth(user)
}

const SignIn = () =>{
    return (
        <div>
            <h1>SIGN IN COMPONENT</h1>
            <button onClick={logGoogleUser}>Sign in width google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn