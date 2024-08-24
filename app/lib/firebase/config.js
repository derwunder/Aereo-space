// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtQ3XMIw1_Jv2apghtnDRPwMC5QCXs2Ns",
    authDomain: "gspace-83e05.firebaseapp.com",
    databaseURL: "https://gspace-83e05.firebaseio.com",
    projectId: "gspace-83e05",
    storageBucket: "gspace-83e05.appspot.com",
    messagingSenderId: "463896074228",
    appId: "1:463896074228:web:ef829791103e2da470cba1"
};

// Initialize Firebase
const fb_app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const fb_auth = getAuth(fb_app);


export  {fb_app, fb_auth};