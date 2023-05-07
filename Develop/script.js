// Assignment Code
// Grabs button
var generateBtn = document.querySelector("#generate");

// Grabs random uppercase
function randomUppercase() {
  var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercaseList[Math.floor(Math.random() * uppercaseList.length)];
}

// Grabs random lowercase
function randomLowercase() {
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  return lowercaseList[Math.floor(Math.random() * lowercaseList.length)];
}

// Grabs random number
function randomNumber() {
  var numberList = "1234567890";
  return numberList[Math.floor(Math.random() * numberList.length)];
}

// Grabs random symbol
function randomSymbol() {
  var symbolsList = "!@#$%^&*/-_=+";
  return symbolsList[Math.floor(Math.random() * symbolsList.length)]; 
}

// Password generation function
function generatePassword() {
  // Pass length option
  var passwordLength = window.prompt("Please enter desired password character length (integers only).");

  // Reject any length other than a number
  if (!isNaN(passwordLength)) () => {
  }; else return window.alert("Please try again.");
  
  // Uppercase option
  var uppercaseOption = window.confirm("Please press OK if uppercase letters are to be included in your password.");

  // Lowercase option
  var lowercaseOption = window.confirm("Please press OK if lowercase letters are to be included in your password.");
  
  // Numbers option
  var numbersOption = window.confirm("Please press OK if numbers are to be included in your password.");
  
  // Symbols option
  var symbolsOption = window.confirm("Please press OK if symbols are to be included in your password.");

  // Create password based on options selected
  let randomPass = "";
  for (var i = 0; i <= passwordLength; i++) {
    if (uppercaseOption == true) {
      randomPass += randomUppercase();
    } else randomPass + "";
    if (lowercaseOption == true) {
      randomPass += randomLowercase();
    } else randomPass + "";
    if (numbersOption == true) {
      randomPass += randomNumber();
    } else randomPass + "";
    if (symbolsOption == true) {
      randomPass += randomSymbol();
    } else randomPass + "";

  // Slice password to correct length
  let slicedPass = randomPass.slice(0, passwordLength);

  // Display sliced password on screen
  return slicedPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
