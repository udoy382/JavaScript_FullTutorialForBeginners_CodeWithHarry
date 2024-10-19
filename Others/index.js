// Regular Expressions in JavaScript #99

// [https://regexr.com/]

// const regex = ""
// const text = "Udoy is very very nice awesone nice very boy"
// console.log(text.replace("very", "VERY"))


// const regex = /very/g
const regex = /(Udoy){2}/gi
const text = "Udoy is very very nice awesone nice very boy UdoyUdoy"
console.log(text.replace(regex, "VERY"))