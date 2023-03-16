/*
 * If bill is between 50 and 300, tip will be 15%
 * If bill is not, tip will be 20%
 * 
 * calculate the tip 
 * 
 * console log: bill, tip and bill + tip
 */

//Test data for bill values 275, 40 and 430

let tip;

const billValue = 275;

billValue >= 50 && billValue <= 300 ? tip = 0.15 * billValue : tip = 0.2 * billValue

console.log(billValue, tip, tip + billValue);