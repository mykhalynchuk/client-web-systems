interface Payable {
    pay(): void;
}

abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number
    ) {}

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(`Виплачено зарплату розробнику ${this.name}: ${this.salary} грн`);
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(`Виплачено зарплату менеджеру ${this.name}: ${this.salary} грн`);
    }
}

const employees: Employee[] = [
    new Developer("Микола", 18, 40000),
    new Developer("Сергій", 18, 35000),
    new Manager("Андрій", 30, 60000)
];

let totalBonuses = 0;

employees.forEach(employee => {
    totalBonuses += employee.getAnnualBonus();

    if ('pay' in employee) {
        (employee as unknown as Payable).pay();
    }
});

console.log(`Загальна сума річних бонусів для всіх співробітників: ${totalBonuses} грн`);