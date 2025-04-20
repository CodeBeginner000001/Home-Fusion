import { getDatabase, ref, set } from "firebase/database"; // Import Firebase functions
 // Function to update the value in Firebase
 const updateFirebase = async (newState,togglePath) => {
    const db = getDatabase(); // Initialize database
    const stateRef = ref(db, togglePath); // Reference to the location in RTDB
    await set(stateRef, newState); // Set new state in RTDB
  };

export default updateFirebase;