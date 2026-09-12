/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function totalAdmittedPatients(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): number {
    let admittedPatients = 0;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted) {
            admittedPatients++;
        }
    }
    return admittedPatients;
}

function totalDischargedPatients(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): number {
    let discharged = 0;
    for (let i = 0; i < patients.length; i++) {
        if (!patients[i].admitted) {
            discharged++;
        }
    }
    return discharged;
}

function patientsEachDepartment(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[], patientDepartment: string): number {
    let count = 0;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].department === patientDepartment) {
            count++;
        }
    }
    return count;
}

function highestHospitalBill(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): number {
    let highest = patients[0].bill;

    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill > highest) {
            highest = patients[i].bill;
        }
    }
    return highest;
}

function lowestHospitalBill(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): number {
    let lowest = patients[0].bill;

    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill < lowest) {
            lowest = patients[i].bill;
        }
    }
    return lowest;
}

function averageHospitalBill(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): number {
    let total = 0;
    for (let i = 0; i < patients.length; i++) {
        total += patients[i].bill;
    }
    return total / patients.length;
}

function totalHospitalRevenue(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): number {
    let totalRevenue = 0;

    for (let i = 0; i < patients.length; i++) {
        totalRevenue += patients[i].bill;
    }
    return totalRevenue;
}

function namesAdmittedPatients(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): string[] {
    let namesAdmitted: string[] = [];

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted)
            namesAdmitted.push(patients[i].name);
    }
    return namesAdmitted;
}

function printHospitalReport(patients: { id: string, name: string, age: number, department: string, admitted: boolean, bill: number }[]): void {
    console.log("Total patients:", patients.length);
    console.log("Total admitted patients:", totalAdmittedPatients(patients));
    console.log("Total discharged patients:", totalDischargedPatients(patients));
    console.log("Department of Pediatrics:", patientsEachDepartment(patients, "Pediatrics"));
    console.log("Department of Cardiology:", patientsEachDepartment(patients, "Cardiology"));
    console.log("Department of Orthopedics:", patientsEachDepartment(patients, "Orthopedics"));
    console.log("Highest hospital bill:", highestHospitalBill(patients));
    console.log("Lowest hospital bill:", lowestHospitalBill(patients));
    console.log("Average hospital bill:", averageHospitalBill(patients));
    console.log("Total hospital revenue:", totalHospitalRevenue(patients));
    console.log("Names of admitted patients:", namesAdmittedPatients(patients));
}

printHospitalReport(patients);