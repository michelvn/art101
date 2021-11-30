// Michel Nguyen
// ART 101, Lab 11: Libraries and jQuery
// Wes Modes, fall 2021

$("#challenge").html('<button type="button" class="red">Click Me!</button>');
$("button.red").click(function(){
  // remove possible existing class
  $("#output").removeClass("green");
  // now toggle red class
  $("#output").toggleClass("red");

}
$("#problems").html('<button type="button">Click Me!</button>');

$("#output").html('<button type="button">Click Me!</button>');
