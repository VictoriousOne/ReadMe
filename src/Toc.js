const fs = require('fs');

const genToc = (theFile) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n' + '* [Installation](#Installation)' +
        '\r\n' + '* [Usage](#Usage)' + 
        '\r\n' + '* [Contributions](#Contributions)' +
        '\r\n' + '* [License](#License)' +
        '\r\n' + '* [Tests](#Tests)', 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Table of Contents processed!'});
        });
    });
    
};

module.exports = genToc;