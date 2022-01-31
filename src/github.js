const fs = require('fs');

const genGitHub = (theFile, github) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Questions' + '\r\n' + 
            'https://github.com/' + `${github}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Github profile processed!'});
        });
    });
    
};

module.exports = genGitHub;