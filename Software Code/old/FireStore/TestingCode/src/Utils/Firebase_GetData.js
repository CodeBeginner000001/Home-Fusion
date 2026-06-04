import { collection, onSnapshot } from "firebase/firestore";
import db from "../Firebase.js";

export default function collectionData(collectionName, setCollectionData) {
  // Set up a Firestore snapshot listener
  const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setCollectionData(data); // Pass the data to the callback function
  });

  // Return the unsubscribe function to be called when needed
  return unsubscribe;
}
