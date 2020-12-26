import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const logOut = () => {
    auth.signOut()
        .then(() => {
            console.log('logged out');
        })
        .catch((error) => {
            console.log(error.message);
        });
};

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = (): any => {
    auth.signInWithPopup(provider);
};
