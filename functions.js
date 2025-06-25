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
console.log(personName);

//esporto la funzione
module.exports = fullName;
