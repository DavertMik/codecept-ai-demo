Feature("ai");

// Scenario("Auto-heal", async ({ I }) => {
//   I.amOnPage("https://codecept.io/");
//   await I.fillField(`.search-query-item`, "CodeceptJS");
//   I.see('CodeceptJS');
// });

Scenario('Github login', ({ I }) => {
  I.amOnPage('https://github.com')
  I.click('Sign in');
  I.fillField('Username', 'davert');
  I.fillField('Password', '123345');
  I.click('Login');
  I.see('Incorrect username or password');
});
