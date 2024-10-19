// JavaScript Console Object #25

console.log("Hello World!");
// console.log(console)

// console.error("Hey this is an error.")

// console.assert(5 > 53)
// console.assert(544 > 53)

// console.clear()

// obj = {a: 1, b:2, c:3}
// console.table(obj)

// console.warn("Hey please don't smoke")

// console.info("Hey this is an important info")

// console.table(console)

// console.time("p1")
// console.timeEnd("p1")

// Example of time with loops ~

console.time("forloop");
for (let i = 0; i < 5; i++) {
  console.log(233);
}
console.timeEnd("forloop");

console.time("whileloop");
let i = 0;

while (i < 5) {
  console.log(233);
  i++;
}

console.timeEnd("whileloop");
