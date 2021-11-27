// Michel Nguyen
// ART 101, Lab 8: Anon Functions and Callbacks
// Wes Modes, fall 2021

//Define a function to multiply an input x by 2.
function multiplyTwo(x) {
    var results = 2 * x;
    return results;
}

//Create an array and send it to the function.
numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
document.writeln(numberArray, "<br>")

numberArray = numberArray.map(multiplyTwo);
document.writeln("Multiplied by 2: ", numberArray, "<br>");

//Write an anon function to change the array back to its original values.
numberArray = numberArray.map(function(x) {
    var results = x / 2;
    return results;
});
document.writeln("Divided by 2 again: ", numberArray)
