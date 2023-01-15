import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirectm,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBEdCT-kTVadozTnkKck9Enno_6JXKPpnA",
    authDomain: "study-react-db.firebaseapp.com",
    projectId: "study-react-db",
    storageBucket: "study-react-db.appspot.com",
    messagingSenderId: "428422841231",
    appId: "1:428422841231:web:c9fbb0e0a3cbc2d2dd41fa"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error create user', error.mesage);
        }
    }

    return userDocRef;
};