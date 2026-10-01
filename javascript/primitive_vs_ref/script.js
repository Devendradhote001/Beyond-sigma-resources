// primitive types
// strings
// numbers,
// booleans,
// null,
// undefined,
// symbol

// reference type-
// Arrays
// objects,
// functions,

// let a = 10;

// let b = a;
// b = 89;

// console.log(a);
// console.log(b);

// -----

// spread operator -> ... -> reference ki saari VALUES ko copy krna

// let obj1 = {
//   name: "Arun",
//   age: 78,
// };

// let obj2 = { ...obj1 };
// obj2.name = "Ritik";

// console.log("obj2", obj2);
// console.log("obj1", obj1);

let obj = {
  name: "Rakhi",
  age: 43,
  address: {
    street: "times-square",
    city: "NYC",
  },
};

// shallow copy -> level 1 copy

let obj2 = { ...obj };

obj2.name = "stephan";
obj2.address.street = "Manhatton";

console.log(obj);
console.log(obj2);
