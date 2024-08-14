const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  let server;

  before(function () {
    server = require('./api');
  });

  after(function () {
    server.close();
  });

  it('Correct status code?', function (done) {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
