bool controlDoor(String doorType, String doorName) {
  createDocumentIfNotExists(doorType, doorName);
  return getDocumentInfoAndToggle(doorType, doorName);

}