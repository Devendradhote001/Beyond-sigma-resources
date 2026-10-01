// if else elseif

// if else only checks conditions (true/ false (+ = < >rest all operators))

// !! for checking the truthy and falsy values

// if marks is above 90 -> A grade
// if marks is above 75-89 -> B grade
// if below 75 then we will give them C grade

// let marks = 59;

// if (marks >= 90) {
//   console.log("A grade");
// } else if (marks >= 75) {
//   console.log("B grade");
// } else if (marks >= 60) {
//   console.log("C grade");
// } else {
//   console.log("You are failed");
// }

// switch

// switch only checks the actual value

let marks = 75;

switch (marks) {
  case 90:
    console.log("A grade");
    break;
  case 75:
    console.log("B grade");
    break;
  case 60:
    console.log("C grade");
    break;
  default:
    console.log("you are failed");
}
