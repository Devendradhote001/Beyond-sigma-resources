// Loops...

// print hello 50 times

// entry control
// exit control

// for loop

// for(kaha se chalna hai, kaha tak chalna hai, kese chalnahai ){}

// for (let i = 0; i < 50; i++) {
//   console.log("hey..");
// }

// while loop

// let j = 30;

// let name = "Rahul";

// while (j < 30) {
//   // body
//   console.log("hello");
//   j++;
// }

// do while -> hamesha ek baar to cahlunga

// let i = 30;

// do {
//   console.log("hello");
//   i++;
// } while (i < 30);

// continue -> skip the iteration
// break -> loop ko tod do.

// for (let i = 1; i < 21; i++) {
//   if (i === 15) {
//     break;
//   }

//   console.log(i);
// }

// find the prime numbers in between 1-50

// for (let num = 2; num <= 50; num++) {
//   let isPrime = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }

// Multiplication table

// let number = 78;

// for (let num = 1; num <= 10; num++) {
//   console.log(`${number} x ${num} = ${number * num}`);
// }

// *
// **
// ***
// ****
// *****

for (let row = 1; row <= 9; row++) {
  let pattern = "";

  for (let i = 1; i <= row; i++) {
    pattern += "*";
  }
  console.log(pattern);
}
