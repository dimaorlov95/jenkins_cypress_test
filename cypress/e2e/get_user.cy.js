describe('User API', () => {
  const baseUrl = 'https://petstore3.swagger.io/api/v3';

  it('should verify that example user exists', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/user/theUser`,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property('username', 'theUser');
      expect(response.body).to.have.property('firstName');
      expect(response.body).to.have.property('lastName');
      expect(response.body).to.have.property('email');
      expect(response.body).to.have.property('phone');
    });
  });
});