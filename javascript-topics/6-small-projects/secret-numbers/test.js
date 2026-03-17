

function secretNumber(){

let count = 0;
let userGuess;
let number = Math.floor(Math.random() * 10) + 1;


while(userGuess != number || userGuess < 1 || userGuess > 10){

userGuess = prompt("Guess a number between 1 and 10");

    count++;

    if(userGuess < number){
        console.log("Too low try again");
    }
    else if(userGuess > number){
        console.log("Too high try again")
    }
    else{
        console.log("That's correct!");
        console.log(`You got it in ${count}`)
        break;
    }
    
    }
}

secretNumber();