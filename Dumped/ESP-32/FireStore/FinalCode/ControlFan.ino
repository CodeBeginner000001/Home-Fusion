bool controlFan(String fanName) {
  createDocumentIfNotExists("Fans", fanName);
  return getDocumentInfoAndToggle("Fans", fanName);
}