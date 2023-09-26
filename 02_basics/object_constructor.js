// object constructor
// Singelton Object
const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "example@gmail.com",
    fullname: {
        userfullname:{
            firstname: "John",
            lastname: "Doe"
        }
      }  
    }

// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}
const obj4 = {
    7: "i",
    8: "j",
    9: "k"
}
// combining two objects

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4};   // spread operator

// console.log(obj3);

// values from dB come in the form of objects inside an array
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// object containes property
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Object De-structuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);
const {courseInstructor: insructor} = course;

console.log(insructor);