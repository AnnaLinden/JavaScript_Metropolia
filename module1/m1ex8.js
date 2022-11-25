/*Write a program that prompts the user for the start and end year. The program
prints all leap years from the interval given by the user. Printing is done in
an unordered list to the HTML document. (3p)
Example output HTML code:
<ul>
   <li>1992</li>
   <li>1996</li>
   <li>2000</li>
   <li>2004</li>
   <li>2008</li>
</ul>
 */
//get the start and the end years from the user using prompt
let start = prompt('Enter the start year:')
let end = prompt('Enter the end year:')

//create an empty array of years
let years = [];

//initiate variable 'year' as a starting point of do-while loop
let year = start;
//check if the year is leap and add leap years to 'years' array
do{
  if (year%400 ==0){
    years.push(year);
  }
  else if(year%4==0 && year% 100!=0){
    years.push(year);
  }
  year ++;
}
//do-while loop iterates until it is more than the end year prompt
while (year<=end);

// create a variable named leap_years and get the element with id "leap_years"
let leap_years = document.getElementById('id_leap_years');

//output to html about the years
document.querySelector('#intro_to_leap').outerHTML='The leap years in ' +
    'the period between '+ start+ ' and ' + end + ':'

//iterate all the array 'years' items using forEach
years.forEach((item)=>{
  //each iteration creates a li element
  let li = document.createElement("li");
  li.innerText = item;
  //append li
  leap_years.appendChild(li);
})


