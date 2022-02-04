
const inquirer = require('inquirer');
const fs = require('fs');
const genTitle = require('./src/title');
const theFile = "./ReadMe.md";
const genDescr = require('./src/descr');
const genInstall = require('./src/install');
const genUsage = require('./src/usage');
const genContrib = require('./src/contrib');
const genTests = require('./src/tests');
const genToc = require('./src/Toc');
const genGitHub  = require('./src/githubAndEmail');
const genLicense = require('./src/license');

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
        name: 'tests',
        message: 'Enter testing instructions.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github user name.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter youur email address.'
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
    genToc(theFile);
    return userData;
  })
  .then(userData => {
    genInstall(theFile, userData.install);
    return userData;
  })
  .then(userData => {
    genUsage(theFile, userData.usage);
    return userData;
  })
  .then(userData => {
    genContrib(theFile, userData.contrib);
    return userData;
  })
  .then(userData => {
    genLicense(theFile, userData.license);
    return userData;
  })
  .then(userData => {
    genTests(theFile, userData.tests);
    return userData;
  })
  .then(userData => {
    genGitHub(theFile, userData.github, userData.email);
    return userData;
  })
  .catch(err => {
    console.log(err);
  });