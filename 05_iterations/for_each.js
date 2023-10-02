const languages = ["js", "python", "cpp", "java"];

// for each loop on arrays

languages.forEach(element => {
   // console.log(element);
});

// create a function
function printMe(item){
   // console.log(item);
}

// reference of the function
languages.forEach(printMe);
  
// parameters of forEach
languages.forEach( (item , index , arr ) => {
    console.log(item , index , arr);
});

// objects inside arrays
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "pyhton",
        languageFileName: "py"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
