const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i])
}

console.log(`Bills: [${bills}]`); 
console.log(`Tips: [${tips}]`); 
console.log(`Total: [${totals}]`); 

//Bonus challenge

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const totalAverage = [];
    totalAverage.push(sum/ arr.length);
    return totalAverage;
}

console.log(`Total average: ${calcAverage(totals)}`);


