let arr = [1,2,3,4];

let obj = {
    name: "kelvin"
};

let x = arr;
let newObj = obj;

console.log(x);
console.log(newObj.name);

/*

**Primitive Data Types:

- String - Text Values -> let text = "Hello";
- Number - Numeric Values -> let num = 25;
- Boolean - True/False (true,false)
- Undefined - A variable declared but not assigned -> let x;
- Null - Represents "nothing" -> let y = null;
- BigInt - Large numbers -> let x = 389357975;
- Symbol - Unique identifiers -> Symbol("id")
* Primitive Values store data in a Stack


**Non-Primitive (Reference) Data Types:

- Object - Collection of key-value pairs -> let student = {name: "Mark"};
- Array - Ordered list of values -> let arr = [1,2,3];
- Function - Block of code that can be executed -> function oldFunction(){alert("Hello");}
* Non-Primitive Values store data in a Heap


**Code is ran in steps

- Source code is gathered
- Tokenizing - (Each aspect of the code is broken into parts)
- Parsing - Creates a Abstract Syntax Tree (AST)
- Code Generation (Machine Code)

*/