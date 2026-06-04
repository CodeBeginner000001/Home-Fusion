// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD99Zl8a6NWul1Fu-oEAC3IfH3yMkBae7Q",
  authDomain: "iot-smartroom-1abef.firebaseapp.com",
  databaseURL: "https://iot-smartroom-1abef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-smartroom-1abef",
  storageBucket: "iot-smartroom-1abef.firebasestorage.app",
  messagingSenderId: "726639354392",
  appId: "1:726639354392:web:04e69cb1092650bb2e196d",
  measurementId: "G-7PHNFZ8W7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const db = getDatabase();
export default db;