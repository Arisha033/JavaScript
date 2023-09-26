const myName = 'Arisha';
const myAge = 20;

// String Interpolation
console.log(`Hello my name is ${myName} and I'm ${myAge} years old.`);

// Another way to define string
// Helps to access string methods.
const anotherName = new String("Warisha");
const anotherAge = new String(22);
console.log(`Hello my name is ${anotherName} and I'm ${anotherAge} years old.`);

console.log(anotherName.length);
console.log(anotherName.__proto__);
console.log(anotherName.toUpperCase());
console.log(anotherName.includes("s"));
console.log(anotherName.replace("a","s"));
console.log(anotherName.substring(0,4));   //Index value starts from 0 and indexEnd is not included.
console.log(anotherName.slice(-7,3));      //It takes -ve value also & -ve value starts from the end of the string.
console.log(anotherName.trim());
console.log(anotherName.charAt(0));
console.log(anotherName.charCodeAt(0));
console.log(anotherName.indexOf("s"));

let string = "Once there was a fox and a lion in the jungle."
console.log(string.split(""));      //split into characters
console.log(string.split(" "));     //split into words
console.log(string.split("a"));     //split when "a" occurs

