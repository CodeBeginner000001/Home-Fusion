bool ultrasonicValue(){
  CalculateDistance();
  // Serial.print(distance);
  if(distance<=20 && distance>=3){
    return true;
  }
  return false;
}