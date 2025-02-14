// Immediate Invoked Function Expression

// Regular function
// function chai(){
//     console.log("DB connected");

// }
// chai();

// (function defination)(function call)

// named iife
(function chai() {
    console.log("DB connected");

})();

// without name iife
(() => {
    console.log("DB connected");
})();

// passing parameter to the iife
((num1, num2) => {
    console.log(num1 + num2);
})(5, 6);

((databaseName) => {
    console.log(`My database name is ${databaseName}`);
})("Amazon");



// Why IIFE: to prevent from global pollution

/*

Why Use IIFE?
-Avoid Global Namespace Pollution
Variables inside an IIFE are not accessible globally, preventing conflicts with other scripts.

-Encapsulation & Data Privacy
Helps in creating private variables that are not accessible outside the function.

-Avoid Hoisting Issues
Since IIFE executes immediately, there’s no risk of variable hoisting affecting the logic.

-Immediate Execution
Useful for executing code immediately without waiting for function calls.

*/