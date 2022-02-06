const fs = require('fs');

var theBadge;


const genBadge = (theFile, badge) => {
    return new Promise((resolve, reject) => {
        if (badge !== "none") {

            if (badge === "MIT") {
                theBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            }
            else {
                theBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            }

            fs.appendFile(theFile, '\r\n' + theBadge, 'utf8', err => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve({ ok: true, message: 'Badge ocessed!' });
            });

        }
        resolve({ ok: true, message: 'Badge ocessed!' });
    });

};

module.exports = genBadge;