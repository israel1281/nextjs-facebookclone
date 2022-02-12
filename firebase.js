import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBR0vt6UtIi4wVgGLkMaMucDI6gJMhm39o",
  authDomain: "facebook-clone-f9e79.firebaseapp.com",
  projectId: "facebook-clone-f9e79",
  storageBucket: "facebook-clone-f9e79.appspot.com",
  messagingSenderId: "1051674625852",
  appId: "1:1051674625852:web:69c43491c4424fb7de0039"
  };

const app = !firebase.apps.length ? firebase,initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
