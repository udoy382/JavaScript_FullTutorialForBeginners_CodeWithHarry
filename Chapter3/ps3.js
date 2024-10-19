// JavaScript Chapter 3 - Practice Set on Loops and Funcitons #12

// Q1

/*
let marks = {
    harry: 90,
    udoy: 99,
    sara: 89,
    diba: 32
}

for (let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
*/

// Q2

/*
let marks = {
    harry: 90,
    udoy: 99,
    sara: 89,
    diba: 32
}

for (let key in marks){
    console.log("The marks of " +  key + " are " + marks[key])
}
*/

// Q3

/*
let cn = 4;
let i;

while (i != cn) {
  i = prompt("Enter a number");
  console.log("Try again")
}
console.log("You have entered a correct number")
*/

// Q4


const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7))