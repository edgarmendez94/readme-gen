// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title,description,install,usage,contrib,liscense,github,email) {
 const md = `# {title}

 ## Description
 
 {Description}
 
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
}

module.exports = generateMarkdown;
