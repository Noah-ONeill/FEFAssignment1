import { IEmployee } from "./IEmployee.ts";
import { Employee } from "./Employee.ts";

export class FullTimeEmployee extends Employee implements IEmployee {
    salary: number;
    bonus: number;
    overtimeHours: number;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
        salary: number,
        bonus: number,
        overtimeHours: number
    ) {
        super(ssn, lastName, firstName, address, rank, age);
        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHours;
    }
    calculateSalary(): number {
        if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            return ((this.salary / 40) * this.overtimeHours * 1.25);
        } else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            return ((this.salary / 40) * this.overtimeHours * 1.5);
        } else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            return ((this.salary / 40) * this.overtimeHours * 1.25);
        } else if (this.overtimeHours > 30) {
            return ((this.salary / 40) * this.overtimeHours * 2);
        } else {
            return 0;
        }
    }
    displayInformation(): string {
        return `Full Time Employee: ${this.firstName} ${this.lastName} Rank: ${this.rank} 
                Address: ${this.address} SSN: ${this.ssn} Age: ${this.age}
                Salary: ${this.calculateCompensation()} Bonus: ${this.bonus} `;
    }
    calculateCompensation(): number {
        return this.salary + this.calculateSalary();
    }
    saveEmployee(): void {
        let ageValid = this.validateAge();
        let rankValid = this.validateRank();
        let ssnValid = this.validateSSN();
        if(ageValid && rankValid && ssnValid){
            console.log('Full time Employee saved');
        } else {
            console.log('Full time employee not saved');
            
        }
    }

}