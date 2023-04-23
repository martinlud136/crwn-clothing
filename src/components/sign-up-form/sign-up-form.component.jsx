import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createAuthUserWhithEmailAndPasword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  pasword: "",
  confirmPasword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, pasword, confirmPasword } = formFields;

  const resetFromfields = () => {
    setFormFields(defaultFormFields);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pasword !== confirmPasword) {
      alert("los paswords no son iguales");
    } else {
      try {
        const { user } = await createAuthUserWhithEmailAndPasword(
          email,
          pasword,
          displayName
        );
        await createUserDocumentFromAuth(user, { displayName });
        resetFromfields();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("el usuario ya ha sido registrado");
        } else {
          console.log("error al logear el usuario", error.message);
        }
      }
    }
    //confirmar que las pasword coinciden
    //ver si hemos autenticado al usuario con email y pasword
    //crear un user document con lo que retorna el paso anterior
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and pasword</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Pasword"
          type="password"
          onChange={handleChange}
          name="pasword"
          value={pasword}
          required
        />
        <FormInput
          label="Confirm Pasword"
          type="password"
          onChange={handleChange}
          name="confirmPasword"
          value={confirmPasword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
