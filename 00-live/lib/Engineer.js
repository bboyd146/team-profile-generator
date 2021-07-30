
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
    super.role = "Engineer";
    }

}

module.exports = Engineer;