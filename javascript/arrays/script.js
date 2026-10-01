// let name1 = "Rahul";

// let name2 = "Priya";

// let name3 = "Anurag";

// let name4 = "Piyush";

// Array is a data structure used to store multiple values in a
// single variable

// getting values from array
// names[index]

// console.log(names[3]);

// indexing-> jo 0 se start hoti hai ->  0,1,2,3,4,5

// if we want to find length of an array

// let arr = ["rahul", 4, 6, 78, 90, 100];

// Basic methods of array-
// push(); - last me value add karna

// arr.push("at last");

// console.log(arr);

// pop(); - last se value remove krna

// arr.pop();

// console.log(arr);

// shift(); - starting se value remove krna

// arr.shift();
// console.log(arr);

// unshift(); - starting me value add karna

// arr.unshift("start");
// console.log(arr);

// length; - length dena

let numbers = [2, 5, 7, 8, 5, 4, 78, 90, 67, 56, 45];

// console.log(numbers.length);

// get all values from array

// // traversing on array
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(`${numbers[i]} this is Even number`);
//   }
// }

// Multidimensional array-

// let classRoom = [
//   ["priya", "piyush", "pankaj", "Anurag"],
//   ["Ayush", "Anu", "Panthar", "Riyaz"],
//   ["Aman", "Sarthak", "Devendra", "Tanishq"],
// ];

// for (let i = 0; i < classRoom.length; i++) {
//   for (let j = 0; j < classRoom[i].length; j++) {
//     console.log(classRoom[i][j]);
//   }
// }

// let arr = [4, 7, 1, 10, 15, 14, 20, 3, 4, 5, 40, 6, 7, 8, 9];

// 1. Original Array Change Karte Hain (Mutating Methods)
// push();
// pop();
// shift();
// unshift();
// splice(); - delet krna starting index se count tak

// arr.splice(3);
// console.log(arr);

// reverse(); - reverse ulta krna

// arr.reverse();
// console.log(arr);

// sort(); - sort krna acs decs

// arr.sort((a, b) => {
//   //   return b - a; descending order
//   // return a - b Ascending order
// });

// arr.sort((a, b) => a - b);

// console.log(arr);
// ------------------------

// let arr = [4, 7, 1, 10, 15, 14, 20, 3, 4, 5, 40, 6, 7, 8, 9];
// let arr1 = [50, 60, 70];

// 2. New Array Return Karte Hain (Non-Mutating Methods)
// slice() - traverse strt index to end index(given) and return that elems in array

// let result = arr.slice(3, 8);
// console.log(result);

// concat() - 2 arrays ko jod dena

// let result = arr.concat(arr1);

// console.log(result);

// loops use krte hai
// map() - ye kabhi bhi array ki length reduce nahi kar sakta

// let arr = [4, 7, 1, 10, 10, 10, 10, 15, 14, 20, 3, 4, 5, 40, 6, 7, 8, 9];

// let result = arr.map((value, index) => {
//   console.log(index);
//   return value === 7;
// });

// console.log(result);

// filter() - filter can reduces the array length

// let result = arr.filter((value, index) => {
//   return value === 10;
// });

// console.log(result);

// flat()

// let nestedArr = [2, 3, 4, [6, [7, [[[[56]]]]]]];

// flat -> by default sirf level 1 ko flat karta hai

// let result = nestedArr.flat(Infinity);

// console.log(result);

// let arr = [4, 7, 1, 10, 10, 10, 10, 15, 14, 20, 3, 4, 5, 40, 6, 7, 8, 9];

// ------------------------

// 3.Single Value Return Karte Hain
// find(); - single value return krta hai and sirf ek hi value return krega

// let result = arr.find((val) => {
//   return val === 2;
// });
// console.log(result);

// findIndex(); ye kissi bhi value ka index return krega

// let result = arr.findIndex((val) => {
//   return val === 3;
// });

// console.log(result);

// includes(); -> check krega value exist krti hai ya nahi and boolean
// return krta hai

// let str = "Hello people, whats upp";

// let result = str.includes("v");
// console.log(result);

// indexOf(); index return krega

// let result = arr.indexOf(2);
// console.log(result);

// join();

// let arr1 = ["I", "Love", "Sheryians"];

// let result = arr.join(" ");
// console.log(result);

// some(); ek bhi hoga to return true / false

// let abcd = [
//   "Stephan",
//   "Stephan",
//   "Stephan",
//   "Stephan",
//   "Stephan",
//   "Stephan",
//   "Raghav",
//   "Stephan",
// ];

// let findName = "STEPHAN";

// let result = abcd.some((val) => {
//   return val.toLowerCase() === findName.toLowerCase();
// });

// every();

// let result = abcd.every((val) => {
//   return val.toLowerCase() === findName.toLowerCase();
// });
// console.log(result);

// reduce();

let arr = [4, 7, 1, 10, 10, 10, 10, 15, 14, 20, 3, 4, 5, 40, 6, 7, 8, 9];

// sum of all the values present in arrz

// console.log(arr.length);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// let result = arr.reduce((kuchBhi, val) => {
//   return kuchBhi + val;
// }, 0);

// console.log(result);
