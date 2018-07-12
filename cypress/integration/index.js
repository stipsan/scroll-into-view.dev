describe('Index Page', function() {
  before(function() {
    cy.visit('/')
  })

  describe('Scrolling if needed', function() {
    ;['smooth-ponyfill', 'smooth', 'instant'].forEach(behavior => {
      ;['if-needed', 'always'].forEach(scrollMode => {
        it(`scrolls behavior: ${behavior} and scrollMode: ${scrollMode} correctly`, function() {
          cy.get('#scrolling-if-needed select[name="behavior"]').select(
            behavior
          )
          cy.get('#scrolling-if-needed select[name="scroll-mode"]').select(
            scrollMode
          )
          ;[[1, 3, 'C'], [2, 4, 'D'], [3, 6, 'F']].forEach(
            ([button, item, text]) => {
              cy.get(
                `#scrolling-if-needed .example-controls button:nth-of-type(${button})`
              )
                .contains(text)
                .click({ force: true })
              cy.get(
                `#scrolling-if-needed .example-container > div:nth-child(${item})`
              )
                .contains(text)
                .should('be.visible')
            }
          )
        })
      })
    })
  })

  const scrollLogicalPosition = ['start', 'center', 'end', 'nearest']

  describe('Scroll alignment', function() {
    scrollLogicalPosition.forEach(block => {
      scrollLogicalPosition.forEach(inline => {
        it(`scrolls block: ${block} and inline: ${inline} correctly`, function() {
          cy.get('#scroll-alignment select[name="block"]').select(block)
          cy.get('#scroll-alignment select[name="inline"]').select(inline)
          ;[[1, 1, '1'], [2, 5, '5'], [3, 9, '9']].forEach(
            ([button, item, text]) => {
              cy.get(
                `#scroll-alignment .example-controls button:nth-of-type(${button})`
              )
                .contains(text)
                .click({ force: true })
              cy.get(
                `#scroll-alignment .example-container > div > div:nth-child(${item})`
              )
                .contains(text)
                .should('be.visible')
            }
          )
        })
      })
    })
  })

  describe('Limit propagation', function() {
    scrollLogicalPosition.forEach(block => {
      ;[true, false].forEach(boundary => {
        it(`scrolls block: ${block} and bondary: ${boundary} correctly`, function() {
          cy.get('#limit-propagation select[name="block"]').select(block)
          cy.get('#limit-propagation input[name="boundary"]')[
            boundary ? 'check' : 'uncheck'
          ]()
          ;[[1, 2, '🤯'], [2, 4, '🤔'], [3, 6, '🤨']].forEach(
            ([button, item, text]) => {
              cy.get(
                `#limit-propagation .example-controls button:nth-of-type(${button})`
              )
                .contains(text)
                .click({ force: true })
              cy.get(
                `#limit-propagation .example-container > div:nth-child(${item})`
              )
                .contains(text)
                .should('be.visible')
            }
          )
        })
      })
    })
  })
})
