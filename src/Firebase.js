import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFP3BCWusUlArxRDp5wMqe7_Mj5j38IuU",
  authDomain: "linkedin-clone-ce3c0.firebaseapp.com",
  projectId: "linkedin-clone-ce3c0",
  storageBucket: "linkedin-clone-ce3c0.appspot.com",
  messagingSenderId: "350088530537",
  appId: "1:350088530537:web:dc854f8554844b6c07f0f8",
  measurementId: "G-NHXT7SX9FE"
};

 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);