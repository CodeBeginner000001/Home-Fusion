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

  // Configure Firebase
  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
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
  pinMode(PriDOOR_PIN, OUTPUT);
  pinMode(PubDOOR_PIN, OUTPUT);

  // for ultrasonic
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT_PULLUP); // Sets the echoPin as an Input

  // for motion sensor
  pinMode(ir_Pin,INPUT); // sets pir pin as input to get the value
  pinMode(LED_BUILTIN, OUTPUT);
  
}