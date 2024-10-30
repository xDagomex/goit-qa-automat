describe('httpbin API Tests', () => {
    const BASE_URL = 'https://httpbin.org';
    const MAX_REQUEST_DURATION = 2000; // Maximum duration in ms
  
    it('GET request with query parameters', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/get`,
        qs: { name: 'John', age: '30' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args).to.deep.equal({ name: 'John', age: '30' });
      });
    });
  
    it('POST request with JSON body', () => {
      const data = { username: 'testUser', password: 'testPass' };
      cy.request({
        method: 'POST',
        url: `${BASE_URL}/post`,
        body: data,
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json).to.deep.equal(data);
      });
    });
  
    it('PUT request with JSON body', () => {
      const data = { item: 'book', price: 19.99 };
      cy.request({
        method: 'PUT',
        url: `${BASE_URL}/put`,
        body: data,
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json).to.deep.equal(data);
      });
    });
  
    it('DELETE request', () => {
      cy.request({
        method: 'DELETE',
        url: `${BASE_URL}/delete`
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('url');
      });
    });
  
    it('GET request with custom headers', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/headers`,
        headers: { 'Custom-Header': 'CustomValue' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['Custom-Header']).to.eq('CustomValue');
      });
    });
  
    it('GET request with User-Agent header', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/user-agent`,
        headers: { 'User-Agent': 'TestAgent/1.0' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body['user-agent']).to.eq('TestAgent/1.0');
      });
    });
  
    it('GET request with random query parameter', () => {
      const randomParam = Math.random().toString(36).substring(7);
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/get`,
        qs: { random: randomParam }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args.random).to.eq(randomParam);
      });
    });
  
    it('Response content check for image/png', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/image/png`,
        encoding: 'binary'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).to.eq('image/png');
        expect(response.body.length).to.be.greaterThan(0); // Ensures data is received
      });
    });
  
    it('Response time is within acceptable range', () => {
      const start = new Date().getTime();
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/delay/1` // 1-second delay endpoint
      }).then((response) => {
        const duration = new Date().getTime() - start;
        expect(response.status).to.eq(200);
        expect(duration).to.be.lessThan(MAX_REQUEST_DURATION);
      });
    });
  
    it('POST request with form data', () => {
      cy.request({
        method: 'POST',
        url: `${BASE_URL}/post`,
        form: true,
        body: { field1: 'value1', field2: 'value2' }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.form).to.deep.equal({ field1: 'value1', field2: 'value2' });
      });
    });
  });
  