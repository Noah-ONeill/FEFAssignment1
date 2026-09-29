import { IEmployee } from "./IEmployee.ts";
import { Employee } from "./Employee.ts";

export class ContractEmployee extends Employee implements IEmployee {
    hours: number;
    hourlyRate: number;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
        hours: number,
        hourlyRate: number
    ) {
        super(ssn, lastName, firstName, address, rank, age);
        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }


    displayInformation(): string {
        return `Contract Employee: ${this.firstName} ${this.lastName} Rank: ${this.rank}
         Address: ${this.address} SSN: ${this.ssn} Age: ${this.age} Salary: ${this.calculateCompensation()} `;
    }
    calculateCompensation(): number {
        if(this.hours > 40){
            let OTPay: number = (this.hours - 40) * (this.hourlyRate * 1.5);
            return OTPay + (this.hours * this.hourlyRate);
        } else {
            return (this.hours * this.hourlyRate);
        }
    }
    saveEmployee(): void {
        let ageValid = this.validateAge();
        let rankValid = this.validateRank();
        let ssnValid = this.validateSSN();
        if(ageValid && rankValid && ssnValid){
            console.log('Contract Employee saved');
        } else {
            console.log('Contract employee not saved');
            
        }
    }

}