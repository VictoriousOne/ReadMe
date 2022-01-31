const fs = require('fs');

const genContrib = (theFile, contrib) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Contributions' + '\r\n' + `${contrib}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Contributions processed!'});
        });
    });
    
};

module.exports = genContrib;