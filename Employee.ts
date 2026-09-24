export class Employee {
    ssn: string;
    lastName: string;
    firstName: string;
    address: string;
    rank: number;
    age: number;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
    ) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }

    protected validateAge(): boolean {
        if (this.age >= 16)
            return true;
        else {
            console.log("You must be 16 or older");
            return false
        }
    }

    protected validateRank(): boolean {
        if (this.rank >= 1 && this.rank <= 5){
            return true;
        } else {
            console.log("Your rank must be between 1 and 5");
            return false;      
        }
    }

    protected validateSSN(): boolean {
        //learned how to use regex in typescript here: https://www.convex.dev/typescript/core-concepts/functions-methods/typescript-regex
        let regex = /^\d{4}-\d{4}-\d{4}$/;

        if(regex.test(this.ssn))
            return true;
        else {
            console.log("SSN not in the proper format of ####-####-####");
            return false;
        }
    }
}