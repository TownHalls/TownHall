describe('TownHall Signout Test', function() {
  it('signs the user out', function() {
    browser.get('http://localhost:3000/#/signin');

    // fills in the sign in form fields
    element(by.model('user.email')).sendKeys('jeff@boss.com');
    element(by.model('user.password')).sendKeys('asdf');

    // clicks the sign in button
    element(by.id('signIn')).click();

    // waits for page to load
    browser.sleep(3000);

    // clicks profile menu
    element(by.id('profileMenu')).click();

    // clicks the signout button
    element(by.id('signOut')).click();

    // checks that the url is the signin page
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/signin');
  });
});
