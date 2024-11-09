import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
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
    apiKey: "AIzaSyACmvWcAjMfDmxqijlL-sFSdsnDSkLGRWU",
    authDomain: "crwn-clothing-db-7705c.firebaseapp.com",
    projectId: "crwn-clothing-db-7705c",
    storageBucket: "crwn-clothing-db-7705c.firebasestorage.app",
    messagingSenderId: "616692449225",
    appId: "1:616692449225:web:3e7882896cea01c80f7218"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export async function createUserDocumentFromAuth(userAuth) {
    const userDocRef = doc(db, 'users', userAuth.uid);

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
        }
        catch (error) {
            console.log('error creating the user', error.message);

        }
    }

    return userDocRef;
} 