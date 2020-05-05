const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve) => {
        let fileContent = fs.readFileSync(filePath, 'utf8');
        let decode = Buffer.from(fileContent, 'hex').toString('utf8');
        resolve(decode);
    });
}
