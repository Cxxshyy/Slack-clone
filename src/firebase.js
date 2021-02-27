import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASgIRjLk2tnGMWaJTQvar6Sw328aPcUKQ",
  authDomain: "slack-clone-1728e.firebaseapp.com",
  projectId: "slack-clone-1728e",
  storageBucket: "slack-clone-1728e.appspot.com",
  messagingSenderId: "319081702075",
  appId: "1:319081702075:web:abc9865f7fbe6d9509bf9e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider}
export default db;