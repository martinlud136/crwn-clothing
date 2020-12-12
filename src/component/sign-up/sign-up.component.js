import React from "react"

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmint = async event =>{
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword){
            alert("pasword don't match")
            return;
        }
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }catch(error){
            console.error(error)
        }
    }

    handleChange = (event) =>{
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className="sign-up">
                <h2 className= "title">I dont have a account</h2>
                <span>Sign up with your email and password</span>
                <form className= "sign-up-form" onSubmit={this.handleSubmint}>
                <FormInput
                    type= "text"
                    name= "displayName"
                    value= {displayName}                
                    label= "Display Name"
                    onChange= {this.handleChange}
                />
                <FormInput
                    type= "text"
                    name= "email"
                    value= {email}                
                    label= "Email"
                    onChange= {this.handleChange}
                />
                <FormInput
                    type= "password"
                    name= "password"
                    value= {password}                
                    label= "Password"
                    onChange= {this.handleChange}
                />
                <FormInput
                    type= "password"
                    name= "confirmPassword"
                    value= {confirmPassword}                
                    label= "Confirm Password"
                    onChange= {this.handleChange}
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp