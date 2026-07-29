/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type registration = {
    studentId: string;
    fullName: string;
    gradeLevel: number;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registration1: registration = {
    studentId: "ST001",
    fullName: "Lovanka Nisa",
    gradeLevel: 11,
    courseId: "CS101",
    courseTitle: "TypeScript Fundamentals",
    instructorName: "Mr. Zakaria",
    totalLearningHours: 40,
    registrationDate: "2026-07-27",
    isPaymentCompleted: true,
};

const registration2: registration = {
    studentId: "ST002",
    fullName: "Devonka Resta",
    gradeLevel: 10,
    courseId: "WD201",
    courseTitle: "Web Development Basics",
    instructorName: "Ms. Rina",
    totalLearningHours: 36,
    registrationDate: "2026-07-28",
    isPaymentCompleted: false,
};

const registration3: registration = {
    studentId: "ST003",
    fullName: "Devina Nelisa",
    gradeLevel: 12,
    courseId: "DB301",
    courseTitle: "Database Management",
    instructorName: "Mr. Budi",
    totalLearningHours: 32,
    registrationDate: "2026-07-29",
    isPaymentCompleted: true,
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);