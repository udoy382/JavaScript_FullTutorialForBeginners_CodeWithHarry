// Walking the DOM #31 --> Accessing Children of an Element #32


// Parents --> Siblings --> Childs


console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

// Convert childNodes to an Array ~
let arr = Array.from(document.body.childNodes)
console.log(arr)