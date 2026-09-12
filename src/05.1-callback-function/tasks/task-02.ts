/**
 * Teacher has list of student score:
 */
const scores = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    // implementation
    for (let i = 0; i < scores.length; i++) {
        callback(scores[i]);
    }
}

function printScore(score: number): void {
    // implementation: display each score
    console.log(`Score: ${score}`);
}

function checkPassing(score: number): void {
    // implementation: determine whether each student passed (passing grade >= 70)
    if (score >= 70) {
        console.log(`${score} → PASS`);
    } else {
        console.log(`${score} → FAIL`);
    }
}

function showGrade(score: number): void {
    // implementation: determine grade of score
    let grade = "D";
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    console.log(`Score: ${score} → Grade: ${grade}`);
}

// implementation of callback function
console.log("=== Report 1: Display Scores ===");
processScores(scores, printScore);

console.log("\n=== Report 2: Passing Status ===");
processScores(scores, checkPassing);

console.log("\n=== Report 3: Grade Report ===");
processScores(scores, showGrade);