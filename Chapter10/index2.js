// Cookies in JavaScript #68



console.log(document.cookie)
document.cookie = "name=udoy436"
document.cookie = "name2=udoy436"
document.cookie = "name=sara2299"

// let key = prompt("Enter your key")
// let value = prompt("Enter your value")
// document.cookie = `${key} = ${value}`

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`   // for decode [decodeURIComponent("a%3B%3B")]

// document.cookie = "1=2;3=4"

console.log(document.cookie)
