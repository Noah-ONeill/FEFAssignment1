import { ContractEmployee } from "./ContractEmployee.ts";
import { FullTimeEmployee } from "./FullTimeEmployee.ts";

let contractEmployee : ContractEmployee = new ContractEmployee("1234-5678-9012",  // ssn
    "Foo", "John","123 Main Street", 5, 32, 45, 25);

let fullTimeEmployee : FullTimeEmployee = new FullTimeEmployee("0987-6543-2109",  // ssn
    "Foo", "Greg","1234 Main Street", 3, 32, 3000, 500, 12);

contractEmployee.saveEmployee();
fullTimeEmployee.saveEmployee();

console.log(contractEmployee.displayInformation());
console.log(fullTimeEmployee.displayInformation());

let failureContractEmployee : ContractEmployee = new ContractEmployee("1234-5678-92",  // ssn
    "Foo", "Bill","1235 Main Street", 8, 12, 45, 25);

let failureFullTimeEmployee : FullTimeEmployee = new FullTimeEmployee("12378-9012",  // ssn
    "Foo", "George","1237 Main Street", -1, -4, 2000, 500, 10);

failureContractEmployee.saveEmployee();
failureFullTimeEmployee.saveEmployee();