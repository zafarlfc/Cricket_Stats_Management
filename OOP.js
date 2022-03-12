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
