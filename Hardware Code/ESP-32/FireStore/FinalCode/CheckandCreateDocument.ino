const int MAX_FIELDS = 10; // Adjust based on the number of expected unique fields
String processedFields[MAX_FIELDS];
int processedCount = 0;

void createDocumentIfNotExists(String collectionName, String FieldName) {
  String path = collectionName;
  bool fieldExists = false;

  // Fetch the document data from Firestore
  if (Firebase.Firestore.getDocument(&fbdo, FIREBASE_PROJECT_ID, "", path.c_str(), "")) {

    // Parse the response payload into a JSON document
    StaticJsonDocument<1024> doc;
    DeserializationError error = deserializeJson(doc, fbdo.payload().c_str());

    // Handle deserialization failure
    if (error) {
      Serial.print("deserializeJson() failed: ");
      Serial.println(error.c_str());
      return;
    }

    // Check if the documents array exists and contains data
    JsonArray documents = doc["documents"];
    if (documents.size() > 0) {
      for (JsonObject document : documents) {
        if (document.containsKey("fields") && document["fields"].containsKey("name")) {
          JsonObject fields = document["fields"];
          String field_value = fields["name"]["stringValue"];

          // Check if the current field is the one we're looking for
          if (field_value == FieldName) {
            fieldExists = true;
            break;
          }
        }
      }
    }

    // If field exists, print and exit the function
    if (fieldExists) {
      // Serial.print("Document exists for: ");
      // Serial.println(FieldName);
    } else {
      // Avoid duplicate creation
      bool alreadyProcessed = false;
      for (int i = 0; i < processedCount; i++) {
        if (processedFields[i] == FieldName) {
          alreadyProcessed = true;
          break;
        }
      }
      if (!alreadyProcessed && processedCount < MAX_FIELDS) {
        if (createdocument(collectionName, FieldName)) { // Check if creation was successful
          processedFields[processedCount++] = FieldName; // Only add if creation was successful
        }
      }
    }
  } else {
    Serial.println("Failed to fetch the document.");
  }
}
