// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordUpper = document.querySelector("upperCheck");
var passwordNumeric = document.querySelector("numericCheck");
var passwordSpecial = document.querySelector("specialCheck");
var form = document.querySelector("form");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


//create a function called generate password, function returns back a string as a password

function generatePassword() {    
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var numCharacters = "0123456789";
    var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!@#$%^&*()";
    
    var includeNumbers = document.getElementById("numericCheck").checked;
    var includeUppers = document.getElementById("uppercaseCheck").checked;
    var includeSpecial = document.getElementById("specialCheck").checked;

    includeNumbers && (characters += numCharacters);
    includeUppers && (characters += upperCharacters);
    includeSpecial && (characters += specialCharacters);

    var password = "";
    var passwordLength = document.getElementById("lengthValue").value;

    for (var i =0; i <= passwordLength; i++) {
        var randomCharacter = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomCharacter, randomCharacter +1);
    }
    
    document.getElementById("password").value = password;
    
}
