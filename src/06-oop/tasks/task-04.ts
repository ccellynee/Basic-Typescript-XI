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
        basicSalary: number,
        bonus: number
    ) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.basicSalary = basicSalary;
        this.bonus = bonus;
    }

    getBasicSalary(): number {
        return this.basicSalary;
    }

    setBasicSalary(newSalary: number): void {
        if (newSalary > 0) {
            this.basicSalary = newSalary;
            console.log("Basic salary berhasil diubah.");
        } else {
            console.log("Basic salary harus lebih dari 0.");
        }
    }

    addBonus(amount: number): void {
        if (amount >= 0) {
            this.bonus += amount;
            console.log("Bonus berhasil ditambahkan.");
        } else {
            console.log("Bonus tidak boleh negatif.");
        }
    }

    getTotalSalary(): number {
        return this.basicSalary + this.bonus;
    }

    showProfile(): void {
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Name: ${this.name}`);
        console.log(`Position: ${this.position}`);
        console.log(`Basic Salary: Rp${this.basicSalary}`);
        console.log(`Bonus: Rp${this.bonus}`);
        console.log(`Total Salary: Rp${this.getTotalSalary()}`);
    }
}

const employee = new Employee(
    "EMP001",
    "Kevin De Bruyne",
    "Senior Developer",
    12000000,
    2000000
);

employee.showProfile();

console.log("Basic Salary:", employee.getBasicSalary());

employee.setBasicSalary(13000000);

employee.addBonus(500000);

console.log("Total Salary:", employee.getTotalSalary());

employee.showProfile();