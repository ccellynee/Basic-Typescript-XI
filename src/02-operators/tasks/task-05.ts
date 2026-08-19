/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

const studentName: string = "Alya Putri";
const gpa: number = 3.89;
const familyIncome: number = 4200000;
const competitionCount: number = 4;
const hasDisciplinaryRecord: boolean = false;
const documentsComplete: boolean = true;

const totalScholarshipBudget: number = 500000000;

const gpaQualified: boolean = gpa >= 3.75;
const incomeQualified: boolean = familyIncome < 5000000;
const competitionQualified: boolean = competitionCount >= 3;
const disciplinaryQualified: boolean = hasDisciplinaryRecord === false;
const documentsQualified: boolean = documentsComplete === true;

const isAccepted: boolean =
  gpaQualified &&
  incomeQualified &&
  competitionQualified &&
  disciplinaryQualified &&
  documentsQualified;

const scholarshipAmount: number = isAccepted ? 12000000 : 0;

const remainingBudget: number =
  totalScholarshipBudget - scholarshipAmount;

console.log("Student Name:", studentName);
console.log("Accepted:", isAccepted ? "Yes" : "No");
console.log("Scholarship Amount: Rp", scholarshipAmount);
console.log("Remaining Budget: Rp", remainingBudget);