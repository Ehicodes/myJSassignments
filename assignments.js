/*ASSIGNMENT 1 (VALUES AND VARIABLES)  Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions) Log their values to the console */

// let country = "Nigeria";

// let continent = "Africa";

// let population = 2238000000;

// console.log(country);
// console.log(continent);
// console.log(population);

/* ASSIGNMENT 2 /*Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
 Log the types of 'isIsland', 'population', 'country' and 'language'
to the console  */

// let isIsland = true;

// let language;

// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);

/*ASSIGNMENT 3 (let, const and var)Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)Think about which variables should be const variables (whichvalues will never change, and which might change?). Then, change these variables to const. Try to change one of the changed variables now, and observe what happens */

const language = "Yoruba";

const country = "Nigeria";

const continent = "Africa";

const population = 2238000000;

population = 22000000; //WILL NOT CHANGE INSTEAD WILL FLAG AN ERROR BECAUSE CONST IS A KEYWORD TO DECLARE VARIABLES THAT CANNOT BE MUTATED
