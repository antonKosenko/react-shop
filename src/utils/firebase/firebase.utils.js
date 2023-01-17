import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log('error create user', error.mesage);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};


export const authUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};