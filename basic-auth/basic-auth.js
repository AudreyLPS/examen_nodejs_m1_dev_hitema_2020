const crypto = require('crypto');

function sha1Encode(data) {
    const encoded = data.replace('Basic','');
    return encoded;
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization; //Basic xxxxx
    console.log('authorization', authorization)

    const encoded = sha1Encode(authorization);
    const decoded = Buffer.from(encoded, crypto).toString("utf8");
    
    const authentification = decoded.split(':');

    //si user =user et password = password , ok
    const isValid = authentification[0] === 'node' && authentification[1] === 'password';
    
    isValid ? next() : response.sendStatus(401);
}