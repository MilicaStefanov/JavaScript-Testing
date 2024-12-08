/// <reference types="cypress" />

describe("CSSLocators", () => {
  it("csslocators", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("[name='username']").type("Admin");
    cy.get("[name='password']").type("admin123");

    cy.get("button[type='submit']").click();

    cy.url().should("include", "/web/index.php/dashboard/index");

    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "contain.text",
      "Dashboard"
    );
  });
});
