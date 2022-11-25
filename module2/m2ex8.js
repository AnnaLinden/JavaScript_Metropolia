/* Write a function called concat(), which receives an array of strings as a parameter.
The function returns a string formed by concatenating the elements of the array. (2p)
Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky.
The function returns the string JohnnyDeeDeeJoeyMarky.
Do not use array.join() function
You can hardcode the array, no need for prompt().
Print the result to HTML document.
 */
'use strict';

//create an array of words
let my_array = ['Java','Script','is','beautiful','!'];

//create a function which concatenates my_array
function concat(my_array){
  let concatenated = '';
  for (let i = 0; i<my_array.length; i++){
    concatenated = concatenated.concat(my_array[i]);
  }
  return concatenated;
}

//create variable result which calls function concat with my_array as a parameter
let result = concat(my_array);
//print to html
document.querySelector('#reversed_array').innerHTML= result;