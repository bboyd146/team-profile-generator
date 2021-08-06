const Employee = require('./Employee');
const inquirer = require('inquirer');
class Intern extends Employee {
    constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
    super.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;