// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
    {
        type:"input",
        name:"projectTitle",
        message:"Enter your project title"
    },
    {
        type:"input",
        name:"description",
        message:"Enter your project description"
    },
    {
        type:"input",
        name:"installation",
        message:"Enter your installation instructions"
    },
    {
        type:"input",
        name:"usage",
        message:"Enter your usage information"
    },
    {
        type:"input",
        name:"contribution",
        message:"Enter your contribution guidelines"
    },
    {
        type:"input",
        name:"test",
        message:"Enter your test instructions"
    },
    {
        type:"list",
        name:"license",
        message:"What license did you use?",
        choices: ["Apache","MIT","Microsoft Public","N/A"]
    },
    {
        type:"input",
        name:"gitHubUsername",
        message:"Enter your GitHub username"
    },
    {
        type:"input",
        name:"gitHubLink",
        message:"Enter your GitHub profile link"
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email address"
    },
]);
};


// README template

const generateREADME = (answers) => 

`# ${answers.projectTitle}

#TABLE OF CONTENTS
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## DESCRIPTION 
${answers.description}
## INSTALLATION 
${answers.installation}
## USAGE
${answers.usage}
## CONTRIBUTING
${answers.contribution}
## TESTS
${answers.test}
## License
${answers.license}
## Questions?
Please email ${answers.email} to contact me.
### GitHub 
Username: ${answers.gitHubUsername}
Profile: ${answers.gitHubLink}`;


// Created a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
