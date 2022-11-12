/*
In the Harry Potter children's books, the sorting hat assigns a new student
 at Hogwarts School of Witchcraft and Wizardry to one of the four classes,
 which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.
 Write an electronic sorting hat that asks for a student's name
 and draws a room for him. If you enter Anna as the name, for example,
 the program prints to the HTML document "Anna, you are Ravenclaw." (3p)
 Use math.random() to draw a value (1, 2, 3 or 4)
 Once the number is drawn, you need to use a multiple choice structure
 (if, else if, ..., else or switch).
*/

'use strict';
//prompt the name
// \' escapes the apostrophe
let name = prompt('You are in Hogwarts! What\'s your name?' );

// Returns a random integer from 1 to 4:
const number = Math.floor(Math.random() * 4) + 1;

let school
//multiple choice structure switch is used to assign value to 'school' variable
switch (number) {
  case 1:
    school = 'Gryffindor';
    break;
  case 2:
    school = 'Slytherin';
    break;
  case 3:
    school = 'Hufflepuff';
    break;
  case 4:
    school = 'Ravenclaw';
    break;
  default:
    school = 'Hogwarts!'
}

//print result to HTML
document.querySelector('#name_of_school').outerHTML= name +', you are in ' + school + "."
