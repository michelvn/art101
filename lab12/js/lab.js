// Michel Nguyen
// ART 101, Lab 12: Conditionals
// Wes Modes, fall 2021

function sortingHat(name) {

  var length = name.length;
  var mod = length % 4;

  if (mod == 0) {
    return "Gryffindor";
  }

  else if (mod == 1) {
    return "Ravenclaw";
  }

  else if (mod == 2) {
    return "Slytherin";
  }

  else if (mod == 3) {
    return "Hufflepuff";
  }

}


button.addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var house = sortingHat(name);

  outputEl = document.getElementById("output");

  houseEl = document.getElementById("house");
  if (houseEl != null) {
    houseEl.remove()
  }

  houseEl = document.createElement("p");
  houseEl.setAttribute("id", "house");

  outputEl.appendChild(houseEl);

  houseEl.innerHTML = "The Sorting Hat has sorted you into " + house + ".";

});
