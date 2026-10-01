// Functions -
//     -A function is a reusable block of code that performs a specific
//      task whenever it is called.

// function greet() {
//   console.log("hey.. good morning..");
// }

// function quote() {
//   let name = "Piyush";

//   console.log(`hey ${name}, good afternoon`);
// }

// make a function which accepts two values and give us sum of that

// this is a original or base function
// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let sum1 = sum(40, 67);

// console.log(sum1);

// console.log(sum(20, 20));

// types of functions

// before es6- (old functions)

// 1. function statement

// function greet() {
//   console.log("good morning..");
// }

// greet();

// 2. function expression

// let greet = function () {
//   console.log("good evening..");
// };

// greet();

// 3. anonymous function

// function (){
//     console.log("good..")
// }

// after es6- new version

// 1. fat arrow function
// let greet = () => {
//   console.log("hello i m new function");
// };

// greet();

// 2. fat arrow with implicit return

// let sum = (n1, n2) => n1 + n2;

// let res = sum(34, 67);
// console.log(res);

// 3. fat arrow with implicit return with one parameter

// let abcd = a => a;

// let res = abcd(345);
// console.log(res);

// IIFE - Immediately invoked function

// (function () {
//   console.log("good i m anonymous");
// })()

// FAT ARROW FUNCTION

() => {};

// Practice questions--

// 1. Create a function named welcomeStudent that accepts a student's
//  name as a parameter and prints a welcome message.

// function welcomeStudent(name) {
//   console.log(`Hey ${name}, Welcome`);
// }

// welcomeStudent("Shashank");
// welcomeStudent("Ritika");
// welcomeStudent("Rahul");

// ----------------

// 2. Create a function named checkEvenOdd that accepts a number as a
//  parameter and prints whether the number is Even or Odd.

// let checkEvenOdd = (number) =>{
//     if(number % 2 === 0){
//         console.log(`${number} is Even`)
//     } else{
//         console.log(`${number} is Odd`)
//     }
// }

// checkEvenOdd(9)
// checkEvenOdd(567)
// checkEvenOdd(4)

// ----------------

// 3. Create a function named printTable that accepts a number as a
//  parameter and prints its multiplication table.

// let printTable = (number) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// };

// printTable(89);
// printTable(9);

// ----------------
