// rock paper scissors JS activity

let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number

//Conditional logic goes here to determine the computers selection
if (computerSelection < 0.34) {
    computerSelection = "rock";
} else if (computerSelection <= 0.67) {
    computerSelection = "paper";
} else {
    computerSelection = "scissors";
}

//<--Code goes here-->

//Function to compare the userSelection and the computerSelection to determine the winner
let compare = function (selection1, selection2) {

}
console.log(compare(userSelection, computerSelection)); //call the function to compare and display result