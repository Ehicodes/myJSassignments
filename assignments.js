// ASSIGNMENT 1 (VALUES AND VARIABLES)  Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions) Log their values to the console

const country = "Nigeria";

const continent = "Africa";

let population = 235203683;

console.log(country);
console.log(continent);
console.log(population);

//  ASSIGNMENT 2 Declare a variable called 'isIsland' and set its value according to your
//  country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
//  Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = true;

let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

// ASSIGNMENT 3 (let, const and var)Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)Think about which variables should be const variables (whichvalues will never change, and which might change?). Then, change these variables to const. Try to change one of the changed variables now, and observe what happens
language = "Yoruba";

console.log(language);
console.log(country);
console.log(continent);
console.log(population);
/*population = 2000000; WILL NOT CHANGE INSTEAD WILL FLAG AN ERROR BECAUSE CONST IS A KEYWORD TO DECLARE VARIABLES THAT CANNOT BE MUTATED

/* ASSIGNMENT 4  
If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
const finlandPopulatiion = 6000000;
const averagePopulation = 30000000;
const description =
  country +
  " is in " +
  continent +
  " , " +
  " and its " +
  population +
  " milliion people speak " +
  language;
console.log(population / 2);
population++;
console.log(population);
console.log(population > finlandPopulatiion);
console.log(population < averagePopulation);
console.log(description);
