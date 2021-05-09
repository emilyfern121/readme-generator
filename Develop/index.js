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


// ).then(({
//     projectTitle,
//     description,
//     installation,
//     usage,
//     contribution,
//     test,
//     license,
//     gitHubUsername,
//     gitHubProfile,
//     email

const generateREADME = (answers) => 

`# ${answers.projectTitle}

#TABLE OF CONTENTS
* [Description](#description)
* [Installation](#instalation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Tests](#test)
* [Questions](#email)
## DESCRIPTION
${answers.description}
## INSTALATION
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
Profile: ${answers.gitHubProfile}`;
        
//         createNewFile(title,generateREADME);
// });
// }

// function createNewFile(fileName,data){

//     fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Your README file has been generated!");
//     })
// }
 
// TODO: Create a function to write README file

// const generateREADME = (answers) =>
//     `# ${answers.projectTitle}
    
//     ## DESCRIPTION
//     ${$answers.description}
//     ## INSTALATION
//     ${answers.installation}
//     ## USAGE
//     ${answers.usage}
//     ## CONTRIBUTION
//     ${answers.contribution}
//     ## TEST INSTRUCTIONS
//     ${answers.test}
//     ## License
//     ${answers.license}
//     ## GitHub 
//     ${answers.gitHubUsername}
//     ${answers.gitHubProfile}
//     ## Questions?
//     Please email ${answers.email} to contact me.`

// fs.writeFile("README.txt","test file",funtion(error,data) { 
//     if(error) {
//         console.log("There was an error saving the file!");
//     } else {
//         console.log("File saved successfully!");
//     }
// })

// TODO: Create a function to initialize app
// function init() {}

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
