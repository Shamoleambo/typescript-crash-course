"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} was registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employeeOfTheMonth = new Employee(12345, "mano", "monkey manager");
console.log(employeeOfTheMonth.register());
