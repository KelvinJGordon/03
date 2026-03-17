//Computer choice logic using switch instead of if-else

let randomNum = 3;
let computerChoice;

switch(randomNum){
    case 1:
        computerChoice = "rock";
        break;
    case 2:
        computerChoice = "paper";
        break;
    case 3:
        computerChoice = "scissors";
        break;
    default:
        computerChoice = "rock";
}

console.log(computerChoice);