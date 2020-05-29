//store user's name
var userName = window.prompt("Please enter your name");
//display name on page
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;

//operand 1&2
var num1 = parseInt(window.prompt("Enter a number"));
var num2 = parseInt(window.prompt("Enter another number"))
var num1_tag = '<span class="number" id="num1">'+ num1 + '</span>';
var num2_tag = '<span class="number" id="num2">'+ num2 + '</span>';

//display each operands
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

operand1.innerHTML += num1_tag;
operand2.innerHTML += num2_tag;

//사칙연산
var sum = num1+num2;
var difference = num1-num2;
var product = num1*num2;
var quotient = num1/num2;
var modResult = num1%num2;
//사칙연산-네가지

// var numberString = num1_tag + " and" + num2_tag + " is ";
// document.getElementById("addition").innerHTML = "The sum of " + numbersString + sum;
// document.getElementById("subtraction").innerHTML = "The difference between of " + numbersString + difference;
// document.getElementById("multiplication").innerHTML = "The product of " + numbersString + product;
// document.getElementById("division").innerHTML = "The quotient of " + numbersString + quotient;
// document.getElementById("modulus").innerHTML = "The result of the mod operation on " + numbersString + modResult;

document.getElementById("addition").innerHTML = "The sum of " + num1_tag + " and " + num2_tag + " is " + sum;
document.getElementById("subtraction").innerHTML = "The difference between " + num1_tag + " and " + num2_tag + " is " + difference;
document.getElementById("multiplication").innerHTML = "The product of " + num1_tag + " and " + num2_tag + " is " + product;
document.getElementById("division").innerHTML = "The quotient of " + num1_tag + " and " + num2_tag + " is " + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + num1_tag + " and " + num2_tag + " is " + modResult;


