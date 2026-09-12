/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

/** Completion Statistics: */

function getTotalEnrollments(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    return enrollments.length
}

function getCompletedEnrollments(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let completed = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].completed) {
            completed++;
        }
    }
    return completed;
}

function getIncompleteEnrollments(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let incomplete = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (!enrollments[i].completed) {
            incomplete++;
        }
    }
    return incomplete;
}

function getCompletionPercentage(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let completed = getCompletedEnrollments(enrollments);
    let total = getTotalEnrollments(enrollments);

    return (completed / total) * 100;
}

/** Academic Statistics */

function getHighestScore(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let highest = enrollments[0].score;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score > highest) {
            highest = enrollments[i].score;
        }
    }
    return highest;
}

function getLowestScore(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let lowest = enrollments[0].score;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score < lowest) {
            lowest = enrollments[i].score;
        }
    }
    return lowest;
}

function getAverageScore(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let totalScore = 0;

    for (let i = 0; i < enrollments.length; i++) {
        totalScore += enrollments[i].score;
    }
    return totalScore / enrollments.length;
}

function getPassingStudents(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let passed = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score >= 75) {
            passed++;
        }
    }
    return passed;
}

/** Course Statistics */

function getCourseEnrollment(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[], targetCourse: string): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === targetCourse) {
            count++;
        }
    }
    return count;
}

function getCourseAverageScore(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[], targetCourse: string): number {
    let totalScore = 0;
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === targetCourse) {
            totalScore += enrollments[i].score;
            count++;
        }
    }
    return totalScore / count;
}

/** Learning Statistics */

function getTotalLearningHours(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        total += enrollments[i].duration;
    }
    return total;
}

function getAverageLearningDuration(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): number {
    let total = getTotalLearningHours(enrollments);

    return total / enrollments.length;
}

function printCompletionStatistics(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): void {
    console.log("=== Completion Statistics ===");
    console.log("Total Enrollments:", getTotalEnrollments(enrollments));
    console.log("Completed:", getCompletedEnrollments(enrollments));
    console.log("Incomplete:", getIncompleteEnrollments(enrollments));
    console.log("Completion Percentage:", getCompletionPercentage(enrollments) + "%");
    console.log("");

}

function printAcademicStatistics(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): void {
    console.log("=== Academic Statistics ===");
    console.log("Highest Score:", getHighestScore(enrollments));
    console.log("Lowest Score:", getLowestScore(enrollments));
    console.log("Average Score:", getAverageScore(enrollments));
    console.log("Passing Students:", getPassingStudents(enrollments));
    console.log("");
}

function printCourseStatistics(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): void {
    console.log("=== Course Statistics ===");
    console.log("TypeScript Enrollment:", getCourseEnrollment(enrollments, "TypeScript"));
    console.log("TypeScript Average Score:", getCourseAverageScore(enrollments, "TypeScript"));
    console.log("Database Enrollment:", getCourseEnrollment(enrollments, "Database"));
    console.log("Database Average Score:", getCourseAverageScore(enrollments, "Database"));
    console.log("Backend Enrollment:", getCourseEnrollment(enrollments, "Backend"));
    console.log("Backend Average Score:", getCourseAverageScore(enrollments, "Backend"));
    console.log("");
}

function printLearningStatistics(enrollments: { student: string, course: string, completed: boolean, score: number, duration: number }[]): void {
    console.log("=== Learning Statistics ===");
    console.log("Total Learning Hours:", getTotalLearningHours(enrollments));
    console.log("Average Learning Duration:", getAverageLearningDuration(enrollments), "minutes");
    console.log("");

}

printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);
printCourseStatistics(enrollments);
printLearningStatistics(enrollments);