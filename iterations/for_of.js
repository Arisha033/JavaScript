// for of

// loop on arrays
const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
   // console.log(num);
}

// On strings
const myName = "Arisha";

for (const alp of myName) {
    //console.log(alp);
}

// On maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

//console.log(map);

for (const [key, value] of map) {
    console.log(key + " : " + value);
}

// On Objects

const myObj = {
    "1" : "name",
    "2" : "age",
    "3" : "gender"
}
for (const [key, value] of myObj) {
    console.log(key + " :" + value);
}