// Primitive datatypes (Call by value: you get a copy not reference)................ 

// Number, Null, Boolean, BigInt, String, Symbol, Undefined

const marvel = "Ironman";
const score = 66;
const scoreValue = 55.7;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const bigNumber = 9999999999n;
const id = Symbol('123');
const idNew = Symbol('123');

// console.log(id === idNew);
// console.log(typeof bigNumber);



// Non Primitive (Reference: you get the address of the variable)...................

// Array, Functions, Objects

const marvelCharacters = ["Spiderman", "Ironman", "Doctor Strange", "Loki"];
const myInfo = {
    name: "Sukhman",
    age: 26,
    isWorking: true,
    companyName: "Buzzclan"
};

function operator(a, b, symbol) {
    switch (symbol) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}
const operation = function(a,b,symbol){
    return operator(a,b,symbol);
}
const result = operation(5,6,"+");
// console.log(result);

// console.log(typeof marvelCharacters + marvelCharacters);  // object
// console.log(typeof myInfo + myInfo);  // object
// console.log(typeof operation);  // function object

// Javascript is a dynamic type language.


//  Stack Memory (Primitive data type)
//  Heap Memory (Non-Primitive data type)

// Primitive (Stack)
let myName = "Sukhman";
console.log(myName);
let myNewName = myName;
console.log(myNewName);

myName = "Sukhmanjeet Singh"  // Here as i change value in myName variable will not show same change in myNewName because copy is there not reference.
console.log(myName);
console.log(myNewName);


// Non Primitive (Heap)..........................
const myRecord1 = {
    name: "Sukhman",
    age: 26,
    isWorking: true,
    companyName: "Buzzclan"
};

const myRecord2 = myRecord1;


// console.log(myRecord1);
// console.log(myRecord2);

myRecord2.age = 27;  // Here as i change value in myRecord2 (age) variable will  show same change in myRecord1 (age) varaible because reference is passed.
// console.log(myRecord1);
// console.log(myRecord2);



