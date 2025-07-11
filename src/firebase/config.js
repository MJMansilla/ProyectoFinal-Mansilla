
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"


const firebaseConfig = {
  apiKey: "AIzaSyBNKuj22MXgeddnyynEz-0UKLfr8Tn_M1o",
  authDomain: "supermercadomym-db.firebaseapp.com",
  projectId: "supermercadomym-db",
  storageBucket: "supermercadomym-db.firebasestorage.app",
  messagingSenderId: "373351039712",
  appId: "1:373351039712:web:942248b1da56ebb8940685",
  measurementId: "G-9ECRVW8FYX"
};

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)