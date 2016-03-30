describe('TownHall Invitation Test', function() {
  it('should successfully sign a user in', function() {
    // navigates to the sign in page
    browser.get('http://localhost:3000/#/signin');

    // fills in the sign in form fields
    element(by.model('user.email')).sendKeys('test1@test.com');
    element(by.model('user.password')).sendKeys('asdf');

    // clicks the sign in button
    element(by.id('signIn')).click();

    // waits for page to load and checks that the browser goes to the profile page
    browser.sleep(2000);

    // checks that the url is the profile page
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/profile');
  });

  it('should successfully create a board', function() {

    // clicks menu button and clicks create board button
    element(by.id('profileMenu')).click();
    element(by.id('createBoard')).click();

    // checks to see if the create board modal pops up
    expect(element(by.id('createBoardModalPopup')).isPresent()).toBe(true);

    // fills in create board form and invites 1 member
    element(by.model('newBoardName')).sendKeys('PROTRACTOR TEST');
    element(by.model('inviteMember')).sendKeys('test2@test.com');

    // clicks the invite member (+) button
    element(by.id('inviteSubmit')).click();

    // checks if member was added in the create board modal
    expect(element(by.id('invitedMember')).isPresent()).toBe(true);

    // clicks create board button
    element(by.id('submitCreateBoard')).click();

    browser.sleep(2000);

    // checks if the new board that is created matches the board name in the form
    expect(element(by.id('boardName')).getText()).toEqual('PROTRACTOR TEST');
  });

  it('should check if the invitation was sent to the correct user', function() {
    // clicks profile menu
    element(by.id('profileMenu')).click();

    // clicks the signout button
    element(by.id('signOut')).click();

    browser.sleep(2000);

    // fills in the sign in form fields
    element(by.model('user.email')).sendKeys('test2@test.com');
    element(by.model('user.password')).sendKeys('asdf');

    // clicks the sign in button
    element(by.id('signIn')).click();

    browser.sleep(2000);

    // clicks notifications button
    element(by.id('notificationButton')).click();

    browser.sleep(2000);

    // checks if invitation was received
    expect(element(by.id('boardInvitation')).isPresent()).toBe(true);
  });
});
