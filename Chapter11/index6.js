// Constructors in JavaScript #80

// Constructors in javaScript #79

class Employee {
    constructor(name){
        console.log(`${name} Employee's constructor is here`)
        this.name = name
    }
  login() {
    console.log(`Employee has logged in`);
  }
  logout() {
    console.log(`Employee has logged out`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`);
  }
}

class Programmer extends Employee {
    // constructor(...args){ // --> If there is no constructor in the child class, this is created automatically
    //     super(...args)
    // }

    constructor(name){
        super(name)
        console.log(`${name} Programmer's constructor is here. This is the newly written constructor`)
        this.name = name
    }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(5);
    console.log(`One extra is granted`);
    // console.log(`Employee has requested ${leaves + 1} leaves ( + One extra)`)
  }
}

let e = new Employee("Sara");
let p = new Programmer("Udoy");

e.login();
e.requestLeaves(3);

p.requestLeaves(5);
