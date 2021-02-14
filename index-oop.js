const inquirer = require('inquirer');
const emailValidator = require('email-validator');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

class Query {
    constructor() {
        this.manager = [];
        this.engineer = [];
        this.intern = [];
    };

    startQuery(role = "Manager") {
        switch (role) {
            case "Manager":
                this.promptManager()
                break;
        };
    };

    promptManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager\'s name?',
                validate: name => {
                    if (name) return true;
    
                    console.log('\nPlease enter manager\'s name!');
                    return false;
                },
            },
            {
                type: 'input', 
                name: 'id',
                message: "What is the manger's ID?",
                validate: id => {
                    if (!id || isNaN(id)) {
                        console.log('\nPlease enter a number!');
                        return false;
                    }
    
                    return true;
                },
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manger\'s email?',
                validate: email => {
                    if (emailValidator.validate(email)) return true;
    
                    console.log("\nPlease enter a valid Email address!");
                    return false;
                },
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager\'s office number?',
                validate: officeNumber => {
                    if (!officeNumber || isNaN(officeNumber)) {
                        console.log("\nYou need to enter a number!");
                        return false;
                    };
    
                    return true;
                },
            },
        ])
        .then(({ name, id, email, officeNumber }) => {
            this.manager.push(new Manager(name, id, email, officeNumber));
            console.log(this.manager);
            this.selectRole();
        })
    };


    selectRole() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Which type of team member would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'I don\'t want to add any more team memebers!'],
            }
        ])
        .then(({ role }) => {
            this.addOrQuit(role);
        });
    };

    addOrQuit (role) {
        switch (role) {
            case 'Manager':
                this.promptManager();
                break;
            case 'Engineer':
                this.promptEngineer();
                break;
            case 'Intern':
                this.promptIntern();
                break;
            default:
                console.log('Done!');
        };
    };

};

new Query().startQuery();
