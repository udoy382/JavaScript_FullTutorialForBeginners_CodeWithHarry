// Handling Browser Events #48

let x = function (e) {
    console.log(e)
  alert("Hello World 1");
};

let y = function (e) {
  alert("Hello world 2");
};

document.getElementById("btn").addEventListener("click", x);
document.getElementById("btn").addEventListener("click", y);

// document.getElementById("btn").addEventListener("click", function (e) {
//   alert("Hello World 1!");
// });

// document.getElementById("btn").addEventListener("click", function (e) {
//   alert("Hello World 2!");
// });

let a = prompt("What is your favorite number ?");

// if (a == "2") {
//   document.getElementById("btn").removeEventListener("click", function (e) {
//     alert("Hello World!");
//   });
// }

if (a == "2") {
  document.getElementById("btn").removeEventListener("click", x);
}
