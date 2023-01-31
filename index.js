const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Who is the author of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'confirm',
        name: 'license',
        message: 'What kind of license is your project?',
    },
];
//console.log(questions);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
