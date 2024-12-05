// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd90YYqTHF3DmoODl_DbHQ_Y4jKdCVCtM",
  authDomain: "placement-portal-minor-project.firebaseapp.com",
  projectId: "placement-portal-minor-project",
  storageBucket: "placement-portal-minor-project.firebasestorage.app",
  messagingSenderId: "260210553689",
  appId: "1:260210553689:web:b633ca73118e93f5531248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export default app;