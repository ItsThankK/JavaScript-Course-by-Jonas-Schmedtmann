/**
 * teams Dolphins and Koalas 
 * 
 * 3 scores Average 3sum/3
 *  team wins if score is >= double score of others 
 */

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}
//Test data 1
// const avgDolphins = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(65, 54, 49);

//Test data 2
const avgDolphins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2 ) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if(avgKoalas > avgDolphins && avgKoalas >= avgDolphins * 2 ) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log("Nobody wins!");
    }
}

checkWinner(avgDolphins, avgKoalas);

