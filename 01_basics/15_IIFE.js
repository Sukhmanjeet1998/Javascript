// Immediate Invoked Function Expression

// Regular function
// function chai(){
//     console.log("DB connected");
    
// }
// chai();

// (function defination)(function call)

// named iife
(function chai(){
    console.log("DB connected");
    
})();

// without name iife
(()=>{
    console.log("DB connected");
})();

// passing parameter to the iife
((num1,num2)=>{
    console.log(num1+num2);
})(5,6);

((databaseName)=>{
    console.log(`My database name is ${databaseName}`);
})("Amazon");



// Why IIFE: to prevent from global pollution