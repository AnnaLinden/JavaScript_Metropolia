/*Write a program that asks for the names of six dogs. The program prints dog names
 to unordered list <ul> in reverse alphabetical order. (2p)
 */
'use strict';
//create an empty array of dogs
const dogs = [];

//prompt the names of the dogs from the user
let dog1 = prompt('Enter the names of six dogs. The first dog: ');
let dog2 = prompt('Enter the names of six dogs. The second dog: ');
let dog3 = prompt('Enter the names of six dogs. The third dog: ');
let dog4 = prompt('Enter the names of six dogs. The forth dog: ');
let dog5 = prompt('Enter the names of six dogs. The fifth dog: ');
let dog6 = prompt('Enter the names of six dogs. The sixth dog: ');

//push the names to the list dogs
dogs.push(dog1,dog2,dog3,dog4,dog5,dog6);

//sort the dogs list, then reverse list
let sorted_dogs = dogs.sort();
let reversed_sorted = sorted_dogs.reverse();

// create a variable named print_dogs and get the element with id "doggos"
let print_dogs = document.getElementById('doggos');

//iterate all the array 'reversed_sorted' items using forEach
reversed_sorted.forEach((item)=>{
  //each iteration creates a li element
  let li = document.createElement("li");
  //each iteration puts the innerText value same as the current item (dog name)
  li.innerText = item;
  //append li
  print_dogs.appendChild(li);
})
