const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        clientId,
        clientSecret,
        accessToken
    } = req.body.args;


    if(!clientId || !clientSecret) throw new Error('Required fields: clientId, clientSecret');

    let options = {
        url:    'https://api.clarifai.com/v1/token',
        method: 'POST',
        form: {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'client_credentials'
        }
    };

    const defered = Q.defer();

    request(options, (err, response, reslut) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(reslut);
        else 
            defered.reject(err || reslut);
    });

    return defered.promise;
}