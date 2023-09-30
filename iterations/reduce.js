// find out the total of the array
const myNumbers = [1, 2, 3, 4];

// const myTotal = myNumbers.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0);

// second method
const myTotal = myNumbers.reduce((acc,currval) => acc + currval, 0);

//console.log(myTotal);


// reduce() on objects inside array
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);