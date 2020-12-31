import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCM7nvbFKElRyhTtAbCWmz5eSHWvG6_ex4',
    authDomain: 'linkedin-profile-358a8.firebaseapp.com',
    projectId: 'linkedin-profile-358a8',
    storageBucket: 'linkedin-profile-358a8.appspot.com',
    messagingSenderId: '674279447289',
    appId: '1:674279447289:web:63424a18728b9ff403e028',
    measurementId: 'G-XZNCK36PGF',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const storage = firebaseApp.storage();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// signin for google Sign In
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = (): any => {
    auth.signInWithPopup(provider);
};
//signout for google Sign Out
export const logOut = () => {
    auth.signOut()
        .then(() => {
            console.log('logged out');
        })
        .catch((error) => {
            console.log(error.message);
        });
};

// email and password login implementation
export const generateUserDocument = async (user: any, additionalData?: any) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;

        try {
            await userRef.set({
                email,
                displayName,
                photoURL,
                ...additionalData,
            });
        } catch (error) {
            console.error('Error creating user document', error);
        }
    } else {
        try {
            await userRef.update({
                ...additionalData,
            });
        } catch (error) {
            console.error('Error updating user document', error);
        }
    }
    return getUserDocument(user.uid);
};
//update user data
export const updateUserData = async (user: any, additionalData?: any) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    try {
        await userRef.update({
            ...additionalData,
        });
    } catch (error) {
        console.error('Error updating user document', error);
    }

    return getUserDocument(user.uid);
};
//update image data
export const updateImageData = async (user: any, additionalData?: any) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    try {
        await userRef.update({
            ...additionalData,
        });
    } catch (error) {
        console.error('Error updating user document', error);
    }

    return getUserDocument(user.uid);
};
const getUserDocument = async (uid: any) => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data(),
        };
    } catch (error) {
        console.error('Error fetching user', error);
    }
};
