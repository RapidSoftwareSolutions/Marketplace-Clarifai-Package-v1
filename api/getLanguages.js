'use strict'

const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        accessToken,
        url
    } = req.body.args;

    if(!accessToken) throw new ValidationError(['accessToken']);

    const defered = Q.defer();

    request({
        url:    'https://api.clarifai.com/v1/info/languages',
        method: 'GET',
        auth: {
            bearer: accessToken
        },
    }, (err, response, reslut) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(reslut);
        else 
            defered.reject(err || reslut);
    });

    return defered.promise;
}