describe('User API', () => {
  const baseUrl = 'https://petstore3.swagger.io/api/v3';

  it('should verify user data', () => {
    cy.fixture('user').then((user) => {

      cy.request({
        method: 'GET',
        url: `${baseUrl}/user/${user.username}`,
      }).then((response) => {

        expect(response.status).to.eq(200);

        expect(response.body).to.deep.include(user.expectedData);

      });
    });
  });
});