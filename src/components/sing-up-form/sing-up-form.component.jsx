import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.cpmponent"
import Button from "../button/button.component";

import "./sing-up-form.styles.scss"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SingUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("check your passwords");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            console.log("create user error", error.message);
        }
    };

    return (
        <div className="sing-up-container">
            <h2>Don't have a account?</h2>
            <span>Sing Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    required
                    onChange={handleChange}
                    type="text"
                    name="displayName"
                    value={displayName}
                />
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
                <FormInput
                    label="Confirm Password"
                    required
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit" >
                    Sing Up
                </Button>
            </form>
        </div>
    );
};

export default SingUpForm;