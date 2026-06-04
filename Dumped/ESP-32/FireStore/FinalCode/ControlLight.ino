bool controlLight(String lightName) {
  createDocumentIfNotExists("Lights", lightName);
  return getDocumentInfoAndToggle("Lights", lightName);

}