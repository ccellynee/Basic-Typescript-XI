/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: { name: string, major: string, active: boolean }[]): number {
  let active = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].active) {
      active++;
    }
  }
  return active;
}

function countInactiveStudents(students: { name: string, major: string, active: boolean }[]): number {
  let inactive = 0;
  for (let i = 0; i < students.length; i++) {
    if (!students[i].active) {
      inactive++;
    }
  }
  return inactive;
}

function countStudentsByMajor(students: { name: string, major: string, active: boolean }[], targetMajor: string): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].major === targetMajor) {
      count++;
    }
  }
  return count;
}

function printEnrollmentReport(students: { name: string, major: string, active: boolean }[]): void {
  console.log("Total students:", students.length);
  console.log("Active students:", countActiveStudents(students));
  console.log("Inactive students:", countInactiveStudents(students));
  console.log("Software Engineering students:", countStudentsByMajor(students, "Software Engineering"));
  console.log("Networking students:", countStudentsByMajor(students, "Software Engineering"));
  console.log("Multimedia students:", countStudentsByMajor(students, "Multimedia"));
}

printEnrollmentReport(students);