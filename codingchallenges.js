/* CODIING CHALLENGE 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall
*/

// FIRST VERSION
const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

//SECOND VERSION
// const marksMass = 95;
// const marksHeight = 1.88;
// const johnsMass = 85;
// const johnsHeight = 1.76;

const markBMI = marksMass / marksHeight ** 2;
const johnBMI = johnsMass / (johnsHeight * johnsHeight);
// const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// CODIING CHALLENGE 2
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"+

if (markBMI >= 27.3) {
  console.log(`Marks's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's (${johnBMI}) is higher than Mark's (${markBMI})`);
}
