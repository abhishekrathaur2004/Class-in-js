
// lets see polymorphism in js

class Animal{
    constructor(_name){
        this.name = _name;
    }
    makeSound(){
        return `Generic Animal Sound`;
    }
}
let a1 = new Animal('jatin');

class Dog extends Animal{

    constructor(_name){
        super(_name);
    }
    //makeSound method is overriden in child class 
    
    makeSound(){
        // return `Bhaw Bhaw`; // now this lines will be executed upon calling

        // using this lines.
        // you can execute both the child and parent function 
        
        return `${super.makeSound()} Bhaw Bhaw`;
    }
}

let a2 = new Dog('akarshit');
// console.log(a1);
console.log(a2);


// console.log(a1.makeSound());
console.log(a2.makeSound());