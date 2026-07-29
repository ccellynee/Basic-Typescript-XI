/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type attendance = {
    employeeID: string;
    employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    workingHours: number;
    isPresent: boolean;
};

const attendance1: attendance = {
    employeeID: "TS0001",
    employeeName: "Andi Saputra",
    date: "2026-07-27",
    checkInTime: "08:00",
    checkOutTime: "17:00",
    workingHours: 9,
    isPresent: true,
};

const attendance2: attendance = {
    employeeID: "TS0002",
    employeeName: "Budi Santoso",
    date: "2026-07-27",
    checkInTime: "08:15",
    checkOutTime: "17:15",
    workingHours: 9,
    isPresent: true,
};

const attendance3: attendance = {
  employeeID: "TS0003",
  employeeName: "Citra Lestari",
  date: "2026-07-27",
  checkInTime: "-",
  checkOutTime: "-",
  workingHours: 0,
  isPresent: false,
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);