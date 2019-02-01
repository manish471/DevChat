import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCxxU2-MBlmZBhfJzAc5enu2Bej5lUbayo",
  authDomain: "slack-app-a51f8.firebaseapp.com",
  databaseURL: "https://slack-app-a51f8.firebaseio.com",
  projectId: "slack-app-a51f8",
  storageBucket: "slack-app-a51f8.appspot.com",
  messagingSenderId: "592012234075"
};
firebase.initializeApp(config);

export default firebase;
