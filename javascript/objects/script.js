// objects..

// let student = {
//   name: "Rahul verma",
//   age: 16,
//   houseNo: 15,
//   fathersName: "Ramesh verma",
//   mothersName: "Arunima verma",
//   street: "Saket kunj",
// };

// accessibility

// 1. . dot notation
// console.log(student.fathersName); // Ramesh verma

// 2. [] Bracket notation-> used for accessing dynamic values

// let fn = "name";

// console.log(student[fn]);

// let student = {
//   name: "Rahul verma",
//   age: 17,
//   fathersName: "Ramesh verma",
//   mothersName: "Arunima verma",
//   address: {
//     street: "Saket kunj",
//     houseNo: 34,
//     city: "Patna",
//     state: "Bihar",
//   },
// };

// safe delete
// if (student.age) {
//   console.log("working..");
//   delete student.age;
// }

// console.log(student);

// access all the keys of my object
// let result = Object.keys(student);
// console.log(result);

// via for in

// for (let keys in student) {
//   console.log(keys);
// }

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i], student[result[i]]);
// }

// forEach() ->  ye bhi callback accept krta hai bsss return
//  nahi krta kuch bhii

// result.forEach((val) => {
//   console.log(val, student[val]);
//   return 10;
// });

// for adding new key value
// student.sports = "BaseBall";

// // for updating existing key
// student.age = 90;

// let n = "name";

// console.log(student);

// practice------

// let user = {
//   name: "Rahul",
//   age: 21,
//   city: "Bhopal",
// };

// 1. Perform these operations

// Update city to Delhi
// Add email
// Add isVerified
// Print complete object

// user.city = "Delhi";

// user.email = "rahul@gmail.com";

// user.isVerified = true;

// console.log(user);

// 2. Delete the password property and print the object.

// let user = {
//   name: "Rahul",
//   age: 21,
//   city: "Bhopal",
//   password: "12345",
// };

// delete user.password;

// safe delete
// if (user.password) {
//   delete user.password;
// }

// console.log(user);

// 3.Create an object named user.

// Store  -> name, age, city, email, isLoggedIn

// let user = {
//   name: "John doe",
//   age: 34,
//   city: "NYC",
//   email: "john@gamil.com",
//   isLoggedIn: true,
// };

// Then perform the following tasks:
// Print user name
// Print city
// Change city
// Add phone number
// Delete email
// Print final object

// console.log(user.name);

// user.city = "Singapore";

// console.log(user.city);

// user.phone = "53457345345";

// if (user.email) {
//   delete user.email;
// }

// console.log(user);

// 4. Instagram Profile

// Create userProfile and add

// username, followers, following, posts, verified,

//  Perform
// Increase followers by 500
// Increase posts by 1
// Add bio
// Delete following
// Print Profile

// let userProfile = {
//   username: "binod",
//   followers: 56,
//   following: 67,
//   posts: 2,
//   isVerified: true,
// };

// userProfile.followers += 500;
// userProfile.posts += 1;
// userProfile.bio = "i m the creator of this world";
// if (userProfile.following) {
//   delete userProfile.following;
// }

// console.log(userProfile);

// Object methods..

// let obj = {
//   name: "Varun",
//   age: 89,
//   greet: function () {
//     console.log("i am a method");
//     return 10;
//   },
// };

// console.log(obj.greet());

// Object.entries()

let userProfile = {
  username: "binod",
  followers: 56,
  following: 67,
  posts: 2,
  isVerified: true,
};

// let result = Object.entries(userProfile);
// console.log(result);

// Object.keys()

// let result = Object.keys(userProfile);
// console.log(result);
// Object.values()

// let result = Object.values(userProfile);
// console.log(result);

// Object.freeze();

Object.freeze(userProfile);

userProfile.username = "Rio";
delete userProfile.followers;
console.log(userProfile);
