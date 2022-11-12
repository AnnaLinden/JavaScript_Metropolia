/* The program asks for the number of candidates.
Then the program asks for the names of the candidates:
Store the candidates' names and initial vote count in objects like this:
The program asks for the number of voters.
The program asks each voter in turn who they will vote for. Voter should enter
candidate name. If the voter enters an empty value instead of the voting number,
it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console:
 */

'use strict';

// prompt number of candidates from the user
let num_of_candidates = prompt('Enter the number of candidates:')

//create an empty array of candidates from the user
let candidates = [];
//append candidates array calling function append_candidate
append_candidates(num_of_candidates);

//why I couldn't append this array
let candidates_array = [];


// prompts the name of the candidate from the user, returns cand_name and votes
function createCandidate(num_of_candidate){
  let cand_name = prompt('Enter the name of the candidate number '+
      num_of_candidate + ':');
  let votes = 0;
  //why this doesn't work?
  //candidates_array.push(cand_name);
  return {
    cand_name,
    votes
  };
}

// funct. append_candidates uses for loop and calls createCandidate loop to create a candidate
//pushes candidate to array candidates
function append_candidates(num_of_candidates){
  for(let i=1;i<=num_of_candidates;i++){
  let candidate = createCandidate(i);
  candidates.push(candidate);
  }
}

// check the objects in the array
//candidates.forEach(o => console.log(o));


//prompt the number of the voters
let num_of_voters = prompt('Enter the number of voters:');


//using for loop hold the election
for(let j=1;j<=num_of_voters;j++){
  //create a variable selected_candidate which prompts the vote from the user
  let selected_candidate = prompt('Enter the name. Vote for the candidate from the list: ' + candidates.cand_name);
  if (selected_candidate==''){
    continue;
  }
  else {
    //findIndex((element) => { /* … */ }) is an iterative method, finds the index of the element
    let candidateIndex = candidates.findIndex((candidate =>
        candidate.cand_name.toLowerCase() ===
        selected_candidate.toLowerCase()));
    //increment votes when we know the index
    candidates[candidateIndex].votes += 1;
  }
}

//sort candidates from biggest to lowest
candidates.sort((a,b)=> b.votes-a.votes);

//call results_to_console function
results_to_console();

//prints the results to console
function results_to_console(){
  console.log('The winner is '+ candidates[0].cand_name + ' with ' +
      candidates[0].votes + ' votes.')
  console.log('Results: ');
  for(let i=0; i<num_of_candidates; i++){
  console.log (candidates[i].cand_name +': ' + candidates[i].votes + ' votes');
  }
}

