import {adminLoginDev, adminPassDev} from "../resources/credentials"


const path = require('../settings.json').path
const Application = require('spectron').Application
const assert = require('assert')

describe('Application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: path
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })

it(' login as admin', function(){
  let login = this.app.client.$('#login');
  let pass = this.app.client.$('#password');
  login.addValue(adminLoginDev);
  pass.addValue(adminPassDev);
  this.app.client.$('button').click();
    
})

})