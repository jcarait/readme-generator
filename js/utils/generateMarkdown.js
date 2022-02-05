// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

'MIT', 'GNU GPLv3', 'Boost 1.0', 'Unlicense'

function renderLicenseBadge(license) {
    
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

## Description

${data.description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute]](#How to contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation Instructions

${data.installation}

## Usage Information:

${data.usage}

## License

${data.license}

## How to contribute
${data.contribute}

## Tests
${data.tests}

### Questions
${data.questions}`;
};

module.exports = generateMarkdown;
