bool createdocument(String collectionName, String FieldName) {
  String docId = generateCustomId();
  String documentPath = collectionName + "/" + docId;

  FirebaseJson content;
  // Serial.print("Document doesn't exist for: ");
  // Serial.println(FieldName);

  // Uncomment to enable actual Firestore creation:
  content.set("fields/name/stringValue", FieldName);
  content.set("fields/value/booleanValue", "false");
  if (Firebase.Firestore.patchDocument(&fbdo, FIREBASE_PROJECT_ID, "", documentPath.c_str(), content.raw(), "")) {
    // Serial.print("Document created for: ");
    // Serial.println(FieldName);
    return true; // Indicate success
  } else {
    Serial.println(fbdo.errorReason());
    return false; // Indicate failure
  }
  return false; // Temporary, until Firestore creation is uncommented
}