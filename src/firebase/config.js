import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs0zAiusWZVoJ82fd_ABNaiFv3_ZsyhfQ",
  authDomain: "controle-viagens-b9f5f.firebaseapp.com",
  projectId: "controle-viagens-b9f5f",
  storageBucket: "controle-viagens-b9f5f.appspot.com",
  messagingSenderId: "37766963487",
  appId: "1:37766963487:web:1fc360f10d84071bb8102a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };
export default app;