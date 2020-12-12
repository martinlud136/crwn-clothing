import React from "react"

import SignIn from "../../component/sign-in/sign-in.component"
import SignUp from  "../../component/sign-up/sign-up.component.js"

import "./sign-in-and-sign-up.scss"

const SignInAndSignUpPage = ()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>

    )
}

export default SignInAndSignUpPage