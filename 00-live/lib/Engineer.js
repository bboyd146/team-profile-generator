
const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
    super.role = "Engineer";
    }

    getGithub(id) {
        return this.github;
    }

    getRole(id) {
        return this.role;
    }
}

module.exports = Engineer;