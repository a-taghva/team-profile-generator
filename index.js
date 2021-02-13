const fs = require('fs');
const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const PasswordPrompt = require('inquirer/lib/prompts/password');

const managerData = [];
const engineerData = [];
const internData = [];

const promptManager = () => {
    console.clear()
    console.log('Please build your team!')
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the manager\'s name?',
            validate: name => {
                if (name) return true;

                console.log('\nPlease enter manager\'s name!');
                return false;
            },
        },
        {
            type: 'input', 
            name: 'managerId',
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
            name: 'managerEmail',
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
    ]);
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineer\'s name?',
            validate: name => {
                if (name) return true;

                console.log('\nPlease enter engineer\'s name');
                return false;
            }
        },
        {
            type: 'input', 
            name: 'engineerId',
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
            name: 'engineerEmail',
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
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your intern\'s name?',
            validate: name => {
                if (name) return true;

                console.log("\nPlease enter a name!");
                return false;
            },
        },
        {
            type: 'input',
            name: 'ineternId',
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
            name: 'internEmail',
            message: 'What is intern\'s Email?',
            validate: email => {
                if (emailValidator.validate(email)) return true;

                console.log('Please enter a valid email address!');
                return false;
            },
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is intern\'s school?',
            validate: school => {
                if (school) return true;

                console.log('Please enter a school!');
                return false;
            }
        },
    ]);
};

const selectRole = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team memebers!'],
        }
    ])
    .then(({ role }) => {
        addOrQuit(role);
    });
};

promptManager()
    .then(mngrData => {
        managerData.push(mngrData);
        selectRole();
    });

function addOrQuit(role) {
    if (role === 'Engineer') {
        promptEngineer()
            .then(engData => engineerData.push(engData))
            .then(selectRole);
    } else if (role === 'Intern') {
        promptIntern()
            .then(intrnData => internData.push(intrnData))
            .then(selectRole);
    } else {
        console.log('manger', managerData, 'engineer', engineerData, 'intern', internData);
    }
};