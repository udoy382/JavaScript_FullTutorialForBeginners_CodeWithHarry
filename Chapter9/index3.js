// Introduction to Promises #54


let promise = new Promise(function(resolve, reject) {
    alert("Hello")
    resolve(56)
})


console.log("Hello One")

setTimeout(() => {
    console.log("Hello in 2 seconds")
    console.log("Hello two")
}, 2000);

console.log("My name is " + "Udoy")
console.log("Hello Three")


console.log(promise)