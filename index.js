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
        type: 'list',
        name: 'license',
        message: 'What kind of license is your project?',
        choices: [
            'MIT License',
            'IBM',
            'Creative Common',
            'Mozilla Public License 2.0',
        ]
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide your email.',
        name: 'email',
    }
];
console.log(questions[3].choices);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err): console.log('All systems go. Your README.md has been generated.')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInputs){
        writeToFile('README.md', generateMarkdown(userInputs));
    })
}

// Function call to initialize app
init();















/* WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README */
