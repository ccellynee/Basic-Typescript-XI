/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submit = 0;
let notSubmit = 0;
let passed = 0;
let revise = 0;
let total= 0;

for (let i = 0; i < submissions.length; i++) {

    if (submissions[i].submitted) {
        submit++;
    } else {
        notSubmit++;
    }

    if (submissions[i].submitted && submissions[i].score >= 75) passed++;
    if (submissions[i].submitted && submissions[i].score < 75) revise++;
    total += submissions[i].score;
}
for (let i = 0; i < submissions.length; i++) {
    if (!submissions[i].submitted) {
        console.log("Students who did not submit:", submissions[i].student);
    }
}

for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submitted && submissions[i].score < 75) {
        console.log("Students who must revise:", submissions[i].student);
    }
}

const average = total / submissions.length;

console.log("Submitted:", submit);
console.log("Not Submitted:", notSubmit);
console.log("Passed:", passed);
console.log("Must Revise:", revise);
console.log("Class Average:", average);