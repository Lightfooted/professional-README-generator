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
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter installation information to your project!');
            return false;
          }
        }
      },
      //Usage
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('You need to provide information on how to use this project!');
            return false;
          }
        }
      },
      //License
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'What license would you like to use for this project? (Required)',
        choices: [],
        validate: licensesInput => {
          if (licensesInput) {
            return true;
          } else {
            console.log('You must choose a license for this project!');
            return false;
          }
        }
      },
      //Contribution
      {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project? (Required)',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('You must inform on how to contribute to this project!');
            return false;
          }
        }
      },
      //Testing
      {
        type: 'input',
        name: 'test',
        message: 'How do you test this project? (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('You must describe how to test this project!');
            return false;
          }
        }
      },
      //Username
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      //Email
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You must enter your email address!');
            return false;
          }
        }
      }
];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README complete!')
    });
}

//Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
