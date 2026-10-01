// Asynchronous -> aesa code jo synchronous ke baad execute hoga.

// Synchronous -> js ka core code jo sabse pehle chlega.

// console.log("hello");

// let a = 90;

// setTimeout(() => {
//   console.log("timeout");
// }, 3000);

// let name = "pol";

// console.log("byee");

// console.log("Promises");

// // promise is a synchronous code
// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let party = true;

//     if (party) {
//       return resolve({ isParty: true, venue: "Hotel Taj" });
//     }

//     reject("Pese nahi hai..");
//   }, 1000);
// });

// console.log(data);

// data
//   .then((value) => {
//     console.log("then working->", value);
//   })
//   .catch((error) => console.log("catch working->", error));

// Async await

// async function promiseResolve() {
//   try {
//     let response = await data;
//     console.log(data);
//   } catch (error) {
//     console.log("catch block->", error);
//   }
// }

// promiseResolve();

// let resolver = async () => {
//   try {
//     let response = await data;
//     console.log(response);
//   } catch (error) {
//     console.log("error->", error);
//   }
// };

// resolver();

// Fetch-----

// console.log("hello");

// let data = fetch("https://fakestoreapi.com/products");

// data.then((val) => console.log(val)).catch((error) => console.log(error));

// setTimeout(() => {
//   console.log("i m timeout");
// }, 1000);

// console.log(data);

// console.log("end..");

// // hello;
// // promise;
// // end;
// // response;
// // i m timeout

let data = fetch("https://fakestoreapi.com/products");

// data.then((val) => val.json()).then((val) => console.log(val));

// async await

// let resolve = async () => {
//   try {
//     let res = await data;
//     let result = await res.json();
//     console.log(result);
//   } catch (error) {
//     console.log("error in api", error);
//   }
// };

// resolve();

// localstorage

let usersData = [
  {
    name: "Pinky",
    age: 15,
  },
  {
    name: "Raghav",
    age: 20,
  },
];

// set data
localStorage.setItem("name", "Virat kohli");

localStorage.setItem("usersData", JSON.stringify(usersData));

// getDAta
let lsd = localStorage.getItem("usersData");

let originalData = JSON.parse(lsd);
console.log(originalData);

// localStorage.removeItem("usersData");
