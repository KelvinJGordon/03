//if, else if, else

let catchingBus = true;

if(catchingBus){
    console.log("early");
} else {
    console.log("late");
}


//Same example with ternary operator

catchingBus ? console.log("early") : console.log("late");


//Another if example

let age = 9;

if (age >= 18){
    console.log("adult");
}else{
    console.log("minor");
}

//Grading system
// If score is >=90, Grade A
// If score is >=80, Grade B
// If score is >=70, Grade C
//Fail

let grade = 62;

if (grade >= 90){
    console.log("You got an A");
}
else if(grade >= 80){
    console.log("You got a B");
}

else if(grade >= 70){
    console.log("You got a C");
}
else{
    console.log("You failed");
}



const condition = false;
const innerCondition = false;

if (condition) {
    console.log("Outer if");
    if (innerCondition) {
        console.log("Inner if");
    } else {
        console.log("Inner else");
    }
} else {
    console.log("Outer else");
}

//switch

let position = 14;
switch(position){
    case 1:
        console.log("1");
        break;
    case 2: 
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4: 
        console.log("4");
        break;
    default:
        console.log("Nothing");
}

let day = 8;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Yurrr");
}

let text = "kelvin";

switch(text){
    case "kelvin":
        console.log("Kelv");
        break;
    case "elton":
        console.log("Eltwo");
        break;
    default:
        console.log("Yurrr");
}

const places = "Belmopan";

switch(places){
    case "Belmopan":
    case "Cayo":
    case "Belize City":
        console.log("These are in Belize");
        break;
    case "Kingston":
        console.log("This is not in Belize");
        break;
    default:
        console.log("Hello");

}