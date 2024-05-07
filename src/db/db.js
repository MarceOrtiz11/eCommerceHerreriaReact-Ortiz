import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCY3AN3yMqQl5PYM5klARCKVMSo4naihDY",
    authDomain: "ecommerce-54085-ff237.firebaseapp.com",
    projectId: "ecommerce-54085-ff237",
    storageBucket: "ecommerce-54085-ff237.appspot.com",
    messagingSenderId: "548998544721",
    appId: "1:548998544721:web:7b24eb5d63a7f37acde770"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db