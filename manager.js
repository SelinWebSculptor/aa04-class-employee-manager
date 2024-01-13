const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager)
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    totalSubSalary(){
        let sum = 0;

        if (this.employees.length === 0){
            return sum;
        }

        if (this.employee instanceof Manager){
            sum = this.employee.calculateBonus() + this.salary;
            return sum;
        }

        return totalSubSalary(this.employees.slice(0));
    }


}


module.exports = Manager;
