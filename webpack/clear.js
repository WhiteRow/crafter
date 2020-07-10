module.exports = function (dir) {
    const fs = require('fs');
    const rimraf = require('rimraf');

    fs.stat(dir, err => {
        if (!err) 
            rimraf(dir, () => console.log('Dist is clear'))
    })
}