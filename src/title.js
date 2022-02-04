const fs = require('fs');

const genTitle = (theFile, title) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(theFile, '\r\n\r\n' + `# ${title}`, 'utf8', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ( { ok: true, message: 'Title processed!'});
        });
    });
    
};

module.exports = genTitle;