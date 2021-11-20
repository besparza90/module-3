// Assignment code here
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "?"]

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

function generatePassword() {
  var password = ""
  var passwordLength = window.prompt("How many characters does the password need? Select between 8-128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid number");
    return generatePassword();
  }
  else {
    var array=[]
    var acceptLower = confirm("Will the password have lowercase letters?");
    if (acceptLower) array.push(lower);
    var acceptUpper = confirm("Will the password have uppercase letters?");
    if (acceptUpper) array.push(upper);
    var acceptNumber = confirm("Will the password have numbers?");
    if (acceptNumber) array.push(number);
    var acceptSpecial = confirm("Will the password have special characters?");
    if (acceptSpecial) array.push(special);

    if (!acceptLower && !acceptUpper && !acceptNumber && !acceptSpecial) {
      alert("Your password must contain at least one lowercase, uppercase, numeric, or special character.");
      return;
    }
    else {
      for(var i=password.length; i<passwordLength;i++){
        var random=array[Math.floor(Math.random()*array.length)]
        password+=random[Math.floor(Math.random()*random.length)]
      }
      return password;
    }
  }
    
}