import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB141fcbzA14FCBmqcsjr-u3D_ZloKX9hE",
  authDomain: "clone-111f0.firebaseapp.com",
  projectId: "clone-111f0",
  storageBucket: "clone-111f0.appspot.com",
  messagingSenderId: "474248268054",
  appId: "1:474248268054:web:b5a1c49234670a87026837"
};

const app = !firebase.apps.length ?
  firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()

export default db;