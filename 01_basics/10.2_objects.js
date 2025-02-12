// Here are **all the different ways** you can access an object's properties in JavaScript:  

// ### ✅ **1. Dot Notation (Most Common)**  
// - Use when the property name is a valid identifier (no spaces, special characters, etc.).  
```javascript
const obj = { name: "Sunny", age: 20 };
console.log(obj.name); // Output: Sunny
console.log(obj.age);  // Output: 20
```

// --------------------------------------------------------------------------

// ### ✅ **2. Bracket Notation with String**  
// - Use when the property name is dynamic, has special characters, or spaces.  
```javascript
const obj = { "full name": "Sunny Singh", age: 20 };
console.log(obj["full name"]); // Output: Sunny Singh
console.log(obj["age"]);       // Output: 20
```

// --------------------------------------------------------------------------

// ### ✅ **3. Bracket Notation with Variable (Dynamic Access)**  
// - Perfect for accessing properties dynamically.  
```javascript
const key = "name";
const obj = { name: "Sunny", age: 20 };
console.log(obj[key]); // Output: Sunny
```

// --------------------------------------------------------------------------

// ### ✅ **4. Accessing Properties with Symbols**  
// - Useful for creating unique property keys.  
```javascript
const symKey = Symbol("id");
const obj = { [symKey]: 101, name: "Sunny" };
console.log(obj[symKey]); // Output: 101
```

// --------------------------------------------------------------------------

// ### ✅ **5. Using `Object.keys()` (Iterating Over Keys)**  
// - Returns an array o/f property names (keys).  
```javascript
const obj = { name: "Sunny", age: 20 };
Object.keys(obj).forEach(key => console.log(obj[key]));
// Output: Sunny, 20
```

// --------------------------------------------------------------------------

// ### ✅ **6. Using `Object.values()` (Iterating Over Values)**  
// - Returns an array of property values.  
```javascript
const obj = { name: "Sunny", age: 20 };
console.log(Object.values(obj)); // Output: ["Sunny", 20]
```

// --------------------------------------------------------------------------

// ### ✅ **7. Using `Object.entries()` (Key-Value Pairs)**  
// - Returns an array of key-value pairs.  
```javascript
const obj = { name: "Sunny", age: 20 };
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Sunny
// age: 20
```

// --------------------------------------------------------------------------

// ### ✅ **8. Using Destructuring Assignment**  
// - Extract properties directly into variables.  
```javascript
const obj = { name: "Sunny", age: 20 };
const { name, age } = obj;
console.log(name); // Output: Sunny
console.log(age);  // Output: 20
```

// --------------------------------------------------------------------------

// ### ✅ **9. Optional Chaining (`?.`)**  
// - Safely access deeply nested properties without errors.  
```javascript
const obj = { user: { name: "Sunny" } };
console.log(obj.user?.name);      // Output: Sunny
console.log(obj.profile?.email);  // Output: undefined (no error)
```

// --------------------------------------------------------------------------

// ### ✅ **10. Using `for...in` Loop (Iterating Over Properties)**  
// - Loops through all enumerable properties.  
```javascript
const obj = { name: "Sunny", age: 20 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
// Output:
// name: Sunny
// age: 20
```

// --------------------------------------------------------------------------

// ### 🚀 **Bonus: Accessing Functions (Methods) Inside Objects**  
```javascript
const obj = {
    name: "Sunny",
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};
obj.greet(); // Output: Hello, Sunny!
```

// --------------------------------------------------------------------------

// ### ⚡ **Summary: When to Use What?**  
// - **Dot Notation:** For simple property names.  
// - **Bracket Notation:** For dynamic, variable-based, or complex property names.  
// - **Symbols:** For unique, non-enumerable properties.  
// - **Destructuring & Optional Chaining:** For clean, readable code with complex objects.  
 🚀