import {
    signInWithGooglePopup,
    singInWithGoogleRedirect,
    createUserDocumentAuth
} from "../../../utils/firebase/firebase.utils";

import SingUpForm from "../../sing-up-form/sing-up-form.component";

const SingIn = () => {


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentAuth(user);
    };

    return (
        <div>
            <h1>Sing In</h1>
            <button onClick={logGoogleUser}>
                googlePopUp
            </button>
            <SingUpForm />
        </div>
    );
};

export default SingIn;