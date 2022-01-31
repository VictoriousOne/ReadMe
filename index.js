
const inquirer = require('inquirer');
const fs = require('fs');
const genTitle = require('./src/title');
//const genDesc = require('./src/desc');
//const genInstall = require('./src/install');
//const genUsage = require('./src/usage');
//const genContrib = require('./src/contrib');
//const genTest = require('./src/test');
//const genToc = require('./src/Toc');
//const genGitHub  = require('./src/gitHub');
//const genLicense = require('./src/license');

//onst pageTitle = genTitle(title);

var cmdArgs = process.argv;
var title = cmdArgs[2];

const pageTitle = genTitle(title);

//fs.writeFile('./README.md', pageTitle, err => {
//    if (err) throw err;
//    console.log("Title written to README file");
//})

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project.'
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions.'
      },
      {
        type: 'input',
        name: 'contrib',
        message: 'Enter contribution guidelines.'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter testing instructions.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github user name.'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license type.',
        choices : ["MIT", "GNU", "none"]
      }
      
    ]);
  };

  promptUser();