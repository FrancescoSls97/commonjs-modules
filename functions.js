console.log("hello");

///////////////////////name.js/////////////////////////////////

// creo una funzione che restituisce due parametri "fullName" e "lastName"
function fullName(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

//restituzione di un oggetto con entrambi i parametri
const personName = fullName("Francesco", "Sales");
/* console.log(personName); */

/////////////////hobbies//////////////

// creo una funzione che restituisce tre parametri "hobby"
function hobbies() {
  const hobbyOne = "Gaming";
  const hobbyTwo = "Reading";
  const hobbyThree = "Music";
  return [hobbyOne, hobbyTwo, hobbyThree];
}

const [h1, h2, h3] = hobbies();
/* console.log(h1);
console.log(h2);
console.log(h3); */

//esporto la funzione
module.exports = { fullName, hobbies };
