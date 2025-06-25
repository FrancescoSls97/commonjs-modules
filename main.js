//importo la funzione fullName

const { fullName, hobbies } = require("./functions");
/* console.log(fullName("Francesco", "Sales"));
console.log(hobbies("Gaming", "Reading", "Music")); */

function people() {
  const peopleDetail = {
    peopleFullName: fullName("Francesco", "sales"),
    peopleHobbies: hobbies(),
  };
  return peopleDetail;
}

const peopleNameAndHobbies = people();
console.log(peopleNameAndHobbies);
