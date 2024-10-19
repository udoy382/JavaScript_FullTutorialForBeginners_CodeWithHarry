// IIFE - Immediately Invoked Function Expressions #86

let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 4000);
  });
};

/*
let f = async () => {
  let b = await a(); // resolve the value of a
  console.log(b);
  let c = await a(); // resolve the value of a
  console.log(c);
  let d = await a(); // resolve the value of a
  console.log(d);

//   console.log(b, c, d);
};

f();
*/

(async () => {
  let b = await a(); // resolve the value of a
  console.log(b);
  let c = await a(); // resolve the value of a
  console.log(c);
  let d = await a(); // resolve the value of a
  console.log(d);

//   console.log(b, c, d);
})();

console.log(d)