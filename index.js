
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
const genBadge = require('./src/badge');

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


  function genReadMe(theFile, userData) {

    genBadge(theFile, userData.license)
    .then(writeTitle => {
      return genTitle(theFile, userData.title);
    })
    .then(writeDescription => {
      return genDescr(theFile, userData.description);
    })
    .then(writeTOC => {
      return genToc(theFile);
    })
    .then(writeInstall => {
      return genInstall(theFile, userData.install);
    })
    .then(writeUsage => {
      return genUsage(theFile, userData.usage);
    })
    .then(writeContibutions => {
      return genContrib(theFile, userData.contrib);
    })
    .then(writeLicense => {
      return genLicense(theFile, userData.license);
    })
    .then(writeTests => {
      return genTests(theFile, userData.tests);
    })
    .then(writeGitHubEmail => {
      return genGitHub(theFile, userData.github, userData.email);
    })
    .catch(err => {
      console.log(err);
    });
  }


  promptUser()
  .then(userData => {
  genReadMe(theFile, userData);
  });
  