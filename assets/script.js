// Assignment code here
var acceptLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var acceptUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var acceptNumber = ["1","2","3","4","5","6","7","8","9"]
var acceptSpecial = ["!","@","#","$","%","^","&","*","(",")","/","?"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () { 
  window.prompt("How many characters does the password need? Select between 8-128.");
  if (password < 8 || password > 128) {
    window.alert ("Please enter a valid number");
    return generatePassword ();
  }
}
