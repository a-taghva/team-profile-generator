const fs = require('fs');
const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const managerData = [];
const engineerData = [];
const internData = [];

const startQuery = () => {
    promptManager(true);
};

const promptManager = (firstTime = false) => {
    if (firstTime) {
        console.clear();
        console.log('Please build your team!');
    };

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
    .then(({ name, id, email, officeNumber}) => {
        managerData.push(new Manager(name, id, email, officeNumber));
        selectRole();
    })
};

const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your engineer\'s name?',
            validate: name => {
                if (name) return true;

                console.log('\nPlease enter engineer\'s name');
                return false;
            }
        },
        {
            type: 'input', 
            name: 'id',
            message: "What is the Engineer's ID?",
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
            message: 'What is the engineer\'s email?',
            validate: email => {
                if (emailValidator.validate(email)) return true;

                console.log("\nPlease enter a valid Email address!");
                return false;
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
            validate: github => {
                if (github) return true;

                console.log('\nYou need to enter engineer\'s github user name');
                return false;
            },
        }
    ])
    .then(({ name, id, email, github }) => {
        engineerData.push(new Engineer(name, id, email, github));
        selectRole();
    })
};

const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your intern\'s name?',
            validate: name => {
                if (name) return true;

                console.log("\nPlease enter a name!");
                return false;
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is intern\'s ID?',
            validate: id => {
                if (!id || isNaN(id)) {
                    console.log('Please enter a number!');
                    return false;
                };

                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is intern\'s Email?',
            validate: email => {
                if (emailValidator.validate(email)) return true;

                console.log('Please enter a valid email address!');
                return false;
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is intern\'s school?',
            validate: school => {
                if (school) return true;

                console.log('Please enter a school!');
                return false;
            }
        },
    ])
    .then(({ name, id, email, school}) => {
        internData.push(new Intern(name, id, email, school));
        selectRole();
    })
};

const selectRole = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'I don\'t want to add any more team memebers!'],
        }
    ])
    .then(({ role }) => {
        addOrQuit(role);
    });
};

const addOrQuit = role => {
    switch (role) {
        case 'Manager':
            promptManager();
            break;
        case 'Engineer':
            promptEngineer();
            break;
        case 'Intern':
            promptIntern();
            break;
        default:
            console.log('Done!');
    }
};

startQuery();