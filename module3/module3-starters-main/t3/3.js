'use strict';
const names = ['John', 'Paul', 'Jones'];

function task3(){
  let list = '' //create variable called list

  //in a for loop iterate through array of names and add them to the list
  for(let i=0; i<names.length; i++){
    list += '<li>'+ names[i] + '</li>';
  }
  //add list to HTML code to the element with id 'target
  document.getElementById('target').innerHTML=list;
}

