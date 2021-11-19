import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZ7MX6CulOkdOY5qlZ7vEAS-6A8D2dHM0",
  authDomain: "fir-crud-d8953.firebaseapp.com",
  projectId: "fir-crud-d8953",
  storageBucket: "fir-crud-d8953.appspot.com",
  messagingSenderId: "244520222562",
  appId: "1:244520222562:web:c3d3f881d80f66ca0fb63b",
  measurementId: "G-E0SCR771NN",
};
// firebase.analytics(); // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
