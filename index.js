
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
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions. (required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter installation instructions for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions. (required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage instructions for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contrib',
        message: 'Enter contribution guidelines. (Required)',
        validate: contribInput => {
          if (contribInput) {
            return true;
          } else {
            console.log('Please enter contribution guidelines for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter testing instructions. (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter testing instructions for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github user name. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your github user name for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter youur email address. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address for your project!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license type. (Required)',
        choices : ["MIT", "GNU", "none"],
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please select a license for your project!');
            return false;
          }
        }
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
  