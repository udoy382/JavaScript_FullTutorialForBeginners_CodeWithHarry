// setInterval and setTimeout in JavaScript #46

document.write("Hello");

const sum = (a, b) => {
  console.log("yes I am running " + (a + b));
  a + b;
};

setTimeout(sum, 1000, 1, 2)


/*
setInterval(function(){
    alert("setInterval")
}, 3000)
*/


/*
let a = setTimeout(function () {
  alert("I am inside of setTimeout");
}, 5000);

let b = prompt("Do you want to run the setTimeout?");
if ("n" == b) {
  clearTimeout(a);
}

console.log(a);
*/

