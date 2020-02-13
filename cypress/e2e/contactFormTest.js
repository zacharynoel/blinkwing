describe("contact form works", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should be work on contact page", () => {
    cy.get(".nav")
      .findByText(/contact/i)
      .click()
    cy.findByText("Submit").click()

    cy.findByLabelText(/name/i).type("Cypress Test")

    cy.findByLabelText(/email/i).type("cypress_test@test.com")

    cy.findByLabelText(/message/i).type("// This is a cypress test. Ignore")

    cy.findByText("Submit").click()

    cy.get(".error").should("not.be.visible")

    // TODO: Write the rest of the tests for invalid input

    // cy.get(".error").find("Invalid Form Input").should("be.visible");
  })
})
