//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Project Link:
  ${data.link}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.licenses}

  ## Contribution
  ${data.contribue}

  ## Test
  ${data.test}

  ##Username and Contact
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
