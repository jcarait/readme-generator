const inquirer = require('inquirer');
const fs = require('fs');

//Inquirer prompts for information about application repository to be included in README

const promptUser = () => {
  return inquirer.prompt([
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
}

//Variable is populated with answers from Inquirer
const generateREADME = ({ title, description, installation, usage }) =>
`# ${title}

${description}

## Installation Instructions: 

${installation}

## Usage Information: 

${usage}`;

const init = () => {
  promptUser()
  .then((answers) => fs.writeFileSync('../README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
};