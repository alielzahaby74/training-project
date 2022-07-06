import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKAuB8pRPNXkGyk_DP39vOB-xUr_TudO8",
  authDomain: "suresai.firebaseapp.com",
  projectId: "suresai",
  storageBucket: "suresai.appspot.com",
  messagingSenderId: "841579976227",
  appId: "1:841579976227:web:7c5428ac130a9ab1724396",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
