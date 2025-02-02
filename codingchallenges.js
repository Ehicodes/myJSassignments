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
// const marksMass = 78;
// const marksHeight = 1.69;
// const johnsMass = 92;
// const johnsHeight = 1.95;

// //SECOND VERSION
// // const marksMass = 95;
// // const marksHeight = 1.88;
// // const johnsMass = 85;
// // const johnsHeight = 1.76;

// const markBMI = marksMass / marksHeight ** 2;
// const johnBMI = johnsMass / (johnsHeight * johnsHeight);
// // const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI);
// // console.log(markHigherBMI);

// // CODIING CHALLENGE 2
// // 1. Print a nice output to the console, saying who has the higher BMI. The message
// // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// // BMI (28.3) is higher than John's (23.9)!"+

// if (markBMI >= 27.3) {
//   console.log(`Marks's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//   console.log(`John's (${johnBMI}) is higher than Mark's (${markBMI})`);
// }

/*CODING CHALLENGE 3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//QUES 1
// const teamDolphins = 96 + 108 + 89;
// const teamKoalas = 88 + 91 + 110;
// const teamDolphinsAverage = teamDolphins / 3;
// const teamKoalasAverage = teamKoalas / 3;
// console.log(teamDolphins, teamKoalas, teamDolphinsAverage, teamKoalasAverage);

// //QUES 2
// if (teamDolphinsAverage > teamKoalasAverage) {
//   console.log("Team Dolphins  wins the trophy!! trophy 🏆 !!!");
// } else if (teamKoalasAverage > teamDolphinsAverage) {
//   console.log("Team Koalas  wins the  trophy 🏆 !!!");
// } else if (teamDolphinsAverage === teamKoalasAverage) {
//   console.log("There's a draw!!!");
// }

// //BONUS 1 and BONUS 2
// const teamDolphins = 97 + 112 + 101;
// const teamKoalas = 109 + 95 + 106;
// const teamDolphinsAverage = teamDolphins / 3;
// const teamKoalasAverage = teamKoalas / 3;
// console.log(teamDolphinsAverage, teamKoalasAverage);

// if (teamDolphinsAverage > teamKoalasAverage && teamDolphinsAverage >= 100) {
//   console.log("Dolphins win the trophy🏆");
// } else if (
//   teamKoalasAverage > teamDolphinsAverage &&
//   teamKoalasAverage >= 100
// ) {
//   console.log("Koalas wins the trophy 🏆");
// } else if (
//   teamDolphinsAverage === teamKoalasAverage &&
//   teamDolphinsAverage >= 100 &&
//   teamKoalasAverage >= 100
// ) {
//   console.log("There's a draw!!!, both team wins the trophy🏆");
// } else {
//   console.log("No one wins the trophy😢");
// }

//CODING CHALLENGE 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

const billValue = 430;
const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2; //number 1
console.log(
  `The bill was ${billValue}, and the tip was ${tip}, and the total value ${
    //number 2
    billValue + tip
  } `
);
