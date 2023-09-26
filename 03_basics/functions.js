// functions
const myName = function() {
    console.log("A")
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")  
};
// myName;    // function reference
// myName();     // function execution

function addTwoNumbers(a, b){
    return a + b;
}
// console.log("Result: "+ addTwoNumbers(20, 30));

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return (`${username} just logged In.`)
}

// console.log(loginUserMessage(""));     // undefined
// console.log(loginUserMessage("Arisha"));

function addToCartPrice (val1, val2, ...num1){         // ... refers to rest operator
    return num1;
}

// console.log(addToCartPrice(200, 300, 1000, 599));


// passing object inside a function
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}.`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    price: 299
});

// passing an array inside a function
const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 300, 400, 500]));