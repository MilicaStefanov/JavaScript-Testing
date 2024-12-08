describe("XPath Example", () => {
  it("checks element using XPath", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    const x = cy.xpath("//div[@class='products']");
    console.log(x);
    cy.xpath("//div[@class='products']/div[@class='product']").should(
      "have.length",
      30
    );
  });
});
