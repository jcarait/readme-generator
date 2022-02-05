

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
      return '[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      ('')
  }

}

// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache 2.0':
      return '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
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

// If there is no license, return an empty string


function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license)
  if (!license) {
    return ""
  } else {
   return `This project is available under the MIT license. Visit ${licenseLink} for full license text`
  }
};



renderLicenseSection('MIT');

function generateMarkdown(data) {

const licenseBadge = renderLicenseBadge(data.license);
const licenseSection = renderLicenseSection(data.license)
  
  return `# ${data.title}
  ${licenseBadge}

## Description

${data.description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation Instructions

${data.installation}

## Usage Information:

${data.usage}

## License

${licenseSection}

## Contribute

${data.contribute}

## Tests

${data.tests}

### Questions

${data.questions}

Git profile: https://github.com/${data.user}
Email: ${data.email}`;
};

module.exports = generateMarkdown;
