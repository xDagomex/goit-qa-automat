describe('test API', () => {
    const apiURL = 'https://httpbin.org/#/';

    it('should update a post using PUT',  () => {
        cy.request({
            method: 'PUT',
            url: `${apiURL}/1`,
            header:  {
                'Content-Type': 'application/json',
            },
            body: {
                id: 1,
                title: 'Updatet Title',
                body: 'This is new body',
                userId: 1
            }

        }).then((response) => {
            expect(response.status).to.equal(200);

            expect(response.body).to.have.property('title',  'Updatet Title');
            expect(response.body).to.have.property('body',  'This is new body');
        });
    })

    it('should delete a post using DELETE',  () => {
        cy.request({
            method: 'DELETE',
            url: `${apiURL}/1`,

        }).then((response) => {
            expect(response.status).to.equal(200);

            expect(response.body).to.be.empty;
        });
    })

})