import firebase, { initializeApp, getApps } from "firebase/app"
import "firebase/database"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAT6E-YvdVheA9W6heKE2LJj2uDVyjZjpw",
  authDomain: "pd-utfpr.firebaseapp.com",
  databaseURL: "https://pd-utfpr-default-rtdb.firebaseio.com",
  projectId: "pd-utfpr",
  storageBucket: "pd-utfpr.appspot.com",
  messagingSenderId: "56389049733",
  appId: "1:56389049733:web:189e680b2f05062485b8ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default db;