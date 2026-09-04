/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */

const patientName: string = "Siti Rahma";
const isCritical: boolean = false;
const hasAppointment: boolean = true;
const age: number = 67;
const hasInsurance: boolean = true;

let destination: string;

if (isCritical) {
  destination = "Emergency Room";
} else {
  if (hasAppointment) {
    if (age >= 60) {
      destination = "Priority Queue";
    } else {
      destination = "Regular Queue";
    }
  } else {
    if (hasInsurance) {
      destination = "Insurance Registration Counter";
    } else {
      destination = "General Registration Counter";
    }
  }
}

console.log("Patient Name:", patientName);
console.log("Destination:", destination);
