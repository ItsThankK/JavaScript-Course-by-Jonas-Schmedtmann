const testArr1 = [17, 21, 23];
const testArr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let string = ``
    for(let i = 0; i < arr.length ;i++) {
        string += `... ${arr[i]}°C in ${(arr.indexOf(arr[i])) + 1} days  `
    }
    return string;

}

console.log(printForecast(testArr1));
console.log(printForecast(testArr2));