var expect = require('chai').expect;
var axios = require('axios');
var fetch = require('whatwg-fetch').fetch;
var request = require('request');

// describe('Axios - Trying to simulate error occurring only on travis.', function () {
//     it('Should make a request', function (done) {

//         axios.get('http://www.google.com')
//             .then(function (response) {
//                 expect(response.data).to.contains('<html');
//                 done();
//             })
//             .catch(done);
//     });
// });

describe('Request - Trying to simulate error occurring only on travis.', function () {
    it('Should make a request', function (done) {        
        request('http://www.google.com', function (error, response, body) {
            expect(body).to.contains('<html');
            done();
        });
    });
});