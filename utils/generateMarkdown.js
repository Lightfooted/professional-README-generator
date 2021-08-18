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
  This project uses the ${licenses} license.` //Indentation fix. Thanks, Mila!
  }
  return ``
}

// Function that returns the screenshot link
function renderScreenshotLink(url) {
  if (url != false) {
    return `* [Screenshot](#screenshot)`
  }
  return ``
}

//Function that returns the screenshot section with display image of README
function renderScreenshotSection(url) {
  if (url != false) {
    return `## Screenshot
  ![screenshot](${url})`
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
  ${renderScreenshotLink(data.url)}
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

  ${renderScreenshotSection(data.url)}

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
