'use strict'

const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        accessToken,
        urls,
        file,
        model,
        tagsLanguage,
        selectClasses
    } = req.body.args;

    if(!accessToken) throw new Error('Required fields: accessToken');

    let body = '';

    if(urls) {
        try {
            if(typeof urls == 'string') urls = JSON.parse(urls);
        } catch(e) {
            throw new Error('Invalid urls JSON data. Use ["http://url.com/image.png", ...]');
        }

        for(let url in urls) {
            body += `url=${urls[url]}&`;
        }
    }

    if(file) {
        body += `url=${file}&`;
    }

    let options = {
        model:          model,
        language:       tagsLanguage,
        select_classes: selectClasses
    };

    for(let key in options)
        if(options[key])
            body += `${key}=${options[key]}&`;

    body = body.slice(0, -1);

    const defered = Q.defer();

    request({
        url:    'https://api.clarifai.com/v1/tag',
        method: 'POST',
        form:   body,
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