bool controlAC(String AcName) {
  createDocumentIfNotExists("ACs", AcName);
  return getDocumentInfoAndToggle("ACs", AcName);

}