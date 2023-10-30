describe('sick trick wish list landing page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "tricksData",
    })
    .as("getTricks")
    .visit("http://localhost:3000")
    cy.wait("@getTricks")
  })

  it('should display the input form and stater trick cards', () => {
    cy.get(".header").contains("Sick Trick Wish List")
    .get(".trick-card-container").first().contains(".name", "treflip")
    .get(".trick-card-container").first().contains(".obstacle", "flat ground")
    .get(".trick-card-container").first().contains(".stance", "regular")
    .get(".trick-card-container").first().contains(".tutorial", "https://www.youtube.com/watch?v=XGw3YkQmNig")


    .get(".trick-card-container").last().contains(".name", "frontside 50-50, backside 180 out")
    .get(".trick-card-container").last().contains(".obstacle", "ledge")
    .get(".trick-card-container").last().contains(".stance", "regular")
    .get(".trick-card-container").last().contains(".tutorial", "https://www.youtube.com/watch?v=9N9swrZU1HA")
  })

  it('should display user input trick card', () => {
    cy.get('select[name="stance"]').select("switch").should("have.value", "switch")
    .get('[name="trick-name"]').type("kickflip").should("have.value", "kickflip")
    .get('select[name="obstacle"]').select("ledge").should("have.value", "ledge")
    .get('[name="tutorial"]').type("www.coolurl.com").should("have.value", "www.coolurl.com")

  })
})