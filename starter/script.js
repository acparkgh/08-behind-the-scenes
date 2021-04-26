'use strict';

function calcAge (birthYear) {
  const age = 2037 - birthYear;
  
  function printAge() {
    let output = `${firstName}, your are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;  //var is function scope
      const firstName = "Steven";
      
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
 
      function add(a, b) {
        return a + b;
      }
      output = "New Output!!!"
    }
    // console.log(add(2, 3));
    console.log(millenial) // millenial is var variable
    console.log(output);
      
  }
  printAge();
    
  return age;
}
const firstName = "Jonas";
calcAge(1991);


