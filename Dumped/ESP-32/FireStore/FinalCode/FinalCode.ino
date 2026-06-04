#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif

#include <Firebase_ESP_Client.h>
// Token generation and JSON parsing
#include "addons/TokenHelper.h"
#include <ArduinoJson.h>

// Wi-Fi credentials
// #define WIFI_SSID "realme X7 Max"      // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "1234567i"      // Replace with your Wi-Fi password
#define WIFI_SSID "Excitel-2.4G"        // Replace with your Wi-Fi SSID
#define WIFI_PASSWORD "AA0327927"      // Replace with your Wi-Fi password
// #define WIFI_SSID "HOME 2.4GHz"    // Replace with your Wi-Fi SSID
// #define WIFI_PASSWORD "12345678"  // Replace with your Wi-Fi password
// #define WIFI_SSID "Redmi Note 10 Pro Max"  // Enter wifi name
// #define WIFI_PASSWORD "1234567890" // Enter wifi password
// #define WIFI_SSID "Raj's Galaxy S23 FE"  // Enter wifi name
// #define WIFI_PASSWORD "pcmrocks" // Enter wifi password

// Firebase configuration
#define API_KEY "AIzaSyD99Zl8a6NWul1Fu-oEAC3IfH3yMkBae7Q"  // Your Firebase API key
#define FIREBASE_PROJECT_ID "iot-smartroom-1abef"

// Firebase user credentials
#define USER_EMAIL "ashu2100ag@gmail.com"
#define USER_PASSWORD "Ashu2017ag@"

// Firebase and Wi-Fi objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// Pin definitions
int FAN1_PIN = 26;
int FAN2_PIN = 25;
int FAN3_PIN = 14;
int LIGHT1_PIN = 13;
int LIGHT2_PIN = 12;
int AC1_PIN = 27;
int PriDOOR_PIN = 33;
int PubDOOR_PIN = 32;

// Ultrasonic Pins
int trigPin = 2;
int echoPin = 15;

// defining variables
long duration;
int distance;
bool doorValue = false;

// IR motion sensor pin
int ir_Pin = 39;
// value for pir sensor

void loop() {
  
int val = digitalRead(ir_Pin); // get the pir sensor value;

doorValue = ultrasonicValue();
Serial.print("Door Value: ");
Serial.println(doorValue);

Serial.print("IR: ");
Serial.println(val);
// For Fans
  if(val == LOW)
  { digitalWrite(LED_BUILTIN,HIGH);
    digitalWrite(FAN1_PIN, LOW);
  }else{
    digitalWrite(FAN1_PIN, controlFan("Fan 1") ? LOW : HIGH);
  }
  digitalWrite(FAN2_PIN, controlFan("Fan 2") ? LOW : HIGH);
  digitalWrite(FAN3_PIN, controlFan("Fan 3") ? LOW : HIGH);


// For Lights
  if(val == LOW){
    digitalWrite(LED_BUILTIN,HIGH);
    digitalWrite(LIGHT1_PIN, LOW);
  }else{
    digitalWrite(LIGHT1_PIN, controlLight("Light 1") ? LOW : HIGH);
  }
  
  digitalWrite(LIGHT2_PIN, controlLight("Light 2") ? LOW : HIGH);

// For ACs
  
  digitalWrite(AC1_PIN, controlAC("Ac 1") ? LOW : HIGH);
  // digitalWrite(AC2_PIN, controlAC("Ac 2") ? HIGH : LOW);

// For Public Door Locks
  if(doorValue==true){
    digitalWrite(PubDOOR_PIN,LOW);
  }
  else{
    digitalWrite(PubDOOR_PIN, controlDoor("Public_Door_Locks", "Public Lock 1") ? LOW : HIGH);
  }


// For Private Door Locks
  digitalWrite(PriDOOR_PIN, controlDoor("Private_Door_Locks", "Private Lock 1") ? HIGH : LOW);



  delay(500); // Add delay to avoid exceeding Firebase's write limit
}


