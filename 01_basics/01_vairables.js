const accountId = 1111;
let accountEmail = "sunny@gmail.com";
var accountPassword = 555;
let accountCity;


accountEmail = "happy.singh@gmail.com";
accountPassword = 888;

{
    let accountEmail = "parrot@gmail.com";
    console.log(accountEmail);
    var accountPassword = 1001;
    console.log(accountPassword);
    const accountCity = "Delhi";
    console.log(accountCity);



}

// accountId = 8;
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

// Use const for values that shouldn’t change.
// Use let for variables that may change.
// Avoid var due to hoisting and scoping issues.


// Feature	         var	                           let	                                 const
// Scope	         Function-scoped	               Block-scoped	                         Block-scoped
// Re-declaration	 Allowed	                       Not allowed	                         Not allowed
// Re-assignment	 Allowed	                       Allowed	                             Not allowed
// Hoisting	Hoisted  (initialized as undefined)	       Hoisted (not initialized)	         Hoisted (not initialized)
// Mutability	     Can be updated and re-declared	   Can be updated but not re-declared	 Cannot be updated or re-declared
// Best Use Case	 Avoid using (legacy feature)	   Use when value changes	             Use for constants


// Undefined: A variable that has been declared but not assigned a value, JavaScript automatically assigns undefined to uninitialized variables.
let a;
console.log(a); // undefined (since no value is assigned)

function test() {
    let b;
    console.log(b); // undefined
}
test();

// empty:     A variable that has been assigned an empty value (e.g., "", null, or []), The developer explicitly sets a value as empty.
let str = "";  // Empty string
console.log(str.length); // 0

let arr = [];  // Empty array
console.log(arr.length); // 0

let obj = {};  // Empty object
console.log(Object.keys(obj).length); // 0


// undefined → Means "not assigned a value" (default state of a variable).
// empty → Means "assigned an empty value" (like "", null, [], {}).
