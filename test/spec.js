const BaseTest = require('../services/base-test');
const LoginPage = require('../resources/page-objects/login-page');
const AdminMainPage = require('../resources/page-objects/admin-main-page');
const adminLoginDev = require('../resources/credentials.json').adminLoginDev
const adminPassDev = require('../resources/credentials.json').adminPassDev
const assert = require('assert')

describe('Smoke Suite', function () {
  this.timeout(10000)
  let app;

  beforeEach(async () => {
    app = await BaseTest.startApp();
    })
 
  afterEach( async () => {
    await BaseTest.stopApp(app);
  })

  it('warm up the application', async () => {
    return await app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })

  it('login as admin', async () => {

    await app.client
              .setValue(LoginPage.loginField, adminLoginDev)
              .setValue(LoginPage.passwordField, adminPassDev)
              .click(LoginPage.signInButton)
              .element(AdminMainPage.welcomeHeader)
              .should.eventually.exist;;
     })
 
})

