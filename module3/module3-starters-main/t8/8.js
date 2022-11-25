'use strict';

//get element with id start from HTML, hold it in the calculate variable
let calculate = document.getElementById('start');

//add listener of type click to the calculate variable, add function calculator
calculate.addEventListener('click', ()=>{
  calculator();
});


function calculator() {
  //get numbers from html and parse them to int
  let number1 = document.getElementById('num1').value;
  number1 = parseInt(number1);
  let number2 = document.getElementById('num2').value;
  number2 = parseInt(number2);
  //get the name of operation from the html and its value using .selectedIndex
  const operations_list= document.getElementById('operation');
  const operation = operations_list.options[operations_list.selectedIndex].text;

  //use switch to make calculations and return result to element with id result
  switch (operation){
    case "addition":
      document.getElementById('result').innerHTML = number1 + number2;
      break;
    case "subtraction":
      document.getElementById('result').innerHTML = number1 - number2;
      break;
    case "multiplication":
      document.getElementById('result').innerHTML = number1 * number2;
      break;
    case "division":
      document.getElementById('result').innerHTML = number1 / number2;
      break;
  }
}

