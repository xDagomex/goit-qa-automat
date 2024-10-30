Feature: Search and purchase a product

  Scenario: Successfully search for a product and complete a purchase
    Given I am on the homepage of the online store
    And I am logged into my account
    When I search for "wireless headphones"
    Then I should see a list of products related to "wireless headphones"

    When I select the first product in the search results
    And I view the product details
    Then the product page should display "wireless headphones" as the product name
    And the product should have a price displayed

    When I add the product to my cart
    And I proceed to checkout
    Then I should see the product in my cart summary

    When I enter my shipping details
    And I select my preferred payment method
    And I confirm the purchase
    Then I should see a confirmation message with the order number
    And I should receive an email confirmation for the purchase
