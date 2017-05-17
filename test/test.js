var expect = require('chai').expect;
var request = require('request');

describe('Request - Trying to simulate error occurring only on travis.', function () {
    it('Should make a request', function (done) {        
        request('http://www.google.com', function (error, response, body) {
            expect(body).to.contains('<html');
            done();
        });
    });
});