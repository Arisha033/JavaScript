// Global scope
var c = 100;

// let & const have local scope, var has global scope.
// local scope
if(true){
    let a = 10;
    const b = 20;
    var c = 30     
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope
function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

if(true){
    const  username = "hitesh";
    if(username === "hitesh "){
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);    // error
}
// console.log(username);    // error


// *****************Interesting***************

// function declaration

console.log(addone(5));

function addone(num){
    return num + 1;
}

// function expression

// console.log(addtwo(5));

const addtwo = function(num){
    return num + 2;
}
console.log(addtwo(5));