"use strict"
// Array

// Arrays are mutable.
const myArr = [0, "Arisha", true, 4834, 'example'];
// console.log(myArr[3]);

const anotherArr = new Array(1, 2, 3, 4);
anotherArr.push(5);    
anotherArr.unshift(6);
anotherArr.pop();
anotherArr.shift();
// console.log(anotherArr);

// ************Methods of array*************

// console.log(anotherArr.indexOf(5));
// console.log(anotherArr.includes(5));

// const newArr = anotherArr.join();     // converts the array into string by joining the elements
// console.log(newArr);


// slice, splice
const arr1 = anotherArr.slice(1,3);     // doesn't changes original value of the array
// console.log(`Original value of arr: ${anotherArr}`);
// console.log(`Array after slice operation: ${arr1}`);

const arr2 = anotherArr.splice(1,3);      // changes original value of the array
// console.log(`Original value of arr: ${anotherArr}`);
// console.log(`Array after splice operation: ${arr2}`);

const fruitsArr = ["apple", "banana", "orange", "guava", "pineapple"];
const veggiesArr = ["tomato", "potato", "carrot", "raddish", "brinjal"];

// fruitsArr.push(veggiesArr);          // pushes array inside array
// console.log(fruitsArr);

const mergeArr = fruitsArr.concat(veggiesArr);    // adds both the arrays into new array
// console.log(mergeArr);

const spreadArr = [...fruitsArr, ...veggiesArr, ...arr1, ...arr2];    // similar to concat(), add more than two arrays also
// console.log(spreadArr);


const numberArr = [1, 2, 3, [4, 5, 3], [2, 6, [6, 7]]];
// console.log(numberArr.flat(Infinity));      //spreads the elements of arrray

console.log(Array.isArray("Arisha"));     // string
console.log(Array.from("Arisha"))         // converts it into array
 
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1 , score2 , score3));    // returns new array from the set of array