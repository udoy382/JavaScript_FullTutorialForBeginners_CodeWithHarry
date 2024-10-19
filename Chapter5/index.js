// Introduction to Arrays # 16


let marks_class_12 = [19, 62, 83, 94, null, false, "Not Present"]

console.log(marks_class_12)

// console.log(marks_class_12[0])
// console.log(marks_class_12[1])
// console.log(marks_class_12[3])
// console.log(marks_class_12[4])
// console.log(marks_class_12[5])
// console.log(marks_class_12[6])
// console.log(marks_class_12[7]) // Will be undefined bacause index 7 does not exist

console.log("The lenght of marks_class_12 is ", marks_class_12.length)


// marks_class_12[8] = "Udoy" // Adding a new value to the array
marks_class_12[0] = 99 // Changing the value of an array

console.log(marks_class_12)

// console.log(typeof marks_class_12)


// Quic Quiz ~

/*
for (let i of marks_class_12){
    console.log(i)
}
*/