const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title }) =>
  `# ${title}`;

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
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
