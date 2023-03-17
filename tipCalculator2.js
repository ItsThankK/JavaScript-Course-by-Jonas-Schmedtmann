function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

const bills = [125, 1000, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [];

tips.push(tip1, tip2, tip3);

const total = [];

total.push(tip1 + bills[0],tip2 + bills[1] ,tip3 + bills[2]);

console.log(bills);
console.log(tips);
console.log(total);

