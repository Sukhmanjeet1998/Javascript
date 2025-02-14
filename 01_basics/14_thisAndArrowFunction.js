// this: refer current context
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
        console.log(this);
        
    }
};
// console.log(obj1);
// obj1.message();
// obj1.name = "Sam";
// console.log(obj1);
// obj1.message();

// console.log(this); // global object which is empty because it is referring node env which is empty

// Regular function
const chai = function () {
    let username = "Sunny"
    console.log(this);
    console.log(this.username);
}

// chai();

// Explicit Arrow function (with {curly-braces})
const chai_ = () => {
    let username = "Sunny"
    console.log(this);
    console.log(this.username);
}

// chai_();

// --------------------------------------------------

// Arrow function

// Implicit Arrow function (without {curly-braces})
const addNum = (num1,num2) => (num1+num2);
console.log(addNum(2,3));

const giveObje = () => ({
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
});
console.log(giveObje());

