// variables in javascript are of two types: var and let
// var – Old and risky
// var is function scoped, Can be redeclared and reassigned
// Hoisted to the top with undefined value
var name = "Tanya";
var age = 21;
var isStudent = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// let variable is block scoped
// Can be reassigned but not redeclared in the same scope
// Hoisted, but stays in the Temporal Dead Zone (TDZ)
let city = "New York";
if (true) {
    let city = "Los Angeles"; // different variable
    console.log("Inside block, City:", city); // Los Angeles
}
console.log("Outside block, City:", city); // New York

// constants in javascript
// Scoped to blocks
// Cannot be reassigned or redeclared
// Value must be assigned at declaration
const pi = 3.14;
console.log("Value of pi:", pi);

// --------------------------------------------------------------------------------------------------
// Data types in javascript
// Primitive data types: string, number, boolean, null, undefined, symbol, bigint
let str = "Hello, World!"; // string
let num = 42;
let bool = true; // boolean
let n = null;
let u; // undefined
let sym = Symbol("id");
let bigIntNum = 9007199254740991n; // bigint
// typeof Operator
console.log("Type of str:", typeof str);
console.log("Type of num:", typeof num);
console.log("Type of bool:", typeof bool);
console.log("Type of n:", typeof n); // object (this is a known quirk in JavaScript)
console.log("Type of u:", typeof u);
console.log("Type of sym:", typeof sym);
console.log("Type of bigIntNum:", typeof bigIntNum);

// Non-primitive data types: object, array, function
let obj = { name: "Tanya", age: 21 }; // object
let arr = [1, 2, 3, 4, 5]; // array
function greet() { // function
    return "Hello!";
}

// Type Coercion (Auto-Conversion)
"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN

// Falsy values:
// false , 0 , "" , null , undefined , NaN
// Everything else is truthy, including:
// "0" , "false" , [] , {} , function(){}

// -------------------------------------------------------------------------------------------------------

// Operators in javascript
// Arithmetic Operators: +, -, *, /, %, ++, --
let a = 10;
let b = 3;
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.3333
console.log("a % b =", a % b); // 1
console.log("++a =", ++a); // 11
console.log("--b =", --b); // 2

// Assignment Operators: =, +=, -=, *=, /=  
let c = 5;
c += 2;
console.log("c after c += 2:", c); // 7
c *= 3;
console.log("c after c *= 3:", c); // 21

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
console.log("5 == '5':", 5 == '5'); // true (loose equality)
console.log("5 === '5':", 5 === '5'); // false (strict equality)
console.log("5 != '5':", 5 != '5'); // false
console.log("5 !== '5':", 5 !== '5'); // true
console.log("10 > 3:", 10 > 3); // true
console.log("10 < 3:", 10 < 3); // false
console.log("10 >= 10:", 10 >= 10); // true
console.log("10 <= 9:", 10 <= 9); // false

// Logical Operators: &&, ||, !
let x = true;
let y = false;
console.log("x && y:", x && y); // false 
console.log("x || y:", x || y); // true

// Unary Operators +, -, ++, --

// Ternary Operator (Conditional)
// condition ? valueIfTrue : valueIfFalse

// -------------------------------------------------------------------------------------------------------
// Conditional Statements: if, else if, else, switch

// Example using if, else if, else
let marks = 78;
if (marks >= 90) {
console.log("A");
} else if (marks >= 75) {
console.log("B");
} else {
console.log("C");
}

// Example using switch
let fruit = "apple";
switch (fruit) {
case "banana":
console.log("Yellow");
break;
case "apple":
console.log("Red");
break;
default:
console.log("Unknown");
}

// if statement with return
function checkAge(age) {
    if (age < 18) return "Denied";
    return "Allowed";
}

// -------------------------------------------------------------------------------------------------------
// loops in javascript
// example using for loop
for(let i=1; i<=5; i++){
    console.log("Thank you universe",i);
}

// example using while loop
let i = 1;
while(i<=5){
    console.log("Thank you universe for everything",i);
    i++;
}

// example using do-while loop
let j = 1;
do{
    console.log("This will run at least once",j);
    j++;
}while(j>=5);

// break and continue statements
for(let k=1; k<=10; k++){
    if(k===6){
        break; // exits the loop when k is 6
    }
    if(k%2===0){
        continue; // skips even numbers
    }
    console.log("Odd number:",k);
}

// -------------------------------------------------------------------------------------------------------