function one(){
    const username = "hitesh";
    function two(){
        const website = "youtube";
        console.log(`${website} is a website where I learn javascript by ${username}`);
    } 
    // two();
    // console.log(website);
}
// one();

// --------------------------------------------------------------------------------------


console.log(addNum(5));

// Basic Function
function addNum(num){
    return num + 1 ;
}


// console.log(addNumber(5));  // for function experssion calling function is after defination

// Function Expression
const addNumber = function (num){
    return num + 1 ;
}

console.log(addNumber(5));