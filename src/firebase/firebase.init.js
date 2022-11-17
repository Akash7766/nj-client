import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// Initialize Firebase

const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitialize