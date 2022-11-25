'use strict';

//get element with id start from HTML, add listener click and function calculator
let calculate = document.getElementById('start');
calculate.addEventListener('click', ()=>{
  calculator();
});

function calculator(){
  let text = document.getElementById('calculation').value; //gets the input from HTML with id calculation
  text = String(text); //parse it to string
  let answer = 0; //create variable answer and make it 0
  let myArray = []; //create an empty array
  //if makes calculations
  if(text.includes('+')){ //.includes checks if there is a symbol
    myArray = text.split('+'); //.split separates string with the symbol as a separator and saves it in the array
    let num1 = myArray[0]; //use array value and parse it to int
    num1 = parseInt(num1);
    let num2 = myArray[1];
    num2 = parseInt(num2);
    answer = num1 + num2; //calculate
  } else if(text.includes('-')){
    myArray = text.split('-');
    let num1 = myArray[0];
    num1 = parseInt(num1);
    let num2 = myArray[1];
    num2 = parseInt(num2);
    answer = num1 - num2;
  } else if(text.includes('*')){
    myArray = text.split('*');
    let num1 = myArray[0];
    num1 = parseInt(num1);
    let num2 = myArray[1];
    num2 = parseInt(num2);
    answer = num1 * num2;
  } else if(text.includes("/")){
    myArray = text.split('/');
    let num1 = myArray[0];
    num1 = parseInt(num1);
    let num2 = myArray[1];
    num2 = parseInt(num2);
    answer = num1/num2;
  } else {
    answer = 'Wrong input';
  }
  document.getElementById('result').innerHTML = answer; //print result in html
}


