const myArr = [26,null,true,999n,Symbol("@"),"Sunny",undefined];

// console.log(myArr);
// console.log(typeof myArr[3], myArr[3]);

const myArr2 = new Array(26,null,true,999n,Symbol("@"),"Sunny",undefined);
// console.log(typeof myArr2, myArr2);

myArr.push("push");
myArr.push(6);

// console.log(myArr);

myArr.unshift(0);
console.log(myArr);
