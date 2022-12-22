import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByQwBfDHFlI-7qEvaPpLN3-ZMHfvd1olE",
  authDomain: "linkedin-clone-32c58.firebaseapp.com",
  projectId: "linkedin-clone-32c58",
  storageBucket: "linkedin-clone-32c58.appspot.com",
  messagingSenderId: "374713542740",
  appId: "1:374713542740:web:bcf23c10c0256f57e8a5c1",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage();

// // Create a storage reference from our storage service
// const storageRef = ref(storage);

export { auth, provider, storage };
export default db;
