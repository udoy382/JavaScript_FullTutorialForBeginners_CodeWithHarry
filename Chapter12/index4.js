// Hoisting in JavaScript #89

/*
// let a;

// Following two lines will run seccessfully due to JavaScript hoisting
console.log(a);

greet(); // we can declare this on top of the functon

function greet() {
    console.log("Good morning!");
}

// var a = 9; // Declaration hoisted to the top but initialization is not
// let a = 9;
const a = 9;

console.log(a);
*/

console.log(a);

greet();

const greet = () => {
  console.log("Good Morning");
};

var a = 9;
console.log(a);
