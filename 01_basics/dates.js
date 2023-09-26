const myDate = new Date();
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

const myCreatedDate = new Date(2023, 0, 21, 1, 60);
console.log(myCreatedDate.toLocaleString());

const anotherDate = new Date("2023-01-20");
console.log(anotherDate.toDateString());
console.log(anotherDate.getTime());

const myTimeStamp = Date.now()
console.log(myTimeStamp);    // milliseconds since Jan 1, 1970

const newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);  //Starts with 0
console.log(newDate.getSeconds());
console.log(newDate.getDay());

// We can also define objects(key-value pairs) inside date method
console.log(newDate.toLocaleString("default",{
      weekday : "long",
}));