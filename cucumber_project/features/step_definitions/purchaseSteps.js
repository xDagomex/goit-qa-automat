const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the homepage of the online store', async function () {});

Given('I am logged into my account', async function () {});

When('I search for {string}', async function (product) {});

Then('I should see a list of products related to {string}', async function (product) {});

When('I select the first product in the search results', async function () {});

When('I view the product details', async function () {});

Then('the product page should display {string} as the product name', async function (productName) {});

Then('the product should have a price displayed', async function () {});

When('I add the product to my cart', async function () {});

When('I proceed to checkout', async function () {});

Then('I should see the product in my cart summary', async function () {});

When('I enter my shipping details', async function () {});

When('I select my preferred payment method', async function () {});

When('I confirm the purchase', async function () {});

Then('I should see a confirmation message with the order number', async function () {});

Then('I should receive an email confirmation for the purchase', async function () {});

