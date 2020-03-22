Feature: Page Loads
    Scenario: /
        When I request the path '/'
        Then it has the response code 200

    Scenario: /page
        When I request the path '/page'
        Then it has the response code 200