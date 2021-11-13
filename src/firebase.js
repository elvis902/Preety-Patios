import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8KL7XLOXTX1xCGm5WC7crsNDrm2QZ-_k",
    authDomain: "preety-patios.firebaseapp.com",
    projectId: "preety-patios",
    databaseURL: "https://preety-patios-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "preety-patios.appspot.com",
    messagingSenderId: "200334730451",
    appId: "1:200334730451:web:130248574644297082a026",
    measurementId: "G-VG2333V6X3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {auth, database};