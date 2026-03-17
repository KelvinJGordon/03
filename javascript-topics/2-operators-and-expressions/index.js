/*

Operator Symbols : +, -, *, /
Operands : x+y, x and y are the operands
Expression: x = 2/3 + 4;

*/

//ARITHMETIC OPERATORS

let a = 10;
let b = 20;

console.log(a + b); //Addition
console.log(a - b); //Subtraction
console.log(a * b); //Multiplication
console.log(a / b); // Division

console.log(a ** b); //Exponents
console.log(a % b); //Modulus (Remainder)

let count = 5;

console.log(count++) // count = count + 1 (post increment)
console.log(++count) // count = count + 1  (pre increment)

console.log(count--) // count = count - 1 (post increment)
console.log(--count) // count = count - 1  (pre increment)



//ASSIGNMENT OPERATORS

let x = 10;

x+= 5; // x = x + 5 (15)
x -= 3; // x  = x -3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6) 



//COMPARISON OPERATORS

//** Note: Will always return a boolean value (true, false)

console.log(4 == '4'); // "==" lose equality (does not check data type)
console.log(3 === '3'); // "===" strict equality (both data types must be the same)
console.log (3 !=='3'); // "!==" not equals, strict equality

//NaN = Not a Number

let obj3 = {name: "kel"}; //0994809, specific memory address
let obj4 = {name: "kel"}; //7893202, specific memory address

console.log(obj3 === obj4); // false, the memory addresses are not the same
console.log(obj3 != obj4); // true, the both memory addresses are not equal


console.log(4 > 3); // true, 4 is greater than 3
console.log (5 < 2); // false, 5 is not less than 2
console.log(5 >= 5); // true, 5 is greater than or equal to 5
console.log(3<=9); // true, 3 is less than or equal to 9


// LOGICAL OPERATORS

// AND Operator (&&) = all conditions must be true
// OR Operator (||) = only one condition must be true
// NOT Operator (!) = checks that condition is not true
// Nullish Coalescing Operator (??) = provides a default value when the left-hand side operand is either null or undefined

console.log(false && false); //false
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log("Cow" && "Horse"); //Horse


console.log(false || false); //false
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log("Cow" || "Horse"); //Cow


console.log(!true); //Converted true to false
console.log(!false); //Converted false to true

let a1 = null ?? 1; //1
let a2 = undefined ?? 3; //3
const a3 = false ?? "words"; //false
const a4 = 0 ?? "more words"; //0


console.log(a1,a2,a3,a4);


// CONDITIONAL (TERNARY) OPERATOR

// condtion ? val1 : val2 (must return a boolean)

let age = 23;
let check = age >= 60 ? "Senior Citizen" : "Non Senior Citizen"
console.log(check);



//BITWISE OPERATORS

// Deals with 32 bit representation = & | ^ ~ << >>

console.log(15 & 9);//9

//1111 & 1001 = 1001  

// Convert from binary back to decimal -> 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2**2) + 1 * (2 ** 3) = 1 + 8 = 9

/*binary representation for 15

15/2 = 7(1)
7/2 = 3(1)
3/2 = 1(1) = 1111

binary representation for 9

9/2 = 4(1)
4/2 = 2(0)
2/2 = 1(0) = 1001
*/


console.log(15 | 9); //15

//1111 | 1001 = 1111



console.log(15 ^ 9); //6

// 1111 ^ 1001 = 0110



console.log(9 << 2); //36

//1001 << 2 = 100100



console.log(9>>2); //2

//1001 >> 2 = 001001



//GROUPING

//Using parenthesis to influence how an operation is performed

let p = 1;
let q = 2;
let r = 3;

console.log(p + q + r); // 1 + 2 * 3 = 7
console.log(r *(p + q)); // (1 + 2) * 3 = 9


//TYPEOF

//Returns the data type of a value

console.log(typeof "kelvin");  //string
console.log(typeof false);     //boolean
console.log(typeof 7);       //number


const numbers = [1,2,3,4,5];
console.log(typeof numbers);   //object (because an array is an object)



//INSTANCEOF

// object instanceof objectType