// Singleton (Go through this topic) -> const myObj = new Object();

// const myArr = ["Javascript", "Learn"];
// myArr[0];
const signature = Symbol("Sunny");
const obj1 = {
    name: "Sunny",
    age: 20,
    location: "Delhi",
    email: "sunny@example.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday","Thrusday"],
    [signature]: "Sunny Singh",
    message: function() {
        console.log(`${this.name} welcome you!`);
        
    }
};  // Non Single ton object

// Access object values

// console.log(obj1.age);  // not a correct way
// console.log(obj1["email"]);
// console.log(obj1["location"]);

obj1["email"] = "sunny.singh@yopmail.com";
// console.log(obj1["email"]);

// Object.freeze(obj1);
// obj1["email"] = "sunny.singh18@yopmail.com";  // value not changed
// console.log(obj1);
// console.log(obj1[signature]);


obj1.greeting = () => {
    console.log("Hello JS user");
    
}

console.log(obj1);
// console.log(obj1.greeting());
// console.log(obj1.message());

// for accessing symbol from a object you need to access via [] bracket 

// Dot Notation (.): Looks for a property named "signature" (a string), not the symbol itself.
// Bracket Notation ([]): Allows you to pass the actual Symbol reference, correctly accessing the property.

console.log(obj1["email"]);
console.log(obj1["email"]);

// Dot Notation: For simple property names.
// Bracket Notation: For dynamic, variable-based, or complex property names.
// Symbols: For unique, non-enumerable properties.
// Destructuring & Optional Chaining: For clean, readable code with complex objects.