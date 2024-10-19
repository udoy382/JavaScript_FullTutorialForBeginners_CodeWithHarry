// The Error Object & Custom Errors #61

/*
try {
    console.log(udoy)
    // throw new Error("Udoy is not good")
    throw new ReferenceError("Udoy is not good")
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
*/

try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age > 150){
        throw new ReferenceError("This is probably not true")
    }
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("This script is still running")