bool UltrasonicValue(){
  CalculateDistance();
  if(distance<=35 && distance>=3){
    return true;
  }
  return false;
}