//  ... Rest operator
function calculateCartPrice(...num){
    return  num;
}
function calculateNewCartPrice(val1,val2,...num){
    return  num;
}

function handleObject(myObj){
        return (`My name is ${myObj.name} and my age is ${myObj.age}`);
}

function returnSecondValue(myArr){
    return myArr[1];
}

// ----------------------------------------------------------------------

const myInfo = {
    name: "Samay",
    age: 27
}

const myArr = [1,2,3,4,5];

// ----------------------------------------------------------------------

// console.log(calculateCartPrice(100,200,300,400));
// console.log(calculateNewCartPrice(100,200,300,400));
// console.log(handleObject(myInfo));
// console.log(handleObject({
//     name: "Samay",
//     age: 27
// }));
console.log(returnSecondValue(myArr));
