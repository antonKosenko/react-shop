import { signInWithGooglePopup, createUserDocumentAuth } from "../../../utils/firebase/firebase.utils";

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
        </div>
    );
};

export default SingIn;