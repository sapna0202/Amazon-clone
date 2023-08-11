import { initializeApp } from 'firebase/app';
// import {getDatabase} from 'firebase/database'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBQmoaVSVjRqbO6MIftfpnOUeCM8kk2pKc",
    authDomain: "clone-1d1b1.firebaseapp.com",
    projectId: "clone-1d1b1",
    storageBucket: "clone-1d1b1.appspot.com",
    messagingSenderId: "314468490206",
    appId: "1:314468490206:web:4602f463229ce402fadb4f",
    measurementId: "G-VTJH3FQHEV"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// export default firebase;
export { db, auth };
