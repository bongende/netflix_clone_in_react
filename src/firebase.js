// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXnX1OTRO5omdfB-Vi2mC2a-Cg_ZqK5l8",
  authDomain: "netflix-clone-b38e4.firebaseapp.com",
  projectId: "netflix-clone-b38e4",
  storageBucket: "netflix-clone-b38e4.appspot.com",
  messagingSenderId: "382307225238",
  appId: "1:382307225238:web:cb401b44246e69998a7cb7",
  measurementId: "G-HW0MNYB9CK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// The user sign Up function
const signUp = async (name, email, pwd) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pwd);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// The USer Login Function
const login = async (email, pwd) => {
  try {
    await signInWithEmailAndPassword(auth, email, pwd);
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

//Log Out Function

const logOut = async () => {
  signOut(auth);
};

//const analytics = getAnalytics(app);

export { auth, db, login, signUp as signup, logOut };
