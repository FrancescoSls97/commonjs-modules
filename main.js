console.log("hello");

//importo la funzione fullName

const { fullName, hobbies } = require("./functions");
console.log(fullName("Francesco", "Sales"));
console.log(hobbies("Gaming", "Reading", "Music"));
