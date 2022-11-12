/*Write a program that prompts the user for five numbers and prints them in the
 reverse order they were entered. Print the result to the console.(2p)
Save the numbers to an array, then use for-loop to iterate in reverse order.
Do not use array.reverse() function.
 */
'use strict';

//create an empty array called numbers
let numbers = [];
//prompt 5 numbers from the user
const num1 = prompt('Enter five numbers. Enter the first number:');
const num2 = prompt('Enter five numbers. Enter the second number:');
const num3 = prompt('Enter five numbers. Enter the third number:');
const num4 = prompt('Enter five numbers. Enter the fourth number:');
const num5 = prompt('Enter five numbers. Enter the fifth number:');

//add prompted numbers to the array 'numbers'
numbers.push(num1);
numbers.push(num2);
numbers.push(num3);
numbers.push(num4);
numbers.push(num5);

//iterate through the array backwards and print to console
for (let i =numbers.length-1; i >=0; i--){
  console.log(numbers[i]);
}

