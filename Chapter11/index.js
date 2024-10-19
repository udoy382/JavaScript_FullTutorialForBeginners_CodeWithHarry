// Protypes and __proto__ in JavaScript #75


let a = {
    name2: "Udoy",
    language: "JavaScript",
    run: ()=>{
        alert("run 1")
    }
}

console.log(a)
// console.log(a.toString)
// console.log(a.valueOf)


let p = {
    run: ()=>{
        alert("run 2")
    }
}

p.__proto__ = {
    name: "Sara"
}

a.__proto__ = p
a.run()
console.log(a.name)