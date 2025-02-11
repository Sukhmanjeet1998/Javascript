const myArr = [26,null,true,999n,"Sunny",undefined];

// console.log(myArr);
// console.log(typeof myArr[3], myArr[3]);

const myArr2 = new Array(26,null,true,999n,Symbol("@"),"Sunny",undefined);
// console.log(typeof myArr2, myArr2);

myArr.push("push");
myArr.push(6);

// console.log(myArr);

myArr.unshift(0);
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

let myNewArr = myArr.join();
// console.log(myArr);
// console.log(myNewArr);

let arr1 = [0,1,2,3,4,5,6];
// console.log("1: ",arr1);
let arr2 = arr1.slice(0,3);
// console.log("2: ",arr1);
// console.log(arr2);

let arr3 = arr1.splice(0,3);

// console.log("3: ",arr1);
// console.log(arr3);

