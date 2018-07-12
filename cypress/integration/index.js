describe('Index Page', function() {
  before(function() {
    cy.visit('/');
  });

  describe('Scrolling if needed', function() {
    ['smooth-ponyfill', 'smooth', 'instant'].forEach(behavior => {
      ['if-needed', 'always'].forEach(scrollMode => {
        it(`scrolls behavior: ${behavior} and scrollMode: ${scrollMode} correctly`, function() {
          cy.get('#scrolling-if-needed select[name="behavior"]').select(
            behavior
          );
          cy.get('#scrolling-if-needed select[name="scroll-mode"]').select(
            scrollMode
          );

          [[1, 3, 'C'], [2, 4, 'D'], [3, 6, 'F']].forEach(
            ([button, item, text]) => {
              cy.get(
                `#scrolling-if-needed .example-controls button:nth-of-type(${button})`
              )
                .contains(text)
                .click({ force: true });
              cy.get(
                `#scrolling-if-needed .example-container > div:nth-child(${item})`
              )
                .contains(text)
                .should('be.visible');
            }
          );
        });
      });
    });
  });
});
