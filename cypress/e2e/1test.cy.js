describe("Find in google", () => {
  it("search for site", () => {
    cy.visit("https://www.google.ru/");
    cy.get('input[title="Поиск"]').type("Byndyusoft").type("{enter}");
    cy.get(
      "#rso > div:nth-child(1) > div > div > div > div > div > div.yuRUbf > a"
    )
      .eq(0)
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("eq", "https://byndyusoft.com/");
  });
  it("find element", () => {
    cy.visit("https://byndyusoft.com/");
    cy.scrollTo("bottom");
    cy.get('section[class="know-more"]')
      .contains("Заказать презентацию")
      .click();
    cy.get(
      "body > div.popup-callback.js-popup-callback.popup-callback--visible > div.popup-callback__content > div.popup-callback__footer > div > a:nth-child(1)"
    ).should("have.text", "8 800 775-15-21");
    cy.contains('8 800 775-15-21')
    cy.get(
      "body > div.popup-callback.js-popup-callback.popup-callback--visible > div.popup-callback__content > div.popup-callback__footer > div > a:nth-child(3)"
    ).should("have.text", "sales@byndyusoft.com");
    cy.contains('sales@byndyusoft.com')
  });
});
