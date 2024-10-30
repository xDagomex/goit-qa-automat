describe('httpbin API Tests', () => {
    const apiUrl = 'https://httpbin.org';
    const MAX_REQUEST_DURATION = 2000;

    it('GET user data', () => {
        cy.request({
            method: 'GET',
            url: `${apiUrl}/get`,
            qs: { name: 'Alice', age: '25' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.args).to.deep.equal({ name: 'Alice', age: '25' });
        });
    });

    it('POST user data', () => {

        const data = { username: 'user1', password: 'pass123' };
        cy.request({
            method: 'POST',
            url: `${apiUrl}/post`,
            body: data,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal(data);
        });
    });

    it('PUT price', () => {
        const data = { item: 'pen', price: 1.50 };
        cy.request({
            method: 'PUT',
            url: `${apiUrl}/put`,
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
            url: `${apiUrl}/delete`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('url');
        });
    });

    it('GET custom headers', () => {
        cy.request({
            method: 'GET',
            url: `${apiUrl}/headers`,
            headers: { 'Custom-Header': 'HeaderValue' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.headers['Custom-Header']).to.eq('HeaderValue');
        });
    });

    it('GET User-Agent header', () => {
        cy.request({
            method: 'GET',
            url: `${apiUrl}/user-agent`,
            headers: { 'User-Agent': 'MyTestAgent/1.0' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body['user-agent']).to.eq('MyTestAgent/1.0');
        });
    });

    it('GET random query parameter', () => {
        const randomParam = Math.random().toString(36).substring(7);
        cy.request({
            method: 'GET',
            url: `${apiUrl}/get`,
            qs: { random: randomParam }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.args.random).to.eq(randomParam);
        });
    });

    it('Check response content for JSON', () => {
        cy.request({
            method: 'GET',
            url: `${apiUrl}/json`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('slideshow');
            expect(response.body.slideshow).to.have.property('title');
        });
    });

    it('Check request duration', () => {
        const start = new Date().getTime();
        cy.request({
            method: 'GET',
            url: `${apiUrl}/delay/1` // 1-second delay endpoint
        }).then((response) => {
            const duration = new Date().getTime() - start;
            expect(response.status).to.eq(200);
            expect(duration).to.be.lessThan(MAX_REQUEST_DURATION);
        });
    });

    it('POST request with form data', () => {
        cy.request({
            method: 'POST',
            url: `${apiUrl}/post`,
            form: true,
            body: { field1: 'value1', field2: 'value2' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.form).to.deep.equal({ field1: 'value1', field2: 'value2' });
        });
    });
});
