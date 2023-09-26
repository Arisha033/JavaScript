// Immediately Invoked Function Expressions (IIFE)

// normal way of defining ()
function chai1(){
    console.log(`DB CONNECTED`);
}
chai1();


// IIFE, it helps to avoid pollution from global scope
( function chai2(){
    // named IIFE
    console.log(`DB CONNECTED`);
} ) ();


// passing arguments and parameters
( function chai3(name){
    console.log(`DB CONNECTED ${name.toUpperCase()}`);
} ) ("Arisha");


// arrow function
( (name) => {
    console.log(`DB CONNECTED TOO ${name.toUpperCase()}`);
} ) ("Arisha");