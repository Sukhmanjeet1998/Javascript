let a = 12;
const pi = 3.14;
var age = 25;

{
    let a = 15;
    const pi = 3.1467;
    var age = 26;
    console.log("Local scope---------");
    console.log(a);
    console.log(pi);
    console.log(age);

}

console.log("Global scope--------");
console.log(a);
console.log(pi);
console.log(age);

