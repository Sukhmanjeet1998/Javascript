let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10]

// arr1.push(arr2);
// console.log(arr1);

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// ... Spread operator
let arr4 = [...arr1,...arr2];
// console.log(arr4);

let arr5 = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13,14,15]]];
let arr6 = arr5.flat().flat();
// console.log(arr6);

let myName = "Sukhmanjeet Singh";
let inArray = Array.from(myName);
console.log(inArray);
