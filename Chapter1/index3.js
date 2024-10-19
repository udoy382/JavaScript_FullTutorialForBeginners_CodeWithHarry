// Primitives and Objects in JavaScript #4


// There are 7 primitives datatype ==>>
/*
N = NULL
N = NUMBER
S = SYMBOL
S = STRING
B = BOOLEAN
B = BIGINT
U = UNDEFINED
*/


let a = null;
let b = 436;
let c = true; // can also be false
let d = BigInt("5455");
let e = "Udoy";
let f = Symbol("I am a nice symbol");
let g = undefined;
let h // this also show undefined


console.log(a, b, c, d, e, f, g, h)
console.log(typeof d)

const item = {
    "Udoy": true,
    "Sara": "Love",
    "Diba": 01,
    "Mitu": undefined
}

console.log(item["Udoy"])
console.log(item["Sara"])
console.log(item["Sadiya"]) // this show `undefined` cause name `Sadiya` not defiend in item