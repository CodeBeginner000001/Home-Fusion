bool getDocumentInfoAndToggle(String collectionName, String FieldName) {
  String path = collectionName;

  // Fetch the document data from Firestore
  if (Firebase.Firestore.getDocument(&fbdo, FIREBASE_PROJECT_ID, "", path.c_str(), "")) {
    // Parse the response payload into a JSON document
    StaticJsonDocument<1024> doc;
    DeserializationError error = deserializeJson(doc, fbdo.payload().c_str());

    // Handle deserialization failure
    if (error) {
      Serial.print("deserializeJson() failed: ");
      Serial.println(error.c_str());
      return false;
    }

    // Check if the documents array exists and contains data
    JsonArray documents = doc["documents"];
    if (documents.size() > 0) {
      for (JsonObject document : documents) {
        if (document.containsKey("fields") && document["fields"].containsKey("name")) {
          JsonObject fields = document["fields"];
          String field_name = fields["name"]["stringValue"];
          bool field_value = fields["value"]["booleanValue"]; // Reading as boolean

          // Return the field value if the field name matches
          if (field_name == FieldName) {
            // Serial.print(field_name);
            // Serial.print(" : ");
            // Serial.println(field_value);
            return field_value;
          }
        }
      }
    } else {
      Serial.println("No documents found in the collection.");
    }
  } else {
    Serial.println("Failed to fetch the document.");
  }

  return false; // Return false if document not found
}