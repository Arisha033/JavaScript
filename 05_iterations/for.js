for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("Number is 5");
    }
    // console.log(element);
    
}

// Nesting loops
for (let i = 1; i <= 10; i++) {
   // console.log(`Outer loop value: ${i}`);
    for (let j = i; j <= 10; j++) {
       // console.log(`Inner loop value is ${j} and inner loop is ${i}`);
       // console.log(i + "*" + j + "=" + i * j);
    }
}

let myArray = [0, 5, 3, 2, 6, 8]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if( i == 5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if( i == 3){
        console.log("detected 3");
        continue;
    }
    console.log(`value of i is ${i}`);
}
