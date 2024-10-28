import loginPage from "./pages/loginPage";

describe("User can visit GoIT page", () => {
    beforeEach("Go to page", () => {
        loginPage.visit()
    });

    it("First log in and log out", () => {
        loginPage.loginUser('user888@gmail.com', '1234567890');
        loginPage.logout();
    });
})
