"use strict"
// ****************Datatypes****************
// 1.Primitive (call by value)
// string => "Arisha"
// numbers => 20
// bigint => 2383782n
// boolean => true/false
// object => {name: "Arisha" , id : 1020}
// null => standalone value (typeof object)
// undefined => undefined
// symbol => Symbol('123')  unique value

// 2.Non-Primitive (call by reference)
// All are typeof Object.
// array => const myArr = [1, 2, 3]
// objects  => const myObj = {name: "Arisha" , age: 20}
/* functions  => const myFunc = function(){
    console.log("Hello World");
}*/


// ****************Memory in Js ****************
// Stack Memory (use for Primitive datatype)
// In Stack changes are made to the copy of the variable.
// Heap Memory (Non-Primitive datatype)
// In Heap changes are made to the actual value of the variable.



// ****************values of variables****************
// true => 1
// false => 0
// "29jfk" => NaN
// "29" => string
// 29 => number


//****************type conversion****************
let number = 30;
//console.log(String(number));             //"30"
//console.log(typeof(String(number)));    //string

// console.log(2 + 2);             //4
// console.log("1" + 2);           //12
// console.log("1" + "2");         //12
// console.log(1 + "2");           //12
// console.log(1 + 2 + "2");       //32
// console.log("1" + 2 + 2);       //122

// console.log(+true);      //1
// console.log(true+);      //error


// Comparision operator converts the string into numbers
console.log("2" > 1);
console.log("02" > 1);

// console.log(null > 0);     //false
// console.log(null == 0);    //false
// console.log(null >= 0);    //true


//returns false in every check
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


//strict check
// console.log("2" === 2);      //false
// console.log(2 === 2);        //true
// console.log("2" === "2");    //true
