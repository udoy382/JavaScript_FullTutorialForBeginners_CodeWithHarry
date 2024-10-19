// Map, Filter & Reduce in JavaScript #20

/*
let arr = [45, 23, 67];
// console.log(arr)

// Array map methods ~

let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  //   return value + 1;
  return value + index;
});

console.log(a);
*/

/*
let arr2 = [45, 23, 43, 54, 0, 1, 3, 4];

let a2 = arr2.filter((a) => {
  return a < 10;
});

console.log(a2);
*/

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newarr3 = arr3.reduce((udoy, sara) => {
  return udoy + sara;
});

console.log(newarr3);
