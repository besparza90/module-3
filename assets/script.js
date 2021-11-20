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
 var passwordLength = window.prompt("How many characters does the password need? Select between 8-128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Please enter a valid number");
    return generatePassword ();
  }
  else {
  var acceptLower = confirm("Will the password have lowercase letters?");
  var acceptUpper = confirm("Will the password have uppercase letters?");
  var acceptNumber = confirm("Will the password have numbers?");
  var acceptSpecial = confirm("Will the password have special characters?");
  
  if (!acceptLower && !acceptUpper && !acceptNumber && !acceptSpecial) {
    alert("Your password must contain at least one lowercase, uppercase, numeric, or special character.");
    return;
  }
  }
}