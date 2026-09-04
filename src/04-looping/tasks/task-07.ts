/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let present= 0;
let absent= 0;

for (let i = 0; i < attendances.length; i++) {
  if (attendances[i].present){
    present++;
  } else {
    absent++;
    console.log("Absent:", attendances[i].name);
  }
}

const percentage = (present / attendances.length)*100;

console.log("Present:", present);
console.log("Absent:", absent);
console.log("Attendance Percentage:", percentage + "%");