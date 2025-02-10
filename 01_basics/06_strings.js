// Backtiks (`)
// String Interpolation

const name = "Sunny";
const repoCount = 50;
// console.log(`${name} + ${repoCount}`);

// Object
const gameName = new String("Gta Vice City");
// console.log(typeof gameName + gameName);  // object
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('V'));
// console.log(gameName);

const newString = gameName.substring(0,4);
// console.log(newString);
// console.log(gameName);

const newString1 = "    hello javascript ";
const newStr1 = "    Hello ";
const newStr2 = newString1 + newStr1;
const newString2 = newStr2.trim();
// console.log(newStr2);
// console.log(newString2);

const url = "https://en.wikipedia.org/wiki%Wiki";
// console.log(url.replace("%","/"));

// console.log(url.includes("Wiki"));
// console.log(url.includes("Wikiis"));


const myNamee = new String("Sukhmanjeet Singh");
// console.log(myNamee.split(" "));

