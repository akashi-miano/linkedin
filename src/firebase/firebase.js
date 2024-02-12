import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBrxhzgufggHA6QJruOBbNLAf6pAgLXm24",
  authDomain: "linkedin-clonme.firebaseapp.com",
  projectId: "linkedin-clonme",
  storageBucket: "linkedin-clonme.appspot.com",
  messagingSenderId: "635543407593",
  appId: "1:635543407593:web:5f9884d81823831c8bd978"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {auth}
export default db;