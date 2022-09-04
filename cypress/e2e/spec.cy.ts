describe('My First Test', () => {
  before(() => {
  })

  beforeEach(() => {
    window.localStorage.setItem('users', '[{"lastname":"John","firstname":"Doe","email":"john.doe@gmail.com","password":"n%AxPyqd[YZBV9a4","confirmedPassword":"n%AxPyqd[YZBV9a4","birthDate":"1991-05-15","address":"15 rue des Lilas","postalCode":"72000","city":"Angers"}]')

    cy.visit('/login')
    cy.get('#email').type('john.doe@gmail.com')
    cy.get('#password').type('n%AxPyqd[YZBV9a4')
    cy.get('form').submit()
  })

  it('Visits the initial project page', () => {
    cy.get('a').contains('Accueil').click();
    cy.contains('Cegefos est une société de formations en ligne.');
  })

  it('Creates a new post', () => {
    cy.contains('Nouveau Post').click()

    cy.get('#title').type('My first post');
    cy.get('#content').type('Here is the content of the post I want to create for the test');
    cy.get('form').submit()
    
    cy.get('h1').contains('Posts')
    cy.contains('My first post')
    cy.contains('Here is the content of the post I want to create for the test')

  })
})
