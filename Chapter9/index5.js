// Promise Chaining .then() calls #56

/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolve after 2 seconds");
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 2000);
  });
  return p2;
}).then((value) => {
  console.log("We are done");
});
*/

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(1);
      script.onerror = () => {
        reject(0);
      };
    };
  });
};

let p1 = loadScript("https://localhost:5500/Chapter9/index5.html");
p1.then((value) => {
  console.log(value);
});
