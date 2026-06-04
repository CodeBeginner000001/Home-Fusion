import { doc, updateDoc } from "firebase/firestore";
import db from "../Firebase";
export default function updateValue(currentState,CollectionName,docId,setCurrentState){
    const newValue = !currentState;
    setCurrentState(newValue);

    // Reference to the document in Firestore
    const docRef = doc(db, CollectionName, docId);

    // Update the document
    try {
      updateDoc(docRef, { value: newValue });
      console.log(`Document ${docId} updated successfully`);
    } catch (err) {
      console.error("Error updating document: ", err);
    }
}