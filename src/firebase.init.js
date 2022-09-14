// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAREL8VflDtExHRkhveZaMHvOINiZLpOEg",
  authDomain: "dashboard-design-e5dd8.firebaseapp.com",
  projectId: "dashboard-design-e5dd8",
  storageBucket: "dashboard-design-e5dd8.appspot.com",
  messagingSenderId: "567364821894",
  appId: "1:567364821894:web:225545c94ea4085a178207",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
