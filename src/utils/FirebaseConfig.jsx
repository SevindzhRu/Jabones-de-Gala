
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


 const firebaseConfig = {
  apiKey: "AIzaSyBysqOjIndiUA2MO5yJrO0uxevUBgCRH78",
  authDomain: "jabones-ecommerce.firebaseapp.com",
  projectId: "jabones-ecommerce",
  storageBucket: "jabones-ecommerce.appspot.com",
  messagingSenderId: "301378759422",
  appId: "1:301378759422:web:04fcaaf1068a182635d3af"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



