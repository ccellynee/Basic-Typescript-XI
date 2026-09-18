/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentScores = submissions.map((submission) => {
    const correctCount = submission.answers.filter((ans) => {
        const q = questions.find((q) => q.id === ans.questionId);
        return q?.correctAnswer === ans.answer;
    }).length;

    return {
        student: submission.student,
        score: correctCount * 25,
    };
});

console.log("Student Scores");
console.log(studentScores);

const studentResults = submissions.map((submission) => {
    let correct = 0;
    let wrong = 0;

    submission.answers.forEach((ans) => {
        const q = questions.find((q) => q.id === ans.questionId);
        if (q?.correctAnswer === ans.answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    return {
        student: submission.student,
        correct: correct,
        wrong: wrong,
    };
});

console.log("\nStudent Answers");
console.log(studentResults);

const categories = [...new Set(questions.map((q) => q.category))];

const categoryAverages = categories.map((category) => {
    const categoryQuestions = questions.filter((q) => q.category === category);
    const categoryQuestionIds = categoryQuestions.map((q) => q.id);

    let totalCorrect = 0;
    submissions.forEach((submission) => {
        submission.answers.forEach((ans) => {
            if (categoryQuestionIds.includes(ans.questionId)) {
                const q = categoryQuestions.find((cq) => cq.id === ans.questionId);
                if (q?.correctAnswer === ans.answer) {
                    totalCorrect++;
                }
            }
        });
    });

    const totalQuestions = categoryQuestions.length * submissions.length;
    const averageScore = Number(((totalCorrect / totalQuestions) * 100).toFixed(2));

    return {
        category: category,
        averageScore: averageScore,
    };
});

console.log("\nAverage Score by Category");
console.log(categoryAverages);

const totalStudents = studentScores.length;
const totalScore = studentScores.reduce((sum, s) => sum + s.score, 0);
const averageScore = Number((totalScore / totalStudents).toFixed(2));
const highestScore = Math.max(...studentScores.map((s) => s.score));
const lowestScore = Math.min(...studentScores.map((s) => s.score));
const passedStudents = studentScores.filter((s) => s.score > 70).length;
const failedStudents = totalStudents - passedStudents;
const passRate = Number(((passedStudents / totalStudents) * 100).toFixed(2));

const finalAnalytics = {
    totalStudents: totalStudents,
    averageScore: averageScore,
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents,
    failedStudents: failedStudents,
    passRate: passRate,
};

console.log("\nFinal Exam Analytics");
console.log(finalAnalytics);
