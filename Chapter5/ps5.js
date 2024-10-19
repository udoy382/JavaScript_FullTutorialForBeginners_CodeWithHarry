// JavaScript Chapter 5 - Practice Set #21

// Q1
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = prompt("Enter a number");

a = Number.parseInt(a);

arr.push(a);
console.log(arr);
*/

// Q2
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a;

do {
  a = prompt("Enter a number");
  a = Number.parseInt(a);
  arr.push(a);
} while (a != 0);

console.log(arr);
*/

// Q3
/*
let arr = [1, 2, 3, 10, 20, 30, 40, 50, 60, 70, 80, 90, 55, 66, 77, 8];

let n = arr.filter((x) => {
  return x % 10 == 0;
});

console.log(n);
*/

// Q4
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let n = arr.map((x) => {
  return x * x
});

console.log(n);
*/

// Q5
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let n = arr.reduce((x1, x2) => {
  return x1 * x2
});

console.log(n);
*/