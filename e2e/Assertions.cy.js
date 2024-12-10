describe("Assertions demo", () => {
  it("Implicite asscetions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // cy.url().should("include", "orangehrmlive.com");
    // cy.url().should(
    //   "eq",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.url().should("contain", "orangehrm");

    // cy.url()
    //   .should("include", "orangehrmlive.com")
    //   .should(
    //     "eq",
    //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    //   )
    //   .should("contain", "orangehrm");

    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      .and("not.contain", "greenhrm");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img")
      .should("be.visible") // check if the logo is visible
      .and("exist"); // check if the logo exist

    cy.xpath("//a").should("have.length", "5"); // check all of the links

    cy.get('[name="username"]').type("Admin"); //provide a value into input box

    cy.get('[name="username"]').should("have.value", "Admin");
  });

  it("Explicite asscetions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "John Test";

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      //BDD Style - Behavior-Driven Development
      expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName);

      //TDD Style - Test-Driven Development
      assert.equal(actName, expName);
      assert.not.equal(actName, expName);
    });
  });
});
