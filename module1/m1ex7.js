/*Write a program that asks the user for the number of dice rolls. The program
throws all the dice once and prints the sum of the numbers. (2p)
 */
'use strict';
//get input, the amount of dice rolls
let roll_number = prompt('How many times do you want to roll the dice?');

//initialise sum as 0
let sum = 0;
//do-while loop throws the dice, increases the sum while the roll number is more than 0
do{
  //rolls the dice
  let num = Math.floor(Math.random()*6)+1;
  // increases the sum
  sum = sum + num;
  //decreases the amount of rolls
  roll_number = roll_number-1;
}
//loop works while the roll number is more than 0
while (roll_number>0);

//print the result to HTML
document.querySelector('#roll_the_dice').outerHTML = 'The sum of the numbers equals: '+ sum+ '.';
