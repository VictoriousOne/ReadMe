const fs = require('fs');

const genLicense = (theFile, license) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## License' + 
            '\r\n' + 'The product is licensed under ' + `${license}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'License processed!'});
        });
    });
    
};

module.exports = genLicense;