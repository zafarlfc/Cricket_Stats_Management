// Encapsulation      (Reduce complexity + increase reusability)

let Person = {
    name: "Someone",
    age: 20,
    get_age: function(){
        return this.age;
    }
};

Person.get_age();

// Abstraction          (Reduce complexity + isolate impact of change)

function Square(length) {
    this.length = length;

    let defaultlengths = {h:1, w:1};

    let compute_area = function(height) {
        // ...
    }

    this.draw = function() {
        compute_area(1)
        console.log("Draw");
    }
}

const value = new Square(1);
value.draw();

// Inheritance          (Eliminate redundant code)


// Polymorphism         (Refactor ugly switch/case statements)


// Factory Function

function get_square(number){
    return {
        number: number,
        square: function(){
            console.log(number * number);
        }
    };
}

const my_number = get_square(4);
my_number.square();


// Constructor Functions

function GetSquare(number) {
    this.number = number;
    this.square = function() {
        console.log(number * number);
    }
}

const my_number1 = new GetSquare(4);
my_number1.square();


// Function Object Methods

my_number1.name
my_number1.length
my_number1.constructor


// Primitive types are copied by their value
// Objects are copied by thier reference

const number2 = new GetSquare(2);

for (let key in number2) {
    console.log(key);
}

for (let key in number2) {
    console.log(key, number2[key]);
}

for (let key in number2) {
    if (typeof number2[key] !== "function")
        console.log(key, number2[key]);
}


const keys = Object.keys(number2);
console.log(keys);

if ("number" in number2)
    console.log("Key number exists!");