int inputPin = 39;               // choose the input pin (for PIR sensor)
int pirState = LOW;             // we start, assuming no motion detected
int val = 0;                    // variable for reading the pin status
 
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(inputPin, INPUT);     // declare sensor as input
 
  Serial.begin(115200);
}
 
void loop(){
  val = digitalRead(inputPin);  // read input value
  
  if (val == HIGH)	// check if the input is HIGH
  {            
    digitalWrite(LED_BUILTIN, HIGH);  // turn LED ON
  } 
  else 
  {
    digitalWrite(LED_BUILTIN, LOW); // turn LED OFF
  }
}
