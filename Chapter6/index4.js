// JavaScript alert, prompt & confirm #27


// alert("Hello Your Scripts Work!")

alert("Enter the value of a")
// let a = prompt("Enter a here")
let a = prompt("Enter a here", "436")
a = Number.parseInt(a)

// document.write(a)

alert("You entered a of type " + (typeof a))

let write = confirm("Do you wnat to  write it to the page ?")

if (write){
    document.write(a)
} else{
    document.write("Please allow me to write")
}
