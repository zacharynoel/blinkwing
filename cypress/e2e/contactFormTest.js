describe("contact form works", () => {
  const name = "Cypress Test"
  const email = "cypress_test@test.com"
  const message = "Sample email message"

  let error = {
    name: false,
    email: false,
    message: false,
  }
  let errorMessage = {
    name: /Name field cannot be empty/i,
    email: /invalid email/i,
    message: /Message field cannot be empty/i,
  }

  beforeEach(() => {
    cy.visit("/contact")
  })

  it("shouldn't generate errors with valid input", () => {
    cy.findByLabelText(/name/i).type(name)
    cy.findByLabelText(/email/i).type(email)
    cy.findByLabelText(/message/i).type(message)
  })

  it("should generate errors with no input", () => {
    error = { name: true, email: true, message: true }
  })

  it("should generate errors with only name as input", () => {
    cy.findByLabelText(/name/i).type(name)
    error = { name: false, email: true, message: true }
  })

  it("should generate errors with only email as input", () => {
    cy.findByLabelText(/email/i).type(email)
    error = { name: true, email: false, message: true }
  })

  it("should generate errors with only the message as input", () => {
    cy.findByLabelText(/message/i).type(message)
    error = { name: true, email: true, message: false }
  })

  it("should generate errors with only name and email as input", () => {
    cy.findByLabelText(/name/i).type(name)
    cy.findByLabelText(/email/i).type(email)
    error = { name: false, email: false, message: true }
  })

  it("should generate errors with only name and message as input", () => {
    cy.findByLabelText(/name/i).type(name)
    cy.findByLabelText(/message/i).type(message)
    error = { name: false, email: true, message: false }
  })

  it("should generate errors with only email and message as input", () => {
    cy.findByLabelText(/email/i).type(email)
    cy.findByLabelText(/message/i).type(message)
    error = { name: true, email: false, message: false }
  })

  it("should generate errors with invalid email format (1)", () => {
    cy.findByLabelText(/name/i).type(name)
    cy.findByLabelText(/email/i).type("test@gmail")
    cy.findByLabelText(/message/i).type(message)
    error = { name: false, email: true, message: false }
  })

  it("should generate errors with invalid email format (2)", () => {
    cy.findByLabelText(/name/i).type(name)
    cy.findByLabelText(/email/i).type("testgmail.com")
    cy.findByLabelText(/message/i).type(message)
    error = { name: false, email: true, message: false }
  })

  afterEach(() => {
    cy.get("form")
      .findByText("Submit")
      .click()

    if (!error.name && !error.email && !error.message) {
      assert(cy.get(".error").should("not.be.visible"))
    } else {
      if (error.name) {
        assert(
          cy
            .get(".error")
            .should("be.visible")
            .findByText(errorMessage.name)
        )
      }
      if (error.email) {
        assert(
          cy
            .get(".error")
            .should("be.visible")
            .findByText(errorMessage.email)
        )
      }
      if (error.message) {
        assert(
          cy
            .get(".error")
            .should("be.visible")
            .findByText(errorMessage.message)
        )
      }
    }
  })
})
