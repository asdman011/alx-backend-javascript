const request = require('request');
const { expect } = require('chai');

describe('API', () => {
  describe('GET /available_payments', () => {
    it('responds with the correct object', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('responds with the correct welcome message', (done) => {
      const username = 'Betty';
      request.post(
        {
          url: 'http://localhost:7865/login',
          body: { userName: username },
          json: true
        },
        (error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal(`Welcome ${username}`);
          done();
        }
      );
    });
  });
});
