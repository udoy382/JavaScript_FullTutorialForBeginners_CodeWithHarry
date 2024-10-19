// Inheritance & extends keyword in JavaScript #78

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is running");
  }
  shout() {
    console.log(this.name + " is Shouting");
  }
}


class Monkey extends Animal {
  eatBanana() {
    console.log(this.name + " is eating banana");
  }
}


let ani = new Animal("Bruno", "White");
let m = new Monkey("Leez", "Orange");


ani.shout();
m.eatBanana();
m.run()
// ani.eatBanana() // this is not for a ani class