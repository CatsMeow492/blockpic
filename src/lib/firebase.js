import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import seed file
// eslint-disable-next-line
import { seedDatabase } from '../seed';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,

    authDomain: process.env.FIREBASE_AUTH_DOMAIN,

    projectId: process.env.FIREBASE_PROJECT_ID,

    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.FIREBASE_APP_ID

};

let firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

// eslint-disable-next-line import/no-anonymous-default-export
export { firebase, FieldValue };