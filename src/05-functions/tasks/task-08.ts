/**
 * An LMS stores assignment submissions data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function SubmittedAssignments(submissions: { student: string, submitted: boolean, score: number }[]): number {
    let submitted = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted) {
            submitted++;
        }
    }
    return submitted;
}

function MissingAssignments(submissions: { student: string, submitted: boolean, score: number }[]): number {
    let missing = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (!submissions[i].submitted) {
            missing++;
        }
    }
    return missing;
}

function PassedStudents(submissions: { student: string, submitted: boolean, score: number }[]): number {
    let passed = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted && submissions[i].score >= 75) {
            passed++;
        }
    }
    return passed;
}

function StudentsRequiringRevision(submissions: { student: string, submitted: boolean, score: number }[]): number {
    let revision = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted && submissions[i].score < 75) {
            revision++;
        }
    }
    return revision;
}

function AverageScore(submissions: { student: string, submitted: boolean, score: number }[]): number {
    let total = 0;

    for (let i = 0; i < submissions.length; i++) {
        total += submissions[i].score;
    }
    return total / submissions.length;
}

function HighestScore(submissions: { student: string, submitted: boolean, score: number }[]): number {
    let highest = submissions[0].score;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score > highest) {
            highest = submissions[i].score;
        }
    }
    return highest;
}

function LowestScore(submissions: { student: string, submitted: boolean, score: number }[]): number {
    let lowest = submissions[0].score;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].score < lowest) {
            lowest = submissions[i].score;
        }
    }
    return lowest;
}

function printReport(submissions: { student: string, submitted: boolean, score: number }[]): void {
    console.log("Total students:", submissions.length)
    console.log("Submitted assignments:", SubmittedAssignments(submissions));
    console.log("Missing assignments:", MissingAssignments(submissions));
    console.log("Passed students:", PassedStudents(submissions));
    console.log("Students requiring revision:", StudentsRequiringRevision(submissions));
    console.log("Average score:", AverageScore(submissions));
    console.log("Highest score:", HighestScore(submissions));
    console.log("Lowest score:", LowestScore(submissions));
}

printReport(submissions);