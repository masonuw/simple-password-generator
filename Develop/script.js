// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = window.prompt("Please enter desired password character length (integers only).");
  
  if (!isNaN(passwordLength)) () => {
  }; else return window.alert("Please try again.");
  
  var lowercaseOption = window.confirm("Please press OK if lowercase letters are to be included in your password.");
  
  var uppercaseOption = window.confirm("Please press OK if uppercase letters are to be included in your password.");
  
  var numbersOption = window.confirm("Please press OK if numbers are to be included in your password.");
  
  var symbolsOption = window.confirm("Please press OK if symbols are to be included in your password.");

  for (var i = 0; i <= passwordLength; i++) {
    if (lowercaseOption === true) {
      randomPass += randomLowercase();
    } else randomPass += '';
    if (uppercaseOption === true) {
      randomPass += randomUppercase();
    } else randomPass += '';
    if (numbersOption === true) {
      randomPass += randomNumber();
    } else randomPass += '';
    if (symbolsOption === true) {
      randomPass += randomSymbol();
    } else randomPass += '';

    return randomPass;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function randomLowercase() {
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  return (Math.floor(Math.random() * lowercaseList.length));
}

function randomUppercase() {
  var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (Math.floor(Math.random() * uppercaseList.length));
}

function randomNumber() {
  var numbersList = "1234567890";
  return (Math.floor(Math.random() * numbersList.length));
}

function randomSymbol() {
  var symbolsList = "!@#$%^&*()-_=+[]{}";
  return (Math.floor(Math.random() * symbolsList.length)); 
}