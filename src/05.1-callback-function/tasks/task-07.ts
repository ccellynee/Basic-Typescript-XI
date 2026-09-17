/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

type Student = {
    name: string;
    score: number;
    attendance: number;
};

const students: Student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function getPassStatus(student: Student) {
    if (student.score >= 75 && student.attendance >= 90) {
        return {
            name: student.name,
            status: "Pass"
        };
    }

    return {
        name: student.name,
        status: "Fail"
    };
}

function getPerformanceCategory(student: Student) {
    if (student.score >= 90) {
        return {
            name: student.name,
            category: "Excellent"
        };
    } else if (student.score >= 75) {
        return {
            name: student.name,
            category: "Good"
        };
    } else {
        return {
            name: student.name,
            category: "Needs Improvement"
        };
    }
}

function getAttendanceStatus(student: Student) {
    if (student.attendance >= 90) {
        return {
            name: student.name,
            attendance: "Good Attendance"
        };
    }

    return {
        name: student.name,
        attendance: "Poor Attendance"
    };
}

function getRecommendation(student: Student) {
    if (student.score >= 90 && student.attendance >= 90) {
        return {
            name: student.name,
            recommendation: "Excellent"
        };
    } else if (student.score >= 75 && student.attendance >= 90) {
        return {
            name: student.name,
            recommendation: "Good"
        };
    } else if (student.score >= 75 && student.attendance < 90) {
        return {
            name: student.name,
            recommendation: "Improve Attendance"
        };
    } else {
        return {
            name: student.name,
            recommendation: "Improve Academic Performance"
        };
    }
}

function processStudents<T>(
    students: Student[],
    callback: (student: Student) => T
): T[] {
    const results: T[] = [];

    for (const student of students) {
        results.push(callback(student));
    }

    return results;
}

console.log("PASS STATUS");
console.log(processStudents(students, getPassStatus));
console.log("");
console.log("PERFORMANCE CATEGORY");
console.log(processStudents(students, getPerformanceCategory));
console.log("");
console.log("ATTENDANCE STATUS");
console.log(processStudents(students, getAttendanceStatus));
console.log("");
console.log("RECOMMENDATION");
console.log(processStudents(students, getRecommendation));