let score = "33";
console.log("Score: "+Number(score));
console.log("typeof: "+typeof Number(score));

score = "33abc";
console.log("Score: "+Number(score));
console.log("typeof: "+typeof Number(score));

score = true;
console.log("Score: "+Number(score));
console.log("typeof: "+typeof Number(score));

score = false;
console.log("Score: "+Number(score));
console.log("typeof: "+typeof Number(score));

let isLoggedIn = 1;
console.log(Boolean(isLoggedIn));
console.log(typeof Boolean(isLoggedIn));

isLoggedIn = "";
console.log(Boolean(isLoggedIn));
console.log(typeof Boolean(isLoggedIn));

isLoggedIn = 0;
console.log(Boolean(isLoggedIn));
console.log(typeof Boolean(isLoggedIn));
