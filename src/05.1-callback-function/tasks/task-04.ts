/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */


interface Score {
    score: number;
}

function analysesScores(scores: number[], callback: (score: number) => void): void {
    for (const score of scores) {
        callback(score);
    }
}

function checkPassing(score: number) : void {
    if (score >= 70) {
        console.log(`${score} → PASS`);
    } else {
        console.log(`${score} → FAIL`);
    }
}

function showGrade(score: number): void {
    let grade = "D";
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    console.log(`${score} → ${grade}`);
}

function calculateBonus(score: number): void {
    const bonus = score + 5;
    console.log(`${score} → ${bonus}`);
}

function checkExcellent(score: number): void {
    if (score > 90) {
        console.log(`${score} → Excellent`);
    } else {
        console.log(`${score} → Reguler`);
    }
}

console.log("=== Task 1: Determine whether each student passed. ===");
analysesScores(scores, checkPassing);

console.log("=== Task 2: Convert each score into a grade. ===");
analysesScores(scores, showGrade);

console.log("=== Task 3: Calculate a score after adding 5 bonus points. ===");
analysesScores(scores, calculateBonus);

console.log("=== Task 4: Determine whether the score is considered excellent. ===");
analysesScores(scores, checkExcellent);