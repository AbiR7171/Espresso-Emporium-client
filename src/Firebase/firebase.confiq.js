// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlkoxpKgvBtD9NPJmm2M-KruoAX2xoyHc",
  authDomain: "espresso-emporium-2a371.firebaseapp.com",
  projectId: "espresso-emporium-2a371",
  storageBucket: "espresso-emporium-2a371.appspot.com",
  messagingSenderId: "1016933892591",
  appId: "1:1016933892591:web:97ad879d6229875017b61a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;