const fs = require('fs');

const genToc = (theFile) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Table of Contents' +
        '\r\n' + '* [Installation](#installation)' +
        '\r\n' + '* [Usage](#usage)' + 
        '\r\n' + '* [Contributions](#contributions)' +
        '\r\n' + '* [License](#license)' +
        '\r\n' + '* [Tests](#tests)' +
        '\r\n' + '* [Questions](#questions)', 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Table of Contents processed!'});
        });
    });
    
};

module.exports = genToc;