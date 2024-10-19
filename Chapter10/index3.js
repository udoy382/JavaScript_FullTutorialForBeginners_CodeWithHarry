// localStorage & related methods #69


// localStorage.setItem("name", "Udoy")

let key = prompt("Enter key you wnat to set")
let value = prompt("Enter value you wnat to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)


/*
if (key == "red" || key == "blue"){
    localStorage.removeItem(key)
}
*/


/*
if (key == 0){
    localStorage.clear()
}
*/