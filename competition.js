

// const DolphinsAverageScore = (96 + 108 + 89) / 3;
// const KoalasAverageScore = (88+ 91 + 110) / 3;

// const DolphinsAverageScore = (97 + 112 + 101) / 3;
// const KoalasAverageScore = (109+ 95 + 123) / 3;

const DolphinsAverageScore = (97 + 112 + 101) / 3;
const KoalasAverageScore = (109 + 95 + 106) / 3;

if((DolphinsAverageScore > KoalasAverageScore) && (DolphinsAverageScore >= 100 )) {
    console.log("Congrats! Dolphins won a trophy");
} else if((KoalasAverageScore > DolphinsAverageScore) && (KoalasAverageScore >= 100)) {
    console.log("Congrats! Koalas won a trophy");
} else if((DolphinsAverageScore === KoalasAverageScore) && (DolphinsAverageScore >= 100 && KoalasAverageScore >= 100)) {
    console.log("You guys have a draw!");
}
else {
    console.log("No one won!");
}


