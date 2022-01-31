const fs = require('fs');

const genTests = (theFile, tests) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Tests' + '\r\n' + `${tests}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Tests processed!'});
        });
    });
    
};

module.exports = genTests;