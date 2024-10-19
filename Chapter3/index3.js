// Function in JavaScript #11


let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is ", 1 + (a + b) / 2)
console.log("Done")
console.log("Average of b and c is ", 1 + (b + c) / 2)
console.log("Done")
console.log("Average of a and c is ", 1 + (a + c) / 2)
console.log("Done")



function onePlusAvg(x, y) {
    console.log("Done")
    // return 1 + (x + y) / 2
    return Math.round(1 + (x + y) / 2)
}

console.log("One plus average a and b is ", onePlusAvg(a, b))
console.log("One plus average b and c is ", onePlusAvg(b, c))
console.log("One plus average a and c is ", onePlusAvg(a, c))


const hello = ()=>{
    console.log("Hey! How are you. I am to fine yaar")
}

hello()