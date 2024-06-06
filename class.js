// It is a template which is used for creating object

class Square{
    // constructor(){
        // methods which is used for asigning the properties at the time of object creation

    //     this.side = 10;  // default value for eevery square side

    // }
    constructor(_side){
        // methods which is used for asigning the properties at the time of object creation

        this.side = _side;  // default value for eevery square side

    }

    // object methods
    area(){
        return `Area of square : ${this.side* this.side}`;
    }

    // getter

    // getter are the actual object methods but they are used as a properties 

    get area(){
        return `Area of square : ${this.side* this.side}`;
    }
    set area (_area){
        this.side = Math.sqrt(_area);
    }
    static equals(a,b){

        return a.side == b.side;
    }
    static isSquare(width, height){
        return width == height;
    }
}

// let sq1 = new Square();
// console.log(sq1);
// Square { side: 10 }
// let sq2 = new Square();
// console.log('sq2', sq2);
// sq2 Square { side: 10 }

let sq1 = new Square(10); //  with user defined value or arbitary value not default
// let sq2 = new Square(20);
// console.log(sq1,sq2)

// Square { side: 10 } Square { side: 20 } 

// console.log(sq1.area());
// Area of square : 100


// Now comes' getter setter

// console.log(sq1.area); // accessing object methods as a properties

// setting externally object properties using setter function 
// sq1.area = 169;
// console.log(sq1);
// Square { side: 13 }


// static object methods

let sq2 = new Square(20);
// console.log(Square.equals(sq1,sq2));
// sq2.area = 100;
// console.log(Square.equals(sq1,sq2));
console.log(Square.isSquare(10,10.0000000));
