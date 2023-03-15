//Coding challenge #2 BMI

const weightOfMark = 95;
const heightOfMark = 1.88;
const bmiFormulaOfMark = weightOfMark / (heightOfMark ** 2);

const weightOfJohn = 9;
const heightOfJohn = 1.76;
const bmiFormulaOfJohn = weightOfJohn / (heightOfJohn ** 2)

if(bmiFormulaOfJohn < bmiFormulaOfMark) {
    console.log(`Mark's BMI (${bmiFormulaOfMark}) is higher than John's (${bmiFormulaOfJohn})!`);
} else {
    console.log(`John's BMI (${bmiFormulaOfJohn}) is higher than Mark's (${bmiFormulaOfMark})!`);
}
