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
function renderScreenshotLink(addScreenshots) {
  if (addScreenshots) {
    return `* [Screenshot](#screenshot)`
  }
  return ``
}

//Function that returns the screenshot section with display image of README
function renderScreenshotSection(addScreenshots, url) {
  if (addScreenshots) {
    return `## Screenshot
  ![screenshot](${url})`
  }
  return ``
}

//Function to generate markdown for README
function generateMarkdown(data) {
  const {
    addScreenshots,
    description,
    contribute,
    email,
    github,
    installation,
    licenses,
    link,
    title,
    url,
    usage,
    test,
  } = data;

  return `# ${title}

  ${renderLicenseBadge(licenses)}

  # Table of Contents
  * [Description](#description)
  * [Project Link](#project-link)
  ${renderScreenshotLink(addScreenshots)}
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(licenses)}
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Description:
  ${description}

  ## Project Link:
  ${link}

  ${renderScreenshotSection(addScreenshots, url)}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ${renderLicenseSection(licenses)}

  ## Contribution
  ${contribute}

  ## Test
  ${test}

  ## Questions
  Have any questions or need further assistance with the project? 
  * Profile: [${github}](http://github.com/${github})
  * Email: ${email}
`;
}

module.exports = generateMarkdown;
