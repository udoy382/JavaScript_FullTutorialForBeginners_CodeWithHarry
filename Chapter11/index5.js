// Constructors in javaScript #79


class Employee{
    login(){
        console.log(`Employee has logged in`)
    }
    logout(){
        console.log(`Employee has logged out`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(5)
        console.log(`One extra is granted`)
        // console.log(`Employee has requested ${leaves + 1} leaves ( + One extra)`)
    }
}


let e = new Employee()
let p = new Programmer()


e.login()
e.requestLeaves(3)

p.requestLeaves(5)