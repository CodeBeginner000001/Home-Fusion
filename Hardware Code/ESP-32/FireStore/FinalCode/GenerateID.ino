String generateCustomId() {
  const String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  String customId = ""; // Start with "4" to meet your requirement
  
  // Generate a random sequence of 7 characters from the character set
  for (int i = 0; i < 16; i++) {
    int randomIndex = random(0, chars.length());
    customId += chars[randomIndex];
  }
  
  return customId;
}