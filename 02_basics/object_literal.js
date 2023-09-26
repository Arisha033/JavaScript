// objects
// object literals (not singelton)

const mySym = Symbol("key1");    // Symbol

const person = {
    first_name : "John",
    dob : "dec 2",
    birthYear : 2000,
    [mySym] : "key1",       // syntax to define symbol as key inside object
    education : "Graduate",
    gender : "Male",
    hasDriversLicence : true,
    friends : ["Paul","Grahm","Alex"],
    calcAge : function(birthYear){   //Any function which is attached to an object is called a method.
        return 2023 - birthYear;
    }   
}

console.log(person.calcAge(2000));    // static keys
console.log(person["friends"]);       // dynamic keys
console.log(person[mySym]);           // returns value of symbol
console.log(typeof(mySym));           // type Symbol
console.log(typeof[mySym]);           // type of Object
console.log(typeof(person[mySym]));   // type of String

// change values of object
person.birthYear = 2001;

// freeze values of object
Object.freeze(person);
// console.log(person.gender = "female");
