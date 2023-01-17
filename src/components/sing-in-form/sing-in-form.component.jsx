import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentAuth, authUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.cpmponent"
import Button from "../button/button.component";

import "./sing-in-form.styles.scss"

const defaultFormFields = {
    email: "",
    password: "",
};



const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const singInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
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
            const response = await authUserWithEmailAndPassword(email, password)
            resetFormFields();
        } catch (error) {
            alert("incorrect email/password");
            console.log("login user error", error.message);
        }
    };

    return (
        <div className="sing-up-container">
            <h2> Have a account?</h2>
            <span>Sing In with email and password</span>
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
                        Sing In
                    </Button>
                    <Button type="button" buttonType="google" onClick={singInWithGoogle} >
                        Google Sing In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SingInForm;