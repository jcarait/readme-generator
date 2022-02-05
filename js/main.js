const inquirer = require('inquirer');
const fs = require('fs');

//Variable is populated with answers from Inquirer
const generateREADME = ({ title, description, installation, usage }) =>
`# ${title}

${description}

## Installation Instructions: 

${installation}

## Usage Information: 

${usage}`;

//Inquirer prompts user via command-line interface
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What installation is required to run your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your application?'
    },
    {
      type: 'list',
      message: 'How would you like to licence your project?',
      name: 'license',
      choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'Boost 1.0', 'Unlicense']
    }
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('../README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
