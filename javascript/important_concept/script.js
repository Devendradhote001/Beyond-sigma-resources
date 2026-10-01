// console.log("Spread operator");

// definition - Spread Operator (...) expands or copies the elements
//  of an array or the properties of an object into a new place.

// let arr = ["hello", "Spider-man", "Sheryians"];

// let arr2 = ["Coupon", "for", "Sale"];

// let result = [...arr, ...arr2];

// console.log(result);

// console.log("de-structuring");

// let bag = {
//   name: "Vinay",
//   book1: "maths",
//   book2: "Hindi",
//   book3: "Science",
//   book4: "EVS",
// };

// console.log(bag.book1, bag.book3, bag.name);

// let { book1, book3, name } = bag;

// console.log(name, book1, book3);

// const employee = {
//   id: 101,
//   firstName: "Devendra",
//   lastName: "Dhote",
//   age: 24,
//   gender: "Male",
//   email: "devendra@example.com",
//   phone: "+91-9876543210",
//   isActive: true,
//   address: {
//     street: "45 MG Road",
//     city: "Bhopal",
//     state: "Madhya Pradesh",
//     country: "India",
//     pincode: 462001,
//     coordinates: {
//       latitude: 23.2599,
//       longitude: 77.4126,
//     },
//   },
//   company: {
//     name: "CodeX Solutions",
//     department: "Frontend",
//     designation: "React Developer",
//     experience: 2,
//     salary: 750000,
//     joiningDate: "2024-01-15",
//   },
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Tailwind CSS",
//     "Node.js",
//     "MongoDB",
//   ],
//   projects: [
//     {
//       id: 1,
//       name: "E-Commerce Website",
//       tech: ["React", "Redux", "Tailwind"],
//       completed: true,
//     },
//     {
//       id: 2,
//       name: "Employee Management System",
//       tech: ["React", "Express", "MongoDB"],
//       completed: false,
//     },
//   ],
//   education: {
//     graduation: {
//       degree: "B.Tech",
//       college: "ABC Engineering College",
//       year: 2023,
//       cgpa: 8.6,
//     },
//     twelfth: {
//       board: "MP Board",
//       percentage: 82,
//       year: 2019,
//     },
//     tenth: {
//       board: "MP Board",
//       percentage: 88,
//       year: 2017,
//     },
//   },
//   social: {
//     github: "https://github.com/devendra",
//     linkedin: "https://linkedin.com/in/devendra",
//     portfolio: "https://devendra.dev",
//   },
//   hobbies: ["Coding", "Teaching", "Gaming", "Reading", "Traveling"],
//   family: {
//     father: {
//       name: "Ramesh Dhote",
//       age: 54,
//       occupation: "Businessman",
//     },
//     mother: {
//       name: "Sunita Dhote",
//       age: 50,
//       occupation: "Teacher",
//     },
//     siblings: [
//       {
//         name: "Rohit",
//         relation: "Brother",
//       },
//       {
//         name: "Priya",
//         relation: "Sister",
//       },
//     ],
//   },
//   bank: {
//     bankName: "State Bank of India",
//     accountNumber: "123456789012",
//     ifsc: "SBIN0001234",
//     branch: "Bhopal Main",
//   },
//   preferences: {
//     theme: "dark",
//     language: "English",
//     notifications: {
//       email: true,
//       sms: false,
//       push: true,
//     },
//   },
//   achievements: [
//     "Hackathon Winner",
//     "Employee of the Month",
//     "Open Source Contributor",
//   ],
//   emergencyContact: {
//     name: "Rahul Sharma",
//     relation: "Friend",
//     phone: "+91-9988776655",
//   },
//   documents: {
//     aadhaar: "XXXX-XXXX-1234",
//     pan: "ABCDE1234F",
//     passport: null,
//   },
// };

// console.log(employee.age, employee.skills, employee.education);

// let {
//   age,
//   skills,
//   education: { tenth, twelfth },
//   projects,
// } = employee;

// console.log(age, skills, tenth, twelfth, projects);

// console.log("Hof");

// HOF - higher order functions---

// aese functions jo return krenge another function
// let abcd = () => {
//   return () => {};
// };

// accept krenge function
// let greet = (fn) => {
//   fn();
//   return 90;
// };

// here, jo tumne pass kiya hai function vo callback ban gaya hai
// greet(function () {
//   console.log("me callback ki tarah use hua hu");
// });

// these all are Higher order methods
// Array.map(() => {});
// Array.forEach(() => {});
// Array.reduce(() => {});
// ..so on

// console.log("Pure and impure functions..");

// Pure functions - no milawat just uses their own block things
// let greet = () => {
//   let a = 90;
//   let b = 89;
//   console.log("hello good afternoon");
//   return a + b;
// };

// let result = greet();
// console.log(result);

// let a = 10;
// let b = 67;

// impure function - kuki isne bhr ke variables ko access kiya,
// means milawat hui hai
// let sum = () => {
//   console.log("me sum  hu");
//   return a + b;
// };

// let result = sum();
// console.log(result);

// rest operator ->  hamesha function me use hoga

// let sum = (a, b, ...rest) => {
//   console.log(a, b, ...rest);
// };

// sum(56, 78, 67, 78, 90, 67, 4, 5, 6, 7, 8, 90);

// let obj = {
//   name: "pinky",
//   age: 14,
// };

// let { age } = obj;\

// let score = [56, 78];

// let [argentina, india] = score;

// console.log(`score of Argentina is ${argentina}`);
// console.log(`score of india is ${india}`);

// var a = 10;

// let b = 90;

// function greet() {
//   console.log("hello");
// }
// let sum = (a, b) => {
//   return a + b;
// };

// console.log("Closures");

// let outer = () => {
//   console.log("outer executed and removed from callstack");
//   let number = 89;

//   let inner = () => {
//     console.log("i m inner fn", number);
//     let innerest = () => {
//       console.log("innerest number->", number);
//     };

//     return innerest;
//   };

//   return inner;
// };

// outer()()();

// in react -> useState, useEffect

// let counter = () => {
//   let count = 0;

//   return () => {
//     count++;
//     console.log(count);
//   };
// };

// let c1 = counter();

// c1();
// c1();
// c1();
// c1();

// twist

// for (let i = 1; i <= 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

console.log("currying..");

// normal
// let sum = (a, b, c) => a + b + c;

// let result = sum(30, 50, 80);
// console.log(result);

// let sum = (a) => (b) => (c) => a + b + c;

// let result = sum(34)(90)(89);
// console.log(result);

// infinite currying function
// let sum = (a) => {
//   return (b) => {
//     if (b !== undefined) {
//       return sum(a + b);
//     }

//     return a;
//   };
// };

// let result = sum(10)(20)(30)(78)(98)(45)(78)(90)();
// console.log(result);

// -----------------------------

// predict the output

// // Q1
// function f() {
//   let x = 10;
//   return () => console.log(++x);
// }

// const a = f();
// a();
// a();

// // Q2;
// const arr = [];
// for (var i = 0; i < 3; i++) arr.push(() => i);
// console.log(arr.map((fn) => fn())); // ?






// Q3
// const add = (a) => (b) => a + b;
// const add5 = add(5);
// console.log(add5(3), add5(10)); // ?
