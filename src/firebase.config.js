import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVyHjXjw3N1z6y0k7rftxhd3C0y1I124M",
  authDomain: "house-marketplace-app-45392.firebaseapp.com",
  projectId: "house-marketplace-app-45392",
  storageBucket: "house-marketplace-app-45392.appspot.com",
  messagingSenderId: "273783862255",
  appId: "1:273783862255:web:d8bd44b5f4b8bc0c3bbc1a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()
