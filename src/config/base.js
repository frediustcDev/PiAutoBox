import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCI_PVWUHIwIhZQlryIgEE7XxwhIhmuBVE",
  authDomain: "pi-autobox.firebaseapp.com",
  databaseURL: "https://pi-autobox.firebaseio.com",
  projectId: "pi-autobox",
  storageBucket: "pi-autobox.appspot.com",
  messagingSenderId: "496501809190"
};
const app = firebase.initializeApp(config);

const db = Rebase.createClass(app.database());

export { db };
