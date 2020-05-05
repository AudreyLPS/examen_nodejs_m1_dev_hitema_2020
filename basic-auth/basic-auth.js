const crypto = require('crypto');

function sha1Encode(data) {
    const sha1Encode = crypto.createHash('sha1');
    sha1Encode.update(data);
    return sha1Encode.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;

    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString("utf8");
    
    const authentification = decoded.split(':');

    const isValid = authentification[0] === 'node' && authentification[1] === sha1Encode('password');
    
    const HTTP_CODE_UNAUTHORIZED = 401; 
    isValid ? next() : response.sendStatus(HTTP_CODE_UNAUTHORIZED);
}