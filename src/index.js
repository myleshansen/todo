import Dom from "./modules/dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailLink, connectAuthEmulator } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCAc1YYbpMhC8EqKdlVA3j4ECjdHnM53Gs",
  authDomain: "todo-3d232.firebaseapp.com",
  projectId: "todo-3d232",
  storageBucket: "todo-3d232.appspot.com",
  messagingSenderId: "545578402638",
  appId: "1:545578402638:web:245dba42acce9e3c42d41f",
  measurementId: "G-Y5BCL2ZSCD",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

connectAuthEmulator(auth, "http://localhost:9099");

const loginEmail = async (email) => {
  try {
    await signInWithEmailLink(auth, email, window.location.href);
    window.localStorage.removeItem("emailForSignIn");
    window.location.href = "http://localhost:8080";
  } catch (error) {
    console.log(error);
  }
}

/*btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  loginEmail(email);
});
*/

//await signInWithEmailLink(auth, email, window.location.href);

/* Detect auth state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in!");
    window.addEventListener("load", Dom.loadPage);
  } else {
    console.log("No user");
  }
});
*/
