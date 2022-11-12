/*Write a function that returns a random dice roll between 1 and 6. The function
should not have any parameters. Write a main program that rolls the dice until
the result is 6. The main program should print out the result of each roll in
an unordered list (<ul>). (2p)
 */

//create a function random_dice
function random_dice(){
  // Returns a random integer from 1 to 6:
  return Math.floor(Math.random() * 6) + 1;
}

//create an empty array named result
const result = [];

//iterate using while loop until the random_dice equals 6
while (true){
  //initiate variable which calls function random_dice
  let roll = random_dice();
  //push the result to the array 'result'
  result.push(roll);
  //break the loop if the roll equals 6
  if (roll == 6){
    break;
  }
}

// create a variable named print_results and get the element with id "roll_results"
let print_results = document.getElementById('roll_results');

//iterate all the array 'result' items using forEach
result.forEach((item)=>{
  //each iteration creates a li element
  let li = document.createElement("li");
  //each iteration puts the innerText value same as the current item
  li.innerText = item;
  //append li
  print_results.appendChild(li);
})