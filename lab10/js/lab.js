// Michel Nguyen
// ART 101, Lab 10: JavaScript Events and Forms
// Wes Modes, fall 2021

//Function to sort a name input and print the result.
function nameSort() {

  var name = document.getElementById("user-name").value;
  var nameArray = name.split("");
  capitalization(nameArray);

  var nameArray = nameArray.sort();
  capitalization(nameArray);

  var alphaName = nameArray.join("");

  outputEl = document.getElementById("output");
  prevSortDiv = document.getElementById("newName")
  if (prevSortDiv != null) {
    prevSortDiv.remove()
  }

  newNameEl = document.createElement("p");
  newNameEl.id = "newName"

  outputEl.appendChild(newNameEl);
  newNameEl.innerHTML = alphaName;
}

//Function to change the capitalization of a letter.
function capitalization(nameArray) {
  firstLetter = nameArray[0];

  //Uppercase to lowercase.
  if (firstLetter == firstLetter.toUpperCase()) {
    firstLetter = nameArray[0].toLowerCase();
  }

  //Lowercase to uppercase.
  else if (firstLetter == firstLetter.toLowerCase()) {
    firstLetter = nameArray[0].toUpperCase();
  }

  nameArray[0] = firstLetter;
  return nameArray;
}

//Add a button to the page that runs nameSort() when clicked.
var button = document.getElementById("my-button");
button.addEventListener("click", nameSort);
