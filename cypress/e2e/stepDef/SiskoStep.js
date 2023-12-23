import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
import SiskoPage from "../pageObject/SiskoPage";

// PRECONDITION
// ============
Given("user is on login page", () => {
  SiskoPage.visit();
});

// TRIGGERS
// ========
When("user enters {string} Username and {string} Password", (username, password) => {
  if (username === "correct" && password === "correct") {
    SiskoPage.fillCreds();
  } else if (username === "correct" && password === "incorrect") {
    SiskoPage.fillCreds("true", "false");
  } else if (username === "incorrect" && password === "correct") {
    SiskoPage.fillCreds("false", "true");
  } else if (username === "incorrect" && password === "incorrect") {
    SiskoPage.fillCreds("false", "false");
  }
});

When('clicks "Login" button', () => {
  SiskoPage.clickLogin();
});

When("user clicks 'I forgot my password' links", () => {
  SiskoPage.forgotPassword();
});

When("enters the {string} email", (status) => {
  if (status === "registered") {
    SiskoPage.fillEmail();
  } else if (status === "unregistered") {
    SiskoPage.fillEmail("false");
  }
});

When("clicks 'Send Reminder' button", () => {
  SiskoPage.sendReminder();
});

// ASSERTIONS
// ==========
Then("user should {string} log in", (result) => {
  if (result === "successfully") {
    SiskoPage.verifyLogin();
  } else if (result === "fail") {
    SiskoPage.verifyLogin("false");
  }
});

Then("user {string} receive an email for password update", (action) => {
  if (action === "should") {
    SiskoPage.reminderSent();
  } else if (action === "shouldn't") {
    SiskoPage.reminderSent("false");
  }
});

Then("screenshot is taken", () => {
  SiskoPage.generateReport();
});
