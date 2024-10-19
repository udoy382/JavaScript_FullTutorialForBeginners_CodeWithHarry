// Arrow Function Revisited #91


// const sayHello = () =>{
//     console.log("Hello"); console.log("Hi")
// }

// const sayHello = (name) => console.log("Hello " + name)
// const sayHello = name => console.log("Hello " + name)
const sayHello = (name, greating) => console.log(greating + " " + name)

// sayHello("Udoy", "Good Afternoot")


const x ={
    name: "Udoy",
    role: "Js Developer",
    exp: 2,

    show: function(){
        // console.log(`The name is ${this.name}\n the role is ${this.role}`)

        let that = this
        console.log(this)
        // setTimeout(function(){
        //     console.log(this)
        //     // console.log(`The name is ${this.name}\n the role is ${this.role}`)
        //     console.log(`The name is ${that.name}\n the role is ${that.role}`)
        // }, 2000)

        setTimeout(()=>{
            console.log(`The name is ${this.name}\n the role is ${this.role}`)
        }, 2000)
    }
}


// console.log(x.name, x.exp)
x.show()