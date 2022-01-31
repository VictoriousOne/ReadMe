const fs = require('fs');

const genDescr = (theFile, descr) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Description' + '\r\n' + `${descr}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Description processed!'});
        });
    });
    
};

module.exports = genDescr;