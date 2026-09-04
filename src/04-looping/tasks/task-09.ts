/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let highest = students[0].score;
let lowest = students[0].score;
let total = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 90) {
        a++;
    } else if (students[i].score >= 80) {
        b++;
    } else if (students[i].score >= 70) {
        c++;
    } else {
        d++;
    }

if (students[i].score > highest) {
    highest = students[i].score;
}
if (students[i].score < lowest) {
    lowest = students[i].score;
}

total += students[i].score;

}

const average = total / students.length;

console.log ("Grade A:", a);
console.log ("Grade B:", b);
console.log ("Grade C:", c);
console.log ("Grade D:", d);
console.log ("Highest Score :", highest);
console.log ("Lowest Score :", lowest);
console.log ("Average Score :", average);