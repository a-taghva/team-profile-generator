const inquirer = require('inquirer');
const emailValidator = require('email-validator');
const colors = require('colors');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateSite = require("./src/generate-site");
const writeFile = require("./src/fs");

colors.setTheme({
    banner: 'bgBlue',
    success: 'bgGreen',
    error: 'bgRed',
    text: 'white',
});

class TeamMembers {
    constructor() {
        this.manager = [];
        this.engineer = [];
        this.intern = [];
    };

    startQuery(role = "Manager") {
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
                const pageHTML = generateSite(this.manager, this.engineer, this.intern);
                writeFile(pageHTML)
                    .then(res => console.log('\n', res.message.success.text, '\n'))
                    .catch(err => console.log(err.error.text));
        };
    };

    promptManager() {
        console.clear();
        console.log(colors.bgGreen("\tLet's build your team!\t\t\n".banner.text));

        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager\'s name?',
                validate: name => {
                    if (name) return true;
    
                    console.log('\nPlease enter manager\'s name!'.error.text);
                    return false;
                },
            },
            {
                type: 'input', 
                name: 'id',
                message: "What is the manger's ID?",
                validate: id => {
                    if (!id || isNaN(id)) {
                        console.log('\nPlease enter a number!'.error.text);
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
    
                    console.log("\nPlease enter a valid Email address!".error.text);
                    return false;
                },
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager\'s office number?',
                validate: officeNumber => {
                    if (!officeNumber || isNaN(officeNumber)) {
                        console.log("\nYou need to enter a number!".error.text);
                        return false;
                    };
    
                    return true;
                },
            },
        ])
        .then(({ name, id, email, officeNumber }) => {
            this.manager.push(new Manager(name, id, email, officeNumber));
            this.selectRole();
        })
    };

    promptEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your engineer\'s name?',
                validate: name => {
                    if (name) return true;
    
                    console.log('\nPlease enter engineer\'s name'.error.text);
                    return false;
                }
            },
            {
                type: 'input', 
                name: 'id',
                message: "What is the Engineer's ID?",
                validate: id => {
                    if (!id || isNaN(id)) {
                        console.log('\nPlease enter a number!'.error.text);
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
    
                    console.log("\nPlease enter a valid Email address!".error.text);
                    return false;
                },
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s GitHub username?',
                validate: github => {
                    if (github) return true;
    
                    console.log('\nYou need to enter engineer\'s github user name'.error.text);
                    return false;
                },
            }
        ])
        .then(({ name, id, email, github }) => {
            this.engineer.push(new Engineer(name, id, email, github));
            this.selectRole();
        });
    };

    promptIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your intern\'s name?',
                validate: name => {
                    if (name) return true;
    
                    console.log("\nPlease enter a name!".error.text);
                    return false;
                },
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is intern\'s ID?',
                validate: id => {
                    if (!id || isNaN(id)) {
                        console.log('\nPlease enter a number!'.error.text);
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
    
                    console.log('\nPlease enter a valid email address!'.error.text);
                    return false;
                },
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is intern\'s school?',
                validate: school => {
                    if (school) return true;
    
                    console.log('\nPlease enter a school!'.error.text);
                    return false;
                }
            },
        ])
        .then(({ name, id, email, school}) => {
            this.intern.push(new Intern(name, id, email, school));
            this.selectRole();
        });
    };


    selectRole() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'I don\'t want to add any more team memebers!'],
            }
        ])
        .then(({ role }) => {
            this.startQuery(role);
        });
    };

};

new TeamMembers().startQuery();
