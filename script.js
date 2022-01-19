// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = document.querySelector("#length");
var passwordUpper = document.querySelector("#uppercase");
var passwordLower = document.querySelector("#lowercase");
var passwordNumeric = document.querySelector("#numeric");
var passwordSpecial = document.querySelector("#special");
var form = document.querySelector("form");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create a function called generate password, function returns back a string as a password

function generatePassword() {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = passwordLength.value;
    var password = "";
    for (var i =0; i <= passwordLength; i++) {
        var randomCharacter = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomCharacter, randomCharacter +1);
    }
    document.getElementById("password").value = password;
}