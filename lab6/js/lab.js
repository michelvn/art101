// Michel Nguyen
// ART 101, Lab 6: Arrays and Objects
// Wes Modes, fall 2021

//Create array.
myTransport = ["walk", "take the bus", "have family or friends drive"];

//Create object.
myMainRide = {
  make: "Lexus",
  model: "LS 430",
  color: "white",
  year: 2005,
  ownIt: false,
  age: (2021 - 2005),
};

//Print properties of each variable.
document.writeln(myTransport, "<br><br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
