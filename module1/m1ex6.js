/*
Write a program that prints the text "Should I calculate the square root?" in
a confirmation window. If the user selects OK, the program asks for the number
and calculates and prints its square root to the HTML document. If the user selects
Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)
 The confirmation window can be displayed with the function confirm(). The function
returns true if the user selects OK. If the user selects Cancel, the function returns false.
 You cannot calculate the square root of a negative number. If the number entered
  by the user is negative, the program prints "The square root of a negative number
  is not defined" to the HTML document.
*/
'use strict';
let number;

// if statement asks the user should he calculate the square root
if (confirm('Should I calculate the square root?') == true) {
  //if user presses ok, prompt to enter the number
  number = prompt('Enter the number');
} else {
  //otherwise alert that root is not calculated
   alert('The square root is not calculated.');
}

//define the variable 'response'
let response;
//if loop is used to check if the prompt was negative and to calculate the square root
if (number<0){
  response = 'The square root of a negative number is not defined.'
}
else if(number>=0){
  response = 'The square root of number ' + number + ' is ' + Math.sqrt(number) +'.';
}
else{
  response = 'Reload the page.'
}
//print to HTML the response
document.querySelector('#respond').outerHTML= response;