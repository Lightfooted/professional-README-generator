// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(licenses) {
  if (licenses != "None") {
    return `![badge](https://img.shields.io/badge/License-${licenses}-informational)`
  }
  return ``
}

// Function that returns the license link
function renderLicenseLink(licenses) {
  if (licenses != "None") {
    return `* [License](#license)`
  }
  return ``
}

//Function that returns the license section of README
function renderLicenseSection(licenses) {
  if (licenses != "None") {
    return `## License
    This project uses the ${licenses} license.`
  }
  return ``
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  # Table of Contents
  * [Description](#description)
  * [Project Link](#project-link)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.licenses)}
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

  ${renderLicenseSection(data.licenses)}

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
