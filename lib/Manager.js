const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
    super.role = "Manager";
    }


    getRole() {
        return this.role;
    }
}

module.exports = Manager;