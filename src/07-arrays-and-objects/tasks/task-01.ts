/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

interface Student {
  name: string;
  score: number;
}

const students: Student[] = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

// 1. Get an array containing only the student names
const studentNames: string[] = students.map((student) => student.name);
console.log("=== Task 1: Student Names ===");
console.log(studentNames);

// 2. Get students who passed (score >= 70)
const passedStudents: Student[] = students.filter((student) => student.score >= 70);
console.log("\n=== Task 2: Passed Students (Score >= 70) ===");
console.log(passedStudents);

// 3. Find the student named "Citra"
const citraStudent: Student | undefined = students.find((student) => student.name === "Citra");
console.log("\n=== Task 3: Find Student Named 'Citra' ===");
console.log(citraStudent);

// 4. Calculate the average score
const totalScore: number = students.reduce((sum, student) => sum + student.score, 0);
const averageScore: number = totalScore / students.length;
console.log("\n=== Task 4: Average Score ===");
console.log(`Average Score: ${averageScore}`);