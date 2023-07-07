
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNSFr7GssZY_nrWv_Wuc3iUDouVSpvSuY",
    authDomain: "cryptos-5ffaf.firebaseapp.com",
    projectId: "cryptos-5ffaf",
    storageBucket: "cryptos-5ffaf.appspot.com",
    messagingSenderId: "203885422341",
    appId: "1:203885422341:web:accae1f0a43df7eae1396c",
    measurementId: "G-24WY8SQ5LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);