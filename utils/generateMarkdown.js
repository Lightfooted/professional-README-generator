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
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

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

  ## Questions
  Have any questions or need further assistance with the project? 
  * Profile: [${data.github}](http://github.com/${data.github})
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
