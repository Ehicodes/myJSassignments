/*
let js = "amazing";

console.log(20 + 20 + 20 + 20);

console.log("EHinomen");

let firstName = "Ehi";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);


true;

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

javascriptIsFun = 23;
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = "2025";
console.log(year);
console.log(typeof year);

year = 2025;
console.log(typeof year);

let age = 30;
age = 31;

 const birthYear = 1991;
birthYear = 1994;

var job = "programmer";
job = "teacher";

lastName = "Osaigbovo";
console.log(lastName);

MATH OPERATORS
const now = 2025;
const ageEhis = now - 2006;
const ageSarah = now - 2008;
console.log(ageEhis, ageSarah);

console.log(ageEhis * 2, ageEhis / 10);

const firstName = "Ehinomen";
const lastName = "Osaigbovo";
console.log(firstName + " " + lastName);

//ASSIGNMENT OPERATORS
//let X = 20 + 20;
//X += 10; // x = x + 10 = 50
//X *= 4; // x = x * 4 = 200
//X++; // x = x + 1 = 201
//X--; // x = x - 1 = 200
//X--; // x = x - 1 = 199
//console.log(X);

//COMPARISON OPERATORS
console.log(ageEhis > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 2006 > now - 2008);

const now = 2025;
const ageEhis = now - 2006;
const ageSarah = now - 2008;

console.log(now - 2006 > now - 2008);
let x, y;
x = y = 25 - 10 - 5; //RIGHT TO LEFT.     X = Y = 10, X = 10
console.log(x, y);

const averageAge = (ageEhis + ageSarah) / 2;
console.log(ageEhis, ageSarah, averageAge);

const firstName = "Ehi";
const job = "Techie";
const birthYear = 2006;
const currentYear = 2025;

const ehi =
  " I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  " ! ";
console.log(ehi);

const ehiNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(ehiNew);

console.log(`
    hello with
    multiple
    lines`);

const age = 15;

if (age >= 18) {
  console.log("Ehi can start her driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Ehi is too young. Wait another ${yearsLeft} years :}`);
}

const birthYear = 1996;

let century;

if (birthYear <= 1999) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);
// console.log(String(23) + 10);

// // type coercion
// console.log("i am " + 18 + " years old ");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" > "18");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

//WRITE IN YOUR NOTE!!!!!!!!!!!
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Ehis"));
// console.log(Boolean({})); //an empty object
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }
//money = 0 is a falsy value and so it will return it as false and the else conditon works. however,when we chane the value to another number, it becomes a truthy vaue and then the condtion worksl
// let height = 0;
// if (height) {
//   console.log("YAAY, height is defined");
// } else {
//   console.log("height is undefined");
// }

//WRITE ALSO !!!!!!
// EQUALITY OPERATORS(weve only used comaprison operatos to take decisons with if/else statements but lets suppose we want to check if two value are actually equal instead of one being greater or lesser)
// const age = "18";
// if (age === 18) console.log("you just became an adult (strict)");

// if (age == 18) console.log("You just became an adult (loose)");
// // else console.log("you did'nt just become an adult");
// //=== will make sure the value is exactly what you want. like the comparison operator, it will return a true/false value. in our example, true will be the result of the operator in case that both sides are  exactly the same
// "18" == 18; //means the string 18 will be converted to a number. loose equality operator is filld with many weird rulee, avoid it as much as possible.

// const favourite = Number(prompt("what is your favourite number?")); // you can use this to get any value from any webpage //prompt function, we need to store it and we can use a variable
// console.log(typeof favourite, favourite); //it then logs the value but as a string

// //if (favourite == 23)
// // 22 == 23 --> false

// if (favourite === 23) {
//   console.log("23 is a cool number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) {
//   console.log("Why not 23?");
// }

// if (favourite !== 9) console.log("Why not 9?");

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);

// console.log(hasDriversLicense || hasGoodVision);

// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is good to drive!");
// } else {
//   console.log("Sarah shoud not drive");
// }

const day = "tuesday";

switch (day) {
  case "monday":
    console.log("I wake up early for school");
    console.log("Then attend lectures");
    break;
  case "tuesday":
    console.log("I wake up super early");
    break;
  case "wednesday":
    console.log("I have my day off");
    break;
  case "thursday":
  case "friday":
    console.log("I work on my system");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log(`I wake up early for school    

Then attend lectures`);
} else if (day === "tuesday") {
  console.log("I wake up super early");
} else if (day === "wednesday") {
  console.log("I have my day off");
} else if (day === "thursday" || day === "friday") {
  console.log("I relax a bit");
} else if (day === "saturday" || day === "sunday") {
  console.log("I enjoy my weekend and go to Church");
} else {
  console.log("Not a valid day");
}

// with the switch statement, we might write a lot more code and it is easy to understand.
