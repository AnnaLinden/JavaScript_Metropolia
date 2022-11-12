/*
 Write a program that prompts for three integers. The program prints the sum,
 product and average of the numbers to the HTML document. (3p)
 remember to convert strings to numbers when adding
*/
'use strict';
//prompt three numbers from the user
let number1 = prompt('Enter three numbers. Enter the first number: ');
let number2 = prompt('Enter three numbers. Enter the second number: ');
let number3 = prompt('Enter three numbers. Enter the third number: ');

//calculate sum, prodict and average
let the_sum = parseInt(number1)+parseInt(number2)+parseInt(number3);
let product = number1*number2*number3;
let average = the_sum/3;

//print result to html
document.querySelector('#the_sum').outerHTML='The sum of the numbers equals '+ the_sum +'.'+ '<br />';
document.querySelector('#product').outerHTML='The product\n of the numbers equals '+ product +'.'+ '<br />';
document.querySelector('#average').outerHTML='The average of the numbers is '+ average + '.';
