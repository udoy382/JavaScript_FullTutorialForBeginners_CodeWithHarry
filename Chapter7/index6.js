// matches, closest and contains #37

// DOM Searching Tutorial ~


// This is not a good practice for search element like this ~
// console.log(id1)
// console.log(id2)


let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(sp1)

console.log(id1.matches(".class"))
console.log(id1.matches(".box"))

console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))

console.log(id2.contains(sp1))