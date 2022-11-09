

import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
      apiKey: "AIzaSyB1mM5eOMgH73j41FO1BuCfIQ0XM_r8W6s",
      authDomain: "pracs-67de9.firebaseapp.com",
      projectId: "pracs-67de9",
      storageBucket: "pracs-67de9.appspot.com",
      messagingSenderId: "842952905282",
      appId: "1:842952905282:web:b955cfdccbc89974cbd3db"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
      db
}



