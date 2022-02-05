const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const util = require('util')

//Inquirer prompts for information about application repository to be included in README

const writeToFile = util.promisify(fs.writeFileSync)

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
      name: 'questions',
      message: 'Provide instructions on how to reach you with additional questions'
    },
  ]);
}

const init = () => {
  promptUser()
  .then((answers) => {
    console.log(answers);
    const readmeContents = markdown(answers);

    writeToFile('../README.md', readmeContents)
  })
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
};

init();