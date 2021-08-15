//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.licenses}-informational)

  ## Description:
  ${data.description}

  ## Project Link:
  ${data.link}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribue}

  ## Test
  ${data.test}

  ## Github Info
  - Username: ${data.github}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
