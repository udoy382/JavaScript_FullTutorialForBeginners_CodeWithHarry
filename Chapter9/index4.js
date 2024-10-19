// Promise, then() and catch() #55

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    alert("I am a promise and I am fullfilled");
    // alert("I am a promise and I am rejected")
    resolve(true);
    // reject(new Error("I am an error"))
  }, 4000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // alert("I am a promise and I am fullfilled")
    alert("I am a promise and I am rejected");
    // resolve(true)
    reject(new Error("I am an error"));
  }, 4000);
});

// console.log(p1)
// console.log(p2)

// To get the value :
// p1.then((value) => {
//   console.log(value);
// });

// p2.then((value)=>{
//     console.log(value)
// })

// To catch the error :
// p2.catch((error) => {
//   console.log("some error occurred in p2");
// });


p2.then((value)=>{
    console.log(value)
}, (error)=>{
    console.log(error)
})