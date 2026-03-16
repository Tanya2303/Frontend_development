// printing hello in console
console.log("helloo");

// alerting hello in alert box - alert for messages to the user
alert("helloo");

// warning hello in console
console.warn("helloo");

// error hello in console
console.error("helloo");

// confirming hello in confirm box - confirm for asking user to confirm something, returns true if user clicks "OK" and false if user clicks "Cancel"
confirm("helloo");

//prompting hello in prompt box - prompt for asking user to input something, returns the input value as a string
prompt("helloo"); 

// dynamic and static languages
// dynamic language - we can change the type of data stored in a variable
// static language - we cannot change the type of data stored in a variable

// dynamic language example
let x = 10; // x is a number
console.log(x); // 10

x = "hello"; // x is now a string
console.log(x); // hello

// static language example (in languages like Java, C++)
// int y = 10; // y is a number
// System.out.println(y); // 10

// y = "hello"; // error: cannot assign a string to an int variable
// System.out.println(y); // error: cannot print a string variable as an int

// arthimatic operators
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Assignment Operators (=, +=, -=, *=, /=, %=)
let d1 = 10;

d1 += 5; // d1 = d1 + 5
console.log(d1); // 15

d1 -= 3; // d1 = d1 - 3
console.log(d1); // 12

d1 *= 2; // d1 = d1 * 2
console.log(d1); // 24

d1 /= 4; // d1 = d1 / 4
console.log(d1); // 6

d1 %= 4; // d1 = d1 % 4
console.log(d1); // 2    

// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
let en = 10;
let f = "10";

console.log(en == f); // true (loose equality: compares values after type coercion)
console.log(en === f); // false (strict equality: compares values and types)
console.log(en != f); // false (loose inequality: compares values after type coercion)
console.log(en !== f); // true (strict inequality: compares values and types)
console.log(en > 5); // true
console.log(en < 15); // true
console.log(en >= 10); // true
console.log(en <= 9); // false

//Logical Operators (&&, ||, !)
let g = true;
let h = false;

console.log(g && h); // false (logical AND: true if both operands are true)
console.log(g || h); // true (logical OR: true if at least one operand is true)
console.log(!g); // false (logical NOT: inverts the truth value)
console.log(!h); // true (logical NOT: inverts the truth value)


// increment and decrement operators
let c = 10;

console.log(c++); // 10 (post-increment: returns the value before incrementing)
console.log(c); // 11

console.log(++c); // 12 (pre-increment: increments the value before returning it)
console.log(c); // 12

console.log(c--); // 12 (post-decrement: returns the value before decrementing)
console.log(c); // 11

console.log(--c); // 10 (pre-decrement: decrements the value before returning it)
console.log(c); // 10


// variable declaration keywords
// var - function scoped, can be redeclared and updated
// let - block scoped, cannot be redeclared but can be updated
// const - block scoped, cannot be redeclared and cannot be updated

// difference between var, let and const
var d = 10;
console.log(d); // 10

var d = 20; // redeclaration allowed
console.log(d); // 20

d = 30; // update allowed
console.log(d); // 30

let e = 10;
console.log(e); // 10 

// Variable Hoisting in JavaScript
console.log(f); // undefined (due to hoisting, var declarations are moved to the top of their scope)
var f1 = 10;
console.log(f); // 10

// console.log(g); // ReferenceError: Cannot access 'g' before initialization (let and const are not hoisted in the same way as var)
let g1 = 20;
console.log(g); // 20

// console.log(h); // ReferenceError: Cannot access 'h' before initialization (let and const are not hoisted in the same way as var)
const h1 = 30;
console.log(h); // 30


//Primitive Data Types in JavaScript
// 1. Number - represents numeric values (both integers and floating-point numbers)
let num = 42;
console.log(num); // 42

// 2. String - represents a sequence of characters enclosed in single quotes, double quotes, or backticks
let str = "Hello, World!";
console.log(str); // Hello, World!

// 3. Boolean - represents a logical value that can be either true or false
let bool = true;
console.log(bool); // true

// 4. Null - represents the intentional absence of any object value
let nullValue = null;
console.log(nullValue); // null

// 5. Undefined - represents a variable that has been declared but has not been assigned a value
let undefinedValue;
console.log(undefinedValue); // undefined

// 6. Symbol - represents a unique and immutable primitive value that can be used as a key for object properties
let sym = Symbol("unique");
console.log(sym); // Symbol(unique)

// 7. BigInt - represents integers with arbitrary precision, allowing for numbers larger than the maximum safe integer in JavaScript
let bigInt = 9007199254740991n; // n at the end denotes a BigInt literal
console.log(bigInt); // 9007199254740991n

// Reference (Relative) Data Types in JavaScript
// 1. Object - represents a collection of key-value pairs, where the keys are strings (or symbols) and the values can be of any type
let obj = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(obj); // { name: 'Alice', age: 30, isStudent: false }

// 2. Array - represents an ordered list of values, where each value can be of any type
let arr = [1, "hello", true, null];
console.log(arr); // [ 1, 'hello', true, null ]

// Condition Operators in JavaScript
// 1. Ternary Operator (condition ? expressionIfTrue : expressionIfFalse)
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes

// 2. Nullish Coalescing Operator (??) - returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise returns the left-hand side operand
let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Default Value

// 3. Optional Chaining Operator (?.) - allows you to access properties of an object without having to check if the object is null or undefined
let user = {
    name: "Bob",
    address: {
        city: "New York"
    }
};
console.log(user?.address?.city);

