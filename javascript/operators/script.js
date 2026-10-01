// Operators--;

// 1. Arithmetic operators -
// + - * / % **

// +
// console.log(50 + 90) - 140
// console.log(50 + "hello"); - 50hello

// -
// console.log(70 - 60); - 10
// console.log("70" - 60) - 10
// console.log(70 - "hey.."); - NaN

// *
// console.log("90" * "2"); - 180
// console.log("90" * "h") - NaN

// /
// console.log(20/4) - 5
// console.log("20" / "h"); - NaN

// %
// console.log(20 % 3); - 2
// console.log("20" % 9); - 2
// console.log("h" % 6); -NaN;

// **
// console.log(3 ** 4); -> 3 x 3 x 3 x 3 -> 81
// console.log("8" ** 4) -> 4096
// console.log("h" ** 7); -> NaN

// -----------------

// 2. Comparison Operators - hamesha result boolean me ayega true/false
// < > <= >= == === != !==

// truthy -> rest all is truthy values
// falsy -> null undefined false 0 -0 0n "" NaN document.all

// when comparing, if any of value is not comparable then it will
// find only one truthy values and returns the true result

// console.log("" > ""); -> false
// console.log(" " > "") -> one value is truthy so output will be true

// <=
// console.log(8 >= 9);

// ==
// console.log(8 == "8"); /true == only compares values
// console.log(8 === "8"); /false === this is for strictly checking

// ! not -> opposite everything

// console.log(!false);

// !=

// console.log(10 !== 10);
// console.log("apple" != "apple");

// ----------------------

// 3. Logical Operators -
// && || !

// if(true){it works} if block hamesha true condition me chalega
// else{
// if condition is false then else will work}

// club entry
// requirements- age 18+, id hona chaiye

// && it will check all true values
// || it will check only one true condition

// let age = 17;
// let id = false;

// if (age >= 18 || id) {
//   console.log("access granted");
// } else {
//   console.log("access denied");
// }

// !
// if (!18 >= 18) {
//   console.log("ok fine");
// } else {
//   console.log("not fine");
// }

// 4. Assignment Operators -
// = += -= /= *= %=

// let a = []

// let sum = 10;
// sum %= 5;
// console.log(sum);

// 5. Unary Operators -
// + - ++ -- typeof delete

// let sum = 0;
// console.log(sum--);

// 6. Ternary Operators -
// ? :

// 0 ? console.log("hello") : console.log("bye");

