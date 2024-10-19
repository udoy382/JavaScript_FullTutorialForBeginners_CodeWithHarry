// Static Method in JavaScript #81


class Animal{
    constructor(name){
        this.name = name
    }
    walk(){
        console.log("Animal " + Animal.capitalize(this.name) + " " + "walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

j = new Animal("jack")
j.walk()