'use strict';

function task2(){
  //create list elements by using createElement()
  const l1= document.createElement('li');
  const l2= document.createElement('li');
  const l3= document.createElement('li');

  //adding text to the list items
  l1.innerText = 'First item';
  l2.innerText = 'Second item';
  l2.classList.add('my-item'); //Add class my-item to the second list item
  l3.innerText = 'Third item';

  //appendChild with id target
  document.getElementById('target').appendChild(l1);
  document.getElementById('target').appendChild(l2);
  document.getElementById('target').appendChild(l3);
}
