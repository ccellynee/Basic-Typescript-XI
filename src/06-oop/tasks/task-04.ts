/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 * 
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 * 
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */
class Employee {
    employeeId: string;
    name: string;
    position: string;
    private basicSalary: number;
    private bonus: number;

    constructor(
        employeeId: string,
        name: string,
        position: string,
        basicSalary: number = 0,
        bonus: number = 0
    ) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.basicSalary = basicSalary > 0 ? basicSalary : 0;
        this.bonus = bonus >= 0 ? bonus : 0;
    }

    public getBasicSalary(): number {
        return this.basicSalary;
    }

    public setBasicSalary(salary: number): void {
        if (salary > 0) {
            this.basicSalary = salary;
            console.log(`Successfully updated basic salary to Rp${salary.toLocaleString("id-ID")}.`);
        } else {
            console.log("Failed to set salary: Salary must be greater than 0.");
        }
    }

    public addBonus(amount: number): void {
        if (amount >= 0) {
            this.bonus += amount;
            console.log(`Successfully added bonus Rp${amount.toLocaleString("id-ID")}.`);
        } else {
            console.log("Failed to add bonus: Bonus cannot be negative.");
        }
    }

    public getTotalSalary(): number {
        return this.basicSalary + this.bonus;
    }

    public showProfile(): void {
        console.log("=== Employee Profile ===");
        console.log(`Employee ID  : ${this.employeeId}`);
        console.log(`Name         : ${this.name}`);
        console.log(`Position     : ${this.position}`);
        console.log(`Basic Salary : Rp${this.basicSalary.toLocaleString("id-ID")}`);
        console.log(`Bonus        : Rp${this.bonus.toLocaleString("id-ID")}`);
        console.log(`Total Salary : Rp${this.getTotalSalary().toLocaleString("id-ID")}`);
    }
}

const employee = new Employee(
    "EMP001",
    "Kevin De Bruyne",
    "Senior Developer",
    12000000
);

employee.showProfile();
console.log("");

console.log("--- Adding Bonus ---");
employee.addBonus(2000000);
employee.addBonus(-500000); // Should fail: negative bonus
console.log("");

console.log("--- Updating Basic Salary ---");
employee.setBasicSalary(15000000);
employee.setBasicSalary(-1000000); // Should fail: negative salary
employee.setBasicSalary(0);        // Should fail: must be > 0
console.log("");

console.log("--- Total Salary ---");
console.log(`Total Salary: Rp${employee.getTotalSalary().toLocaleString("id-ID")}`);
console.log("");

employee.showProfile();