// Michel Nguyen
// ART 101, Lab 13: Loops
// Wes Modes, fall 2021

var length = 200;

for (i=1; i <= length; i++) {
    fizzBuzz = "";

    if (i%3 == 0) {
      fizzBuzz = "Fizz";
      $("#output").append(fizzBuzz);
    }

    if (i%5 == 0) {
      fizzBuzz = "Buzz";
      $("#output").append(fizzBuzz);
    }

    if (i%7 == 0) {
      fizzBuzz = "Boom";
      $("#output").append(fizzBuzz);
    }

    if (i%3 == 0 || i%5 == 0 || i%7 == 0) {
      $("#output").append("! ");
    }

    else if (i%3 != 0 && i%5 != 0 && i%7 != 0) {
      $("#output").append(i + " ");
    }

    if (i%10 == 0) {
      $("#output").append("<br>");
      console.log("help");
    }

}
