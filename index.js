
const inquirer = require('inquirer');
const fs = require('fs');
const genTitle = require('./src/title');
const theFile = "./ReadMe.md";
const genDescr = require('./src/descr');
const genInstall = require('./src/install');
//const genUsage = require('./src/usage');
//const genContrib = require('./src/contrib');
//const genTest = require('./src/test');
//const genToc = require('./src/Toc');
//const genGitHub  = require('./src/gitHub');
//const genLicense = require('./src/license');

//onst pageTitle = genTitle(title);

//var cmdArgs = process.argv;
//var title = cmdArgs[2];

// const pageTitle = genTitle(theFile, title);


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

  promptUser()
  .then(userData => {
  genTitle(theFile, userData.title);
  return userData; 
  })
  .then(userData => {
    genDescr(theFile, userData.description);
    return userData;
  })
  .then(userData => {
    genInstall(theFile, userData.install)
  });