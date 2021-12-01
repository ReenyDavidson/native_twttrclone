// Import the functions you need from the SDKs you need
import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLVpkxBY7RtVqsGfMKvheHRVc9cAp5ISw",
  authDomain: "brox-4308e.firebaseapp.com",
  projectId: "brox-4308e",
  storageBucket: "brox-4308e.appspot.com",
  messagingSenderId: "1017948071290",
  appId: "1:1017948071290:web:3ef9a8a552b9f754e022c3",
  measurementId: "G-VBMMB9BH4N",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const handleSignUp = async (email, password) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log(firebase.auth().currentUser);
      const user = firebase.auth().currentUser;
      firebase.firestore().collection("users").add({
        uid: user.uid,
        email: user.email,
        authProvider: "local",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export const handleSignIn = async (email, password) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log(firebase.auth().currentUser);
    })
    .catch((error) => {
      console.error(error);
    });
};
