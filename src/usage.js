const fs = require('fs');

const genUsage= (theFile, usage) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Usage' + '\r\n' + `${usage}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Usage processed!'});
        });
    });
    
};

module.exports = genUsage;