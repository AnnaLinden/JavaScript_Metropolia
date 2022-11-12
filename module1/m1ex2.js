/*
 Write a program that prompts for user's name and then greets the user.
 Print the result to the HTML document: Hello, Name! (2p)
*/
'use strict';
//get prompt from the user
let name = prompt('Type your name.');
//print to html using id greeting
document.querySelector('#greeting').outerHTML='Hello, ' + name + '!';

