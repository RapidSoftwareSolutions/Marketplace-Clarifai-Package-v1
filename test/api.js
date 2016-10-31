const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

let accessToken;

describe('Clarifai package', function() {
    it('/getAccessToken', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAccessToken')
        .send({args: { 
            clientId: 'fBrlo1imWdW__iPe4stKTRVitgwgMD1YNXHMVSSO',
            clientSecret: '32JXquhFwY2kc6WLhhLLkRvQA0IOPi64ZsOBMn9C'
        }})
        .expect(200)
        .then((data) => {
            accessToken = data.body.contextWrites.to.access_token;
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getTags', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTags')
        .send({args: { 
            accessToken,
            urls: JSON.stringify(["https://samples.clarifai.com/metro-north.jpg", "https://samples.clarifai.com/wedding.jpg"])
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/provideFeedback', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/provideFeedback')
        .send({args: { 
            accessToken,
            url: 'https://samples.clarifai.com/metro-north.jpg',
            addTags: 'test, rapidapi'
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getDominantColors', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getDominantColors')
        .send({args: { 
            accessToken,
            url: 'https://samples.clarifai.com/metro-north.jpg',
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getInfo', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getInfo')
        .send({args: { 
            accessToken,
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    }); 

    it('/getLanguages', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getLanguages')
        .send({args: { 
            accessToken,
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });  

    it('/getUsage', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUsage')
        .send({args: { 
            accessToken,
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });    
})