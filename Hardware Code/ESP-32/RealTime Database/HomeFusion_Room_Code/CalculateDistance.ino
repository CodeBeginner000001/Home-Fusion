void CalculateDistance(){
  // Clears the trig Pin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // Sets the TrigPin on HIGH State for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance= duration*0.034/2;
}