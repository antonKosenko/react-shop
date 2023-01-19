import { useState } from "react";
import { signInWithGooglePopup, authUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.cpmponent"
import Button from "../button/button.component";

import "./sign-in-form.styles.scss"

const defaultFormFields = {
    email: "",
    password: "",
};



const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await authUserWithEmailAndPassword(email, password);
           // setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            alert("incorrect email/password");
            console.log("login user error", error.message);
        }
    };

    return (
        <div className="sign-up-container">
            <h2> Have a account?</h2>
            <span>Sign In with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    required
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    required
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit" >
                        Sign In
                    </Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle} >
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;