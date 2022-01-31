const fs = require('fs');

const genInstall = (theFile, install) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Installation' + '\r\n' + `${install}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Installation processed!'});
        });
    });
    
};

module.exports = genInstall;