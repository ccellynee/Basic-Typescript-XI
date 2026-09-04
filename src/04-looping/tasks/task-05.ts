/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let gold = 0;
let silver = 0;
let bronze = 0;
let noMedal = 0;
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];

    if(scores[i] >= 95 ){
        gold++;
    } else if (scores[i] >= 85) {
        silver++;
    } else if (scores[i] >= 75) {
        bronze++;
    } else {
        noMedal++
    }
}

const average = totalScore / scores.length;

console.log ("Gold medal:", gold);
console.log ("Silver medal:", silver);
console.log ("Bronze medal:", bronze);
console.log ("No medal:", noMedal);
console.log ("Average competition score:", average);