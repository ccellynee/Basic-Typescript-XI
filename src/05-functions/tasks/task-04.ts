/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport ( attendances: {name: string, present: boolean}[]): void {

    let present = 0;
    let absent = 0;
    let absentStudents: string[] = [];

    for (let i = 0; i < attendances.length; i++) {
        if(attendances[i].present) { 
            present++;
        } else {
        absent++;
        absentStudents.push(attendances[i].name);
        }
}

    console.log("Total Present:", present);
    console.log("Total Absent:", absent);
    console.log("Absent Students:", absentStudents);
}

printAttendanceReport(attendances);