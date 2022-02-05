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
    // {
    //   type: 'input',
    //   name: 'description',
    //   message: 'Enter a short description of your project'
    // },
    // {
    //   type: 'input',
    //   name: 'installation',
    //   message: 'What installation is required to run your project?'
    // },
    // {
    //   type: 'input',
    //   name: 'usage',
    //   message: 'How do you use your application?'
    // },
    // {
    //   type: 'list',
    //   message: 'How would you like to licence your project?',
    //   name: 'license',
    //   choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'Boost 1.0', 'Unlicense']
    // }
  ]);
}

//Variable is populated with answers from Inquirer

const init = () => {
  promptUser()
  .then((answers) => {
    const readmeContents = markdown(answers);

    fs.writeFileSync('../README.md', readmeContents)
  })
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
};

init();