import loginPage from "./loginPage";

describe("User can visit GoIT page", () => {
    beforeEach("Go to page", () => {
        loginPage.visit()
    });

    it("First log in", () => {
        loginPage.loginUser('user888@gmail.com', '1234567890');

    });
})
