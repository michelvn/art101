// Michel Nguyen
// ART 101, Lab 5: Data Types and Variables
// Wes Modes, fall 2021

// Write a function that takes a string input from the user, splits and sorts it in alphabetical order, then joins and returns the new string.
function nameSort() {
  var nameArray = userName.split("");
  console.log("nameArray = ", nameArray);

  var sortArray = nameArray.sort();
  console.log("sortArray = ", sortArray);

  var alphaName = sortArray.join("");
  console.log("alphaName = ", alphaName);

  return alphaName;
}

//Print out the new string.
var userName = window.prompt("Please enter your name.");
console.log("userName = ", userName);

document.writeln("Your name sorted in alphabetical order is ", nameSort(), ". (Capital letters will be sorted before lowercase letters.)<br>");
