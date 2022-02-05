const fs = require('fs');
const util = require('util')

readFile = util.promisify(fs.readFileSync);


// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT':
      return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Boost 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      ('')
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache 2.0':
      return '[[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT':
      return ('[License: MIT](https://opensource.org/licenses/MIT)');
    case 'GNU GPLv3':
      return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Boost 1.0':
      return '[License: Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Unlicense':
      return '[License: Unlicense](http://unlicense.org/)';
    default:
      ('')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

licenseBadge = renderLicenseBadge(data.license);
licenselink = renderLicenseLink(data.license);
  
  return `# ${data.title}
  ${licenseBadge}

## Description

${data.description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#How to contribute)
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

${data.questions}

Git profile: https://github.com/${data.username}
Email: ${data.email}`;
};

module.exports = generateMarkdown;
