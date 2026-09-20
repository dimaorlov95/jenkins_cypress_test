describe('User API', () => {
  const baseUrl = 'https://petstore3.swagger.io/api/v3';

  it('should verify user data', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/user/theUser`,
    }).then((response) => {

      // Verify status code
      expect(response.status).to.eq(200);

      // Verify user data
      expect(response.body.id).to.eq(10);
      expect(response.body.username).to.eq('theUser');
      expect(response.body.firstName).to.eq('John');
      expect(response.body.lastName).to.eq('James');
      expect(response.body).to.have.property('email');
      expect(response.body.password).to.eq('12345');
      expect(response.body.phone).to.eq('12345');
      expect(response.body.userStatus).to.eq(1);
    });
  });
});