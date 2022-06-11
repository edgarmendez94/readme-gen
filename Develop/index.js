// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input


inquirer
  .prompt([
    {
      message: 'What is the name of your project?',
      name: 'name',
    },  
    {
      message: 'Enter project description',
      name: 'description',
    },
    {
      message: 'How to install?',
      name: 'install',
    },
    {
        message: 'Usage info',
        name: 'usage',
    },
    {
        message: 'Contribution guidlines',
        name: 'contrib',
    },
    {
        type:'list',
        message: 'choose a license',
        choices:['MIT','GNU AGPLv3', 'Mozilla Public 2.0', 'Apache 2.0'],
        name: 'liscense',
    },
    {
        message: 'Github username',
        name: 'github',
    },
    {
        message: 'Email Address',
        name: 'email',
    },

  ])
  .then((answers) => {
    generateHTML(answers);
  })

  

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
fs.writeFile("README.md", generateMarkdown() , (err) => {
    if (err) throw err;
    console.log("README Created")
})


// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  }

// // Function call to initialize app
init();
