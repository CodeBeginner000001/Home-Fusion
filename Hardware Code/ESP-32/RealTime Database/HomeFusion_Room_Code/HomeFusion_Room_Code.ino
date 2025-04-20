/*
Example code : 

bool fan1State;
if (Firebase.RTDB.getBool(&fbdo, "Fans/Fan1")) {
  fan1State = fbdo.boolData();
  digitalWrite(FAN1_PIN, fan1State? LOW:HIGH);
  } else {
  Firebase.RTDB.setBool(&fbdo, "Fans/Fan1", false);
  fan1State = false;
 }
 --> The above code check the state and if it exist the store the state and if not
 then create the key with the name and set the default value as false and store the false 
 value in that state
*/

#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h" // Used for token generation
#include "addons/RTDBHelper.h"  // Used for Realtime Database exchange

/* Wi-Fi credentials */
// #define WIFI_SSID "realme X7 Max"      // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "1234567i"      // Replace with your Wi-Fi password
// #define WIFI_SSID "Sneha"        // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "98765432"      // Replace with your Wi-Fi password
// #define WIFI_SSID "Excitel-2.4G"        // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "AA0327927"      // Replace with your Wi-Fi password
// #define WIFI_SSID "HOME 2.4GHz"    // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "12345678"  // Replace with your Wi-Fi password
#define WIFI_SSID "Redmi Note 10 Pro Max"  // Enter wifi name
#define WIFI_PASSWORD "1234567890" // Enter wifi password
// #define WIFI_SSID "Raj's Galaxy S23 FE"  // Enter wifi name
// #define WIFI_PASSWORD "pcmrocks" // Enter wifi password

#define API_Key "AIzaSyD99Zl8a6NWul1Fu-oEAC3IfH3yMkBae7Q"                                            // Add your Project API key
#define Database_URL "https://iot-smartroom-1abef-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add your created Database project URL

// Three Firebase Objects
FirebaseData fbdo;     // when there is a specific data exchange on a specific database node path
FirebaseAuth auth;     // need for authentication
FirebaseConfig config; // need for configuration

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

// Pin Defined that is used
/* For Fans */
int FAN1_PIN = 26;
int FAN2_PIN = 25;
int FAN3_PIN = 14;
/* For Lights */
int LIGHT1_PIN = 13;
int LIGHT2_PIN = 12;
/* For Ac */
int AC1_PIN = 27;
/* For Door Locks */
int PriDOOR1_PIN = 33;
int PubDOOR1_PIN = 32;

// Ultrasonic Pins
int trigPin = 2;
int echoPin = 15;
long duration;
int distance;
bool Public_doorValue = false; // keeping the public door lock value to low

// IR motion sensor pin
int Ir_Pin = 39;
int val=1;

// Email and Password for sign up
// String email = "ashu2100ag@gmail.com";
// String password = "Ashu2017ag@";

void setup() {
// Start Serial for debugging
  Serial.begin(115200);
  // Connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi...");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(200);
  }
  Serial.println("\nConnected with IP: ");
  Serial.println(WiFi.localIP());

  // Firebase Authentication configuration
  config.api_key = API_Key;
  // auth.user.email = email;
  // auth.user.password = password;
  config.database_url = Database_URL;

   // Attempt to sign up the user
    if (Firebase.signUp(&config, &auth, "", "")) // denote anom user
    {
        Serial.println("SignUp OK");
        signupOK = true;
    }
    else
    {
        Serial.printf("%s\n", config.signer.signupError.message.c_str()); // error message
    }
    config.token_status_callback = tokenStatusCallback;
    Firebase.begin(&config, &auth);
    Firebase.reconnectWiFi(true);

    // Initialize pin modes
  pinMode(FAN1_PIN, OUTPUT);
  pinMode(FAN2_PIN, OUTPUT);
  pinMode(FAN3_PIN, OUTPUT);
  pinMode(LIGHT1_PIN, OUTPUT);
  pinMode(LIGHT2_PIN, OUTPUT);
  pinMode(AC1_PIN, OUTPUT);
  // pinMode(AC2_PIN, OUTPUT);
  pinMode(PriDOOR1_PIN, OUTPUT);
  pinMode(PubDOOR1_PIN, OUTPUT);

  // for ultrasonic
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT_PULLUP); // Sets the echoPin as an Input

  // for IR sensor and Led Built in 
  pinMode(Ir_Pin,INPUT); // sets IR pin as input to get the value
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  // Not to check the firebase and run hardware on these sensor
  bool sensorState = true;
  IR_SensorValue();
  Serial.println(val);
  if(val == LOW){
      digitalWrite(FAN1_PIN, LOW);
      digitalWrite(LIGHT1_PIN, LOW);
      sensorState = false;
  }
  if(Public_doorValue == true){
      digitalWrite(PubDOOR1_PIN, LOW);
  }

  if(Firebase.ready() && signupOK && (millis()-sendDataPrevMillis>1000 || sendDataPrevMillis==0)){
    sendDataPrevMillis = millis();
    // Boolean to store the state from Firebase
    bool fan1State, fan2State, fan3State;
    bool Light1State,Light2State;
    bool Ac1State;
    bool Public_Door1State;
    bool Private_Door1State;
    // Default working if not connected to firebase and working of sensor
    Public_doorValue = UltrasonicValue();

    if(sensorState){
       WriteInFirebaseBool("Fans","Fan1", fan1State, FAN1_PIN);
       WriteInFirebaseBool("Lights","Light1", Light1State, LIGHT1_PIN);
    }
   if(!Public_doorValue) {
    WriteInFirebaseBool("Public_Doors","Public_Door1", Public_Door1State, PubDOOR1_PIN);
    }
    /* Calling the function to check check the value or create if doesn't exist and control pins accordingly */
    // Fans
    WriteInFirebaseBool("Fans","Fan2", fan2State, FAN2_PIN);
    WriteInFirebaseBool("Fans","Fan3", fan3State, FAN3_PIN);
    // Lights
    WriteInFirebaseBool("Lights","Light2", Light2State, LIGHT2_PIN);
    // Acs
    WriteInFirebaseBool("ACs","Ac1", Ac1State, AC1_PIN);

    // Private Door Lock
    if (Firebase.RTDB.getBool(&fbdo, "Private_Doors/Private_Door1")) {
      Private_Door1State = fbdo.boolData();
      digitalWrite(PriDOOR1_PIN, Private_Door1State? HIGH:LOW);
    } else {
      // Create the key with a default value if it doesn't exist
      Firebase.RTDB.setBool(&fbdo,"Private_Doors/Private_Door1", false);
      Private_Door1State = false;
    }
  }
}
