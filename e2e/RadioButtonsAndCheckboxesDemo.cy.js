describe("Check UI Elements", () => {
  //   it("Checking Radio Buttons", () => {
  //     cy.visit("https://testautomationpractice.blogspot.com/");

  //     //visiability of radio buttons
  //     cy.get("input#male").should("be.visible");
  //     cy.get("input#female").should("be.visible");

  //     //selecting radio button
  //     cy.get("input#male").check().should("be.checked");
  //     cy.get("input#female").should("not.be.checked");

  //     cy.get("input#female").check().should("be.checked");
  //     cy.get("input#male").should("not.be.checked");
  //   });

  it("Checking Checkboxes", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    // //Visibility of the element
    // cy.get("input#monday").should("be.visible");

    // //Selecting single checkbox - monday
    // cy.get("input#monday").check().should("be.checked");

    // //Unselecting single checkbox - monday
    // cy.get("input#monday").uncheck().should("not.be.checked");

    //Selecting all the checkboxes
    // cy.get("input.form-check-input[type='checkbox']").check().should("be.checked");
    // cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked");

    //Selecting first checkbox
    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");
  });
});