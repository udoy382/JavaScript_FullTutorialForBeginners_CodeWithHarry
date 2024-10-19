// JavaScript Chapter 2 - Practice Set #8

// Q1
/*
let age = prompt("What is your age?")
if (age > 10 && age < 20){
    console.log("Your age lies between 10 and 20")
} else{
    console.log("Your age doesn't lies between 10 and 20")
}
*/

// Q2
/*
let age =  prompt("What is your age?")
age = Number.parseInt(age)

switch (age) {
    case 12:
        console.log("Your age is 12")
        break;
    case 13:
        console.log("Your age is 13")
        break;
    case 14:
        console.log("Your age is 14")
        break;
    case 15:
        console.log("Your age is 15")
        break;
    default:
        console.log("Your age is not special")
        break;
}
*/

// Q3
/*
num = prompt("Enter your number");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  console.log("This number is divisible by 2 and 3");
} else {
  console.log("This number is not divisible by 2 and 3");
}
*/

// Q4
/*
num = prompt("Enter your number");
num = Number.parseInt(num);

if (num % 2 == 0 || num % 3 == 0) {
  console.log("This number is divisible by 2 or 3");
} else {
  console.log("This number is not divisible by 2 or 3");
}
*/

// Q5

age = 15
let a = age > 18 ? "You can drive" : "You cannot drive";
console.log(a);
