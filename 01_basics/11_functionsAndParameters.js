// function defination

// function_keyword function_name(parameters){}

function message(){
    console.log("Hello Javascript guy!");
    
} 

function addNumber(num1,num2){
    return num1+num2;
}

function isLoggedIn(username = "sam"){
        if (!username) {
            console.log("Please enter username!");
            return 0;
        }
        return (`${username} just logged in!`);
}

// function call
// function_name(arguments);

// message();  
// console.log(addNumber(2,"a"));
// console.log(addNumber(2,2));
// console.log(addNumber(2,"2"));
// console.log(addNumber(2,null));

console.log(isLoggedIn("Sameer"));
console.log(isLoggedIn());
