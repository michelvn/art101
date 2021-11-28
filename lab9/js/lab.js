// Michel Nguyen
// ART 101, Lab 9: JavaScript Events and Forms
// Wes Modes, fall 2021

outputEl = document.getElementById("output");

new1El = document.createElement("p");
new1El.id = "newElement1";
new1El.innerHTML = "Something new here!";

new2El = document.createElement("p");
new2El.id = "newElement2";
new2El.innerHTML = "Something else new!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

outputEl.style.backgroundColor = "#F8D9FC";
outputEl.style.color = "black";
