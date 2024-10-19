// getters, setters & instanceOf Operator #82

class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("Mai ud rha hu");
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eatting Carrot");
  }
}

// let a = new Animal("Bruno");
let a = new Rabbit("Bruno");

a.fly();
console.log(a.name);
a.name = "Jack";
console.log(a.name);

let c = 56;

console.log(a instanceof Animal);
console.log(c instanceof Animal);

console.log(a instanceof Rabbit);
console.log(c instanceof Rabbit);
