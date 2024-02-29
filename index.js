// rock paper scissors JS activity

let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number

//Conditional logic goes here to determine the computers selection
if (computerSelection < ) {
    computerSelection = "rock";
} else if (computerSelection <= ) {
    computerSelection = "paper";
} else {
    computerSelection = "scissors";
}

//<--Code goes here-->

//Function to compare the userSelection and the computerSelection to determine the winner
let compare = function (selection1, selection2) {
    if (selection1 === selection2) {
        return "It's a tie!";
    } else if (selection1 === "rock") {
        if (selection2 === "scissors") {
            return "rock wins!";
        }
        else if (selection2 === "paper") {
            return "paper wins!";
        }
    }
    else if (selection1 === "paper") {
        if (selection2 === "scissors") {
            return "scissors win!"
        }
        else if (selection2 === "rock") {
            return "paper wins!";
        }
    }
    else if (selection1 === "scissors") {
        if (selection2 === "paper") {
            return "scissors win"
        }
        else if (selection2 === "rock") {
            return "rock wins!";
        }
    }

}




console.log(compare(userSelection, computerSelection)); //call the function to compare and display result