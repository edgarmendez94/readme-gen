// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");


// TODO: Create an array of questions for user input


inquirer
  .prompt([
    {
      message: 'What is the name of your project?',
      name: 'title',
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
      message: 'What are its features',
      name: 'features',
    },
    {
        message: 'Your github account',
        name: 'github',
    },
    {
        message: 'Where to contact you (Email address)',
        name: 'email',
    },

  ])
  .then((answers) => {
    generateMarkdown(answers);
  })

  const generateMarkdown = ({title,description,install,usage,contrib,liscense,features,github,email}) => {
    const md =
`
# ${title}
   
 Description
    
 ${description}
    
## Table of Contents 
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Github](#github)
    
    
## Installation
    
${install}
    
## Usage
    
${usage}
    
## Credits
    
${contrib}
   
## License
    
${liscense}
    
## Badges
    
    
## Features
    
${features}
    
## Github
    
${github}
    
## Contact Me
    
${email}
`
   
;

   fs.writeFile(`${title}.md`, md, (err) => {
    if(err) throw err;
    console.log("Read Me Made!")
  })
   }


