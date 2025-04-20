void WriteInFirebaseBool(String Appliances, String Appliance_No, bool Appliance_State, int Appliance_Pin){
    // Check if the keys exist and get the values; set to default false if they don't exist
  if (Firebase.RTDB.getBool(&fbdo, Appliances + "/"+ Appliance_No)) {
      Appliance_State = fbdo.boolData();
      digitalWrite(Appliance_Pin, Appliance_State? LOW:HIGH);
    } else {
      // Create the key with a default value if it doesn't exist
      Firebase.RTDB.setBool(&fbdo, Appliances + "/"+ Appliance_No, false);
      Appliance_State = false;
    }
}