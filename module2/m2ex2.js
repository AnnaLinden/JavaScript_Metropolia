/*Write a program that asks the user for the number of participants. After this,
the program asks for the names of all participants. Finally, the program prints
the names of the participants on the web page in an ordered list (<ol>) in the
same order as they were entered. (2p)
 */
'use strict';
//prompt the number of the participants from the user
const num_of_participants = prompt('Enter the number of participants:')

//create an empty array of participants
const participants = [];

//use for loop to prompt the names of the participants and push them to the array participants
for (let i = 1; i <= num_of_participants; i++){
  let name = prompt('Enter the name of participant number '+ i +' :')
  participants.push(name);
}

// create a variable named print_participants and get the element with id "participants"
let print_participants = document.getElementById('participants');

//iterate all the array 'participants' items using forEach
participants.forEach((item)=>{
  //each iteration creates a li element
  let li = document.createElement("li");
  //each iteration puts the innerText value same as the current item
  li.innerText = item;
  //append li
  print_participants.appendChild(li);
})