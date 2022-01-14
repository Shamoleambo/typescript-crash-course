interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string {
    return `${this.name} was registered`;
  }
}

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const employeeOfTheMonth = new Employee(12345, "mano", "monkey manager");
console.log(employeeOfTheMonth.register());
