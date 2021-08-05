const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];
newEmployee();

// TODO: Create an array of questions for user input
function newEmployee() { 
    inquirer.prompt([
        {
            type: "input",
            message: "Enter team member's name",
            name: "name"
        },
        {
            type: "list",
            message: "Select team member's role",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ],
            name: "role"
        },
        {
            type: "input",
            message: "Enter team member's id",
            name: "id"
        },
        {
            type: "input",
            message: "Enter team member's email address",
            name: "email"
        }])
        .then(function({name, role, id, email}) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])
            .then(function({roleInfo, moreMembers}) {
                let newMember;
                if (role === "Engineer") {
                    newMember = new Engineer(name, id, email, roleInfo);
                } else if (role === "Intern") {
                    newMember = new Intern(name, id, email, roleInfo);
                } else {
                    newMember = new Manager(name, id, email, roleInfo);
                }
                employees.push(newMember);

                console.log(newMember)

                    if (moreMembers === "yes") {
                        newEmployee();
                    }
                });
                
            });

}

        function writeToFile() {
            fs.writeFile('README-generated.md', markdown(), (err) => {
                err ? console.error(err) : markdown; console.log('Your README.md has been generated');
            });
        }