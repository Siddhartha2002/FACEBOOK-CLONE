import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvoKnn06qxwczUglwqTevLnS5bLq8ccJc",
  authDomain: "facebook-clone-90573.firebaseapp.com",
  projectId: "facebook-clone-90573",
  storageBucket: "facebook-clone-90573.appspot.com",
  messagingSenderId: "664020581975",
  appId: "1:664020581975:web:862c49e5ac5876ee83ed12",
  measurementId: "G-T9MCDKJ363",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
