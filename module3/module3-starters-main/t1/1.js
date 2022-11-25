'use strict';

function addList(){

  //creat list of items
  const list = '<li>First item</li>\n' +
      '<li>Second item</li>\n' +
      '<li>Third item</li>';

  //Add the list to the element with id="target"
  document.getElementById('target').innerHTML=list;

  //Add class my-list to the element with id="target"
  document.getElementById('target').classList.add('my-list');
}