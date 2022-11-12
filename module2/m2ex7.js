/*Modify the function above so that it gets the number of sides on the dice as a
parameter. With the modified function you can for example roll a 21-sided role-playing dice.
The difference to the last exercise is that the dice rolling in the main program
continues until the program gets the maximum number on the dice, which is asked
from the user at the beginning. (2p)
 */
'use strict';
//prompt the number of sides for the dice from the user
let num_of_sides = prompt('Enter the number of sides on the dice: ');

//create a function which returns a random number with maximum number as a parameter
function random_dice(num_of_sides){
  // Returns a random integer from 1 to num_of_sides:
  return Math.floor(Math.random() * num_of_sides) + 1;
}

//create an empty array named result
const result = [];

//iterate using while loop until the random_dice equals num_of_sides
while (true){
  //initiate variable which calls function random_dice
  let roll = random_dice(num_of_sides);
  //push the result to the array 'result'
  result.push(roll);
  //break the loop if the roll equals num_of_sides
  if (roll == num_of_sides){
    break;
  }
}

// create a variable named print_results and get the element with id "roll_results"
let print_results = document.getElementById('roll_results7');

//iterate all the array 'result' items using forEach
result.forEach((item)=>{
  //each iteration creates a li element
  let li = document.createElement("li");
  //each iteration puts the innerText value same as the current item
  li.innerText = item;
  //append li
  print_results.appendChild(li);
})