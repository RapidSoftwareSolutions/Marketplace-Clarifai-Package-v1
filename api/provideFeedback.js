'use strict'

const lib       = require('../lib/functions');
const Q         = require('q');
const request   = require('request');

module.exports = (req, res) => {
    let {
        accessToken,
        docIds,
        url,
        addTags,
        removeTags,
        similarDocids,
        dissimilarDocids,
        searchClick,
    } = req.body.args;

    if(!accessToken || !(docIds || url)) throw new ValidationError(['accessToken', 'docIds OR url']);

    const defered = Q.defer();

    request({
        url:    'https://api.clarifai.com/v1/feedback',
        method: 'POST',
        form: lib.clearArgs({
            url:               url,
            docids:            docIds,
            add_tags:          addTags, 
            remove_tags:       removeTags,
            search_click:      searchClick,
            similar_docids:    similarDocids,
            dissimilar_docids: dissimilarDocids,
        }),
        auth: {
            bearer: accessToken
        },
    }, (err, response, reslut) => {
        if(!err && (response.statusCode == 200 || response.statusCode == 201)) 
            defered.resolve(reslut);
        else 
            defered.reject(err || reslut);
    });

    return defered.promise;
}