// JavaScript Chapter 6 - Practice Set #29


// Q1
/*
user = prompt("Enter your age")

user = Number.parseInt(user)

if (user < 18){
    alert("Your age is less than 18. You cannot drive.")
} else if (user >= 18) {
    alert("Congratualtion! You can drive.")
}
*/


// Q2
/*
let age = prompt("Enter your age")
age = Number.parseInt(age)

let runAgain  = true;

const canDrive = (age) => {
    return age >= 18?true:false
}

while(runAgain){
    let age = prompt("Enter your age")
    age = Number.parseInt(age)

    if (age < 18){
        alert("Your age is less than 18. You cannot drive.")
    } else if (age >= 18) {
        alert("Congratualtion! You can drive.")
    }

    runAgain = confirm("Do you want to play again ?")
}
*/


// Q3
/*
let number = prompt("Enter your number")
number = Number.parseInt(number)

if (number > 4) {
    location.href = "https://www.google.com"
}
*/

let color = prompt("Enter the page background color")

document.body.style.background = color;