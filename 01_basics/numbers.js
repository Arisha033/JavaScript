const number = 100;
// Another way to define numbers.
const score = new Number(20);
// console.log(number);
// console.log(score);

// const anotherNumber = 1234567
// const secondNumber  = 12.345
// console.log(secondNumber.toPrecision(3));
// console.log(anotherNumber.toString().length);
// console.log(anotherNumber.toLocaleString('en-In'));
// console.log(anotherNumber.toFixed(2));

//**************** Maths ****************
// console.log(Math.random());
// console.log(Math.abs(-20));
// console.log(Math.round(39.50));
// console.log(Math.floor(23.49));
// console.log(Math.ceil(290.2920));
// console.log(Math.min(2, 3, 4, 5));
// console.log(Math.max(2, 3, 4, 5));

// Values between 10 and 20
const max = 20;
const min = 10;
// Formula for finding values between min and max values
console.log(Math.floor(Math.random() * (max - min + 1)) + min);