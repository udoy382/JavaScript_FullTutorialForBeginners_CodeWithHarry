// Destructuring assignment and spread Operator #87

// let arr = [3, 5, 8, 9, 10, 11, 12, 13]
// let [a, b, c, d, ...rest] = arr

// No need to do this:
// let a = arr[0]
// let b = arr[1]

// console.log(a, b, c, d, rest)


// let arr = [3, 5, 8, 9, 10, 11, 12, 13];
// let [a, ,b , ...rest] = arr;
// console.log(a, b, rest);


// let {a, b} = {a:1, b:5}
// console.log(a, b);


// Spread Operator:
let arr1 = [3, 4, 5]
let obj1 = {...arr1}
console.log(obj1)


function sum(v1, v2, v3){
    return v1 + v2 + v3
}
console.log(sum(...arr1))


let obj2 = {
    name: "Udoy",
    company: "Google",
    address: "Habiganj"
}
console.log({...obj2, name: "Sara", company:"NASA"}) // // This will print the obj2 object with changing any values
console.log({name: "Sara", company:"NASA", ...obj2}) // This will print the obj2 object without changing any values