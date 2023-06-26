import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNC9qjC6T_UG9Le29en8vppaogz4GYIRI",
  authDomain: "netflix-clone-5e727.firebaseapp.com",
  projectId: "netflix-clone-5e727",
  storageBucket: "netflix-clone-5e727.appspot.com",
  messagingSenderId: "925125463276",
  appId: "1:925125463276:web:4eeda38cd43efe650b69c9",
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { auth };
export default db;
