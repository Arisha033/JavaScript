// "this" keyword
const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);         // current context
    }
}

// user.welcomeMessage();

// user.username = "sam";
// user.welcomeMessage();

// value of "this" inside node return an empty object.
// value of "this" inside browser returns window object.

// console.log(this);    

// "this" inside () returns global object.
function chai(){
    console.log(this);
}
// chai();

function chai(){
    let username = "hitesh";
    console.log(this.username);     // "this" is accessed inside objects not ()s.
}

// chai();

// *************Arrow Function**************

const arrow1 =  () => {
    let username = "hitesh";
    console.log(this);      // "this" alone is empty object
}

// arrow1();

const arrow2 =  () => {
    let username = "hitesh";
    console.log(this.username);      // inside arrow() is undefined
}

// arrow2();


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(9, 10));

// *******Implicit return*******

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ( {username: "hitesh"} );

console.log(addTwo(2, 3));