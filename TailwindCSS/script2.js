// Age Category Message – Ask the user for their age. If they are
// under 18, print “You are a minor.” If they are between 18 and 60,
// print “You are an adult.” If they are above 60, print “You are a
// senior citizen.”


// const age = prompt("Please enter your age:");
// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age >= 18 && age <= 60) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior citizen.");
// }


// Character Case Checker – Ask the user for a single character. Check if it's uppercase, lowercase, or neither (not a letter).

// const char = prompt("Please enter a single character:");
// if (char.length === 1) {
//     if (char >= 'A' && char <= 'Z') {
//         console.log("The character is uppercase.");
//     } else if (char >= 'a' && char <= 'z') {
//         console.log("The character is lowercase.");
//     } else {
//         console.log("The character is neither uppercase nor lowercase.");
//     }
// } else {
//     console.log("Please enter only a single character.");
// }    


//[* User Greeting – Ask for the user's name and time (24-hour format). Greet them accordingly:
// 5 AM–12 PM: "Good Morning, [Name]!"
// 12 PM–5 PM: "Good Afternoon, [Name]!"
// 5 PM–9 PM: "Good Evening, [Name]!"
// 9 PM–5 AM: "Good Night, [Name]!"

// const name = prompt("Please enter your name:");
// const time = prompt("Please enter the current time (0-23):");
// if (time >= 5 && time < 12) {
//     console.log(`Good Morning, ${name}!`);
// } else if (time >= 12 && time < 17) {
//     console.log(`Good Afternoon, ${name}!`);
// } else if (time >= 17 && time < 21) {
//     console.log(`Good Evening, ${name}!`);
// } else {
//     console.log(`Good Night, ${name}!`);
// }    

//  Multiplication Table – Ask the user for a number and print its multiplication table up to 10.
// const number = prompt("Please enter a number:");
// console.log(`Multiplication Table for ${number}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// Swapping Without Third Variable – Take two numbers from the user and swap their values without using a third variable.
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
// // Swapping using arithmetic operations
// num1 = Number(num1) + Number(num2); // num1 now holds the sum of num1 and num2
// num2 = num1 - num2; // num2 now holds the original value of num1
// num1 = num1 - num2; // num1 now holds the original value of num2
// console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);


// FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.
// const num = prompt("Please enter a number:");
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (num % 3 === 0) {
//     console.log("Fizz");
// } else if (num % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(num);
// }   

//Number Reversal – Take a three-digit number from the user and print its reverse. (Example: 123 → 321).
// const num = prompt("Please enter a three-digit number:");
// if (num.length === 3 && !isNaN(num)) {
//     const reversedNum = num.split('').reverse().join('');
//     console.log(`Reversed number: ${reversedNum}`);
// } else {
//     console.log("Please enter a valid three-digit number.");
// }

//Toggle Case – Ask the user for a word and toggle the case of every character. Example: HeLLo → hEllO.
// const word = prompt("Please enter a word:");
// let toggledWord = "";
// for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     if (char >= 'A' && char <= 'Z') {
//         toggledWord += char.toLowerCase();
//     } else if (char >= 'a' && char <= 'z') {
//         toggledWord += char.toUpperCase();
//     } else {
//         toggledWord += char; // Non-alphabetic characters remain unchanged
//     }
// }
// console.log(`Toggled case word: ${toggledWord}`);   

// Find the Missing Number in a Sequence – Take a list of consecutive numbers (except one missing) and find the missing number. Example: 1, 2, 3, 5 → Missing number is 4.
// const numbers = prompt("Please enter a list of consecutive numbers with one missing (e.g., 1,2,3,5):");
// const numArray = numbers.split(',').map(Number);
// const n = numArray.length + 1; // Total numbers including the missing one
// const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
// const actualSum = numArray.reduce((sum, num) => sum + num, 0); // Sum of provided numbers
// const missingNumber = expectedSum - actualSum;
// console.log(`The missing number is: ${missingNumber}`);

//Convert Number to Words – Take a single-digit number and print it in words (Example: 1 → One, 2 → Two).
// const num = prompt("Please enter a single-digit number:");
// const numToWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
// if (num >= 0 && num <= 9) {
//     console.log(`The number in words is: ${numToWords[num]}`);
// } else {
//     console.log("Please enter a valid single-digit number.");
// }    
