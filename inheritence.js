// lets see inheritance in js

// Here we are definning a Parent class i.e, Person class  whose properties will be inherited by child class

class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    // this method can be accessed by person object as well as its child class object
    describe(){
        return `Hey, i am ${this.name} and ${this.age} yrs old`;
    }
}

class Programmer extends Person{
    constructor(_name, _age, _yrsOfExperience){

        //setting the properties of Parent class to  Programmer object
        super(_name, _age)
        
        this.yearsOfExperience = _yrsOfExperience;
    }
    // this method cannot be accessed by person object 
    code(){
        return `${this.name} is coding.`
    }
}
const p1 = new Person('jatin', 12);
const p2 = new Programmer('Abhi', 11, 12);

console.log(p1);
console.log(p2);


// Person { name: 'jatin', age: 12 }
// Programmer { name: 'Abhi', age: 11, yearsOfExperience: 12 }

// console.log(p2.describe());
// Hey, i am Abhi and 11 yrs old

// child class can access the properties and methods of parent class but parent class cannot do it with child class 
// console.log(p1.code())
// p1.code is not a function