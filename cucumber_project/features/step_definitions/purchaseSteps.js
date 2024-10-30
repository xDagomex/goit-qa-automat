const { Given, When, Then } = require('@cucumber/cucumber');


Given('I am on the homepage of the online store', function () {
  // Code to navigate to the homepage of the online store
  // e.g., await browser.url('https://example-store.com');
});

Given('I am logged into my account', function () {
  // Code to log in to the account
  // e.g., await login(username, password);
});

When('I search for {string}', function (product) {
  // Code to enter the product in the search bar and submit
  // e.g., await searchForProduct(product);
});

Then('I should see a list of products related to {string}', function (product) {
  // Code to verify that search results are displayed
  // e.g., const results = await getSearchResults();
  // expect(results).toContain(product);
});

When('I select the first product in the search results', function () {
  // Code to select the first product from search results
  // e.g., await selectFirstSearchResult();
});

When('I view the product details', function () {
  // Code to navigate to the product details page
  // e.g., await viewProductDetails();
});

Then('the product page should display {string} as the product name', function (productName) {
  // Code to verify the product name on the details page
  // e.g., const name = await getProductName();
  // expect(name).toEqual(productName);
});

Then('the product should have a price displayed', function () {
  // Code to check if the product price is displayed
  // e.g., const price = await getProductPrice();
  // expect(price).not.toBeNull();
});

When('I add the product to my cart', function () {
  // Code to add the product to the cart
  // e.g., await addToCart();
});

When('I proceed to checkout', async function () {
  // Code to proceed to the checkout page
  // e.g., await proceedToCheckout();
});

Then('I should see the product in my cart summary', function () {
  // Code to verify the product in the cart summary
  // e.g., const cartItems = await getCartItems();
  // expect(cartItems).toContain("wireless headphones");
});

When('I enter my shipping details', function () {
  // Code to enter shipping details
  // e.g., await enterShippingDetails(address);
});

When('I select my preferred payment method', function () {
  // Code to select payment method
  // e.g., await selectPaymentMethod('credit card');
});

When('I confirm the purchase', function () {
  // Code to confirm purchase
  // e.g., await confirmPurchase();
});

Then('I should see a confirmation message with the order number', function () {
  // Code to verify the confirmation message and order number
  // e.g., const confirmation = await getConfirmationMessage();
  // expect(confirmation).toContain('Order number');
});

Then('I should receive an email confirmation for the purchase', function () {
  // Code to check for email confirmation (this may require integration with an email service)
  // e.g., const email = await checkEmailForConfirmation();
  // expect(email).toContain('Your order has been confirmed');
});

