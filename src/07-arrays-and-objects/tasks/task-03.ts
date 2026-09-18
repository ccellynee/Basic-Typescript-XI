/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const presentStudents = attendance
    .filter((data) => data.status === "present")
    .map((data) => students.find((student) => student.id === data.studentId)?.name);

console.log("Present Students");
console.log(presentStudents);

const presentStudents2 = attendance
    .filter((data) => data.status === "present")
    .map((data) => students.find((student) => student.id === data.studentId)?.name);

console.log("\nStudents Who Are Present");
console.log(presentStudents2);

const lateStudents = attendance
    .filter((data) => data.status === "late")
    .map((data) => students.find((student) => student.id === data.studentId)?.name);

console.log("\nLate Students");
console.log(lateStudents);

const studentAttendance = attendance.map((data) => ({
    name: students.find((student) => student.id === data.studentId)?.name,
    status: data.status,
}));

console.log("\nStudent Attendance");
console.log(studentAttendance);