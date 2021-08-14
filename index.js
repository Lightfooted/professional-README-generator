const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    //Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('A title is required!');
            return false;
          }
        }
      },
      //Description
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the README (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a README description!');
            return false;
          }
        }
      },
      //Links (added as extra)
      {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a link to your project!');
            return false;
          }
        }
      },
      //Installation
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
          if (intallationInput) {
            return true;
          } else {
            console.log('You need to enter installation information to your project!');
            return false;
          }
        }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
