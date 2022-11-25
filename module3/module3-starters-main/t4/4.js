'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let select = document.getElementById("target"); //select HTML element with id target

//in a for loop iterate through students array of objects and create for each object element option
for (var {name: x, id: y} of students){ //make name=x id =y
  let option = document.createElement("option");
  option.text = x;
  option.value = y;
  select.appendChild(option); //append option
}


/* how to extract data from array of objects:

const countries = [
{
    name: 'Austria',
    info: {
    population: 8217280,
    area: 32382
    }
},
{
    name: 'Belgium',
    info: {
    population: 10431477,
    area: 11787
    }
}]

for (var {name: n, info: {population: p}} of countries) {
  console.log('Name: ' + n + ', Population: ' + p);
}
 */