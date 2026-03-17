const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);


// Create the GEC and FEC with CP and EP flow
// Create the Stack and Heap Flow
// Create the Stack Diagram
// Create a Readme file with all the above diagram and share on Discord.


//2 Execution contexts
// Global Execution Context (GEC) - Everything outside of the function
// Function Execution Context (FEC) - Deals withe execution of a function


//Both of the previous execution contexts will have 2 Phases
// Creation Phase - Memory allocation
// Execution Phase - Code execution
