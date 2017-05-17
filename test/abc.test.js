var expect = require('chai').expect;
var axios = require('axios');

describe('Trying to simulate error occurring only on travis.', function () {
    it('Should make a request', function (done) {

        axios.get('http://www.google.com')
            .then(function (response) {
                expect(response.data).to.contains('<html');
                done();
            })
            .catch(function (error) {
                console.error(error);
            });        
    });
});