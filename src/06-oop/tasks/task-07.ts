/**
 * A company has different types of employees.
 * Every employee has:
 * - Name
 * - Employee ID
 * - Basic salary
 * 
 * However, the way their total salary is calculated differs.
 * - Full-Time Employee receive Basic Salary + Fixed Allowance
 * - Part-Time Employee receive Basic Salary + Hours Worked × Hourly Rate
 * 
 * example:
 * Fulltime Employee
 * Name: Mohamed Salah
 * Basic Salary: Rp8,000,000
 * Allowance: Rp1,500,000
 * 
 * ParttimeEmployee
 * Name: Erling Haaland
 * Basic Salary: Rp2,000,000
 * Hours Worked: 40
 * Hourly Rate: Rp50,000
 * 
 */

class Employee {
    constructor(
        public name: string,
        public employeeID: string,
        protected basicSalary: number
    ) { }

    calculateSalary(): number {
        return this.basicSalary;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Basic Salary: Rp${this.basicSalary.toLocaleString("en-US")}`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(
        name: string,
        employeeID: string,
        basicSalary: number,
        private allowance: number
    ) {
        super(name, employeeID, basicSalary);
    }

    calculateSalary(): number {
        return this.basicSalary + this.allowance;
    }

    showInfo(): void {
        console.log("Fulltime Employee");
        console.log(`Name: ${this.name}`);
        console.log(`Basic Salary: Rp${this.basicSalary.toLocaleString("en-US")}`);
        console.log(`Allowance: Rp${this.allowance.toLocaleString("en-US")}`);
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        name: string,
        employeeID: string,
        basicSalary: number,
        private hoursWorked: number,
        private hourlyRate: number
    ) {
        super(name, employeeID, basicSalary);
    }

    calculateSalary(): number {
        return this.basicSalary + (this.hoursWorked * this.hourlyRate);
    }

    showInfo(): void {
        console.log("ParttimeEmployee");
        console.log(`Name: ${this.name}`);
        console.log(`Basic Salary: Rp${this.basicSalary.toLocaleString("en-US")}`);
        console.log(`Hours Worked: ${this.hoursWorked}`);
        console.log(`Hourly Rate: Rp${this.hourlyRate.toLocaleString("en-US")}`);
    }
}

const employees: Employee[] = [
    new FullTimeEmployee(`Mohamed Salah`, `111`, 8000000, 1500000),
    new PartTimeEmployee(`Erling Haaland`, `112`, 2000000, 40, 50000)
];

for (let i = 0; i < employees.length; i++) {
    employees[i].showInfo();
    if (i < employees.length - 1) {
        console.log("");
    }
}