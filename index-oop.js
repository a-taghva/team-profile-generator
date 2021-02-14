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
}