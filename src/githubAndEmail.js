const fs = require('fs');

const genGitHub = (theFile, github, email) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + '## Questions' + '\r\n' + 
            'Github Profile: https://github.com/' + `${github}`+
            '\r\n' + 'For more questions, email ' + `${email}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Github profile and email processed!'});
        });
    });
    
};

module.exports = genGitHub;