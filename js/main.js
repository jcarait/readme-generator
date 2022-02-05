const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

//Inquirer prompts for information about application repository to be included in README

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a short description of your project'
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
      message: 'Choose a license your project.',
      name: 'license',
      choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'Boost 1.0', 'Unlicense']
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter guidelines on how to contribute to your project.'
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter guidelines on how to contribute to your project.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you test your application?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email (use a developer email if you do not wish to use your private email).'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Provide instructions on how to reach you with additional questions. If you have previously entered your Github username and email, they will be included in the questions section.'
    },
  ]);
}

const init = () => {
  promptUser()
  .then((answers) => {
    const readmeContents = markdown(answers);

    fs.writeFileSync('../README.md', markdown(answers));
  })
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
};

init();