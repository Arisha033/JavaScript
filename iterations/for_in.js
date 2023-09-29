const myObj = {
    JS : "Javascript",
    HTML : "HyperText Markup Language",
    CSS : "Cascading Style Sheets",

}

// for in loop on objects

for (const key in myObj) {
   console.log(key + " : " + myObj[key]); 
}

// for in loop on arrays

const programming = ["JS", "HTML", "CPP", "CSS"];
for (const key in programming) {
   console.log(programming[key]);
}

// for in loop on maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
   console.log(key);      // maps are not iterable
}
