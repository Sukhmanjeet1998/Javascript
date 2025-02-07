"use strict"
// alert("Hello");

/*
ECMAScript (ES) is a standardized scripting language specification that serves as the foundation for JavaScript, JScript, and ActionScript. It is maintained by ECMA International through the TC39 committee and defines the syntax, types, objects, and other core functionalities of JavaScript.
*/

const number = 4;
const name = "javascript";
let isLoggedIn = true;

// nnbbssu
// number, null, bollean, bigInt, string, symbol, undefined.

// undefined: declare but not initialize (value not assign)
// null: empty

console.log(typeof undefined);  // datatype
console.log(typeof null);  // object  (null is not an object; it is a primitive value)

console.log(null === null); // true
console.log(typeof null === "object"); // true (historical bug)
console.log(null instanceof Object); // false 