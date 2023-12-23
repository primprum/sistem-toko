const URL = "https://sistemtoko.com/login";

class SiskoPage {
  visit() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(URL);
  }

  fillCreds(username, password) {
    cy.fixture("creds").then((creds) => {
      if (username === "true" && password === "false") {
        cy.xpath("//input[@type='text']").type(creds.correct.name);
        cy.xpath("//input[@type='password']").type(creds.incorrect.password);
      } else if (username === "false" && password === "true") {
        cy.xpath("//input[@type='text']").type(creds.incorrect.name);
        cy.xpath("//input[@type='password']").type(creds.correct.password);
      } else if (username === "false" && password === "false") {
        cy.xpath("//input[@type='text']").type(creds.incorrect.name);
        cy.xpath("//input[@type='password']").type(creds.incorrect.password);
      } else {
        cy.xpath("//input[@type='text']").type(creds.correct.name);
        cy.xpath("//input[@type='password']").type(creds.correct.password);
      }
    });
  }

  clickLogin() {
    cy.xpath("//button[@type='submit']").click();
  }

  forgotPassword() {
    cy.xpath("//a[contains(text(),'I forgot my password')]").click();
  }

  fillEmail(email) {
    cy.fixture("creds").then((creds) => {
      if (email === "false") {
        cy.xpath("//input[@type='email']").type(creds.incorrect.name);
      } else {
        cy.xpath("//input[@type='email']").type(creds.correct.name);
      }
    });
  }

  sendReminder() {
    cy.xpath("//input[@type='submit']").click();
  }

  verifyLogin(success) {
    if (success == "false") {
      cy.xpath("//span[@id='title']").should("contain", "Operation Failed");
      cy.url().should("not.include", "https://sistemtoko.com/member");
    } else {
      cy.url().should("include", "https://sistemtoko.com/member");
    }
  }

  reminderSent(sent) {
    if (sent === "false") {
      cy.xpath('//strong[contains(text(),"We can\'t find a user with that e-mail address. !")]').should("be.visible");
    } else {
      cy.xpath("//strong[contains(text(),'Password reminder sent! !')]").should("be.visible");
    }
  }

  generateReport() {
    cy.screenshot("my-screenshot");
  }
}

export default new SiskoPage();
