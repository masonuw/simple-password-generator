// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomUppercase() {
  var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercaseList[Math.floor(Math.random() * uppercaseList.length)];
}

function randomLowercase() {
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  return lowercaseList[Math.floor(Math.random() * lowercaseList.length)];
}

function randomNumber() {
  var numberList = "1234567890";
  return numberList[Math.floor(Math.random() * numberList.length)];
}

function randomSymbol() {
  var symbolsList = "!@#$%^&*/-_=+";
  return symbolsList[Math.floor(Math.random() * symbolsList.length)]; 
}

function generatePassword() {
  var passwordLength = window.prompt("Please enter desired password character length (integers only).");

  if (!isNaN(passwordLength)) () => {
  }; else return window.alert("Please try again.");
  
  var uppercaseOption = window.confirm("Please press OK if uppercase letters are to be included in your password.");

  var lowercaseOption = window.confirm("Please press OK if lowercase letters are to be included in your password.");
  
  var numbersOption = window.confirm("Please press OK if numbers are to be included in your password.");
  
  var symbolsOption = window.confirm("Please press OK if symbols are to be included in your password.");

  var randomPass = "";
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
  }

  return randomPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
