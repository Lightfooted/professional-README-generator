//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License:
  ![badge](https://img.shields.io/badge/license-${data.licenses}-informational)

  # Table of Contents
  * [Description](#description)
  * [Project Link](#project-link)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Contribution](#contribution)
  * [Github Info](#github-info)

  ## Description:
  ${data.description}

  ## Project Link:
  ${data.link}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribute}

  ## Test
  ${data.test}

  ## Github Info
  - Username: ${data.github}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
